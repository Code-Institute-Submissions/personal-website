# Tom Jones Personal Portfolio | First Milestone Project
**Stream One Project: User-Centric Frontend Development - Code Institute**

This is my Portfolio. I plan to use this site as a platform to showcase me and my current projects but also give an overview of my current skillset and experience, I will present this website to prospective Employers, Recruiters and Collaborators. 
Currently this page only shows a couple lessons i have undertaken so far and some sample repositories which i plan to replace with my own projects.

## Demo
Click [HERE](https://kushberrycream.github.io/personal-website/) to view my Live Portfolio.

## UX
### User Stories

| User | User Stories |
| ------ | ------ |
| Employers | As an Employer I want to be able to access recent projects and also to be able to see a CV to get a more in depth view. |
| Recruiters | As a Recruiter I want to be able to download a CV to be able to share with prospective Employers, but i would also like to see what work has been undertaken before so that I can asses who to send CV's to. |
| Collaborators | As a Collaborator I want to see recent and noteworthy Projects that I can easily view code to see if we would be a good match to collaborate. |

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Wireframes
[Landing Page](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Landing%20.png)

[About Me Section](https://github.com/kushberrycream/personal-website/blob/master/wireframes/About%20Me.png)

[Portfolio Page](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Portfolio.png)

[Contact Modal](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Contact%20Modal.png)

[Contact Js Fallback](https://github.com/kushberrycream/personal-website/blob/master/wireframes/Contact%20js%20Fallback.png)

## Features

Most of the Feature within my Portfolio are using the Bootstrap CSS framework, I have used a few components which use jQuery, Popper.js and bootstraps own plugins.
 
### Existing Features
- Navbar - I have used one of bootstraps standard Navbars and then edited the code to fit my pages style, the Navbar will only be available on the very top of the landing page and other pages but not my about me as you will still be able to reach everywhere on my site without the use of this. On smaller viewports the navbar uses bootstraps collapse plugin. 
- Modal - Once again i have used a standard bootstrap modal and used it as a contact form sidebar. (On smaller device it is full screen) It also has a fall back for people who have Javascript disabled.
- Contact Form - I have used the contact form inside the modal and also on a js fallback page, I want people using my page to contact me quickly and easily.
- Tooltips - I have used Tooltips on my sidebar buttons to give some people a description of what the button does. This uses the  Popper.js posistioning engine to help with the posistioning of the tooltips. 

### Features Left to Implement
- I need to be able to have my contact form send directly from the form instead of using the mailto: link as this defeats the object of the form.
- I plan to actually replace sample portfolio projects with my own projects instead of other github repositories i have found. 

## Technologies Used

Here is a list of the Technologies i have used throughout my Portfolio.

- [Balsamiq Mockups 3](https://balsamiq.com/)
    - I have used Balsamiq to create my wireframes.
- [HTML5](https://www.w3.org/html/)
    - I use HTML to create the basic structure of my portfolio.
- [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
    - CSS give my site its look and style 
- [Bootstrap 4](https://getbootstrap.com/)
    - I have implimented the Bootstrap CSS framework to create a responsive mobile-first website, I have used multiple components and
    edited them to fit my needs.
- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used for all of my icons.

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
During my Testing i noticed on real devices things may not display as Dev Tools may let you believe. As on safari on iOS the address bar will push the page down and the bookmark bar will hide any content until you scroll. I have accounted for this but it could be improved apon. 

## Deployment
I have currently deployed my Portfolio on GitHub Pages using the master branch. The site will update on all new commits to the master branch. I use `git commit` to commit to the local repository and the use `git push` to send ant changed to the master branch. 

You can run this repository locally by pasting `git clone https://github.com/kushberrycream/personal-website.git` into your terminal. 

## Credits

### Content
All the content has been written by myself, except the CV which was created using [Kickresume](https://www.kickresume.com/en/). 

### Media
- The main background came from [Unsplash](https://unsplash.com/photos/b18TRXc8UPQ)

### Acknowledgements

- I recieved inspiration through google searches for personal websites here are some of them:
    - [The Muse](https://www.themuse.com/advice/the-35-best-personal-websites-weve-ever-seen)
    - [Free Code Camp](https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/)
    - [Mockplus](https://www.mockplus.com/blog/post/web-developer-portfolio)

