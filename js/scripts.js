$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    alert('Got to beginning of form submit!');
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    // Questionable
    var flavorInput = $("input:radio[name=flavor]:checked").val();
    var dobInput = $("input#born").val();
    var beverageInput = $("input#beverage").val();
    var favoriteColorInput = $("input#color").val();

    $(".firstName").append(firstNameInput);
    $(".lastName").append(lastNameInput);
    // Questionable
    $(".flavor").append(flavorInput);
    $(".dob").append(dobInput);
    $(".beverage").append(beverageInput);
    $(".color").append(favoriteColorInput);
    alert("Maybe?")
    $("#response").show();

    event.preventDefault();

  });

});
