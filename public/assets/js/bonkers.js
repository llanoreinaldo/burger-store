$('li>button').click(function () {
    //console.log(this);
    var req = {
        id: $(this).attr("id")
    };
    $.post('/api/devoured', req, function (data) {
        location.reload();
    });
});
