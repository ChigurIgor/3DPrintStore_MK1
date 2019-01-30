function createFooter(page) {

    var div = document.createElement('div');
                div.className="row";
                div.id="footerRow";

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){

        div.innerHTML =
            "<div class='col-5' id='cont-1'>" +
            "<p>Tel: 054 904 2727</p>" +
            "<p>3dprint.str@gmail.com</p>" +
            "</div>"
            +
            "<div class='col-2' id='cont-2'><a href='https://www.facebook.com/3DPrintman.il'><img src='./images/support/icon_facebook.png'></a></div>"
            +
            " <div id=\"mDeliv\" class=\"col-5\">\n" +
            "                    <a href=\"delivery.html\"> <p>Delivery and Payment</p></a>\n" +
            "                </div>\n"

        ;


    }
    else {


        div.innerHTML =
            "<div class='col-2' id='cont-1'>" +
            "<p>Tel: 054 904 2727</p></div>" +
            "<div class='col-3' id='cont-2'>" +
            "<p>3dprint.str@gmail.com</p></div>" +

            "</div>" +
            "<div class='col-2' id='cont-2'><a href='https://www.facebook.com/3DPrintman.il'><img src='./images/support/icon_facebook.png'></a></div>" +
            " <div id=\"mDeliv\" class=\"col-4\">\n" +
            "                    <a href=\"delivery.html\"> <p>Delivery and Payment</p></a>\n" +
            "                </div>\n"

        ;


    }
    footer.appendChild(div);







}


