# Tom Jones Personal Portfolio - First Milestone Project
**Stream One Project: User-Centric Frontend Development - Code Institute**

This is my Portfolio. I plan to use this site as a platform to showcase me and my current projects but also give an overview of my current skillset and experience, I will present this website to prospective Employers, Recruiters and Collaborators. 
Currently this page only shows a couple lessons i have undertaken so far and some sample repositories which i plan to replace with my own projects. I plan to replace the majority of the content as i begin to progess through the course.

## Demo
Click [HERE](https://kushberrycream.github.io/personal-website/) to view my Live Portfolio.

## Table of contents
   * [Demo](#demo)
   * [UX](#ux)
     * [Strategy](#strategy)
     * [Scope](#scope)
     * [Structure](#structure)
     * [Skeleton](#skeleton)
     * [Surface](#surface)
   * [Features](#features)
     * [Existing Features](#existing-features)
     * [Features Left to Implement](#features-left-to-implement)
   * [Technologies Used](#technologies-used)
   * [Testing](#testing)
   * [Deployment](#deployment)
   * [Credits](#credits)
     * [Content](#content)
     * [Media](#media)
     * [Acknowledgments](#acknowledgements)

## UX  
### Strategy
The main goal of my portfolio will be to give all the essential information in a ledgable and easily accesible manner to all users. I aim to keep the design minimilstic to give a good user experience.

### Scope
| User | User Stories |
| ------ | ------ |
| Employers | As an Employer I want to be able to access recent projects and also to be able to see a CV to get a more in depth view. |
| Recruiters | As a Recruiter I want to be able to download a CV to be able to share with prospective Employers, but i would also like to see what work has been undertaken before so that I can asses who to send CV's to. |
| Collaborators | As a Collaborator I want to see recent and noteworthy Projects that I can easily view code to see if we would be a good match to collaborate. |

I want to give all users a quick overview of myself, my skills and experiences.

Employers are able to easily obtain an up to date CV from multiple locations on the site. They can see any recent projects on my portfolio page if they like what they see they can contact me via the contact form.

Recruiters can download or view my CV from multiple locations and they can also contact me via the contact form if they need any more info.

Collaborators can quickly view any Current and past projects, they can also link to my main github account and any more i may add in the future.

### Structure

-

### Skeleton
[Landing Page](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Landing%20.png)

[About Me Section](https://github.com/kushberrycream/personal-website/blob/master/wireframes/About%20Me.png)

[Portfolio Page](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Portfolio.png)

[Contact Modal](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Contact%20Modal.png)

[Contact Js Fallback](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Contact%20js%20Fallback.png)

### Surface

I wanted my site to have a minimilistic feel, using one background image on each page to create consistency throughout the portfolio. I have also used the background to select the colour palette for my portfolio, I used the colours for my fonts, icons, etc.

<p align="right">
  <a href="#tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>

## Features

Most of the Feature within my Portfolio are using the Bootstrap CSS framework, I have used a few components which use jQuery, Popper.js and bootstraps own plugins.
 
### Existing Features
- [x] Navbar - I have used one of bootstraps standard Navbars and then edited the code to fit my pages style, the Navbar will only be available on the very top of the landing page and other pages but not my about me as you will still be able to reach everywhere on my site without the use of this. On smaller viewports the navbar uses bootstraps collapse plugin. 
- [x] Modal - Once again i have used a standard bootstrap modal and used it as a contact form sidebar. (On smaller device it is full screen) It also has a fall back for people who have Javascript disabled.
- [x] Contact Form - I have used the contact form inside the modal and also on a js fallback page, I want people using my page to contact me quickly and easily.

### Features Left to Implement
- [ ] I need to be able to have my contact form send directly from the form instead of using the mailto: link as this defeats the object of the form.
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
    - CSS gives my site its look and style 
- [Bootstrap 4](https://getbootstrap.com/)
    - I have implimented the Bootstrap CSS framework to create a responsive mobile-first website, I have used multiple standard components and
    edited them to fit my needs.
- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used for all of my icons.
    
<p align="right">
  <a href="#tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

My Website is responsive on all screen sizes and browsers the only issue I could find was Mozilla not displaying `backdrop-filter`. I don't believe this 
is an issue as the blur is only in place for mobile devices that need to use the collapsible Navbar.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

During my Testing I noticed on real devices things may not display as Dev Tools may let you believe. As on safari on iOS the address bar will push the page down and the bookmark bar will hide any content until you scroll. I have accounted for this but it could be improved apon.

<p align="right">
  <a href="#tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p> 

## Deployment
I have currently deployed my Portfolio on GitHub Pages using the master branch. It can be viewed on https://kushberrycream.github.io/personal-website/, this will eventually be accesible from my own domain. 
The site will update on all new commits to the master branch. I use `git commit` to commit to the local repository and the use `git push` to send any changed to the master branch. 

You can run this repository locally by pasting `git clone https://github.com/kushberrycream/personal-website.git` into your terminal.

<p align="right">
  <a href="#tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
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
- I have used Andre Firchow's CSS percentage circles [here](http://circle.firchow.net/). I downloaded the files and used the stylesheet provided, 
i also put my own CSS within the file so i could add more colours as i needed more than was actually provided.
- The timeline was sourced from [Best jQuery](https://bestjquery.com/tutorial/timeline/demo50/)
- Colour palette chosen with the help of [Canva](https://www.canva.com/colors/color-palette-generator/)

<p align="right">
  <a href="#tom-jones-personal-portfolio---first-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>
