function dashboard() {
    $.ajax({
        url: '/dashboard',
        data: {
            format: "json"
        }, 
        error: function() {
            $("#info").html("<p>An error has occurred</p>");
        },
        dataType: "json",
        success: function(data) {
            $("#result").html(data);
        }
    });
}