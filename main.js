//faz a busca aparecer
function showSearch() {
    const busca = document.getElementById('buscar')                                                                              
    busca.style.display = "inline-block";
    busca.style.transition = "all ease 5s";

    
}


//muda a cor no menu horizontal quando rola o scroll
(function () {
    var head = document.getElementById('header'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0)  {
           
            head.style.backgroundColor = "rgba(23, 23, 23, 1)"; 
            

        }
        
        else {
            const busca = document.getElementById('buscar')
            head.style.backgroundColor = "transparent";
            head.style.transition = "all ease 0.3s";
            busca.style.display= "none";
            busca.style.transition = "all ease 5s";

        }
    });
})();



