function createCarusel() {

    var div = document.createElement('div');
    div.className="w3-content";

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

        div.innerHTML =
            "                <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"position:relative;z-index:1;\">\n" +
            "                    <!-- Indicators -->\n" +
            "                    <ol class=\"carousel-indicators\" style=\"z-index:1 !important\">\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"1\" class=\"\"></li>\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"\"></li>\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"3\" class=\"\"></li>\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"4\" class=\"\"></li>\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"5\" class=\"\"></li>\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"6\" class=\"\"></li>\n" +
            "                        <li data-target=\"#myCarousel\" data-slide-to=\"7\" class=\"\"></li>\n" +
            "                    </ol>\n" +
            "\n" +
            "                    <!-- Wrapper for slides -->\n" +
            "                    <div class=\"carousel-inner\" role=\"listbox\">\n" +
            "                        <div class=\"item active\" id=\"car_item-0\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/1.jpg\" alt=\"Los Angeles\" style=\"height: 25em; \">\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>Xiaomi Mijia M365 Spare Parts</h3>\n" +
            "                                <p>Very much spare parts for Xiaomi Mijia M365 scooter.</p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"item\" id=\"car_item-1\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/2.jpg\" alt=\"Chicago\" style=\"height: 25em\" >\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>Keychains</h3>\n" +
            "                                <p>Great keychains.</p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"item\" id=\"car_item-2\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/3.jpg\" alt=\"New York\" style=\"height: 25em\">\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>GoPro</h3>\n" +
            "                                <p>GoPro parts and accessories</p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"item\" id=\"car_item-5\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/4.jpg\" alt=\"New York\" style=\"height: 25em\">\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>Phone Holders</h3>\n" +
            "                                <p>Supports for the phone that will not leave anyone indifferent. </p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"item\" id=\"car_item-6\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/5.jpg\" alt=\"New York\" style=\"height: 25em\">\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>Pen Stands</h3>\n" +
            "                                <p>Unique stand for pens</p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"item\" id=\"car_item-7\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/6.jpg\" alt=\"New York\" style=\"height: 25em\">\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>Business Card Holder</h3>\n" +
            "                                <p>Unique holders for your business cards.</p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"item\" id=\"car_item-4\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/7.jpg\" alt=\"New York\" style=\"height: 25em\">\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>Rings and Accessories</h3>\n" +
            "                                <p>Some rings and imitation jewelry that can be made for you.</p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"item\" id=\"car_item-12\" onclick=\"openCategory(id)\">\n" +
            "                            <img src=\"images/carousel_pg1/8.jpg\" alt=\"New York\" style=\"height: 25em\">\n" +
            "                            <div class=\"carousel-caption\">\n" +
            "                                <h3>Useful Staff</h3>\n" +
            "                                <p>Some useful stuff you may need.</p>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                    </div>\n" +
            "\n" +
            "                    <!-- Controls -->\n" +
            "                    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n" +
            "                        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n" +
            "                        <span class=\"sr-only\">Previous</span>\n" +
            "                    </a>\n" +
            "                    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n" +
            "                        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n" +
            "                        <span class=\"sr-only\">Next</span>\n" +
            "                    </a>\n" +
            "                </div>\n"
        ;

    }


    carousel.appendChild(div);







}


