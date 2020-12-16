
var photos = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-unhealthiest-starbucks-drinks-1572380007.jpg?crop=0.495xw:0.990xh;0,0&resize=640:*", 
              
"https://cdn.vox-cdn.com/thumbor/D5NMauNexZS1flyGtkxinL1nQD8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16115159/994683918_e1535571642476.jpg",
              
"https://www.gannett-cdn.com/-mm-/cd80755aa7c9e972af286b14ba470cf74ee64cb0/c=256-0-1792-2048/local/-/media/2018/02/21/USATODAY/USATODAY/636548171902334532-AP-Starbucks-Unicorn-Drink.jpg", "https://starbuckssecretmenu.net/wp-content/uploads/2019/04/Starbucks-Rainbow-Refresher-2.jpg"
             
             ];

photos.forEach(function(item,photo){

$(".drinks").append("<img src=" + photos[photo] + ">");
});





$("button").click(function() {
    var inputValue = $(".inputLink").val();
    
    $(".inputLink").val("");
    
    $("body").append("<img src=" + inputValue + ">");

    photos.push("");

$("drinks").empty();




});