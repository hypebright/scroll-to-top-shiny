// Modfied from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

document.addEventListener('DOMContentLoaded', function() {
  
  // Select the main elements with the class 'main' or 'tab-pane' once the DOM is loaded
  // 'main' is used for a sidebar layout
  // note that document.body.scrollTop cannot be used as the document body technically speaking does not scroll 
  // the scrollable elements, like the main page in a sidebar layout and tab panes, are in divs underneath
  const mainPages = document.querySelectorAll('.main, .tab-pane')

  mainPages.forEach(item => {
    item.addEventListener('scroll', event => {
      // Get the scroll position of each main page
      const scrollPosition = item.scrollTop;

      // Show or hide the scroll-to-top button based on scroll position
      if (scrollPosition > 20) {
        document.getElementById('scroll-to-top-button').style.display = 'block';
      } else {
        document.getElementById('scroll-to-top-button').style.display = 'none';
      }
    })
  })

  // Handle the click event on the scroll-to-top button
  document.getElementById('scroll-to-top-button').addEventListener('click', function() {
    // Loop through each mainPages element in the array
    mainPages.forEach(item => {
      if (item) {
        item.scrollTop = 0; // Scrolls each main page to the top
      }
    });
  });
  
});
