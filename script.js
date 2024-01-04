$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var userId = urlParams.get('id');
    $('#userId').val(userId); 
    
    $('#exchangeForm').submit(function(event) {
        event.preventDefault();

        var userId = $('#userId').val();
        var serialNumber = $('#serialNumber').val();

        $.ajax({
            type: "POST",
            url: "https://gangstart.site/SerialNumber/ExchangeOneOnOneById",
            data: JSON.stringify({ "Id": userId, "serialNumber" : serialNumber }),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(response) {
                alert(response.message);
            },
            error: function(error) {
                alert(error.responseJSON.message);
            }
        });
    });
});
