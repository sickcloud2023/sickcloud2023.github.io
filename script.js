$(document).ready(function() {
    $('#exchangeForm').submit(function(event) {
        event.preventDefault();

        var userId = $('#userId').val();
        var serialNumber = $('#serialNumber').val();

        $.ajax({
            type: "POST",
            url: "http://sickgametest.com/SerialNumber/ExchangeOneOnOneById",
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
