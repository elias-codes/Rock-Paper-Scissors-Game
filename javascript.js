function computerPlay() { //This function makes the selection for the computer
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random()*3 + 1); //Creates a random numer from 1 to 3
    console.log(random);
}
    
}
computerPlay();