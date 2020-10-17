const getFormButts = document.querySelectorAll('.catalogForm_tab-butt > input');
const modalsWindow = document.querySelectorAll('.b_modal > .b_modal_wrrap');
const buttonLogin = document.querySelector('.modalButtonLogin');
const buttonCall = document.querySelector('.modalButtonCall');
const resetForm = document.querySelector('.m_login_form');
const resetFormCall = document.querySelector('.m_call_form')
const loginError = document.querySelector('.m_login_form-error');
const butt_closeModalLogin = document.querySelector('.m_login_form-button');
const formCallNum = document.querySelector('#m_call_form-number');
const butt_closeModalCall = document.querySelector('.m_call_form-button');
const buttonSingUp = document.querySelector('.block1_button-singUp');
const cardlinks  = document.querySelectorAll('.cardLink');

buttonLogin.addEventListener('click', showModalWindow);
buttonCall.addEventListener('click', showModalWindow);
butt_closeModalLogin.addEventListener('click', checkDataModalLogin);
butt_closeModalCall.addEventListener('click', checkDataModalCall);
buttonSingUp.addEventListener('click', showModalSingUp);

for(let cardlink of cardlinks){
  cardlink.addEventListener('click', addItem);
}

for(let getFormButt of getFormButts){
  getFormButt.addEventListener('click',function(){
    for(let getFormButt of getFormButts){
      if(getFormButt.classList.contains('formButtActive')){
        getFormButt.classList.remove('formButtActive');
      }
    }
    this.classList.add('formButtActive');
  })
}

function showModalWindow(){
  let getClassButt = this.getAttribute('class');
  for(let modalWindow of modalsWindow){
    if(modalWindow.getAttribute('id') == getClassButt){
        modalWindow.style.display = 'block';
        let closeModals = document.querySelectorAll('.b_modal_close');
        for(let closeModal of closeModals){
          closeModal.addEventListener('click', function(){
            modalWindow.style.display = 'none';
            resetForm.reset();
            loginError.style.display = 'none';
          })
        }
    }
  }
}

function checkDataModalLogin(){
  let loginEmail = document.querySelector('.m_loginEmail').value;
  let loginPassword = document.querySelector('.m_loginPassword').value;

  if(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(loginEmail) && /^[a-zA-Z1-9]{4,}$/.test(loginPassword)){
    resetForm.reset();
    loginError.style.display = 'none';
    for(let modalWindow of modalsWindow){
      modalWindow.style.display = 'none';
    }
  }else{
    loginError.style.display = 'block';
  }
}



formCallNum.onclick = function() {
    formCallNum.value = "+";
}

formCallNum.onkeydown = function() {
    let oldLen = 0;
    let curLen = formCallNum.value.length;

    if (curLen < oldLen){
      oldLen--;
      return;
      }

    if (curLen == 3)
    	formCallNum.value = formCallNum.value + "(";

    if (curLen == 7)
    	formCallNum.value = formCallNum.value + ")-";

     if (curLen == 12)
    	formCallNum.value = formCallNum.value + "-";

     if (curLen == 15)
    	formCallNum.value = formCallNum.value + "-";

     oldLen++;
}



function checkDataModalCall(){
  let callFormName = document.querySelector('.m_call_form-name').value;
  let callError = document.querySelector('.m_call_form-error');

  if(formCallNum.value.length < 17 || callFormName.length < 1){
    callError.style.display = 'block';
  }else{
    callError.style.display = 'none';
    resetFormCall.reset();
    for(let modalWindow of modalsWindow){
      modalWindow.style.display = 'none';
    }
  }
}


function showModalSingUp(){
  let emailSingUp = document.querySelector('.block1_input-text');
  let modalSingUp = document.querySelector('.b_modal_wrrapFooter');

  if (/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(emailSingUp.value)) {
    modalSingUp.style.display = 'block';
    setTimeout(() => modalSingUp.style.display = 'none', 1500);
    emailSingUp.placeholder = 'Укажите свой email для подписки';
    emailSingUp.value = '';
  }else{
    emailSingUp.placeholder = 'Некорректный email';
    emailSingUp.value = '';
  }
}


function addItem(){
  let labelCompare = document.querySelector('.labelCompare');
  let labelSelect = document.querySelector('.labelSelect');
  let labelBasket = document.querySelector('.labelBasket');

  if(this.getAttribute('id') === 'cardLinkCompare'){
    if(this.innerHTML == 'Сравнить товар'){
      labelCompare.style.display = 'block';
      this.innerHTML = 'В сравнении';
      labelCompare.firstElementChild.innerHTML++;
    }
  }if(this.getAttribute('id') === 'cardLinkSelect'){
    if(this.innerHTML === 'В избранное'){
      labelSelect.style.display = 'block';
      this.innerHTML = 'Избранное';
      labelSelect.firstElementChild.innerHTML++;
    }
  }else{
    labelBasket.firstElementChild.innerHTML++;
  }
}




let burgerMenuButton = document.querySelector('.burger_button');
let navBurgerMenu = document.querySelector('.b_nav_menu');
let burgerMenu = document.querySelector('.b_nav_burger');

function checkDropMenu(x){

  if(x.matches){
    navBurgerMenu.style.display = 'none';
    burgerMenuButton.addEventListener('click', dropMenu);
    burgerMenu.classList.remove('burger_menu_active');
  }else{
    navBurgerMenu.style.display = 'block';
  }
  }

  function dropMenu(){
  if(burgerMenu.classList.contains('burger_menu_active')){
    navBurgerMenu.style.display = 'none';
    burgerMenu.classList.remove('burger_menu_active');
  }else{
    burgerMenu.classList.add('burger_menu_active');
    navBurgerMenu.style.display = 'block';
  }
}

let x = window.matchMedia("(max-width: 600px)")
checkDropMenu(x)
x.addListener(checkDropMenu)
