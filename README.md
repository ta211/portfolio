# An's Bookfolio

A portfolio website for myself, hosted on [firebase](https://ansbookfolio.web.app).

## 1. Video walkthrough of the site

https://youtu.be/4LMTBxnAnBQ

## 2. Prototyping

See the initial [Figma Prototype](https://www.figma.com/file/3LDRndSqPlcZ7LEfT98WEY/Portfolio?node-id=101%3A252) here. 

## 3. Description

**The purpose** of this interactive online portfolio is to advertise my AI and HCI skills.

**It contains** my self-intro, a summary of my educational background, projects I have participated in, my contact information, as well as simple interactive games I have created for fun. 

**The interesting and engaging parts of the website** is that it's themed like a book, with the home page designed like a book cover and the rest like books pages. Visitors will be able to flip through the pages by clicking on bookmark-like navigation button on both sides of the open book. I hope the traditional design of a paper book would build a reader image for myself and also show off my web develpment skills. 

**My target audience** are people interested in my past experience. The major audience are certainly my future employers looking through my resume, but the website could also be used to host interesting games that I am developing.

**For accesssibility concerns,** every interactive component on the website are tabbable and shows a highlight border upon focus. Therefore, the whole website could be navigated with a keyboard, needing no mouse or touchpad. Every button, image, and link on the website all have their own alt text or ARIA description. A systematic overview by [the WAVE extention](https://wave.webaim.org/) shows it is free of accessibility errors. 

## 4. Using the website

### For my PC users...

You are now on the **Cover** of the book. Click the **button with ripple animation** to start your journey.

After a book flip, you see yourself on the **About Me** page. ~~There is supposed to be a sliding puzzle game showing my photo, but I haven't implemented it.~~ You can now see the bookmarks on the two sides of the book. Like a paper book, bookmarks for previous pages are on your left, and those for future pages are on your right. To avoid overlapping, the bookmarks only shows an icon in default state, but you can hover on them to read the page title.

Now, click on the **Education** bookmark. You can now see an interactive contents list on the left page, showing my education experience. Clicking on one of my majors will expand a list of related courses on the right page. The course titles are interactive as well - you can click on them to expand my review for the course.

The **Projects** page following it is formatted similarly, except that on the right page is an image and paragraphs of description for the project. Clicking on the images will take you to the final product or paper of this project.

~~You are supposed to be shown with a Contact Me form on the **Contact** page, which I haven't gotten enough time to implement yet.~~

And the **Fun** page is a display galary for some interactive games and websites I have developed!

### And for my mobile users...

Fortunately, the website is also functional for phone users! Now instead of a book with a vertical spine in the center, it is a steno book with a horizontal spine in the top! 

Click on the circular icon on the top left of the page to expand a navigation menu, including the same sections as the PC view (Cover, About me, Education, Projects, Contact, Fun). Click on one of them to be taken to the corresponding page. ~~Unfortunately, I haven't implemented the vertical flipping effect yet.~~ 

The left and right pages are now displayed on the same page, with the contens on the left page on the top and the rest at the bottom. 

## 5. External Libraries

The website was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and then deployed on Firebase.

**React** was chosen because I want a smooth transition upon state changes, such as the navigation through the **Education** and **Projects** pages. Another example of the smooth transition is the instant switching upon window resize between the Book view (PC) and the Notes view (Mobile), without even refreshing the page!\
The framework also allows me to create templates for repetitive components on the website by filling variables into HTML directly, which is very convenient for the create of the many pages of the website. 

To implement the Contact Me form function, we are planning to Simple Email Service (SES) API according to [this tutorial](https://www.freecodecamp.org/news/how-to-receive-emails-via-your-sites-contact-us-form-with-aws-ses-lambda-api-gateway/).

## 6. Changelog

### 2022/04/27 Iteration from HW7

The major update from iteration includes
* Adding the Cover page (as well as a way to navigate back to it).
* Adding the Mobile view 
    * A short paragraph with large text is added to the Cover page, instroducing the purpose of the website and instructing the users to click on the button to open the book. A ripple animation is also added to the button in case the users do not notice it.
    * Steno book with the left page on top and right page at bottom.
    * Navigation button that expands the menu on the top left of the page.

## 7. Major Challenges

* The main challenge is creating the animation of the flipping effects. I am not very good at CSS animations so I read through a few tutorial about creating animations with CSS. I am quite happy with the current effect with both page closing then opening again to reveal the desired page.
* Another challenge is the mobile view. Thanks to Julia who pointed out the Book view is not compatible with mobile phones. While he navigation menu in the mobile view now looks quite different from bookmarks, it is the best resolution I found among existing navigation bars for phone screens. 
* The book view also brings the problem that its content does not follow a traditional webpage, with headers, main, and footers. To make the website more accessible for screen reader users, I added invisible headers that are not displayed but can still be readed by screen readers. 
* The tabbing order of the page is also a little tricky because tabs are orders by z-index. (This means if you are on the 4th page, the tab order is: 1->2->3->7->6->5.) I reordered them with the page numbers.

## Appendix: To run the webiste
### React scripts

First, clone the respository to your local computer.  

#### `npm start`

Will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
This step is mandatory to deploy the website.

### Firebase deployment

#### `firebase init`

To create the project on Firebase. Note that instead of using the `public` folder, we should use `build` for deployment.

#### `firebase deploy`

Will deploy the website to your firebase URL!

For more information, see here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### if `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
