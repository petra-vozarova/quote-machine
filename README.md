# Random Quote-Machine

Source code can be accessed at [my GitHub repository](https://github.com/petra-vozarova/quote-machine),
or you can see deployed [Interactive Markdown application](https://petra-vozarova.github.io/quote-machine/) in action.

## Introduction

This web-application fetches random quotes and shows them to a user. Upon refreshing the page or pressing a button for another quote, a new random quote is displayed.

## Functionality

### Quote Box
the quote box is displayed at the top of the page and its dimensions change with the length of the quote. 

### New Quote
Upon pressing this button, the app fetches a new quote from the remote database.
It performs a random operation to select a quote from the database. It extracts the name of the author and displays them to a user.
Pressing this button also sets a new background image. The image is randomly selecting from the local list of images and accessed via url path.

### Tweeter Button
This function allows the user to re-tweet the current quote.

### Responsive Web Design
Dimensions of the app are automatically adjusted depending on the device's screen size to provide the best possible experience.


## Local Deployment

To run the application locally, please download the source code from: [GitHub Source Code](https://github.com/petra-vozarova/quote-machine)


###  Prerequisites

This application was written in Node.js using React, ReactDom and jQuery dependencies. In order to run the application you will need to have the npm package installed on your local device.

Before starting the app, please make sure that you are in the correct directory that ends with `\interactive-markdown`.

In the command line run the following code:
`npm start`

Now, the app should be up and running on your local port.
Please navigate to:
[local port 3000](http://localhost:3000/quote-machine)

#### Thank you for your time and interest in my Random Quote-Machine application. I hope that you enjoy it! 