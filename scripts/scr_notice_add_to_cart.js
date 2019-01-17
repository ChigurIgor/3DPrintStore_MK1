// $('#btn_scroll').fadeOut(1);





// $(window).scroll(function (){
//         if ($(this).scrollTop() > screen.height*0.2){
//             $('#notice').fadeIn();
//         } else{
//             $('#notice').fadeOut();
//         }
//     });


// function scrollTop1() {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     }



$(document).ready(function(){

    var div= document.createElement("div");

    div.innerHTML="<a href=\"cart.html\"><img id=\"notice\" src=\"images/support/icon_cart_ok.png\"  \"></a>\n";
    document.body.appendChild(div);
    var divStyle= document.createElement("link");
    divStyle.href="css/stl_notice.css";
    divStyle.rel="stylesheet";
    divStyle.type="text/css";
    document.head.appendChild(divStyle);
    <!--<img id="btn_scroll" src="images/support/icon_btn_scroll.png"  onclick="scrollTop1()">-->
// <link href="css/stl_btnscroll.css" rel="stylesheet" type="text/css">

    $('#notice').fadeOut(1);



});




