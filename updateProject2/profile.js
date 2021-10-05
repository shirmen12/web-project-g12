// When the user clicks the button, open the modal 
function btnClick(firstID, secondID) {
    // Get the modal
    var opinion = document.getElementById(firstID);

    // Get the button that opens the modal
    var btn = document.getElementById(secondID);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    if (opinion.style.display = "none") {
        opinion.style.display = "block";
    }
}
// When the user clicks on <span> (x), close the modal
function spanClick(firstID, secondID) {
    // Get the modal
    var opinion = document.getElementById(firstID);

    // Get the button that opens the modal
    var btn = document.getElementById(secondID);
 
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    if (opinion.style.display = "block") {
        opinion.style.display = "none";
    }
}


// function resetStar(){
//     var x = document.getElementsByName("rate");
//     for(i=0;i<x.length;i++){
//         if (x[i].style.)
//     }
// }

// function openType(evt, typeName) {
//     // Declare all variables
//     var i, formContent, tablink;

//     // Get all elements with class="tabcontent" and hide them
//     formContent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < formContent.length; i++) {
//         formContent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablink = document.getElementsById("addStar");
//     for (i = 0; i < tablink.length; i++) {
//       tablink[i].className = tablink[i].className.replace("active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(typeName).style.display = "block";
//     evt.currentTarget.className += " active";

//   }

