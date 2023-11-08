
# This is a demo of how to use the scroll to top functionality with bslib
# Note that this requires slightly more complicated JavaScript as document.body.scrollTop will always be 0
# with bslib navbar layouts.

library(shiny)
library(bslib)

ui <- 
  page_navbar(
    title = "Scroll to Top demo",
    theme = bs_theme(version = 5, 
                     bootswatch = "minty"),
    header = tagList(
      tags$link(rel = "stylesheet", type="text/css", href="stylesheet.css"),
      tags$script(type = "text/javascript", src = "scrollPageNavbar.js"),
      tags$button(id = "scroll-to-top-button",
                  "^")
    ),
    nav_panel("Tab 1",
              page_sidebar(
                fillable = FALSE,
                sidebar = sidebar(
                  p("This is some text")
                ),
                card(
                  title = "Card 1",
                  height = "1400px",
                  "This is a loooooong card"
                )
              )
    ),
    nav_panel("Tab 2",
              card(
                title = "Card 2",
                min_height = "1400px",
                "This is a loooooong card"
              ),
              card(
                title = "Card 3",
                min_height = "1400px",
                "This is another loooooong card"
              )
    )
  )

server <- function(input, output, session) {
  
}

shinyApp(ui, server)


