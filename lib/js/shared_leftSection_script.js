

let snsIcons = document.getElementsByClassName('snsIcon');

for (snsIcon of snsIcons) {
  let snsLink = snsIcon.querySelector('.snsLink');
  let width = snsLink.scrollWidth;

  snsIcon.addEventListener('mouseenter', function() {
    snsLink.animate([
      {width: width + 'px'}
    ], {duration: 500, easing: 'ease-in-out', fill: 'both'})
  });

  snsIcon.addEventListener('mouseleave', function() {
    snsLink.animate([
      {width: '0px'}
    ], {duration: 500, easing: 'ease-in-out', fill: 'both'})
  })

}

