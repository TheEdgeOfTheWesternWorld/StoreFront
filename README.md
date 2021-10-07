[Project Management](https://trello.com/b/FHm7wgHI/alpha-wolf-squadron)

# StoreFront

# Work Agreement:
- K’Lan: 
  - Able to fit the roles that come up
  - Being able to understand the full code
  - Improve tool proficiency 


- Andrew: 
  - Likes to work on the structural pieces and DOM manipulation
  - Focus on layout
  - Succession of knowledge and leadership

- Joey: 
  - Creative, and css skills and willingness to do it
  - Work on design
  - Confidence on technical aspects

- Sam:
  - Enjoys logic and bug finding
  - Focus on JS coding.
  - Project Management Skills

### Daily Schedule
- Set schedule and have a morning stand-up, lunch check-in, and evening debrief.
  - Evening Debrief: Each person describe the day and one thing they learned. Check in on if working past close

### Issue Resolution:
- Call a meeting to discuss issue at hand.
  - This comes with an understanding that this is a place of respect and sharing of respect.
- Should be discussed first. After initial meeting, if more authority is needed then escalate.

### Communication Plan:
Hours of Operation 9-6pm With 12 o clock lunch

Normal mode operation:
In REMO for 9-6pm
Backup will be zoom

K’lan: 9pm
Joey: Insomniac 
Andrew: Over Slack
Sam: 10 pm

### Work Plan
- If we are falling behind, we will minimize scope to reach MVP status.

- Each meeting will be round robin, check in with each member on decisions.

- Create good wireframe to fully diagramed out and breakout from there
- We will be using trello

### Git Process:
- The whole project is going to be stored on GItHub
- We will make everyone a collaborator on the repository

- One other person to merge
- Pull request before end of the day
- Everyone will work on fresh beaches each day
- Plan for 5:00 pm pull request

## Day 1:
- Team Alpha Wolf Squadron gather at the appointed time of 9:00am. The team creates a work board on Trello to define their user Stories. This defines the Minimum Viable Product(MVP) is a merchant user(MU) can add and remove items from the store and a customer user(CU) can add and remove items from their cart before checking out.

#### Other goals the user Stories identifies:
  - Updates inventory in real time after purchase
  - Price totaling
  - Adding more merchants to the page
  - Some filtering of items or search bar
  - possibly individual store fronts for different merchants

#### Team creates a wireframe for what the pages look like
  - The home page is styled after [Patagonia's Page](https://www.patagonia.com/shop/clothing-gear/);
  - The merchant page was broken into two sections
    1. Merchant info: what they are selling, at what price, and how many are left
    2. The form to add more items for sale
    - discussion takes place of also returning sales data to the merchant here as well
  - The cart page takes design around two sections
    1. The cart that is rendered here as a review of items
    2. The customer info form

#### The team then splits the separate pages html between Joey, Andrew, and K'lan. Sam started on some basic JavaSript.
  - Joey selectes a [color palette](https://www.canva.com/colors/color-palettes/bright-lights/) for the project
  - Joey creates the HTML and CSS for the index page
  - K'lan creates the HTML and CSS for the cart page
  - Andrew creates the HTML and Css for the merchant page
  - Sam creates basic constructor functions that are identified in the [problem domain](/assets/storefront2.png)

#### Team comes together at 5:15pm to reconvene for the day and push all current work to the main branch
  - Each member shares back to the team about what they did today
  - The team plans to make styling consistent across all pages interms of header and color choice

## Day 2:
- Team Alpha Wolf Squadron met at the agreeded upon time of 9:00am

#### Team focused on making styling consistent
- The team updates all the styling on the pages for a consistent look.
  - Makes the header more uniform in apperence
  - Coordinates style of icons and tiles

#### Team focus changes to JavaScript and making a MVP
- Andrew works on the table on the merchant page
- K'lan works on setting up the JavaScript for the checkout page table
- Joey and Sam work on rendering the items Andrew adds to the total products
- Sam updated the problem domain
![problem Domain](/assets/storefrontupdate.png);


