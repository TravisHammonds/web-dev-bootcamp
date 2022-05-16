
$("input").keypress(function(event) {
    var currentKey = event.key;
    $("h1").text(currentKey);
});
