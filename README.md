# 3pc

## Introduction

### Restrictions

I could not open the '.sketch' file so colors, dimensions, spacing, etc., are based on my best guess.

The instructions are in German, I had to do with a Google translation. Please let me know if my work missed some requirements.


### The App

Start the app with `npm start` or `node server`. It runs on port 3000.

The button on screen 1 receives focus when the app loads. Hitting 'space' is equivalent to clicking the button.

If the Close button recieves focus, it can be triggered by pressing either, 'Esc', 'Space' or 'Enter'.

The user can tab through the categories by pressing 'tab'.

Decreasing the size of the screen changes the layout, but this keyboard functionality is retained.


### The Mobile App

The code used to detect whether the device is a mobile or not is not the best, but for this example it does the job.

The mobile app uses clicks, since no hovering is possible.

Not much time was consumed on making the mobile app look aesthetically better; but certaianly improvements can be made.


## Implementation

### CSS

The CSS was done using the emotion.sh libary.


### Theming

In a real-life app, I would have used the 'styled-components' library (www.styled-components.com) for a global theme, but it would have been too much for such a small app. Instead global themes such as color, are stored in 'theme.js' and accessed as necessary.


### State Management

For such a small task, Redux would have been overkill, however in a real-life application it would have been my choice.

`useState` is being used instead.


### PropTypes

PropTypes have been used as necessary.


### Screen 1

The button on screen one receives focus thanks to `useRef`. Since it is a button it can be pressed with either the mouse or by pressing 'Space' or 'Enter'.


### Screen 2

#### app.js

The main feature here is to manage the 'expanded' state: whether the user is in Screen 1 or Screen 2.


#### categories-overlay.js

This is the main component. It manages the state for Screen 2, and includes the two major components: 'Categories' and 'Display'.


#### Categories

This is the left-hand section which lists all the categories.

It calls all the categories throgh the `map` method, and creates a 'Category' component with each iteration.


#### Category

Each 'Category' component makes use of the 'setSelectedCatefory' function:

```
 const toggleSelectStatus = () => {
        if(props.id === props.selectedCategory) {
            props.setSelectedCategory(-1)
        } else {
            props.setSelectedCategory(props.id)
        }       
    }
```

This function decides what is shown in the 'Display' component by changed the state. If the category is already selected, the default text is shown, else the description of that particular category is shown (since this is a test, the text of each category is just Lorem Ipsum).

This component also changes functionality from a desktop app to a mobile app, depending on whether the user-agent is a mobile device. Clicking is allowed only on mobile devices, whereas hovering functionality is only enabled for desktop.

```
    onClick={props.isMobileDevice ? toggleSelectStatus : null} 
    onMouseOver={props.isMobileDevice ? null : () => props.setSelectedCategory(props.id)} 
```

#### Display

Text body is only shown if a category is selected:

```
    {(props.selectedCategory > -1) && <Body>{categoriesData[props.selectedCategory].body}</Body>}
```


#### Accessibility

Contrary to what has been done with Screen 1, no focus has been set for screen 2. This is because it cannot be assumed what a user would want to do. Nonetheless the keyboard can be used both to navigate the categories and to exit.
