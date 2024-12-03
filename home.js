const registration = JSON.parse(localStorage.getItem('registration'));
const homeButton = document.querySelector('#technology-to-home');


const firstName = (registration.fullName).split(' ');
console.log(firstName)


function welcome (){
    const welcomeName = document.querySelector('.front-page');
    if(welcomeName){
    welcomeName.innerHTML = `
        <div class="intro-text">
            <h2>Welcome to the Universe<br> ${firstName[0]}</h2>
            <p id="space"><span id="space-span">Space</span></p>
            <p class="cursor typewriter-animation" id="join-us">Join us ${registration.fullName} on a journey through the cosmos<br> and explore the wonders of the universe.</p>
        </div>`;
    }
}
welcome()

if(homeButton){
homeButton.addEventListener('click', ()=>{
    location.replace("./home-page.html")
});
}
