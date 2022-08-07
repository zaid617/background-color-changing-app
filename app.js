let button = document.querySelector('button');
let move = 0
button.addEventListener('click' , () =>{
    
    let colors = ["blue" , "green" , "purple" , "yellow" , "darkblue" , "red" , "brown" , "chartreuse" , "turquoise"]
    
    if (move > colors.length - 1) {
        move = 0;
    }
    document.body.style.backgroundColor = colors[move]
    move++;
} )