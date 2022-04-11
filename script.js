const mailList = ['LucaGaddini@gmail.com', 'BrunoBernardini@gmail.com', 'michele@gmail.com', 'MihaiBadia@gmail.com', 'KetevanJorjoliani@gmail.com', 'CarloDuminucoDelMonte@gmail.com', 'CristinaGasperini@gmail.com']


// 1 Leggere la mail dell'utente
// 2 Confrontarla con gli elementi dell'array lista
// 3 Stampare a schermo se presento o no

const btnStartEmail = document.querySelector('#btnEmail');
const risultato = document.querySelector('h1');
const active = document.querySelector('.gg-container-dadi');

btnStartEmail.addEventListener('click', function(){

  const email = document.getElementById('email').value;
  console.log(email);
  let presenza = false;
  for(let i = 0; i < mailList.length; i++){
    if(mailList[i] == email){
      presenza = true;
    }
  };
  if (presenza == true){
    risultato.innerHTML = 'Benvenuto!'
    active.classList.remove('gg-hide');
  }else{
    risultato.innerHTML = 'Non sei registrato'
    active.classList.add('gg-hide');
  }
});


