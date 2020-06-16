 $(document).ready(function() {

     const film = JSON.parse(movies);

     $('#sortbylike').click(classify); 

     	function classify() {
         console.log("the function is called in firefox but not in chrome")
         film.sort(function(a, b) {
             return (Number(b.like) - Number(a.like));
         })
         document.getElementById('container1').innerHTML = ""
         var i = 0
         for (i = 0; i < film.length; i++) {
             document.getElementById('container1').innerHTML += '<div class="column"><div class="first"><img src="' + film[i].image + '" alt="film"></div><div class="textm"><div class="titlem">' + film[i].name + '</div><div class="descriptionm">' + film[i].description + '</div><div class="descriptionlike"><span class="like">Like<span class="pouce">&#128402</span></span><span class="counter" id="' + film[i].idnum + '">' + film[i].like + '</span></div></div></div>';
         }


         let btns = document.getElementsByClassName('like');

         for (let i = 0; i < btns.length; i++) {
             btns[i].addEventListener("click", function() {
                 increaselike(i)
                 classify()
             });
         }
     }

     $('#sortbyname').click(classify2);

     function classify2() {
         console.log("the function is called in firefox but not in chrome")

         film.sort(function(a, b) {
             if (a.name.toLowerCase() <
                 b.name.toLowerCase()) return -1;
             if (a.name.toLowerCase() >
                 b.name.toLowerCase()) return 1;
             return 0;
         })
         document.getElementById('container1').innerHTML = ""
         var i = 0
         for (i = 0; i < film.length; i++) {
             document.getElementById('container1').innerHTML += '<div class="column"><div class="first"><img src="' + film[i].image + '" alt="film"></div><div class="textm"><div class="titlem">' + film[i].name + '</div><div class="descriptionm">' + film[i].description + '</div><div class="descriptionlike"><span class="like">Like<span class="pouce">&#128402</span></span><span class="counter" id="' + film[i].idnum + '">' + film[i].like + '</span></div></div></div>';
         }


         let btns = document.getElementsByClassName('like');

         for (let i = 0; i < btns.length; i++) {
             btns[i].addEventListener("click", function() {
                 increaselike(i)
             });
         }
     }

     var i = 0
     for (i = 0; i < film.length; i++) {
         document.getElementById('container1').innerHTML += '<div class="column"><div class="first"><img src="' + film[i].image + '" alt="film"></div><div class="textm"><div class="titlem">' + film[i].name + '</div><div class="descriptionm">' + film[i].description + '</div><div class="descriptionlike"><span class="like">Like<span class="pouce">&#128402</span></span><div class="counter" id="' + film[i].idnum + '">' + film[i].like + '</div></div></div></div>';
     }


     let btns = document.getElementsByClassName('like');

     for (let i = 0; i < btns.length; i++) {
         btns[i].addEventListener("click", function() {
             increaselike(i)

         });
     }


     function increaselike(i) {
         film[i].like = Number(film[i].like) + 1;
         document.getElementById(film[i].idnum).innerHTML = film[i].like;
     };


 })