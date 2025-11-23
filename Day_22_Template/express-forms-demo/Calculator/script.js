// collecting all required elements in input and buttons variable
let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
// initially output is empty
let output ="";
// converting buttons from list to array
let arr = Array.from(buttons);
// adding click event to each button using forEach loop
arr.forEach(button =>{
    button.addEventListener("click", (e) =>{
        // checking which button is clicked using e.target.innerHTML
        if(e.target.innerHTML == "="){
            try{
                // evaluating the input value using eval function
                output =eval(input.value);
                input.value = output;
            }catch{
                input.value = "Error!";
            }
        }else if
            (e.target.innerHTML =="ac"){
                output ="";
                input.value =output;
            }else if(e.target.innerHTML =="del"){
                output = output.substring(0,output.length -1);
                input.value = output;
            }
            
            // for other buttons we are adding the button value to output
            else {

                output += e.target.innerHTML;
                input.value = output;
            }
            });

    });



