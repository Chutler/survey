$(document).ready(function() {
  console.log("ready")
  $("#survey").submit(function(event) {

    alert('Got to beginning of form submit!');

    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var flavorInput = $("input:radio[name=flavor]:checked").val();
    var dobInput = $("input#born").val();
    var beverage = $("#beverage").val();
    var favoriteColorInput = $("input#color").val();

    $(".firstName").append(firstNameInput);
    $(".lastName").append(lastNameInput);
    $(".flavor").append(flavorInput);
    $(".dob").append(dobInput);
    $(".beverage").append(beverage);
    $(".color").append(favoriteColorInput);

    alert("Maybe?")

    $("#response").show();

    event.preventDefault();

  });

});
