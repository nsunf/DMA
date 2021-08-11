

let WorksDetailScrollEvent = {
  scrollView: document.getElementById('detailFlex'),
  lastScrollTop: 0,
  cellNum: 1,

  adjustScrollView: function() {
    if (window.innerWidth < 768) return ;
    var st = this.scrollView.scrollTop;

    let numOfCell = document.getElementsByClassName('des').length;
  
    let preCell = document.getElementById(`detailCell${this.cellNum - 1}`);
    let nextCell = document.getElementById(`detailCell${this.cellNum + 1}`);
    let scrollMidX = window.innerHeight/2;
    let scrollMax = this.scrollView.scrollHeight - window.innerHeight;
    console.log(scrollMax);

    if (st > this.lastScrollTop){
      // console.log('down scrolling');
      if (this.cellNum == numOfCell) return;
      // var testBool = false;
      // if (nextCell) {
      //   testBool = nextCell.offsetTop - st <= scrollMidX;
      // }
      if (nextCell.offsetTop - st <= scrollMidX || st == scrollMax - 1) {
        this.cellNum++;
        this.changeDescription('post', this.cellNum);
        console.log('cellNum --->', this.cellNum);
      }
    } else {
      // console.log('up scrolling');
      if (this.cellNum == 1) return;
      let nextCellOffsetBottom = preCell.offsetTop + preCell.offsetHeight;
      if (nextCellOffsetBottom - st >= scrollMidX || st == 0) {
        this.cellNum--;
        this.changeDescription('pre', this.cellNum);
        console.log('cellNum --->', this.cellNum);
      }
    }
    

    this.lastScrollTop = st <= 0 ? 0 : st;
    
    if (this.cellNum < 1) {
      this.cellNum = 1;
    } else if (this.cellNum > numOfCell) {
      this.cellNum = numOfCell;
    }
  },

  changeDescription: function(dir, num) {
    
    var removeCell;
    if (dir == 'post') {
      removeCell = num - 1;
    } else if (dir == 'pre') {
      removeCell = num + 1;
    }

    if (document.getElementById(`des${removeCell}`)) {
      document.getElementById(`des${removeCell}`).style.visibility = 'hidden';
    }
    document.getElementById(`des${num}`).style.visibility = 'visible';
    this.descriptionAnimation(num);
  },

  descriptionAnimation: function(n) {
    let des = document.getElementById(`des${n}`);
    des.animate([{'bottom': '24px', 'color': 'transparent'}, {'bottom': '64px', 'color': 'black'}], {duration: 500, easing: 'ease-out', fill: 'forwards'})
  },

  resetDes: function() {
    if (window.innerWidth < 768) {
      let desArr = document.querySelectorAll('.des');
      desArr.forEach(function(des) {
        des.style.visibility = 'visible';
        console.log('des -> ', des)
      })
    } else {
      
    }
    
  }
};

let WorksDetailRightSectionScrollEvent = {
  scrollView: document.getElementById('detailFlex'),

  configScrollBar: function() {
    let rightScrollBarWrap = document.createElement('div');
    let rightScrollBar = document.createElement('div');
    let rightSectionList = document.querySelector('#rightSection ul').cloneNode(true);
    
    rightScrollBarWrap.id = 'rightScrollBarWrap';
    rightScrollBar.id = 'rightScrollBar';


    document.getElementById('rightSection').appendChild(rightScrollBarWrap);
    document.getElementById('rightScrollBarWrap').appendChild(rightScrollBar);
    document.getElementById('rightScrollBar').appendChild(rightSectionList);
  },

  adjustScrollBar: function() {
    let scrollHeight = this.scrollView.scrollHeight;
    let scrollPos = this.scrollView.scrollTop;
    let offsetHeight = this.scrollView.clientHeight;

    let rightScrollBarWrap = document.getElementById('rightScrollBarWrap');

    let percentage = scrollPos / (scrollHeight - offsetHeight) * 100;
    rightScrollBarWrap.style.height = percentage + '%';
  }
}


WorksDetailScrollEvent.scrollView.addEventListener('scroll', function() {
  WorksDetailScrollEvent.adjustScrollView();
  WorksDetailRightSectionScrollEvent.adjustScrollBar();
})

window.addEventListener('DOMContentLoaded', function() {
  WorksDetailRightSectionScrollEvent.configScrollBar();
  WorksDetailScrollEvent.descriptionAnimation(1);
})

// window.addEventListener('resize', WorksDetailScrollEvent.resetDes);