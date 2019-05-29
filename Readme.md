# Place Finder - Second Milestone Project
[View my project](https://istvangercsak.github.io/PlaceFinder-SecondMilestoneProject/)

This website was made as my second Milestone project at [Code Institute](https://codeinstitute.net/).
The main goal was to create frontend-only website using the technologies that I learned in the second phase and heavily based on JavaScript and its jQuery library and also on Google API libraries.
The application itself help to us to find cities around the world and we get back a list of Museums, Restaurants and Bars around that area.
Moreover we can see those places position on the Map with Markers to find them and plan holiday more easily around that area.
The site is a single page website therefore very simple and easy to use and don't need any special technical skills to use it.  
After we give a destination there is only one click and we get back results. It is also easy to use with one hand when we check it on our phones.

## UX


This website is created for everybody who want to use it to find a good holiday destinations.
I used bright colors and background to ensure that this site has a user friendly and smooth surface.
The website is responsive so it can be used also on PC, Tablet or mobile device with the same functionality respectively.
- Input type:
    - type=search, so in this way it became more straightforward and user friendly.
- Font:
    - I use "Nunito" font, because it is easy and comfortable to read. I imported that font through the .css style file from the google fonts repository.
- Icons:
    - I use Font Awesome icon toolkit for the search filter section(Museum, Restaurant, Bar) and the social link icons.
- Hover effects:
    - Filter section
        - Museum
        - Restaurant
        - Bar
    - Social links
        - Github
        - LinkedIn
- Smooth movement to the map after choose the filter
- Favicon (Shortcut icon) with "pinpoint" sign on the page.

- Mockup

    - **Created with [Balsamiq Mockups 3](https://balsamiq.com/) that is a user interface design tool**

    - **Home page**:

![Home page](Mockup/HomePage.png)


## User Stories

### Responsive:

- As a user, I want to use the website with every resolution so that on different devices it will work with the same functionality.

### Field checking:

- As a user I want to look up after my next holiday destination so that I can type the city's name. 
- As a user I don't want to get back errors during the usage so that I get notify if I do something wrong.

### Effects:

- As a user I want to see the hover effect on the filter icons so that I can see there is interaction wih those elements.
- As a user I want to see the hover effect on the social links so that I can see there is interaction wih that element.

### Social links:

- As a user, I want click on the social links so that it can be open in a new tab.

## Features

With this page you can find a museums, restaurants and bars around that area that you give in the search field.
 
### Existing Features
- Field checking:
    - If the input search field is empty and I click on one of the filter button, I get alert JavaScript message about that empty field
- Icons:
    - To click on the Museum icon you get back museums around the given city
    - To click on the Restaurant icon you get back restaurants around the given city
    - To click on the Bar icon you get back bars around the given city 
- Button:    
    - If in the first round we find more than 20 places the "More result" button become active 
    - If there are no more result, the "More result" button become disabled
    - If there is no result around the area at all the "More result" button become disabled
- Hover effects:
    - Filter section
        - Museum
        - Restaurant
        - Bar
    - Social links
        - Github
        - LinkedIn
- Social links:
    - You can reach my social sites:
        - GitHub
        - LinkedIn
- Responsive:
    - The page is responsive, usable and looks good on the below resolution:
        - Phones less than 768px
        - Tablets 768px and Up
        - Desktops 992ox and Up
        - Large desktops 1200px and Up
        
## Technologies Used

- [HTML5](https://www.w3.org/html/)
    - Hypertext Markup Language is the standard markup language for creating web pages and web applications.
- [CSS3](https://www.w3.org/Style/CSS/)
    - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a 
    markup language like HTML.
- [BootStrap 4.3.1](https://getbootstrap.com/docs/3.3/)
    - Front End Framework for developing responsive websites.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - JavaScript is a lightweight interpreted or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages.
- [JQuery 3.4.1](https://jquery.com)
    - The project uses to simplify DOM manipulation.
- [Git](https://git-scm.com/)
    - Git is a distributed version-control system for tracking changes in source code during software development.
- [GitHub](https://github.com/)
    -  GitHub Inc. is a web-based hosting service for version control using Git.
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
    - The Maps JavaScript API lets you customize maps with your own content.
    - Library used:
        - Google Places API

## Testing

You can find the testing document in the [Testing.md](https://github.com/IstvanGercsak/PlaceFinder-SecondMilestoneProject/blob/master/Testing.md) file.

## Deployment

- **Set up**:
    - I use local IDE for create the project, I installed the Git locally and synchronized my local IDE 
    with the local git. I use IntelliJ Pycharm for the front end development with its helpful built in deployment tools. 
    After I created a Git and GitHub repository, I could start to work and I could test my features locally.
    I could see my changes locally to open my index.html file with the View/Open browser menu option.
    Here I could choose the required browser which I want to use. (Chrome, Mozilla, etc.)
- **Commits**:
    - After every small piece and increment, I made commit to my local Git repository. After that in the end of the 
    bigger section that gives value to my project I pushed my modification to my online GitHub repository.
    - For the development I only use one branch called "master" as there were not need more branch.
- **Local and online deployment**
    - Locally: It is very easy to clone repository from my account if you follow these steps:
        1. Follow this link [Project GitHub repository](https://github.com/IstvanGercsak/PlaceFinder-SecondMilestoneProject) 
        2. Under the repository name, click "Clone or download".
        3. Here you have to copy the url's of the repository
        4. In your local IDE you can choose to create new project from version control/Git 
        5. Paste the link there that you copied before
        6. For additional help you can more information under this [link](https://help.github.com/en/articles/cloning-a-repository)
        
    - Online:
        - When there was a working increment after pushing it to my online GitHub repository I could test it online with real usage.
        For this I followed these steps:
            1. Under [my project GitHub directory](https://github.com/IstvanGercsak/PlaceFinder-SecondMilestoneProject) from the menu items I clicked on the Settings 
            2. Under the GitHub Pages section I could set up my online site from my master branch.
            3. After few minutes the online deployed site was available the given [link](https://istvangercsak.github.io/PlaceFinder-SecondMilestoneProject/)
          
### Media

- The photos used in this site were obtained from:
    - Favicon:
        - http://dreammaker.co.in/images/map-marker3.png
    - Wallpaper:
        - https://wallpapershome.com/travel/fuji-japan-travel-tourism-national-geographic-traveler-10326.html?page=222
