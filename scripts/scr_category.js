var desTitle="";
var desCont="";
var itemsInside=0;
var itemsInLine=4;
var dir="";
        dir="categories/xiaomi_mijia_365";


function createCategory() {

    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    for (var i = 0; i < queries.length; i++)
    {
        var end = parseInt(queries[i].split("=")[1],10);

        // document.write(end + "<br>");
    }

    if(end=="1"){
        desTitle=itemTitle_1;
        desCont=NCNTNT_1;
        itemsInside=2;
    }
    if(end=="2"){
        desTitle=itemTitle_2;
        desCont=NCNTNT_2;
        itemsInside=3;

    }
    if(end=="3"){
        desTitle=itemTitle_3;
        desCont=NCNTNT_3;
        itemsInside=4;

    }
    if(end=="4"){
        desTitle=itemTitle_4;
        desCont=NCNTNT_4;
        itemsInside=5;

    }




    // var div = document.createElement('div');
    //
    // if( navigator.userAgent.match(/Android/i)
    //     || navigator.userAgent.match(/webOS/i)
    //     || navigator.userAgent.match(/iPhone/i)
    //     || navigator.userAgent.match(/iPad/i)
    //     || navigator.userAgent.match(/iPod/i)
    //     || navigator.userAgent.match(/BlackBerry/i)
    //     || navigator.userAgent.match(/Windows Phone/i)){
    //
    //     div.innerHTML ="                <div class=\"row\">\n" +
    //         "                    <div class=\"col-12\">\n" +
    //         "                        <div   class=\"row\"<p id=\"news_ttl\">"+desTitle+"</p>\n" +
    //         "                    </div>\n" +
    //         "                        <div  id=\"new_img-1\" class=\"row\" onclick=\"showPictureNews(id)\"><img class=\"news_img\" src=\"../Images/News/"+end+".jpg\"></div>\n" +
    //         "\n" +
    //
    //         "                        <div   class=\"row\"<p id=\"news_content\">"+desCont+"</p>\n" +
    //         "                    </div>\n" +
    //
    //         "\n" +
    //         "                    </div>\n" +
    //         "                </div>\n"
    //
    //     ;
    //
    // }
    //
    // else{
    //     div.innerHTML ="                <div class=\"row\">\n" +
    //         "                    <div class=\"col-4\">\n" +
    //         "                        <div  id=\"new_img-1\" class=\"row\" onclick=\"showPictureNews(id)\"><img class=\"news_img\" src=\"../Images/News/"+end+".jpg\"></div>\n" +
    //         "\n" +
    //         "                    </div>\n" +
    //         "\n" +
    //         "                    <div class=\"col-8\">\n" +
    //         "                        <p class=\"news_ttl\">"+desTitle+"</p>\n" +
    //         "                        <p class=\"news_content\">"+desCont+"</p>\n" +
    //         "\n" +
    //         "\n" +
    //         "                    </div>\n" +
    //         "                </div>\n"
    //
    //
    //     ;
    // }
    //
    //
    //
    //
    // container.appendChild(div);
    createItems();

}



