let secretNumber;
const rangeInput = document.getElementById('rangeInput');
const rangebtn = document.getElementById('rangebtn');
const guessInput = document.getElementById('guessInput');
const guessbtn = document.getElementById('guessbtn');
const guess = document.getElementById('guess');
const msg = document.getElementById('msg');
const quit= document.getElementById('quit');
const alertBox = document.querySelector('.alert');
  alertBox.style.display = 'none';

rangebtn.addEventListener('click', () => {
    const max = parseInt(rangeInput.value);
    if (isNaN(max) || max <= 0) {
        alert('Please enter a valid positive number');
        return;
    }
    secretNumber = Math.floor(Math.random() * max) + 1;
    msg.textContent = "The range is from 1 to"+max;
    guess.textContent = "Go";
    rangeInput.disabled=true;
    rangebtn.disabled=true;
    
});

guessbtn.addEventListener('click',()=>{
    const value = parseInt(guessInput.value);
    if(value === secretNumber){
        msg.textContent = "Congratulations! You guessed the number!";
        guess.textContent=secretNumber;
        alertBox.style.display='block';
       
        
    }else if(value < secretNumber){
        msg.textContent = "Too low! guess big number.";
       msg.classList.add('update');
        setTimeout(() => {
    msg.classList.remove('update');
  }, 500); // match this duration with your CSS transition
}else{
        msg.textContent = "Too high! guess small number.";
        msg.classList.add('update');
        setTimeout(() => {
        msg.classList.remove('update');
  }, 500);
    }
     guessInput.value = '';
});

quit.addEventListener('click',()=>{
    window.location.reload();
});