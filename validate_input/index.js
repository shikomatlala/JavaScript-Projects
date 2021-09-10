//We need to start affresh to make sure that we are going to work on this properly
let pword1IsStrong = false;
let pword2IsStrong = false;
let pwordsIsMatch = false;

    //Create element variables  
let pword1El = document.getElementById("password");
let pword2El = document.getElementById("password2");
let pwordLabelEl1 = document.getElementById("lbl_password");
let pwordLabelEl2 = document.getElementById("lbl_password2");
function passwordStrength()
{
    //Check if characters are greater >= 8
    //Get element values
    if(pword1El.value === pword2El.value)
    {
        //Give this person a tick
        //Create a variable  for the tick
        // let img = document.createElement("img");
        // img.src = "tick.png";
        // img.width = 20;
        // img.setAttribute("width", 20);
        // img.setAttribute("heigh", 20);
        // img.setAttribute("margin-bottom", "10px");

        // let img2 = document.createElement("img");
        // img2.src = "tick.png";
        // img2.width = 20;
        // img2.setAttribute("width", 20);
        // img2.setAttribute("heigh", 20);
        // img2.setAttribute("margin-bottom", "10px");
        // let show_tick = document.getElementById("span_img");
        // let show_tick2 = document.getElementById("span_img2");
        // show_tick.replaceChild(img);
        // show_tick2.replaceChild(img2);
        //Tell the user that the password is good
        //Change the element to password match - make sure that the element is green
        pwordLabelEl1.textContent = "Passwords match";
        pwordLabelEl2.textContent = "Passwords match";
        //Now make sure that the color is green
        pwordLabelEl1.className = "lblMatch";
        pwordLabelEl2.className = "lblMatch";
        pwordsIsMatch = true;

    }
    else
    {
        pwordLabelEl1.className = "lblNotMatch";
        pwordLabelEl2.className = "lblNotMatch";
        pwordLabelEl1.textContent = "Passwords do not match";
        pwordLabelEl2.textContent = "Passwords do not match";
        pwordsIsMatch = false;
    }


    //Set the input text to be green when the password is strong.
    if(pword1El.value.length < 8 )
    {   
        pword1El.className = "input_weak";  
        pword1IsStrong = false;
    }
    else
    {
        pword1El.className = "input_strong";   
        pword1IsStrong = true;
    }

    if(pword2El.value.length < 8 )
    {   
        pword2El.className = "input_weak";
        pword2IsStrong = false; 
    }
    else
    {
        pword2El.className = "input_strong";  
        pword2IsStrong = true; 
    }
}
function display_result()
{
//     let pword1IsStrong = false;
// let pword2IsStrong = false;
// let pwordsIsMatch = false;
    if(pwordsIsMatch)
    {
        //Now test if the passwords are strong
        if(!pword2IsStrong && !pword1IsStrong)
        {
            pwordLabelEl2.textContent = "Password should contain 8 or more characters";
            pwordLabelEl1.textContent = "Password should contain 8 or more characters";
            pwordLabelEl1.className = "lblNotMatch";
            pwordLabelEl2.className = "lblNotMatch";
        }
    }
    else
    {
        //Tell the person that passwords do not match
        pwordLabelEl2.textContent = "Passwords do not match";
        pwordLabelEl1.textContent = "Passwords do not match";
        pwordLabelEl1.className = "lblNotMatch";
        pwordLabelEl2.className = "lblNotMatch";

    }
}


//Create an array that is going to dispaly hold all the displays
//Create an object
// let signup_labels= {
//     lbl_staffNum: "Staff Number",
//     lbl_idNum: "ID Number",
//     lbl_password: "Password ",
//     lbl_password2: "Password"
//     //create elements that will be embeded in this class
// }
// let signup_inputs = {
//     //Test if our elements are OK
//     //Test if the 
// }
// //elements
// //Confirm the two result to make sure that they do work.
// let x = "Shiko";
// //Now the goal is display all these elements into our htmls
// //Now let us make sure that the password is over 8 digits
// //change the color of the input.



// function display_result()
// {

//     document.getElementById("lbl_staffNum").textContent = signup_labels.lbl_staffNum;
//     document.getElementById("lbl_idNum").textContent = signup_labels.lbl_idNum;
//     pw1El.textContent = signup_labels.lbl_password;
//     pw2El.textContent = signup_labels.lbl_password2;
//     pw1El.class = "input_strong";
// }

// function passwordStrength()
// {



//     let inputPwordElementP1 =  document.getElementById("password");
//     let inputPwordElementP2 = document.getElementById("password2");
//     //Show the color red if the password length is not greater less than 8
//     //Now how can we confrol the css - Well we firstly need to create the CSS
//     if(inputPwordElementP1.value.length < 8)
//     {
//         inputPwordElementP1.className = "input_weak";

//     }
//     //But if there is nothing such as special character then we should give him a yellow view
//     else if(inputPwordElementP1.value.length >= 8)
//     {
//         inputPwordElementP1.className = "input_strong";

//     }


//     if(inputPwordElementP2.value.length < 8)
//     {
//         inputPwordElementP2.className = "input_weak";
//     }
//     //But if there is nothing such as special character then we should give him a yellow view
//     else if(inputPwordElementP2.value.length >= 8)
//     {
//         inputPwordElementP2.className = "input_strong";
//     }
//     let pw1El = document.getElementById("lbl_password");
//     let pw2El = document.getElementById("lbl_password2");

//     let p1 = document.getElementById("password").value;
//     let p2 = document.getElementById("password2").value;
//     if(validatePassword(p1) && validatePassword(p2))
//     {
//         confirm_passwords();
//     }
//     else
//     {
//         signup_labels.lbl_password = "Password should contain 8 or more digits";
//         signup_labels.lbl_password2 = "Password should contain 8 or more digits";
//     }
    
// }

// function validatePassword(p)
// {
//     //test the length of the string
//     if(p.length < 8)
//     {
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// }
// function confirm_passwords()
// {
//     //Now we need to get the values of pwrd 1 and pword2
//     if(p1 === p2)
//     {
//         var img = document.createElement("img");
//         img.src = "tick.png";
//         img.width = 20;
//         var src = document.getElementById("span_img");
//         src.appendChild(img);
//         //Then here we want to say that our passwords are correct and that they do  match
//         signup_labels.lbl_password = "Good";
//         signup_labels.lbl_password2 = "Good";
//     }
//     else
//     {
//         signup_labels.lbl_password = "Password Does not Match";
//         signup_labels.lbl_password2 = "Password Does not Match";
//     }
// }