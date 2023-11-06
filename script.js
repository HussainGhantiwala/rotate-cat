const button= document.querySelector('.button')
const rotateCat=document.querySelector('.rotate-cat')

const standingCatImg='./images/standing.png'
const rotateCatImg=[
    './images/rotate.gif',
    './images/dank.gif',
    './images/dank2.gif',
    './images/dank3.gif',
    './images/dank4.gif',
    './images/dank5.gif',
    './images/dank6.gif',

]

//we'll create a click count so how many times the user clicks on it the image and sound will change

const rotateCatSound= [
    new Audio('./Sound/cat_sound.mp3'),
    new Audio('./Sound/dank_sound.mp3'),
    new Audio('./Sound/dank2_sound.mp3'),
    new Audio('./Sound/dank3_sound.mp3'),
    new Audio('./Sound/dank4_sound.mp3'),
    new Audio('./Sound/dank5_sound.mp3'),
    new Audio('./Sound/dank6_sound.mp3'),
]
//event handler for pc
//function

//to randomly pick images
button.addEventListener('click', () => {
    const randomIndex=Math.floor(Math.random()*rotateCatImg.length)
    button.disabled = true; // Disable the button during animation
    rotateCat.src = rotateCatImg[randomIndex];
    const currentSound = rotateCatSound[randomIndex];

    // Play the sound
    currentSound.play();

    // Wait for the audio to end and display the standing cat pic
    currentSound.addEventListener('ended', () => {
        rotateCat.src = standingCatImg;
        button.disabled = false; // Re-enable the button
    });
});