function createItems() {


    var titles = [];
    titles.push(itemTitle_1);
    titles.push(itemTitle_2);
    titles.push(itemTitle_3);
    titles.push(itemTitle_4);

    var prices=[];
    prices.push(price_1);
    prices.push(price_2);
    prices.push(price_3);
    prices.push(price_4);



    // var xx=0;
    // var yy=0;
    // var rowCount=1;
    i=0;

    var clsType="col-6";
    switch (itemsInLine) {
        case 1:
            clsType="col-12";
            break;
        case 2:
            clsType="col-6";
            break;
        case 3:
            clsType="col-4";
            break;
        case 4:
            clsType="col-3";
            break;
        case 5:
            clsType="col-2";
            break;
        case 6:
            clsType="col-2";
            break;

    }



    for(i=0; i<itemsInside;i += itemsInLine) {
        // alert("i= "+i);


        var divRow = document.createElement('div');
        divRow.className="row";
        // divRow.innerHTML = "<div class=\"row\">\n" +
        //     "                            </div>";
var j=0;
        var index=0;
        for(j=0;j<itemsInLine; j+=1){
            // alert("j= "+j);
            index=i+j+1;
            // alert("index= "+index);
            var div = document.createElement('div');
            div.className=clsType;
            div.id="item-"+index;

            if(index<=itemsInside){
            div.innerHTML =
                "                                    <div class=\"row\" id=\"ctlg_item-"+index+"\"  onclick=\"openNews(id)\">\n" +
                "                                        <div class=\"col-12\"> " +
                "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+index+".jpg\" alt=\"sdf\"></div>\n" +
                "<div class='row'> <p class=\"item_ttl\">"+titles[index]+"</p></div>" +
                "<div class='row'> <p class=\"item_price\">"+prices[index]+"</p></div>" +
  "                            </div>";



            divRow.appendChild(div);
            }
        }


        // // xx=i+1;
        // // yy=xx+1;


        // var desTitle1="";
        // var desTitle2="";
        // var desPrice1="";
        // var desPrice2="";
        // var desTitle2="";
        //
        //
        // desPrice1=xx*100;
        // desPrice2=yy*100;
        // switch (xx) {
        //     case 1:
        //         desTitle1=NTTL_1;
        //          break;
        //     case 2:
        //         desTitle1=NTTL_2;
        //         break;
        //     case 3:
        //         desTitle1=NTTL_3;
        //         break;
        //     case 4:
        //         desTitle1=NTTL_4;
        //         break;
        //     default:
        // }
        // switch (yy) {
        //     case 1:
        //         desTitle2=NTTL_1;
        //         break;
        //     case 2:
        //         desTitle2=NTTL_2;
        //         break;
        //     case 3:
        //         desTitle2=NTTL_3;
        //         break;
        //     case 4:
        //         desTitle2=NTTL_4;
        //         break;
        //     default:
        // }






        //
        // div.innerHTML = "                        <div class=\"row\">\n" +
        //     "                            <div id=\"item-"+xx+"\" class=\"col-6\">\n" +
        //     "                                    <div class=\"row\" id=\"ctlg_item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //     "                                        <div class=\"col-12\"> " +
        //     "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+xx+".jpg\" alt=\"sdf\"></div>\n" +
        //     "<div class='row'> <p class=\"item_ttl\">"+desTitle1+"</p></div>" +
        //     "<div class='row'> <p class=\"item_price\">"+desPrice1+"</p></div>" +
        //
        //     "</div>\n" +
        //     "\n" +
        //     "                                </div>\n" +
        //     "                            </div>\n" +
        //     "                            <div id=\"item-"+yy+"\" class=\"col-6\">\n" +
        //     "                                    <div class=\"row\" id=\"ctlg_item-"+yy+"\"  onclick=\"openNews(id)\">\n" +
        //     "                                        <div class=\"col-12\"> " +
        //     "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+yy+".jpg\" alt=\"sdf\"></div>\n" +
        //     "<div class='row'> <p class=\"item_ttl\">"+desTitle2+"</p></div>" +
        //     "<div class='row'> <p class=\"item_price\">"+desPrice2+"</p></div>" +
        //
        //     "</div>\n" +
        //     "                                </div>\n" +
        //     "                            </div>";
        //
        //
        // if(yy>itemsInside) {
        //     div.innerHTML = "                     <div class=\"row\">\n" +
        //         "                            <div id=\"item-"+xx+"\" class=\"col-6\">\n" +
        //         "                                    <div class=\"row\" id=\"ctlg_item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //         "                                        <div class=\"col-12\"> " +
        //         "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+xx+".jpg\" alt=\"sdf\"></div>\n" +
        //         "<div class='row'> <p class=\"item_ttl\">"+desTitle1+"</p></div>" +
        //         "<div class='row'> <p class=\"item_price\">"+desPrice1+"</p></div>" +
        //
        //         "</div>\n" +
        //         "\n" +
        //         "                                </div>\n" +
        //         "                            </div>";
        // }
        // document.body.appendChild(div)
        // if (rowCount % 2 == 0) {
        //     div.innerHTML = "                        <div class=\"row\">\n" +
        //         "                            <div id=\"item8-"+xx+"\" class=\"col-8\">\n" +
        //         "                                <div class=\"container\">\n" +
        //         "                                    <div class=\"row\" id=\"item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //         "                                        <div class=\"col-6\"> <img class=\"news_img\" src=\"../Images/News/"+xx+".jpg\"></div>\n" +
        //         "                                            <div class=\"col-6\"><p class=\"news_ttl\">"+desTitle1+"</p></div>\n" +
        //         "                                    </div>\n" +
        //         "\n" +
        //         "                                </div>\n" +
        //         "                            </div>\n" +
        //         "                            <div id=\"item4-"+xx+"\" class=\"col-4\">\n" +
        //         "                                <div class=\"container\">\n" +
        //         "                                    <div class=\"row\" id=\"item-"+yy+"\"  onclick=\"openNews(id)\">\n" +
        //         "                                        <div class=\"col-6\"> <img class=\"news_img\" src=\"../Images/News/"+yy+".jpg\"></div>\n" +
        //         "                                        <div class=\"col-6\"><p class=\"news_ttl\">"+desTitle2+"</p></div>\n" +
        //         "                                    </div>\n" +
        //         "\n" +
        //         "                                </div>\n" +
        //         "                            </div>\n" +
        //         "                        </div>";
        //
        //
        //     if(yy>newsInside) {
        //         div.innerHTML = "                        <div class=\"row\">\n" +
        //             "                            <div id=\"item8-"+xx+"\" class=\"col-8 offset-2\">\n" +
        //             "                                <div class=\"container\">\n" +
        //             "                                    <div class=\"row\" id=\"item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //             "                                        <div class=\"col-6\"> <img class=\"news_img\" src=\"../Images/News/"+xx+".jpg\"></div>\n" +
        //             "                                            <div class=\"col-6\"><p class=\"news_ttl\">"+desTitle1+"</p></div>\n" +
        //             "                                    </div>\n" +
        //             "                            </div>\n" +
        //             "                        </div>";
        //     }
        //     // document.body.appendChild(div)
        //     table.appendChild(div);
        // }





        container.appendChild(divRow);
        //
        // rowCount+=1;


    }




}














