const signUpBtn = document.querySelector('#form-open-btn');
const welcomeContent = document.querySelector('.content');
const signUpForm = document.querySelector('.sign-up-form')

signUpBtn.addEventListener('click', ()=> {
    welcomeContent.classList.add('hidden');
    signUpForm.classList.remove('hidden')
})

