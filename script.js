const signUpBtn = document.querySelector('#form-open-btn');
const welcomeContent = document.querySelector('.content');
const xButton = document.querySelectorAll('span.material-symbol-outlined');
const signUpForm = document.querySelector('.sign-up-form')
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const scrollToAccept = document.querySelector('.scroll-to-accept-form');
const signUpBtn2 = document.querySelector('button.btn2');
console.log(nameInput);
let name = [];
let emailArray = [];
let registration = {
    fullName: '',
    email: '',
}

signUpBtn.addEventListener('click', ()=> {
    welcomeContent.classList.add('hidden');
    signUpForm.classList.remove('hidden')
})

xButton.forEach(x => {
    x.addEventListener('click', ()=>{
    welcomeContent.classList.remove('hidden');
    signUpForm.classList.add('hidden')
    scrollToAccept.classList.add('hidden');
})
})


function handleSignUp (e) { 
    e.preventDefault()
    nameInput.innerHTML = "";
    const acceptedName = /^[a-z ,.'-]+$/i;
    const acceptedEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const name = nameInput.value.trim();
    const emailLower = (emailInput.value.trim()).toLowerCase();
    const inputAge = document.querySelector('input[type="checkbox"]');


    if (!acceptedName.test(name) || !acceptedEmail.test(emailLower) || !inputAge.checked){
        alert('Please fill out the registration form');
    } else {
        registration.fullName = name;
        registration.email = emailLower;
        scrollToAccept.classList.remove('hidden');
        signUpForm.classList.add('hidden');
        console.log(registration);
    }
        

}
signUpBtn2.addEventListener('click', handleSignUp)
