# Tom Jones Personal Portfolio - First Milestone Project
**Stream One Project: User-Centric Frontend Development - Code Institute**

## Introduction
This is my Portfolio. I plan to use this site as a platform to showcase me and my current projects but also give an overview of my current skillset and experience, I will present this website to prospective Employers, Recruiters and Collaborators. 
Currently this page only shows a couple lessons I have undertaken so far and some sample repositories which i plan to replace with my own projects. I plan to replace the majority of the content as i begin to progess through the course.

## Demo
Click the image below to view my Live Portfolio.

<a href="https://kushberrycream.github.io/personal-website/">
  <img alt="am i responsive" src="https://github.com/kushberrycream/personal-website/blob/master/assets/images/amiresponsive.png?raw=true">
</a>

## Contents
- [Introduction](#tom-jones-personal-portfolio---first-milestone-project)
- [Demo](#demo)
- [UX](#ux)
    * [Strategy](#strategy)
    * [Scope](#scope)
    * [Structure](#structure)
    * [Skeleton](#skeleton)
    * [Surface](#surface)
- [Features](#features)
    * [Existing Features](#existing-features)
    * [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used")
- [Testing](#testing)
- [Deployment](#deployment)
    * [Deployment on GitHub Pages](#deployment-on-github-pages)
    * [Cloning the Repository](#cloning-the-repository)
- [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
    * [Acknowledgments](#acknowledgements)

## UX  
### Strategy
The main goal of my portfolio is to give all the essential information in a ledgable and easily accesible manner to all users. I have aimed to keep the design minimilstic to give a good user experience.

### Scope
| User | User Stories |
| ------ | ------ |
| Employers | As an Employer I want to be able to access recent projects and also to be able to see a CV to get a more in depth view. |
| Recruiters | As a Recruiter I want to be able to download a CV to be able to share with prospective Employers, but i would also like to see what work has been undertaken before so that I can asses who to send CV's to. |
| Collaborators | As a Collaborator I want to be able see recent and noteworthy Projects that I can easily view code to see if we would be a good match to collaborate. |

I wanted to give all users a quick overview of myself, my skills and experiences.

Employers are able to easily obtain an up to date CV from multiple locations on the site. They can see any recent projects on my portfolio page if they like what they see they can contact me via the contact form.

Recruiters can download or view my CV from multiple locations and they can also contact me via the contact form if they need any more info.

Collaborators can quickly view any Current and past projects, they can also link to my main github account and any more i may add in the future.

### Structure

I have created a single page site so that navigation is simple, the only reason you may have to divert from the main page is to use the Contact form if Javascript has been disabled. 
I have multiple call to actions to open my contact form, CV and social links so no one should struggle to locate these . The navigation is `fixed` on the top of the viewport throughout the page 
this way the users can easily skip between sections. A contact form will be accessed via a modal which will open up as a full sidebar once this is opened the main page will be unscrollable until the page is closed.
I also wanted to give a clear summary of all the current work I have done, to do this I have used bootstraps grid system and cards to responsively display a screenshot of the project, a short summary,
icon of any technologies used, the Github Repo and finally a live Demo.  

### Skeleton
[Landing Page](https://github.com/kushberrycream/personal-website/blob/master/wireframes/landing.png)

[About, Skills, History and Portfolio Page](https://github.com/kushberrycream/personal-website/blob/master/wireframes/singlepage-portfolio.png)

[Contact Modal](https://github.com/kushberrycream/personal-website/blob/master/wireframes/contact-modal.png)

[Contact Js Fallback](https://github.com/kushberrycream/personal-website/blob/master/wireframes/contact-js-fallback.png)

### Surface

I wanted my site to have a minimilistic feel, using one background image on each page to create consistency throughout the portfolio. I have also used the background to select the colour palette for my portfolio, I used the colours for my fonts, icons, etc.

<p align="right">
  <a href="#tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>

## Features

Most of the Features within my Portfolio are using the Bootstrap Front-end Component Libary, I have used a few components which use jQuery and bootstraps own plugins.
 
### Existing Features
- [x] Navbar - I have used one of bootstraps standard Navbars and then edited the code to fit my pages style. I made a `<noscript>` element so i could add some styling to make the collapsed menu display on devices with Javascript disabled. 
  I have also used javascript to change the color of the navbar when scrolling, One the user has scrolled passed the landing page the navbar will change from transparent to white, if javascript is disabled it will be white perminantly.
- [x] Modal - Once again i have used a standard bootstrap modal and used it as a contact form sidebar. (On smaller device it is full screen) It also has a fall back for people who have Javascript disabled.
- [x] Contact Form - I have used the contact form inside the modal and also on a js fallback page, I want people using my page to contact me quickly and easily.
- [x] Cards - I have used bootstraps cards to display each of my projects, I feel it gives them a little section of their own.

### Features Left to Implement

- [ ] I plan to actually replace sample portfolio projects with my own projects instead of other github repositories i have found.

<p align="right">
  <a href="#tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>

## Technologies Used

Here is a list of the Technologies i have used throughout my Portfolio.

- [Balsamiq Mockups 3](https://balsamiq.com/)
    - I have used Balsamiq to create my wireframes.
- [HTML5](https://www.w3.org/html/)
    - I use HTML to create the basic structure of my portfolio.
- [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
    - CSS gives my site its look and style.
- [JavaScript](https://www.javascript.com/)
    - JavaScript Improves the User Experience on my site.
- [Bootstrap 4](https://getbootstrap.com/)
    - I have implimented the Bootstrap Front-end component libary to create a responsive mobile-first website, I have used multiple standard components and
    edited them to fit my needs. I have also utilised jQuery and Bootstraps own Javascript plugins on some of the components.
- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used for all of my icons.
- [Formspree](https://formspree.io/)
    - I was able to use Formspree to deal with the backend side of my contact form. I Signed up for a free account, set up a form, then used the attribute `action` 
    and my formspree URL to direct the form through Formspree. I used Formspree as this was a good option for my current skillset.
    
<p align="right">
  <a href="tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>

## Testing

I have tested my portfolio using Chromes developer tools, I have tested over all the available viewport sizes and mobile devices including the landscape orientation and all display correctly and respond as expected. I have also tested my live portfolio on Chrome, Firefox, Opera and Edge on top of this I have also tested on my own iPhone and a Samsung device I had access to make sure the portfolio does what the developer tools is saying it is doing. All links work as expected allowing the user to navigate easily, the navbar link for my cv and the sidebar link opens the cv in a new window but the link at the bottom downloads directly to the users device. The contact form works and sends the form via formspree and will not send unless the fields are entered correctly. To make sure the page works without JavaScript I turned it off and tested the page again.   

1. CV
    1. I clicked the Navbar CV link.
    2. A CV opens in a new window successfully.
    3. I Repeated on the Sidebar link and with the same outcome as above.
    4. Next I clicked the footer CV link and this successfully downloaded the CV to my Documents.

2. Contact form:
    1. I went to the "Say Hi" link to open the Contact form.
    2. I tried to submit the empty form and error message about the required fields appears. 
    3. I tried to submit the form with an diffrent invalid email addresses and the relevant error message appears.
    4. I then submitted the form with all inputs valid and it then took me to the Formspree form submission page with a reCaptcha validator.
    5. Once the reCaptcha is passed I selected the back to original webpage link to go back to my portfolio.
    6. I then repeated the process on each Contact form link. 

### Bugs
- When closing the modal i noticed it was actually taking up the whole viewport which meant the animation when fading out was not displaying in the correct position. 
  This happened because the modal was set to 100% the width of the viewport and the modal dialog was set to 60%. I corrected this by swapping the widths around and altering the positioning.
- Also the Modal removes the scrollbar which moves the page slightly I am unable to stop this due to the modal hiding the the scrollbar.
- On real iOS devices I noticed a bug with the background, The background will display across the whole contents instead of the viewport this is obviously not desired as the background display incorrectly. 
  At this moment I have not come up with a fix.
- My Website is responsive on all screen sizes and browsers the only issue I could find was Mozilla not displaying `backdrop-filter`. I don't believe this 
is an issue as the blur is only in place for mobile devices that need to use the collapsible Navbar. 

<p align="right">
  <a href="tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p> 

## Deployment
I have currently deployed my Portfolio on GitHub Pages using the master branch. It can be viewed on https://kushberrycream.github.io/personal-website/, this will eventually be accesible from my own domain. 
The site will update on all new commits to the master branch. I use `git commit` to commit to the local repository and the use `git push` to send any changed to the master branch. 

### Deployment on GitHub Pages
1. Firstly I went to my setting in my Repository.

2. I then scrolled down to "GitHub Pages" 

3. Using the source menu I then selected the master branch.

### Cloning the Repository
To run this repository locally:

1. Click "Clone or Download" at the top of this repository 

2. Copy the URL to your clipboard. 

3. Open up Terminal and select the location in which you wish to clone this      directory 

4. Then copy `git clone https://github.com/kushberrycream/personal-website.git` 

5. Press enter and you will have succesfully cloned this Repository.

<p align="right">
  <a href="tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p> 

## Credits

### Content
All the content has been written by myself, except the CV which was created using [Kickresume](https://www.kickresume.com/en/).

### Media
- The main background came from [Unsplash](https://unsplash.com/photos/b18TRXc8UPQ)
- Image of Tom Jones found on [Pintrest](https://www.pinterest.com/pin/402368547935136970/)

### Acknowledgements

- I recieved inspiration through google searches for personal websites, here are some of them:
    - [The Muse](https://www.themuse.com/advice/the-35-best-personal-websites-weve-ever-seen)
    - [Free Code Camp](https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/)
    - [Mockplus](https://www.mockplus.com/blog/post/web-developer-portfolio)
- I have used Andre Firchow's CSS percentage circles [here](http://circle.firchow.net/). As a CDN was not available i had to download the stylesheet named `circle.css` 
  I needed to add more color styles as I had a very small selection, Any code i have edited I have moved into my own CSS file `style.css` marked with a comment 
  to let people know where the original code came from.
- The timeline was sourced from [Best jQuery](https://bestjquery.com/tutorial/timeline/demo50/)
- Colour palette chosen with the help of [Canva](https://www.canva.com/colors/color-palette-generator/)
- For the scrollbar styling I used this tutorial from [W3schools](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)

<p align="right">
  <a href="tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>
