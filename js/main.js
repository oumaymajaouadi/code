function makeBold() {
    var textArea = document.getElementById('para');
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal'
    } else {
        textArea.style.fontWeight = 'bold'
    }
}
function underlinep() {
    var textArea = document.getElementById('para');
    if (textArea.style.textDecoration === 'none') {
        textArea.style.textDecoration = 'underline'
    } else {
        textArea.style.textDecoration = 'none'
    }

}
function makeitalic() {
    var textArea = document.getElementById('para');
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal'
    } else {
        textArea.style.fontStyle = 'italic'
    }
}
function changesize(){
var select = document.getElementById("size");
var value = select.options[select.selectedIndex].value;
var textArea = document.getElementById("para") ;
textArea.style.fontSize = value;

}
function changestyle(){
 var select = document.getElementById("style1");
var value = select.options[select.selectedIndex].value;
var textArea = document.getElementById("para") ;
textArea.style.fontFamily = value;

}