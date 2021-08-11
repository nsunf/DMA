

let textInputEls = document.querySelectorAll('#name_email_inputWrap input');

let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let contentInput = document.getElementById('messageInput');
let submitBtn = document.getElementById('submitBtn');
let loadingBtn = document.getElementById('loadingBtn');

function isEmailForm(input) {
  if (input.includes('@')) {
    let splitedByAtSignArr = input.split('@');
    if (splitedByAtSignArr.length == 2) {
      let domain = splitedByAtSignArr[1];
      if (domain.includes('.')) {
        let splitedByDotArr = domain.split('.');
        if (splitedByDotArr.length >= 2) {
          return true; 
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}



for (el of textInputEls) {
  el.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      console.log(this.type);
    }
    
    
  })
}

submitBtn.addEventListener('click', function(e) {
  if (!nameInput.value) {
    e.preventDefault();
    alert('name is empty');
  } else if (!emailInput.value) {
    e.preventDefault();
    alert('email is empty');
  } else if (!contentInput.value) {
    e.preventDefault();
    alert('message is empty');
  } else if (isEmailForm(emailInput.value) == false) {
    e.preventDefault();
    alert('email is not available');
  } else {
    submitBtn.style.display = 'none';
    loadingBtn.style.display = 'block';
  }
  
  
})

