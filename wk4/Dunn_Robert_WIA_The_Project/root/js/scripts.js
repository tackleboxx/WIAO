$( "#clickme" ).click(function() {
$( "#bonusbox" ).animate({
width: [ "toggle", "swing" ],
height: [ "toggle", "swing" ],
opacity: "toggle"
}, 3000, "linear", function() {
$( this ).after( "" );
});
});