// ***************************chapter 46-48(events)***********************************************
// qusetion 01
// var button = document.getElementById("printMessage")

// button.addEventListener("click", function() {
    
//     console.log("Button Clicked.Welcome User!");
//   });

// Qusetion 02
// var elementToHide = document.getElementById("elementToHide");
// var hideButton = document.getElementById("hideButton")

// hideButton.addEventListener("click",function(){
//     elementToHide.style.display = "none";

// })
// elementToHide.addEventListener("click",function(){
//     event.stopPropagation();

// })

// Question 04
// var scrollToTopLink = document.getElementById("scrollToTopLink");
// scrollToTopLink.addEventListener("click",function(event){

//     event.preventDefault();

//     window.scrollTo({
        
         
//                 top :0,
//                 behaviour :"smooth"
            
        
//     })
// })

// Question 05

// var clickToPlaySound = document.getElementById("clickToPlaySound");
// var playSound = document.getElementById("SoundPlay");

// clickToPlaySound.addEventListener("click",function(event){
//     event.preventDefault();
//     playSound.playSound();
// })

// Question 07
// var button =document.getElementById("myButton");
// button.addEventListener("click",function(){
// alert("Button Clicked!")
// });

// Qusetion 09
// var clickToPlaySound = document.getElementById("soundPlayButton");
// var sound = document.getElementById("Sound");
// clickToPlaySound.addEventListener("click",function(){
//     sound.play()
// })


// Qusetion 10
// var myElement = document.getElementById("myElement");
// myElement.addEventListener("mouseover",function(){
//     alert("Mouse Over Element!")
// })

// // Question 11
// var elementToHide = document.getElementById("elementToHide");
// elementToHide.addEventListener("mouseout",function(){
//     elementToHide.style.display = "none"
// })


// Qusetion 12
// var newWindow;
// function openNewWindow(){
//     var windowWidth = innerWidth / 2;
//     var windowHeight = innerHeight / 2;
//     newWindow = window.open('', '-blank','width='+windowWidth+"height="+windowHeight);
//     newWindow.document.write('<html><head><title>New Window</title></head><body>')
//     newWindow.document.write('<h1>This Is A New Window!</h1>')
//     newWindow.document.write('<button onClick="closeWindow()">Close Window</button>')
//     newWindow.document.write('</body></html>')

// }
// function closeWindow(){
//     if(newWindow){
//         newWindow.closeWindow();
//     }
// }

// ****************************Chapter 49-50**********************************************

// Question 01
// function printUserInput(){
//     var userInputValue=document.getElementById("userInput").value;
//     console.log("User Input",userInputValue);
// }

// Question 02
// function printCheckBoxValue(){
//     var checkBox = document.getElementById("myCheckBox")
//     var isChecked = checkBox.checked;
//     console.log("checkbox value", isChecked)
// }

// Qusetion 03

// function printSelectValue(){
//     var select=document.getElementById("mySelect");
//     var selectedOption = select.options[select.selectedIndex];
//     var selectedValue = selectedOption.value;
//     console.log("selected value",selectedValue)
// }
// Qusetion 05
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); 


//     var married = document.querySelector('input[name="maritalStatus"]:checked').value;

    
//     var statusElement = document.getElementById("status");

    
//     if (married === "single") {
//       statusElement.textContent = "Status: Available";
//     } else {
//       statusElement.textContent = ""; 
//     }
//   });


// Qusetion 06
// function fillInput() {
//     var inputElement = document.getElementById("myInput");

    
//     if (inputElement.value.trim() === "") {
      
//       inputElement.value = "Default Text";
//     }
//   }


// Question 12

//   function validateForm() {
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

    
//     document.getElementById("usernameError").textContent = "";
//     document.getElementById("emailError").textContent = "";
//     document.getElementById("passwordError").textContent = "";
//     document.getElementById("confirmPasswordError").textContent = "";

    
//     if (username.trim() === "") {
//       document.getElementById("usernameError").textContent = "Username is required.";
//       return false;
//     }

    
//     if (email.trim() === "") {
//       document.getElementById("emailError").textContent = "Email is required.";
//       return false;
//     } else if (!isValidEmail(email)) {
//       document.getElementById("emailError").textContent = "Invalid email format.";
//       return false;
//     }

    
//     if (password.trim() === "") {
//       document.getElementById("passwordError").textContent = "Password is required.";
//       return false;
//     } else if (password.length < 6) {
//       document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
//       return false;
//     }

    
//     if (password !== confirmPassword) {
//       document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
//       return false;
//     }

    
//     return true;
//   }

  
//   function isValidEmail(email) {
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }


//   ******************************the end**********************************************





















































































































