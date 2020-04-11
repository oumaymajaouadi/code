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
$(".img1").hover(function(){
    $(".btn1").toggleClass('btnHover')
})

$(".img2").hover(function(){
    $(".btn2").toggleClass('btnHover')
})

$(".img3").hover(function(){
    $(".btn3").toggleClass('btnHover')
})
$(".img4").hover(function(){
    $(".btn4").toggleClass('btnHover')
})

$(".img5").hover(function(){
    $(".btn5").toggleClass('btnHover')
})

$(".img6").hover(function(){
    $(".btn6").toggleClass('btnHover')
})
$(".img7").hover(function(){
    $(".btn7").toggleClass('btnHover')
})

$(".img8").hover(function(){
    $(".btn8").toggleClass('btnHover')
})

$(".img9").hover(function(){
    $(".btn9").toggleClass('btnHover')
})

$(".courses > div > button").click(function(e){
    $("#ex1").modal('open')
})


