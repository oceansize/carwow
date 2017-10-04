$( document ).ready(function() {

  $('.btn--delete').click(function(e) {
    e.preventDefault();
    $(this).closest(".card").remove();
  });
});