// ---------------------------------------------------------------------- Prices -----------------------------------------------------------------------

var price_1="100";
var price_2="200";
var price_3="300";
var price_4="400";





// ---------------------------------------------------------------------- News -----------------------------------------------------------------------

// ---------------------------------------------------------------------- News 1 -----------------------------------------------------------------------

var itemTitle_1="Girls first job.";
var NCNTNT_1="They chose for a long time and finally made their first order in Israel.";
// ---------------------------------------------------------------------- News 2 -----------------------------------------------------------------------

var itemTitle_2="Wall painting to solve interior problems";
var NCNTNT_2="Ideas of interior design today are very diverse, which allows you to create a truly individual image of your home or office. A whole series of interesting ideas serves not only to decorate the situation and express individuality in it, but also to solve specific problems: disproportionality, abundance of angles, shading, etc. Wall painting allows you to diversify the situation, create a unique color in it and at the same time optimize the layout.\n" +
    "\<br>" +
    "\<br>" +

    "The advantage of wall painting is the ability to create a unique image in virtually any baseline conditions: windows on a blank wall, an unattractive landscape, no sun, etc. It is not necessary to eliminate all this with heavy curtains: painting the wall will diversify the look, give the necessary accents and be able to present the features of the layout of your room.\n" +
    "\<br>" +
    "\<br>" +
    "Even dark corners and stairways will take on a completely different look due to the elaborate wall painting. Both color and plot design largely determines how this “piece” of the interior will be perceived: it will seem more open, spacious or, on the contrary, chamber. Thanks to the wall painting, you can diversify the everyday atmosphere, bring into it an element of comfort or summer heat. All this makes the space filled with lively energy, helps to create a certain impression of the environment. Thus, the room will visually become more sunny and spacious if you decorate the wall with a thematic painting with an abundance of shades of yellow and orange.\n" +
    "\<br>" +
    "\<br>" +
    "Premises of irregular shape are well corrected with the help of murals that help to expand the space, level the corners, and give depth where necessary. For example, the image of a window with a flowering landscape creates an amazing atmosphere of comfort, helps to avoid a standard approach to creating a harmonious environment. At the same time, the artistic painting of the walls is suitable for both spacious rooms and rooms of a small area: depending on the free space, the plot, the technique of execution, the color scheme are selected. As a result, a small room will seem more spacious, and in the free space of a large room will not “eat” its visitor. Amazing in its effects is the result of painting not only the walls, but also ceilings, interior items. In this case, the situation acquires a truly unique opportunity to achieve specific impressions: the choice can be guided by both personal preferences and professional advice of the artist. Creating a unique atmosphere in the house largely depends on how you approach the design of the accessible area and the zoning of the space, so painting the walls is a unique opportunity to make the interior your faithful assistant!";
