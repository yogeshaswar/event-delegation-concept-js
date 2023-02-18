//Delegation
//selecting parent -> main
let parentMain = document.querySelector(".container");
//console.log(parentDiv);
//setting click event listener
parentMain.addEventListener("click", function(event) {
    let target = event.target;
    console.log(target.matches("div"));
    //simple check to confirm div is clicked
    if(target.matches("div")) {
        target.style.backgroundColor = "purple";
    }
});

/*Note - just by using event delegation concept
here we can change the background color of div
clicked with only few lines of code without have to write code and adding event listeners for each div.*/