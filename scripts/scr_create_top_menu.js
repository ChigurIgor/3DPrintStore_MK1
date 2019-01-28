function createTopMenu() {

    var div = document.createElement('div');

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){

        div.innerHTML =
            ""
        ;


    }
    else {


        div.innerHTML = "            <div class=\"row\">\n" +
            "                <div  class=\"col-10 offset-1\" >\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"tm_item-0\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "<div class='row'>\n" +
            "                            <p>Scooter Parts</p>\n" +
            "                            <!--<p>Xiaomi Mijia 365 parts</p>-->\n" +
            "</div>\n" +

            "                        </div>\n" +
            "                        <div id=\"tm_item-1\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "<div class='row'>\n" +
            "                            <p>Keychains</p>\n" +
            "</div>\n" +

            "                        </div>\n" +
            "                        <div id=\"tm_item-2\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "<div class='row'>\n" +
            "                           <p>GoPro Parts</p>\n" +
            "</div>\n" +

            "                        </div>\n" +
            "                        <div id=\"tm_item-3\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "<div class='row'>\n" +
            "                           <p>Toys</p>\n" +
            "</div>\n" +

            "                        </div>\n" +
            "                        <div id=\"tm_item-4\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "<div class='row'>\n" +
            "                            <p>Ring and Earrings</p>\n" +
            "</div>\n" +

            "                        </div>\n" +
            "                        <div id=\"tm_item-5\" class=\"col-2\" onclick=\"location.href='print_your_model.html'\">\n" +
            "<div class='row'>\n" +
            "                            <p>Print Your Model</p>\n" +
            "</div>\n" +

            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n";

        topMenu.appendChild(div);

    }








}

function openCategory(id) {
    var end = parseInt(id.split("-")[1],10);
    var queryString = "?cat=" + end;
    window.location.href = "category.html" + queryString;

}

