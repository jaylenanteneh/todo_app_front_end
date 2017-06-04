// JavaScript File
console.log('loaded js')
$(document).ready(function(){
    console.log('ready for js');
    $(".redtext").click(function(){
        console.log('clicked redtext');
        $("ul").append("<li>Todo</li>")
        
    });
    
    
});