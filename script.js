const signUpBtn = document.querySelector('#form-open-btn');
const welcomeContent = document.querySelector('.content');
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


function handleSignUp (e) { 
    e.preventDefault()
    nameInput.innerHTML = "";
    const acceptedName = /^[a-z ,.'-]+$/i;
    const acceptedEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const name = nameInput.value.trim();
    const emailLower = (emailInput.value.trim()).toLowerCase();
    const inputAge = document.querySelector('input[type="checkbox"]');
    console.log(inputAge);

    if (!acceptedName.test(name)){
        alert('Please enter valid name')
    }
    if(!acceptedEmail.test(emailLower)){
        alert('Please enter valid email')
    }
    if(!inputAge.checked){
        alert('Please be 21 years or older')
    }

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
