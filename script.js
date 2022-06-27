// The same list as string (between double quotes): " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// *TODO -  I WANT generate pw meets criteria
// *TODO -  SO THAT pw strong and greater security  

// *TODO -  WHEN button clicked to gen a pw
// *TODO -  THEN prompts pw criteria 

// *TODO -  WHEN prompted for pw criteria
// *TODO -  THEN select  criteria include in pw 

// *TODO -  WHEN promted for length pw
// *TODO -  THEN choose 8 <= pw <= 128 chars

// *TODO -  WHEN asked for char types in pw
// *TODO -  THEN I confirm whether or not include lowercase, uppercase, numeric, and/or special characters

// *TODO -  WHEN I answer each prompt 
// *TODO -  THEN my input be validated and at least one char type be selected

// *TODO -  WHEN all prompts answered
// *TODO -  THEN a pw is generated that matches selected criteria

// *TODO -  WHEN pw generated
// *TODO -  THEN pwd displayed in alert or written to page

// Assignment Code
var generateBtn = document.querySelector("#generate");
let reloadBtn = document.createElement('button');


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    // console.log("here");
    passwordText.value = "please select from criteria below and hit \"Process and generate password\" button";

    //hide this button after click
    generateBtn.style.display = 'none';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generates a password after user configures all rules for the password
// returns a string from getUserConfig_and_result
function generatePassword() {
    return getUserConfig_and_result();
}

