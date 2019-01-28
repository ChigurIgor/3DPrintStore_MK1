function createCatalog() {

    var div = document.createElement('div');

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){

        div.innerHTML =
            " <div id=\"catalog_title\" class=\"row\">\n" +
            "                <div class=\"col-12\" >\n" +
            "                <p>Catalog</p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"row\">\n" +
            "                    <div class=\"col-6\">\n" +
            "                        <div class=\"row\">\n" +
            "                            <div id=\"ctlg_item-1\" class=\"col-6\" style=\"height: 7.5em; \"  onclick=\"openCategory(id)\" >\n" +
            "                             <p>Keychains</p>\n" +
            "                                <img src=\"images/pg1/3.jpg\" >\n" +
            "                            </div>\n" +
            "                            <div id=\"ctlg_item-5\" class=\"col-6\" style=\"height: 7.5em;  \"  onclick=\"openCategory(id)\">\n" +
            "                                <p>Phone holders</p>\n" +
            "                                <img src=\"images/pg1/4.jpg\" >\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"row\">\n" +
            "                            <div id=\"ctlg_item-2\" class=\"col-12\" style=\"height: 7.5em; \"  onclick=\"openCategory(id)\">\n" +
            "                                <p>Gopro accessories and spare parts</p>\n" +
            "                                <img src=\"images/pg1/2.jpg\" >\n" +
            "                            </div>\n" +
            "\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div id=\"ctlg_item-0\" class=\"col-6\" style=\"height: 15em;  \" onclick=\"openCategory(id)\">\n" +
            "                        <p>Xiaomi Mijia 365 parts</p>\n" +
            "                        <img src=\"images/pg1/1.jpg\">\n" +
            "                    </div>\n" +
            "\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"row\">\n" +
            "\n" +
            "                        <div id=\"ctlg_item-20\" class=\"col-3\" style=\"height: 15em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Vases</p>\n" +
            "                            <img src=\"images/pg1/6.jpg\">\n" +
            "                        </div>\n" +
            "\n" +
            "\n" +
            "                <div id=\"ctlg_item-99\" class=\"col-6\" style=\"height: 15em; \"  onclick=\"location.href='print_your_model.html'\">\n" +
            "                    <p>Print Your Model</p>\n" +
            "                    <img src=\"images/pg1/7.jpg\">\n" +
            "                </div>\n" +
            "                <div class=\"col-3\">\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-6\" class=\"col-12\" style=\"height: 7.5em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Pen stands</p>\n" +
            "                            <img src=\"images/pg1/5.jpg\">\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-4\" class=\"col-12\" style=\"height: 7.5em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Rings and Earrings</p>\n" +
            "                            <img src=\"images/pg1/8.jpg\">\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"row\">\n" +
            "                <div id=\"ctlg_item-9\" class=\"col-6\" style=\"height: 15em;  \"  onclick=\"openCategory(id)\">\n" +
            "                    <p>Arduino robots</p>\n" +
            "                    <img src=\"images/pg1/12.jpg\">\n" +
            "                </div>\n" +
            "                <div class=\"col-6\">\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-3\" class=\"col-12\" style=\"height: 7.5em; \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Toys</p>\n" +
            "                            <img src=\"images/pg1/9.jpg\">\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-11\" class=\"col-6\" style=\"height: 7.5em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Cover cases</p>\n" +
            "                            <img src=\"images/pg1/10.jpg\">\n" +
            "                        </div>\n" +
            "                        <div id=\"ctlg_item-12\" class=\"col-6\" style=\"height: 7.5em; \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Useful Stuff</p>\n" +
            "                            <img src=\"images/pg1/11.jpg\">\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "\n" +
            "                </div>\n" +
            "\n" +
            "\n" +
            "            </div> "
        ;


    }
    else {

        div.innerHTML =
            " <div id=\"catalog_title\" class=\"row\">\n" +
            "                <div class=\"col-12\" >\n" +
            "                <p>Catalog</p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"row\">\n" +
            "                    <div class=\"col-6\">\n" +
            "                        <div class=\"row\">\n" +
            "                            <div id=\"ctlg_item-1\" class=\"col-6\" style=\"height: 20em; \"  onclick=\"openCategory(id)\" >\n" +
            "                             <p>Keychains</p>\n" +
            "                                <img src=\"images/pg1/3.jpg\" >\n" +
            "                            </div>\n" +
            "                            <div id=\"ctlg_item-5\" class=\"col-6\" style=\"height: 20em;  \"  onclick=\"openCategory(id)\">\n" +
            "                                <p>Phone holders</p>\n" +
            "                                <img src=\"images/pg1/4.jpg\" >\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"row\">\n" +
            "                            <div id=\"ctlg_item-2\" class=\"col-12\" style=\"height: 20em; \"  onclick=\"openCategory(id)\">\n" +
            "                                <p>Gopro accessories and spare parts</p>\n" +
            "                                <img src=\"images/pg1/2.jpg\" >\n" +
            "                            </div>\n" +
            "\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div id=\"ctlg_item-0\" class=\"col-6\" style=\"height: 40em;  \" onclick=\"openCategory(id)\">\n" +
            "                        <p>Xiaomi Mijia 365 parts</p>\n" +
            "                        <img src=\"images/pg1/1.jpg\">\n" +
            "                    </div>\n" +
            "\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"row\">\n" +
            "\n" +
            "                        <div id=\"ctlg_item-20\" class=\"col-3\" style=\"height: 40em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Vases</p>\n" +
            "                            <img src=\"images/pg1/6.jpg\">\n" +
            "                        </div>\n" +
            "\n" +
            "\n" +
            "                <div id=\"ctlg_item-99\" class=\"col-6\" style=\"height: 40em; \"  onclick=\"location.href='print_your_model.html'\">\n" +
            "                    <p>Print Your Model</p>\n" +
            "                    <img src=\"images/pg1/7.jpg\">\n" +
            "                </div>\n" +
            "                <div class=\"col-3\">\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-6\" class=\"col-12\" style=\"height: 20em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Pen stands</p>\n" +
            "                            <img src=\"images/pg1/5.jpg\">\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-4\" class=\"col-12\" style=\"height: 20em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Rings and Earrings</p>\n" +
            "                            <img src=\"images/pg1/8.jpg\">\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"row\">\n" +
            "                <div id=\"ctlg_item-9\" class=\"col-6\" style=\"height: 40em;  \"  onclick=\"openCategory(id)\">\n" +
            "                    <p>Arduino robots</p>\n" +
            "                    <img src=\"images/pg1/12.jpg\">\n" +
            "                </div>\n" +
            "                <div class=\"col-6\">\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-3\" class=\"col-12\" style=\"height: 20em; \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Toys</p>\n" +
            "                            <img src=\"images/pg1/9.jpg\">\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "\n" +
            "                    <div class=\"row\">\n" +
            "                        <div id=\"ctlg_item-11\" class=\"col-6\" style=\"height: 20em;  \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Cover cases</p>\n" +
            "                            <img src=\"images/pg1/10.jpg\">\n" +
            "                        </div>\n" +
            "                        <div id=\"ctlg_item-12\" class=\"col-6\" style=\"height: 20em; \"  onclick=\"openCategory(id)\">\n" +
            "                            <p>Useful Stuff</p>\n" +
            "                            <img src=\"images/pg1/11.jpg\">\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "\n" +
            "                </div>\n" +
            "\n" +
            "\n" +
            "            </div>"
        ;

    }


    catalog.appendChild(div);







}


