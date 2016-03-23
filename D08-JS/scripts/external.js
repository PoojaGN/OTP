
    // window.onload = init; // non compliant
     //window.addEventListener("load", init);// w3c compliant;
     window.addEventListener("DOMContentLoaded", init);
    function init(){
        // alert("Hello World");
        document.getElementsByTagName("li")[0].addEventListener("click",clickHandler);
        document.getElementsByTagName("li")[4].addEventListener("click",stopHandler);
    }
    function clickHandler(){
        alert("you clicked me");
    }
    function stopHandler(){
        document.getElementsByTagName("li")[0].removeEventListener("click",clickHandler);
    }
    
