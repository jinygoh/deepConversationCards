# Crash Course: Deep Conversation Topics App

This document provides a quick overview of how the Deep Conversation Topics app works.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that defines the structure of the web page.
- `style.css`: The CSS file that styles the web page.
- `script.js`: The JavaScript file that contains the logic for the app.
- `prompts.md`: A markdown file containing the original prompts for the project.
- `README.md`: A brief description of the project.

## How it Works

The app is a simple single-page application that displays conversation prompts to the user.

### 1. HTML (`index.html`)

The `index.html` file defines the two main screens of the app:

- **Start Screen (`#start-screen`):** This is the initial screen the user sees. It contains a "Start" button to begin the game and a summary of the rules.
- **Game Screen (`#game-screen`):** This screen is displayed after the user clicks the "Start" button. It contains a card display area and a "Draw Next Card" button.

### 2. CSS (`style.css`)

The `style.css` file is responsible for the visual appearance of the app. It styles the buttons, screens, and the card display. It uses a flexbox layout to center the content on the page.

### 3. JavaScript (`script.js`)

The `script.js` file contains the core logic of the app. Here's a breakdown of what it does:

- **DOM Content Loaded:** The script waits for the HTML content to be fully loaded before it runs.
- **Element References:** It gets references to the different HTML elements it needs to interact with (screens, buttons, etc.).
- **`drawnCards` Array:** This array keeps track of the cards that have already been drawn to avoid repetition.
- **`cardColors` Array:** This array contains a list of background colors for the cards.
- **`cardDescriptions` Array:** This array contains the list of conversation prompts.
- **`showScreen()` Function:** This function is used to switch between the start screen and the game screen.
- **Event Listeners:**
    - **Start Button:** When the "Start" button is clicked, the app hides the start screen, shows the game screen, and draws the first card.
    - **Draw Card Button:** When the "Draw Next Card" button is clicked, the app draws a new card, making sure it hasn't been drawn before. It also changes the background color of the card.
- **Card Drawing Logic:** The app randomly selects a card from the `cardDescriptions` array. It ensures that the same card is not drawn twice by checking if the card's index is already in the `drawnCards` array. When all cards have been drawn, it displays a message to the user.