// this function contains 3 other children functions as helper
// returns a string of generated password
function getUserConfig_and_result() {
    // user states
    let lowerFlag = upperFlag = numericFlag = specialCharFlag = false;
    let passwordLength = 8;
    let result = '';

    let card = document.querySelector('.card');

    // make a divider for styling
    let divider = document.createElement('hr');
    divider.setAttribute('class', 'hr-divider');

    // create config div
    let config_div = document.createElement('div');
    config_div.textContent = "Please select from following criteria";

    // this helper function makes a slider and records user input based on slider
    function makePWLengthSlider() {
        let slider_container = document.createElement('div');
        let slider = document.createElement('input');
        let status = document.createElement('p');
        let status_span = document.createElement('span');
        const slider_attr = {
            'type': 'range',
            'min': 8,
            'max': 128,
            'value': 8,
            'class': 'length-slider'
        }

        // set attr of slider
        Object.keys(slider_attr).forEach((k) => {
            slider.setAttribute(k, slider_attr[k]);
        })

        // set attr for other elements
        // status_span.setAttribute('id', 'curr_val');
        slider_container.setAttribute('class', 'slider-container');

        // make status span update from slider 
        slider.oninput = function () {
            status_span.innerHTML = passwordLength = this.value; // this is slider
        }
        status_span.innerHTML = slider.value;
        
        // put everything together
        status.append("Length: ", status_span);
        slider_container.append("Password has to be 8 to 128 characters long.\n",
        slider, status);
        return slider_container;
    }
    
    // this helpful function makes checkboxes and process user's input based on the checkboxes
    function makeCharTypeCheckBox() {
        let linebreak = document.createElement('br');
        let checkbox_container = document.createElement('div');
        let prompt_msg = "Check the security features you'd want to include in your password.";
        let message = document.createElement('p');
        message.textContent = prompt_msg;
        
        // prompt for each case
        let lowercaseCBtext = document.createElement('label');
        let upperCBtext = document.createElement('label');
        let numericCBtext = document.createElement('label');
        let specialCharCBtext = document.createElement('label');
        lowercaseCBtext.textContent = "lowercase: ";
        upperCBtext.textContent = "uppercase: ";
        numericCBtext.textContent = "numeric: ";
        specialCharCBtext.textContent = "special characters: ";
        
        // checkbox
        let lowerCB = document.createElement('input');
        let upperCB = document.createElement('input');
        let numericCB = document.createElement('input');
        let specialCharCB = document.createElement('input');
        lowerCB.setAttribute('type', 'checkbox');
        upperCB.setAttribute('type', 'checkbox');
        numericCB.setAttribute('type', 'checkbox');
        specialCharCB.setAttribute('type', 'checkbox');
        
        // checkbox behavior and updating state
        lowerCB.oninput = function (x) {
            lowerFlag = this.checked;
            //debug
            console.log(lowerFlag);
        }
        upperCB.oninput = function (x) {
            upperFlag = this.checked;
            //debug
            console.log(upperFlag);
        }
        numericCB.oninput = function (x) {
            numericFlag = this.checked;
            //debug
            console.log(numericFlag);
        }
        specialCharCB.oninput = function (x) {
            specialCharFlag = this.checked;
            // debug
            console.log(specialCharFlag);
            
        }
        
        checkbox_container.append(message,
            lowercaseCBtext, lowerCB, linebreak,
            upperCBtext, upperCB, linebreak.cloneNode(true),
            numericCBtext, numericCB, linebreak.cloneNode(true),
            specialCharCBtext, specialCharCB, linebreak.cloneNode(true));
            
            return checkbox_container;
        }
        
        // helper function that gets generates a random password from user configs
        const processUserConfig = function () {
            let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
            let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let numericCharacters = '1234567890';
            let specialCharacters = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
            
            
            console.log(lowerFlag, upperFlag, numericFlag, specialCharFlag);
            
            // this nested if else block tests for all combinations of boolean with the 4 flags
            if (lowerFlag) {
                console.log("entered lowerFlag");
            if (upperFlag) {
                console.log("entered upperFlag");
                if (numericFlag) {
                    console.log("entered numericFlag");
                    if (specialCharFlag) { // 1 1 1 1
                        console.log("entered specialcharflag");

                        let combined_char = lowercaseLetters +
                            uppercaseLetters + numericCharacters + specialCharacters;
                        // console.log({
                        //     lowercaseLetters,
                        //     uppercaseLetters,
                        //     numericCharacters,
                        //     specialCharacters,
                        //     combined_char
                        // });
                        // for (let i = 0; i < passwordLength; i++) {
                            // console.log({
                            //     idx: i,
                            //     result,
                            // });
                            // console.log({
                            //     random: Math.floor(Math.random() * passwordLength)
                            // });
                            // result += combined_char.charAt(Math.floor(Math.random() * combined_char.length));
                        // }
                        result = populateResult(result, passwordLength, combined_char);
                    } else { // 1 1 1 0
                        let combined_char = lowercaseLetters + uppercaseLetters + numericCharacters;
                        result = populateResult(result, passwordLength, combined_char);
                    }
                } else if (specialCharFlag) { // 1 1 0 1
                    let combined_char = lowercaseLetters + uppercaseLetters + specialCharacters;
                    result = populateResult(result, passwordLength, combined_char);
                } else { // 1 1 0 0 
                    let combined_char = lowercaseLetters + uppercaseLetters;
                    result = populateResult(result, passwordLength, combined_char);
                }
            } else if (numericFlag) {
                if (specialCharacters) { // 1 0 1 1
                    let combined_char = lowercaseLetters + numericCharacters + specialCharacters;
                    result = populateResult(result, passwordLength, combined_char);
                } else { // 1 0 1 0
                    let combined_char = lowercaseLetters + numericCharacters;
                    result = populateResult(result, passwordLength, combined_char);
                }
            } else if (specialCharFlag) { // 1 0 0 1
                let combined_char = lowercaseLetters + specialCharacters;
                result = populateResult(result, passwordLength, combined_char);
            } else {  // 1 0 0 0
                result = populateResult(result, passwordLength, lowercaseLetters);
            }
        } else if (upperFlag) {
            if (numericFlag) {
                if (specialCharFlag) { // 0 1 1 1
                    let combined_char = uppercaseLetters + numericCharacters + specialCharacters;
                    result = populateResult(result, passwordLength, combined_char);
                } else { // 0 1 1 0
                    let combined_char = uppercaseLetters + numericCharacters;
                    result = populateResult(result, passwordLength, combined_char);
                }
            } else if (specialCharFlag) { // 0 1 0 1
                let combined_char = uppercaseLetters + specialCharacters;
                result = populateResult(result, passwordLength, combined_char);
            } else { // 0 1 0 0 
                result = populateResult(result, passwordLength, uppercaseLetters);
            }
        } else if (numericFlag) {
            if (specialCharFlag) { // 0 0 1 1
                let combined_char = numericFlag + specialCharacters;
                result = populateResult(result, passwordLength, combined_char);
            } else { // 0 0 1 0 
                result = populateResult(result, passwordLength, numericCharacters);
            }
        } else if (specialCharFlag) { // 0 0 0 1
            result = populateResult(result, passwordLength, specialCharacters);
        } else { // 0 0 0 0 error no checkbox selected
            alert('You must select at least one criteria in checkbox!');
            processBtn.style.display = 'none';
            card.appendChild(makeReloadPageButton());
            return;
        }
        // hide button after click
        processBtn.style.display = 'none';

        // alert user of password generated
        alert(result);

        // show reload page button
        card.appendChild(makeReloadPageButton());
    };

    let lengthSlider = makePWLengthSlider();
    let charTypeCheckBox = makeCharTypeCheckBox();
    let processBtn = document.createElement('button');
    processBtn.textContent = "Process and generate password";

    config_div.append(divider, lengthSlider, divider.cloneNode(true),
        charTypeCheckBox, divider.cloneNode(true), processBtn); 
    // config_div.append( lengthSlider, charTypeCheckBox);

    // final append for entire user config div
    card.appendChild(config_div);

    processBtn.addEventListener("click", processUserConfig);
    return result;
}

/** helper function to randomly add characters to result based on params
 * @param {string} result - is the resulting password 
 * @param {numgber} passwordLength - is the user's password length configuration
 * @param {string} combined_char - is a string contains all the possible characters in the user's password 
 */
function populateResult(result, passwordLength, combined_char) {
    for(let i = 0; i < passwordLength; i++) {
        result += combined_char.charAt(Math.floor(Math.random() * combined_char.length));
    }
    return result;
}


// creates a reload button for user after a password is generated
function makeReloadPageButton() {
    reloadBtn.setAttribute('onclick','window.location.href=window.location.href');
    reloadBtn.innerHTML = "Restart button";
    return reloadBtn;
}

