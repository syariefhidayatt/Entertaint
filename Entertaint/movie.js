$(function(){
  $('.cardsuper').css('background-color','white');
  $(".titlehead").text("New Trailer");
  $(".spothead").text("New Album");
  $(".spottext").css('color','white');
  $(".spotback").css('background-color','black');
  $(".spotb").css('border','black');
  
  $("#bts2").click(function(){
     $("#naver").slideToggle();
     $("#clicklabel").text(function(i, text){
      return text === "Click for BTS Vlive videos" ? "Click to close" : "Click for BTS Vlive videos";
     })
  });
});    