// ---------------------------------------------------------------------- News 3 -----------------------------------------------------------------------

var itemTitle_3="Games of color. How can they help marketers and advertisers?";
var NCNTNT_3="Color - physiological. It affects through the pituitary gland on the human vascular system, causing appropriate emotional reactions. The first serious research in this field was conducted more than half a century ago by psychologist Karl Flehingaus and psychiatrist Max Luscher.\n" +
    "Using the method, you can set the parameters and characteristics of the target audience and get the main colors of the impact.\n" +
    "Using the method, you can set the parameters and characteristics of the target audience and get the main colors of the impact.\n" +
    "\n" +
    " \n" +
    "\n" +
    "It was they who developed the doctrine of the physiological color and proved that absolutely all people equally perceive the eight primary colors - red, blue, yellow, green, purple, brown, black, gray. But if we are talking about the impact on the consumer with the help of color, then the possession of this basic knowledge still does not give the marketer any advantage. After all, there are still many shades and their combinations, which are perceived by people already individually, due to social differences.\n" +
    "\n" +
    "Color = target audience\n" +
    "\n" +
    " \n" +
    "\n" +
    "It is possible to understand them by applying one of the methods of quality marketing - the method of color correction. Its essence is that according to the social parameters of a person, one can predict his reaction to certain combinations of colors. The technique was developed in the second half of the 90s by a group of French, Belgian, German and Russian researchers under the leadership of Nicolas Corot, a well-known specialist in the field of branding (and the main expert of our rubric). The commercial color correction method uses not only situational color perception depending on the current tasks and targets of the respondents, as Flingingaus, Erbshloh and Luscher did, but also takes into account age, sex, religious-psychological and ethnological aspects of unconscious and rationalized color perception.\n" +
    "\n" +
    " \n" +
    "\n" +
    "Using the method, you can set the parameters and characteristics of the target audience and get the main colors of the impact. Conversely, with certain color solutions, it is possible to identify a group of consumers who most adequately respond to the specified colors. Now it is already possible to “declassify” some of the recipes for the success of the Danone group, including the total use of commercial color correction in the period of the formation of the brands “Activia”, “Danissimo” and “Vitalinia” in Russia. First, Danone marketers discovered a niche of active young people who spend most of the day in the office. At that time, no one had yet offered their services to allay a slight feeling of hunger around 11 o'clock in the afternoon. The Danissimo brand rushed into this niche, flaunting it with bottles and jars of blue-red color.\n" +
    "\n" +
    "Why they chose this particular palette, explains Nicholas Koro, who participated in the development of most Danon brands: “Blue and red are most positively perceived by the two target groups - energetic adolescents of the puberty period and stressful young people. Moreover, the hormonal boom for the human body is exactly the same shake-up as the conflict with the outside world in the young rebel and career work stress for the young specialist. ” As a result, the color gamut largely provided the product with a jet - not an entry, but a take-off - to the market.\n" +
    "\n" +
    " \n" +
    "\n" +
    "Nicholas Koro gave another example, when a ready-made color solution a priori refers to a specific target audience. The top management of the Adamas jewelry store network some time ago decided to audit its Central Asia - to clearly define its composition. What was planned for a number of field marketing research. At that time, Adamas did not change the color concept for more than four years - gold on the malachite background, and, according to Koro, “it was already absolutely clear that Adamas had a formed audience that responded adequately to the company’s bicolor. The composition of this target group was calculated by color correction. I made a bet with the company's directorate that the results of their quantitative research will coincide with the results of a qualitative analysis of the colors of the brand, which we conducted in 12 hours. Two weeks later, when Adamas completed its research, we compared our results and they turned out to be identical: working housewives of average incomes from 30 to 50 years old, whose enthusiasm is aimed at recognizing themselves, both in the eyes of others and in their own. I should add that the work of Adamas was supervised by Julia Nalivkina - known for her impartiality and sincere faith in quantitative marketing. ”\n" +
    "\n" +
    " \n" +
    "\n" +
    "An error in color positioning can be catastrophic." +
    "\n" +
    " \n" +
    "\n" +
    "The success of a new brand or product to a very large extent depends on how the consumer perceives them at the level of feelings, and visually - above all. The predictability of this reaction, in fact, ensures future results. The color decision of a TM is just as important as the strong wave of attention it will arouse in your target audience. If you know how the social perception of color perception works, you will not allow a fatal error in the choice of colors for the brand. If the color positioning is chosen incorrectly, it will be difficult for the company to compensate for this mistake.\n" +
    "\n" +
    " \n" +
    "\n" +
    "A typical mistake: the company's palette does not match the price niche in which the company has come. The same color representatives of the economy segment and premium class are perceived differently! What seems poor for some people is empty, for others it is status - the color against which they are individual. Premium colors include white, black and gray (note that most boutiques are not beyond the scope of this color triangle). If in the same palette to issue, say, a grocery retail network of the lower and middle price segment, many consumers simply will not notice it, they will not perceive it as a grocery store. According to Corot, one of the most literate and successful examples of color restyling in online grocery stores is the example of the ABC of Taste. Gray (the level of emotion characteristic of the corporate perception of a business style) in combination with salad and white gives a clear impulse for a business-oriented audience - “here are fresh and worthy products.” As a result, ABC of Taste returned a premium audience, which obviously left this network a couple of years ago.\n" +
    "\n" +
    " \n" +
    "\n" +
    "On the contrary, misunderstanding of the audience to which the colors are addressed can lead to failure. Nicholas Koro commented on one of the color positioning errors as follows: “I was very surprised by the recent rebranding of one insurance company, which, out of the crazy chaos of bubbles pointed at each other, turned into an even more incomprehensible and absolutely unnecessary for the insurance business context: a purple die, where lettuce is derived round-font name. Purple and salad - these are incredibly sensual colors! Who is it made for? There is no such a deliberately sensual audience, which would be fixated on the insurance business. On the contrary, such an audience, in principle, does not tend to insure. It is not clear why this solid and serious company with a good, good name moved from one gross error to another. ”\n" +
    "\n" +
    " \n" +
    "\n" +
    "Colors-aggressors, lucky and ladies\n" +
    "\n" +
    "Games with color are relevant in show business, where, in essence, the same tasks are solved as in the store - to realize a product, or, more precisely, an image of a product. In show business, quality marketers are very active. With the help of color correction, they create the image of the performer, causing the most appropriate reactions from the consumer, in accordance with the image characteristic of the artist. An example is the absolutely competent color positioning of the singer Valeria. Two years ago, after a story with a divorce and a new love, she needed to create an absolutely idealized romantic image under the conditional name \"The one that found her happiness.\" It was created by a combination of certain shades of pink and blue, found by the advertising agency Art-Com. It was this bicolor that turned out to be consonant with the expectations of the public, who closely followed the peripeteias of Valeria’s private life.\n" +
    "\n" +
    " \n" +
    "\n" +
    "For situations where you need to urgently draw attention to something new, there is only red. On the waves of perception red color through the lens of the eye first comes without distortion. Red personifies not only aggression, but also passion, activity. It effectively works as an instant communicator, but is suitable only for short-term actions, for “stuffing” goods into the minds of consumers. A prolonged attack of red can easily bring a person to a state of overexcitement, even hysteria. No wonder all totalitarian regimes always use an array of red.\n" +
    "\n" +
    " \n" +
    "\n" +
    "There are so-called compensatory colors that provide relief of emotional tension - separate for each sex and age group. So, lilac is compensatory for all women from puberty to menopause. An array of this color has become the main selling element of the Vitalinia brand. As Nicolas Koro says, “the task was to create a line of dairy products for women. If the product directly, verbally appealed to the female audience, it is unlikely to bring results. Only a certain shade of lilac could solve this problem - by default. Does this mean that all women like this color? Not. Moreover, business-oriented women do not accept it in their wardrobe at all. But the external manifestation of loyalty to color and the internal perception of color, the need for it are different things, ”says Koro. It is for this reason that the “fashionable colors”, which are the hit of the season, do not affect the subconscious choice of the consumer.";
// ---------------------------------------------------------------------- News 4 -----------------------------------------------------------------------

var itemTitle_4="Girls first job.";
var NCNTNT_4="They chose for a long time and finally made their first order in Israel.";
