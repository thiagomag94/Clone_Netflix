
function bigImg(x) {
    
    x.style.height = "110%";
    x.style.width = "103%";
    x.style.boxShadow = "6px 6px 6px rgba(0,0,0,0.50)";
    x.style.transition = " 0.61803399s ease all";

    
}

function normImg(x) {
    
    x.style.height = "100%";
    x.style.width = "100%";
    x.style.boxShadow = "none";

    
}

(function () {
    var head = document.getElementById('header'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0)  {
           
            head.style.backgroundColor = "black"; 
            

        }
        
        else {
            head.style.backgroundColor = "transparent";
            head.style.transition = "all ease 0.3s";

        }
    });
})();



