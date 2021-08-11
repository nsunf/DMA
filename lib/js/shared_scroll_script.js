
let ScrollBarEvent = {
  scrollView: document.getElementById('scrollView'),
  scrollViewMaxOffsetY: function() { return this.scrollView.scrollHeight - this.scrollView.clientHeight },
  currentScrollVal: function() { return this.scrollView.scrollTop },
  
  syncScrollBar: function() {
    let scrollBar = document.getElementById('scrollBar');
    let scrollBarThumb = document.getElementById('scrollBarThumb');

    let scrollBarMax = scrollBar.offsetHeight - scrollBarThumb.offsetHeight;

    let scrollVal = (scrollBarMax / this.scrollViewMaxOffsetY()) * this.currentScrollVal();
    
    scrollBarThumb.style.position = 'relative';
    scrollBarThumb.style.top =  scrollVal + 'px';
  }
};

ScrollBarEvent.scrollView.addEventListener('scroll', function() {
  ScrollBarEvent.syncScrollBar();
})