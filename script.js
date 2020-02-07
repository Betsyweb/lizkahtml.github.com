$(document).ready(function() {
    var e = $('.item');
    for (var i = 0; i < 102; i++) {
        e.clone().insertAfter(e);
    }
});