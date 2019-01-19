function createHeader(page) {

    var div = document.createElement('div');


        div.innerHTML =
        " <div class=\"row\">\n" +
            "                <div id=\"logo\" class=\"col-2 offset-1\">\n" +
            "                   <a href=\"main.html\"> <img src=\"images/support/icon_logo.png\"></a>\n" +
            "                </div>\n" +
            "                <div class=\"col-3\">\n" +
            "                    <a href=\"main.html\"> <h1>3DPrint Store</h1></a>\n" +
            "                </div>\n" +
            "\n" +
            "                <div id=\"mDeliv\" class=\"col-3\">\n" +
            "                    <a href=\"delivery.html\"> <p>Delivery and Payment</p></a>\n" +
            "                </div>\n" +
            "                <div id=\"mCart\" class=\"col-3\">\n" +
            "<div class='row'>\n"+
            "                   <a href=\"cart.html\"> <img src=\"images/support/icon_cart.png\"></a>\n" +
            "                   <a href=\"cart.html\"><p>Your cart</p></a>\n"+
            "</div>\n" +
            "</div>\n" +
            "                </div>\n" +
            "            </div>"
                    ;




    header.appendChild(div);







}


