// Modfied from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // When the user scrolls down 20px from the top of the document's body, show the button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scroll-to-top-button').style.display = "block";
  } else {
    document.getElementById('scroll-to-top-button').style.display = "none";
  }
};

// Handle the click event on the scroll-to-top button
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
};