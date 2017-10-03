$( document ).ready(function() {

  $('.btn-delete').on('click', function(){
    $(this).closest(".card").remove();
  });
});
