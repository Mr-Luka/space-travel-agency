const registration = JSON.parse(localStorage.getItem('registration'));

const firstName = (registration.fullName).split(' ');
console.log(firstName)


function welcome (){
    const welcomeName = document.querySelector('.front-page');
    welcomeName.innerHTML = `
        <div class="intro-text">
            <h2>Welcome to the Universe<br> ${firstName[0]}</h2>
            <p id="space"><span id="space-span">Space</span></p>
            <p class="cursor typewriter-animation">Join us ${registration.fullName} on a journey through the cosmos<br> and explore the wonders of the universe.</p>
        </div>
        <div class="explore-div">
            <button class="explore" id="explore-btn">${firstName[0]}</button>
        </div>`
}
welcome()
