
# This is a demo of how to use the scroll to top functionality with
# a most basic Shiny app, using standard Shiny functionality only

library(shiny)

ui <- fluidPage(
  tags$link(rel = "stylesheet", type="text/css", href="stylesheet.css"),
  tags$script(type = "text/javascript", src = "scrollPage.js"),
  tags$button(id = "scroll-to-top-button",
              onclick = "topFunction()",
              "^"),
  div(
    style = "height: 2000px; width: 100%; overflow: scroll;",
    h1("Looooong content"),
    p("Looooong content"),
  )
)

server <- function(input, output) {
  
}

shinyApp(ui, server)
