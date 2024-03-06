//Change the layout when the "Next Step" button is clicked
import React from 'react'
import ReactDOM from 'react-dom'

let arrayForm = [
    
    `<div id="personal-info">
        <h1>Personal Life</h1>  
        <p>Please provide your name, email address, and phone number</p>
        <div>
            <label for="name" class="label-form">Name</label>
            <input id="name" name="name" type="text" placeholder="Example: Ng Chen Yang" />
        </div>
        
        <div>
            <label for="email" class="label-form">Email address</label>
            <input id="email" name="email" type="text" placeholder="Example: chenyang@gmail.com" />
        </div>

        <div>
            <label for="phone" class="label-form">Phone number</label>
            <input id="phone" name="phone-number"type="tel" placeholder="Example: +60 12 1234 4536"/>                        
        </div>

        <div id="button-form">
            <button class="goBack firstPageGoBack" >Go Back</button>    
            <button class="next">Next Step</button>   
        </div>

    </div>`
    
    ,

    `<div id="select-plan">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div id="package">
            <div class="package-detail" tabindex="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>                
                <div>
                    <h3>Arcade</h3>
                    <p>$9/month</p>
                </div>
            </div>

            <div class="package-detail" tabindex="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
                <div>
                    <h3>Advanced</h3>
                    <p>$12/month</p>
                </div>
            </div>

            <div class="package-detail" tabindex="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>                   
                <div>
                    <h3>Pro</h3>
                    <p>$15/month</p>
                </div>
            </div>
        </div>
        <div id="package-duration">
            <h4 id="monthly-package">Monthly</h4>
            <div id="toggle-button">
                <input type="checkbox" id="check" />
                <label for="check" class="button"></label>
            </div>
            <h4 id="yearly-package">Yearly</h4>
        </div>
        <div id="button-form">
            <button class="goBack">Go Back</button>    
            <button class="next">Next Step</button>   
        </div>
    </div>`,


    `<!-- Form: 3 -->
    <div id="add-ons">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gameing experience</p>
    
    
        <div id="extra-option">
            <div class="options">
                <div>
                    <input type="checkbox" />
                    <div>
                        <h4>Online service</h4>
                        <p>Access to multiplayer games</p>
                    </div>
                </div>
                
                <span>+$1/mo</span>
            </div>
    
            <div class="options">
                <div>
                    <input type="checkbox" />
                    <div>
                        <h4>Larger Storage</h4>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                </div>
                
                <span>+$2/mo</span>
            </div>
    
            <div class="options">
                <div>
                    <input type="checkbox" />
                    <div>
                        <h4>Customizable Profile</h4>
                        <p>Custom theme on your profile</p>
                    </div>
                </div>
                
                <span>+$2/mo</span>
            </div>
        </div>
    
        <div id="button-form">
            <button class="goBack">Go Back</button>    
            <button class="next">Next Step</button>   
        </div>
    </div>`
];
//Click the button and change the layout of the content____________________________________________________________________

//Update the step once the button is click
let counter1 = document.getElementById('step-1');
let counter2 = document.getElementById('step-2');
let counter3 = document.getElementById('step-3');
let counter4 = document.getElementById('step-4');

let index = 0;

function addFunctionToTheButton(){
    let nextButton = document.querySelector(".next");
    let backButton = document.querySelector(".goBack");
    
    nextButton.addEventListener("click", function(){
       
        index++;
        //Add background color to the current progression of user
        if(index == 1){
            counter2.style.backgroundColor = "whitesmoke";
        }
        else if(index == 2){
            counter3.style.backgroundColor = "whitesmoke";
        }
        else if(index == 3){
            counter4.style.backgroundColor = "whitesmoke";
        }
    
        changingContent(index);
        })
    backButton.addEventListener("click", function(){

        
        //Delete the background color when the user go back to the previous prograssion
        if(index == 1){
            counter2.style.backgroundColor = "transparent";
        }
        else if(index == 2){
            counter3.style.backgroundColor = "transparent";
        }
        else if(index == 3){
            counter4.style.backgroundColor = "transparent";
        }
        index--;
        changingContent(index);
        })
}

function changingContent(index){
    let content = document.getElementById("content");
    content.innerHTML = `${arrayForm[index]}`;

    // Get references to the checkbox and h4 elements
    let checkbox = document.getElementById("check");
    let monthlyPackage = document.getElementById("monthly-package");
    let yearlyPackage = document.getElementById("yearly-package");

    // Add a change event listener to the checkbox
    checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
        // Checkbox is checked, apply blur to h4 elements
        monthlyPackage.style.filter = "blur(10px)";
        yearlyPackage.style.filter = "none";
    } else {
        // Checkbox is unchecked, remove blur from h4 elements
        monthlyPackage.style.filter = "none"; // Remove blur
        yearlyPackage.style.filter = "blur(10px)";
    }
    });



    addFunctionToTheButton();
}
//call the function so that the first "next step" will be triggered as first
counter1.style.backgroundColor = "whitesmoke";

addFunctionToTheButton();
//Click the button and change the layout of the content____________________________________________________________________

























