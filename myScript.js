function showLetsGo() {
    document.getElementById("letsGoButton").style.display="block"
}

function showDormForm() {
    document.getElementById("dormForm").style.display="block"
 
}

function showDormType() {
    document.getElementById("dormType").style.display="block"
}

function showDormForm2() {
    document.getElementById("dormForm2").style.display="block"
    document.getElementById("dormType").style.display="none"
    document.getElementById("dormForm").style.display="none"
    document.getElementById("collegeDropDown").style.display="none"
}
function showDormType2() {
    document.getElementById("dormType2").style.display="block"
}

function showEmailForm() {
    var delayInMilliseconds = 3000; 
    document.getElementById("spinner").style.display="block"
    document.getElementById("letsGoButton").style.display="none"
    document.getElementById("dormForm").style.display="none"
    document.getElementById("dormType").style.display="none"
    document.getElementById("collegeDropDown").style.display="none"
    document.getElementById("authorText").style.display="block"
    document.getElementById("dormForm2").style.display="none"
    document.getElementById("dormType2").style.display="none"
setTimeout(function() {
    document.getElementById("spinner").style.display="none"
    document.getElementById("noSwaps").style.display="block"
    document.getElementById("emailForm").style.display="block"
}, delayInMilliseconds);
    
}

function showButton() {
    document.getElementById("letsGoButton").style.display="block"
}
function showSubmitButton() {
    document.getElementById("submitButton").style.display="block"
}

function showResponse() {
    document.getElementById("submitButton").style.display="none"
    var delayInMilliseconds = 2000; 
    document.getElementById("spinner").style.display="block"
    document.getElementById("emailForm").style.display="none"
    document.getElementById("noSwaps").style.display="none"
    document.getElementById("dormType").style.display="none"
    document.getElementById("collegeDropDown").style.display="none"
    document.getElementById("authorText").style.display="block"
    document.getElementById("dormForm2").style.display="none"
    document.getElementById("dormType2").style.display="none"
setTimeout(function() {
    document.getElementById("spinner").style.display="none"
    document.getElementById("response").style.display="block"
    document.getElementById("authorText").style.display="block"
}, delayInMilliseconds);
}
$('.ui.dropdown')
  .dropdown();
  