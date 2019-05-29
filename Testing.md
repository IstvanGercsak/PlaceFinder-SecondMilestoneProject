#Testing

##############################################################

Todo List:
- Description: The page working on specific resolutions
- Testing User Stories
- Test Scenarios for Non-functional testing
- Tests in BDD format(How to test)
- Reset button(documentation)
- Contact Page
- Reset button(functionality)
- Contact Page
- Set up the EmailJS
- Explain commit
- Mockups(Create new for the contact page and expand the existing one)

##############################################################

Thanks to the "GitHub Pages" option on the GitHub website everybody can reach my website with clicking on the [link](https://istvangercsak.github.io/PlaceFinder-SecondMilestoneProject/)

I prefer the GitHub Pages option instead of the Cloud9 because it is stable and available 24/7.

**Test types:**
- Manual tests
- Non-Functional tests (usability, reliability)
    - Usability:
        - The ease of use and learn to use the website
    - Reliability:
        - Stable and consistent result
- HTML validator
- CSS validator

- Responsive:
    - I grab the edge of the browser and modify the resolution. After this the website is still usable and looks good.
    - Chrome developer tools: details below at the **Chrome Developer Tool** section

- Field checking:

    - I don't fill the search field and I click on he <filter_icon>. Alert message will appear.

|filter_icon|
|:---------:|
|Museum     |
|Restaurant |
|Bars       |

- Effects:

    - I hover my mouse over the social links and I can see the transition effect
    - I hover my mouse over the filter icons and I can see the transition effect
    - After I chose my destination and my filter that page will scroll down to the map

- Social link
    - I click on the <social_link> social link and the page will open in a new tab
        
|social_link|
|:---------:|
|GitHub     |
|LinkedIn   |

**Tested browsers:**
 - Chrome
 - Mozilla Firefox
 - Microsoft Edge

**Testing Tools:**
 - Chrome browser built-in developer tool
 - PC with HD resolution (with real usage)
 - Mobile Phones: 
    - iPhone SE
    - Google Pixel 3
    - OnePlus 6T

**Chrome Developer Tool:**
- I made boundary testing on the edges where the resolution changed from:
    - Large desktop to desktop (Tested pixel width values: 1201px, 1200px, 1199px)
    - Desktop to tablet (Tested pixel width values: 993px, 992px, 991px)
    - Tablet to phone (Tested pixel width values: 769px, 768px, 767px)
- Phone and Tablet resolution:
    - Usage on the different device resolutions like "Pixel 2" and "iPad"
- Console log error checking on the page during the testing
 
**Testing people:**
- Acquaintances
- Friends
- Myself