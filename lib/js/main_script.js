

let MouseEffect = {

  shadow: function(event) {
    pageWidth = document.querySelector('body').scrollWidth;
    pageHeight = document.querySelector('body').scrollHeight;
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let innerOffsetX = this.getShadowOffset(20, 30, mouseX, pageWidth);
    let innerOffsetY = this.getShadowOffset(20, 30, mouseY, pageHeight);
    let dropOffsetX = -this.getShadowOffset(-32, 32, mouseX, pageWidth);
    let dropOffsetY = -this.getShadowOffset(-32, 32, mouseY, pageHeight);
    let blurX = this.getStdDeviationValue(4, 16, mouseX, pageWidth);
    let blurY = this.getStdDeviationValue(4, 16, mouseY, pageHeight);

    let blur = blurX > blurY ? blurX: blurY;
    let innerShadow = {x: innerOffsetX, y: innerOffsetY, blur: blur};
    let dropShadow = {x: dropOffsetX, y: dropOffsetY, blur: blur};
    return {innerShadow: innerShadow, dropShadow: dropShadow};
  },

  getStdDeviationValue: function(min, max, x, v) {
    // v = vw || vh;
    let a = (max - min) / Math.pow(v/6 - v/2, 2);
    var result = a * Math.pow(x - v/2, 2) + min;
    return this.limitVal(result, min, max);
  },

  getShadowOffset: function(min, max, x, v) {
    let ratio = (max - min) / (2/3 * v);
    var result = (x - v/6) * ratio + min;
    result = this.limitVal(result, min, max);
    // console.log(result);
    return result;
  },

  setShadow: function(shadow) {

    let innerShadowMask = document.getElementById('innerShadowMask');
    let circle = document.getElementById('circle');

    innerShadowMask.style.filter = `blur(${shadow.innerShadow.blur}px)`;
    innerShadowMask.style.left = shadow.innerShadow.x + '%';
    innerShadowMask.style.top = shadow.innerShadow.y + '%';

    circle.style.filter = `drop-shadow(${shadow.dropShadow.x}px ${shadow.dropShadow.y}px ${shadow.dropShadow.blur}px rgba(0, 0, 0, 0.5))`;
  },

  limitVal: function(val, min, max) {
    if (val < min) {
      return min
    } else if (val > max) {
      return max
    }
    return val
  },

  transition: function() {
    pageWidth = document.querySelector('body').scrollWidth;
    pageHeight = document.querySelector('body').scrollHeight;
    var newLength = pageWidth > pageHeight ? pageWidth: pageHeight;
    newLength = newLength * 2;

    let circle = document.getElementById('circle');
    circle.style.position = 'fixed';
    circle.animate([
      {
        width: newLength + 'px',
        height: newLength + 'px',
        zIndex: '11'
      }
    ], {
      duration: 1000,
      easing: 'ease-in',
      fill: 'forwards'
    });

    setTimeout(function() {
      window.location.href = "works.php";
    }, 1000)
  }
};

function adjustView() {
  let rightSection = document.getElementById('rightSection');
  let header = document.getElementById('header');
  
  let marginLeft = header.offsetWidth - rightSection.offsetWidth;
  rightSection.style.cssText = `margin-left: ${marginLeft}px`;
}


window.addEventListener('load', adjustView);
window.addEventListener('resize', adjustView);

let mouseMoveEvent = function(event) {
  let shadowEffect = MouseEffect.shadow(event);
  MouseEffect.setShadow(shadowEffect);
}

window.addEventListener('mousemove', mouseMoveEvent)



document.getElementById('circle').addEventListener('click', function() {
  window.removeEventListener('mousemove', mouseMoveEvent);
  MouseEffect.transition();
})

window.addEventListener('DOMContentLoaded', function() {
  if (window.chrome == undefined) {
    document.getElementById('innerShadowMask').style.transform = 'translateZ(0)';
  }
})
