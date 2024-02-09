$(document).ready(function () {
    const amenity = [];
    $('input:checkbox').click(function () {
      if ($(this).is(":checked")) {
        amenity.push($(this).attr('data-name'));
      } else {
        const nameIndex = amenity.indexOf($(this).attr('data-name'));
        amenity.splice(nameIndex, 1);
      }
      $('.amenities h4').text(amenity.join(', '));
    });
    $.get("http://0.0.0.0:5001/api/v1/status/", data => {
      if (data.status == "OK") {
        $('DIV#api_status').addClass("available");
      } else {
        $('DIV#api_status').removeClass("available");
      }
    });
  });
