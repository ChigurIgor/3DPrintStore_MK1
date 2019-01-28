function createHeader(page) {

    var div = document.createElement('div');

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){

        div.innerHTML =
            " <div class=\"row\">\n" +
            "                <div id=\"logo\" class=\"col-3\">\n" +
            "                   <a href=\"main.html\"> <img src=\"images/support/icon_logo.png\"></a>\n" +
            "                </div>\n" +
            "                <div class=\"col-6\">\n" +
            "                    <a href=\"main.html\"> <h1>3DPrintMan</h1></a>\n" +
            "                </div>\n" +
            "\n" +

            "                <div id=\"mCart\" class=\"col-3\">\n" +
            "<div id=\"mCartRow\" class='row'>\n" +
            "                <div id=\"mCartCol\" class=\"col-12\">\n" +
            "<div id=\"\" class='row'>\n" +

            "                   <a href=\"cart.html\"> <img src=\"images/support/icon_cart.png\"></a>\n" +

            "</div>\n" +


            "</div>\n" +
            "</div>\n" +
            "</div>\n" +
            "                </div>\n" +
            "            </div>"
        ;


        }
    else {

        div.innerHTML =
            " <div class=\"row\">\n" +
            "                <div id=\"logo\" class=\"col-2 offset-1\">\n" +
            "                   <a href=\"main.html\"> <img src=\"images/support/icon_logo.png\"></a>\n" +
            "                </div>\n" +
            "                <div class=\"col-2\">\n" +
            "                    <a href=\"main.html\"> <h1>3DPrintMan</h1></a>\n" +
            "                </div>\n" +
            "\n" +
            "                <div id=\"mSlogan\" class=\"col-3\">\n" +
            "<div class='row'>" +
            "                   <p>Too cool for traditional manufacturing</p>\n" +

            "                </div>\n" +

            "                </div>\n" +
            "                <div id=\"mCart\" class=\"col-3\">\n" +
            "<div id=\"mCartRow\" class='row'>\n" +
            "                <div id=\"mCartCol\" class=\"col-12\">\n" +
            "<div id=\"\" class='row'>\n" +

            "                   <a href=\"cart.html\"> <img src=\"images/support/icon_cart.png\"></a>\n" +

            "</div>\n" +
            "<div id=\"\" class='row'>\n" +

            "                   <a href=\"cart.html\"><p>Сart</p></a>\n" +

            "</div>\n" +

            "</div>\n" +
            "</div>\n" +
            "</div>\n" +
            "                </div>\n" +
            "            </div>"
        ;

    }


    header.appendChild(div);







}


