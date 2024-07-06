$('h1').addClass('big-title margin-50');
$('h1').removeClass('big-title');
$('h1').css("color", "red");

$('h1').click(function() {
    $('h1').css('color', 'green');
});

for(var i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector('h1').style.color = 'purple';
    });
}

$("button").click(function() {
    $("h1").css("color", "green");
});


$("input").keypress(function(event){
    $("h1").text(event.key);
    console.log(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");

$("h1").append("<button>New</button>");

$('h1').click(function() {
    $('h1').animate({opacity: 0.5});
});

