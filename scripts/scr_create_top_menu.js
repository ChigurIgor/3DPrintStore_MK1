function createTopMenu() {

    var div = document.createElement('div');


        div.innerHTML = "            <div class=\"row\">\n" +
            "                <div  class=\"col-10 offset-1\" >\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"tm_item-1\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "                            <p>Scooter parts</p>\n" +
            "                            <!--<p>Xiaomi Mijia 365 parts</p>-->\n" +
            "                        </div>\n" +
            "                        <div id=\"tm_item-2\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "                            <p>Spare parts</p>\n" +
            "                        </div>\n" +
            "                        <div id=\"tm_item-3\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "                           <p>Vases</p>\n" +
            "                        </div>\n" +
            "                        <div id=\"tm_item-4\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "                           <p>Souvenirs</p>\n" +
            "                        </div>\n" +
            "                        <div id=\"tm_item-5\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "                            <p>Print your model</p>\n" +
            "                        </div>\n" +
            "                        <div id=\"tm_item-6\" class=\"col-2\" onclick='openCategory(id)'>\n" +
            "                           <p>Other</p>\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n";




    topMenu.appendChild(div);







}

function openCategory(id) {
    var end = parseInt(id.split("-")[1],10);
    var queryString = "?cat=" + end;
    window.location.href = "category.html" + queryString;

}

