function openMe(evt, storyName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(storyName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// function openMe(str, storyName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
    
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
    

  
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(storyName).style.display = "block";
//     str.currentTarget.className += " active";
//   }




// Learning

// function openTab(str, showMe) {
//     let i, tabcontent, tablink;

//     tabcontent = document.getElementsByClassName("tabcontent");

//         for (i=0; i<tabcontent.length; i++) {
//             tabcontent[i].style.display = "none";
//         }

//     tablink = document.getElementsByClassName ("tablink");
//         for (i=0; i < tablink.length; i++) {
//             tablink[i].className = tablink[i].className.replace (" active", "");
//         }

//     document.getElementById(showMe).style.display="block";
// }


// Here is what the code does:

// It first gets all elements with the class "tabcontent" and hide them
// It gets all elements with the class "tablinks" and removes the class "active" from them
// It then displays the current tab by setting the display property of the element with the id "storyName" to "block"
// Finally, the function adds the class "active" to the button that was clicked by appending " active" to the className of the element represented by str.currentTarget.






// Me testing
// function iToggle (para, toggleMe) {
//     var togglee = document.getElementsByClassName("togglee");
//         toggler = document.getElementsByClassName("toggler");
//         i;

//     // Get these items and make them invisible initially until later.
//     for (i=0; i < togglee.length; i++) {
//         togglee[i].style.display="none";
//     }

//     // Remove the class "active" from all of these item togglers and assign them none.
//     for (i=0; i < toggler.length; i++) {
//         toggler[i].className = toggler[i].className.replace(" active", "");
//     }

//     // Display tab
//     document.getElementById(toggleMe).style.display="block";

// }










// NEW MODIFIED CODE

// function openMe(str, storyName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
    
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
    
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       if (tablinks[i].classList.contains("active")) {
//           tablinks[i].classList.remove("active");
//       }
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(storyName).style.display = "block";
//     str.currentTarget.classList.add("active");
// }






// // Script to Activate Tabs
// function openMe(str, storyName) {
//     // 1. Declare all variables
//     var i, tabcontent, tablinks;
    
//     // 2. Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
    

  
//     // 3. Get all elements with class="tablinks" and remove the class "active".
//     // To Check if the current tablink element has the "active" class before removing it.
//     tablinks = document.getElementsByClassName("tablinks");
// for (i = 0; i < tablinks.length; i++) {
//     // 4. Now the function will only have one button with "active" class at a time, it will remove the class from the previously clicked button before adding it to the currently clicked button, which ensures that only one button is highlighted at a time.
//     if (tablinks[i].classList.contains("active")) {
//       tablinks[i].classList.remove("active");
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
// }

  
//     // 5. Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(storyName).style.display = "block";
//     str.currentTarget.className += " active";
// }






































