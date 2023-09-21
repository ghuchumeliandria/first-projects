let email = document.forms['form']['email'];
let word = document.forms['form']['pass'];

let name_error = document.getElementById('text-error');
let word_error = document.getElementById('word-error');

email.addEventListener('textInput', email_Verify);
word.addEventListener('textInput', nameVerify);

function validate(){
    if(email.value.length <= 2) {
        email.style.borderBottom = '2px solid red';
        name_error.style.display = 'block';
        email.focus();
        return false;
    }
    if(word.value != 'მალოფთ') {
        word.style.borderBottom = '2px solid red';
        word.focus();
        word_error.style.display = 'block';
        return false;
    }
}

function nameVerify(){
    if(word.value.length >=0){
        word.style.borderBottom = '2px solid black';
        word_error.style.display = 'none';
        return true;
    }
}
function email_Verify(){
    if(email.value.length >= 2){
        email.style.borderBottom = '2px solid black';
        name_error.style.display = 'none';
        return true;
    }
}