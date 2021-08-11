let ScrollEvent = {
  scrollView: document.getElementById('scrollView'),
  columnWraps: document.getElementsByClassName('worksColumn'),
  scrollViewMaxOffsetY: function() { return this.scrollView.scrollHeight - this.scrollView.clientHeight },
  currentScrollVal: function() { return this.scrollView.scrollTop },

  adjustScrollView: function() {
    if (window.innerWidth <= 767) return;
    let column2 = document.getElementById('column2');
    let column3 = document.getElementById('column3'); 

    column2.style.transform = 'translateY(' + this.c2Fomula(this.currentScrollVal()) + 'px)';
    column3.style.transform = 'translateY(' + this.c3Fomula(this.currentScrollVal()) + 'px)';
  },

  c2Fomula: function(x) {
    let columnHeight = this.columnWraps[0].offsetHeight;
    let windowHeight = window.innerHeight;
    let val = windowHeight - columnHeight;
    console.log(val);

    let a = (val * -2) / this.scrollViewMaxOffsetY();
    let b = val;
    return (a * x) + b;
  },

  c3Fomula: function(x) {
    let columnHeight = this.columnWraps[0].offsetHeight;
    let val = columnHeight / 3 * 0.16;

    let a = (val * -2) / this.scrollViewMaxOffsetY();
    let b = val;
    
    return (a * x) + b;
  },

  resetTransform: function() {
    let columns = [
      document.getElementById('column1'),
      document.getElementById('column2'),
      document.getElementById('column3')
    ]

    columns.forEach(function(c) {
      c.style.transform = 'translateY(0px)';
    })
  }
};



let CellEvent = {
  cells: document.querySelectorAll('.cells a'),

  hoverEvent: function(node) {
    if (node.getElementsByClassName('cellHover').length != 0) return ;

    let newNode = document.createElement('div');
    newNode.classList.add('cellHover')
    newNode.style.cssText = `
      width: 100%;
      height: ${node.querySelector('img').offsetHeight}px; 
      position: absolute;
      top: 0px;
      font-size: 24px;
      font-weight: 800;
      display: flex;
      justify-content: center;
      align-items: center;
      color: transparent;
    `;

    let hoverText = node.querySelector('#category').value;
    

    newNode.innerText = hoverText;
    node.appendChild(newNode);
    newNode.animate([{'background': 'rgba(255, 255, 255, 0.699)', 'color': 'black'}], {duration
    : 500, easing: 'ease-out', fill: 'forwards'})
  },

  mouseLeaveEvent: function(node) {
    let newNode = node.querySelector('.cellHover');
    if (newNode == null) return ;
    newNode.animate([{'background': 'transparent', 'color': 'transparent'}], {duration
    : 500, easing: 'ease-out', fill: 'forwards'});
    setTimeout(function() {
      newNode.remove();
    }, 500)
  }
}

function columnTransition() {
  if (window.innerWidth < 1200) return;
  timer = 1200;
  


  column1 = document.getElementById('column1');
  column2 = document.getElementById('column2');
  column3 = document.getElementById('column3');
  c2Val = ScrollEvent.c2Fomula(0);
  c3Val = ScrollEvent.c3Fomula(0);
  console.log(c2Val);
  
  column1.animate([
    
    {transform: 'translateY(0px)'}
  ], {
    duration: timer,
    easing: 'ease-in-out'
  })

  column2.animate([
    
    {transform: 'translateY(' + c2Val + 'px)'}
  ], {
    duration: timer,
    easing: 'ease-in-out'
  })

  column3.animate([
    
    {transform: 'translateY(' + c3Val + 'px)'}
  ], {
    duration: timer,
    easing: 'ease-in-out'
  })

  setTimeout(() => {
    column1.style.transform = 'translateY(0px)';
    column2.style.transform = 'translateY(' + c2Val + 'px)';
    column3.style.transform = 'translateY(' + c3Val + 'px)';

    
  }, timer)

 
}





ScrollEvent.scrollView.addEventListener('scroll', function() {
  if (window.innerWidth >= 1200) {
    ScrollEvent.adjustScrollView();
  }
})

var viewSizeCheck = true;

window.addEventListener('resize', function() {
  if (window.innerWidth >= 1200) {
    ScrollEvent.adjustScrollView();
    if (viewSizeCheck) {
      columnTransition();
      viewSizeCheck = !viewSizeCheck;
    }
    
  } else if (window.innerWidth < 1200) {
    ScrollEvent.resetTransform();
  }
})


CellEvent.cells.forEach(function(node) {
  node.addEventListener('mouseenter', function(e) {
    if (window.innerWidth < 767) return ;
    CellEvent.hoverEvent(e.target);
  })
  node.addEventListener('mouseleave', function(e) {
    if (window.innerWidth < 767) return ;
    CellEvent.mouseLeaveEvent(e.target);
  })
})

window.addEventListener('DOMContentLoaded', columnTransition)
