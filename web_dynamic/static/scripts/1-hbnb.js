$(document).ready(function () {
    let amenity = [];
    $('input:checkbox').click(function () {
      if ($(this).is(":checked")) {
        amenity.push($(this).attr('data-name'));
      } else {
        const nameIndex = amenity.indexOf($(this).attr('data-name'));
        amenity.splice(nameIndex, 1);
      }
      $('.amenities h4').text(amenity.join(', '));
    });
  });
