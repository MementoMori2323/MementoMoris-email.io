var form = document.getElementById('form'); 

var notValid = document.getElementById('notValid');

const btn1 = document.getElementById('btn1');

const child = document.getElementById('child');

var confirm = document.getElementById('confirm');

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  validateEmail(email);
});

const validateEmail = (email) =>{
  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let verify = expReg.test(email);

  let eAddress = document.getElementById('eAddress');
  
  
  if (verify){
    child.style.display = 'none';
    document.getElementById('thanks').style.display = 'flex';
    eAddress.innerHTML = document.getElementById('email').value;
    form.submit();

  } else{
    notValid.style.display = 'block';
    document.getElementById('email').style.borderColor = 'red';
    document.getElementById('email').style.backgroundColor = 'rgb(255, 193, 182)';
    document.getElementById('email').style.color = 'red';
  }
};
