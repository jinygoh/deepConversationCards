// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the different screens in the app
    const screens = {
        start: document.getElementById('start-screen'), // The start screen
        game: document.getElementById('game-screen'),   // The game screen
    };

    // An object to hold references to any modals (pop-up windows)
    const modals = {};

    // Get references to the buttons in the app
    const buttons = {
        start: document.getElementById('start-game-btn'), // The "Start Game" button
        drawCard: document.getElementById('draw-card-btn'), // The "Draw Next Card" button
    };

    // Get references to the display areas in the app
    const displays = {
        card: document.getElementById('card-display'), // The area where the card is displayed
    };

    // An object to hold references to any input fields
    const inputs = {};

    // Get references to all elements with the class "close-btn" (used for closing modals)
    const closeButtons = document.querySelectorAll('.close-btn');

    // An array to keep track of the cards that have been drawn
    let drawnCards = [];
    // An array of colors to use for the card backgrounds
    const cardColors = [
        '#fcf4dd', '#ddedea', '#daeaf6', '#f2d8d8'
    ];

    // An array of conversation prompts (the card descriptions)
    const cardDescriptions = [
        "What is a dream you've never shared with anyone?",
        "What is one of your biggest fears?",
        "What is a memory that always makes you smile?",
        "What is something you're proud of, but don't get to talk about often?",
        "What is a lesson you've learned from a past mistake?",
        "What is a book, movie, or song that has had a profound impact on your life?",
        "If you could have any superpower, what would it be and why?",
        "What is a cause or issue you are passionate about?",
        "What is a skill you've always wanted to learn?",
        "What is a place you've always dreamed of visiting?",
        "What is a moment in your life that you wish you could relive?",
        "What is a quality you admire most in others?",
        "What is something you're grateful for today?",
        "What is a challenge you've overcome that has made you stronger?",
        "What is a piece of advice you would give to your younger self?",
        "What is a tradition or ritual that is important to you?",
        "What is a time you felt truly alive?",
        "What is a way you've grown or changed in the past year?",
        "What is a belief you hold that has been challenged?",
        "What is a question you've always wanted to ask someone?",
        "What is a time you felt completely understood by someone?",
        "What is a risk you've taken that paid off?",
        "What is a way you like to express your creativity?",
        "What is a simple pleasure that brings you joy?",
        "What is a goal you're currently working towards?",
        "What is a time you felt a deep connection with nature?",
        "What is a quality you're working on developing in yourself?",
        "What is a memory of a loved one that you cherish?",
        "What is a way you've found to cope with stress or anxiety?",
        "What is a time you felt a sense of wonder or awe?",
        "What is a fear you've conquered?",
        "What is a way you show love to others?",
        "What is a time you felt like you were part of something bigger than yourself?",
        "What is a lesson you've learned from a difficult experience?",
        "What is a way you've found to stay motivated and inspired?",
        "What is a time you felt a strong sense of intuition?",
        "What is a way you've learned to forgive yourself or others?",
        "What is a time you felt a deep sense of peace or contentment?",
        "What is a way you've found to connect with your inner child?",
        "What is a time you felt a sense of purpose or calling?",
        "What is a way you've learned to embrace your imperfections?",
        "What is a time you felt a deep sense of gratitude?",
        "What is a way you've found to stay grounded in the present moment?",
        "What is a time you felt a strong sense of community?",
        "What is a way you've learned to let go of what no longer serves you?",
        "What is a time you felt a deep sense of connection with another person?",
        "What is a way you've found to cultivate more joy in your life?",
        "What is a time you felt a strong sense of courage?",
        "What is a way you've learned to trust your own instincts?",
        "What is a time you felt a deep sense of inspiration?",
        "What is something that you are unapologetically passionate about?",
        "Describe a moment where you felt completely out of your comfort zone. What did you learn from it?",
        "What is a belief you hold that many people would disagree with?",
        "What is the most significant sacrifice you've ever made for someone else?",
        "If you could have a conversation with any historical figure, who would it be and what would you ask them?",
        "What is a recurring dream you have?",
        "What is a personal project you're currently working on that you're excited about?",
        "What is a time you felt a strong connection to a piece of art (music, painting, etc.)?",
        "What is a flaw you've come to accept about yourself?",
        "What is a moment that changed the course of your life?",
        "What is a topic you could talk about for hours?",
        "What is a time you felt truly powerful?",
        "What is a memory that makes you cringe?",
        "What is a way you've found to stay hopeful in difficult times?",
        "What is a book you think everyone should read?",
        "What is a time you stood up for something you believed in, even when it was hard?",
        "What is a role model who has had a significant impact on your life?",
        "What is a question you wish people would ask you more often?",
        "What is a time you felt a deep sense of belonging?",
        "What is a way you've learned to be a better listener?",
        "What is a time you felt completely in sync with someone else?",
        "What is a piece of art you would create if you had the skill?",
        "What is a time you felt a sense of clarity about your future?",
        "What is a way you've learned to set boundaries in your relationships?",
        "What is a time you felt a deep connection to your ancestors or heritage?",
        "What is a way you've found to practice self-compassion?",
        "What is a time you felt a sense of liberation?",
        "What is a way you've learned to embrace uncertainty?",
        "What is a time you felt a deep sense of empathy for someone else?",
        "What is a way you've found to cultivate a sense of wonder in your daily life?",
        "What is a time you felt a strong sense of purpose in your work?",
        "What is a way you've learned to be more present in your conversations?",
        "What is a time you felt a deep sense of connection to a place?",
        "What is a way you've found to challenge your own assumptions?",
        "What is a time you felt a strong sense of intuition that turned out to be right?",
        "What is a way you've learned to communicate your needs more effectively?",
        "What is a time you felt a deep sense of connection to your body?",
        "What is a way you've found to let go of anger or resentment?",
        "What is a time you felt a strong sense of creativity flowing through you?",
        "What is a way you've learned to be more vulnerable with others?",
        "What is a time you felt a deep sense of connection to your spiritual side?",
        "What is a way you've found to celebrate your own successes, no matter how small?",
        "What is a time you felt a strong sense of resilience in the face of adversity?",
        "What is a way you've learned to be more open to new experiences?",
        "What is a time you felt a deep sense of connection to a stranger?",
        "What is a way you've found to bring more playfulness into your life?",
        "What is a time you felt a strong sense of clarity about a difficult decision?",
        "What is a way you've learned to be more patient with yourself and others?",
        "What is a time you felt a deep sense of connection to the natural world?",
        "What is a way you've found to express your gratitude more often?",
        "What is a time you felt a strong sense of hope for the future?",
        "What is a way you've learned to be more mindful in your daily activities?",
        "What is a time you felt a deep sense of connection to a cause or movement?",
        "What is a way you've found to forgive yourself for past mistakes?",
        "What is a time you felt a strong sense of purpose in your relationships?",
        "What is a way you've learned to be more authentic in your self-expression?",
        "What is a time you felt a deep sense of connection to your own inner wisdom?",
        "What is a way you've found to cultivate more self-love?",
        "What is a time you felt a strong sense of determination to achieve a goal?",
        "What is a way you've learned to be more compassionate towards others?",
        "What is a time you felt a deep sense of connection to a community?",
        "What is a way you've found to let go of the need for approval from others?",
        "What is a time you felt a strong sense of inspiration from someone else's story?",
        "What is a way you've learned to be more present with your emotions?",
        "What is a time you felt a deep sense of connection to a dream you had?",
        "What is a way you've found to bring more meaning into your life?",
        "What is a time you felt a strong sense of courage to face a fear?",
        "What is a way you've learned to be more open-minded to different perspectives?",
        "What is a time you felt a deep sense of connection to a piece of music?",
        "What is a way you've found to cultivate a more positive outlook on life?",
        "What is a time you felt a strong sense of responsibility to make a difference?",
        "What is a way you've learned to be more grateful for the people in your life?",
        "What is a time you felt a deep sense of connection to a work of art?",
        "What is a way you've found to bring more adventure into your life?",
        "What is a time you felt a strong sense of clarity about your values?",
        "What is a way you've learned to be more present with your loved ones?",
        "What is a time you felt a deep sense of connection to a memory?",
        "What is a way you've found to cultivate a stronger sense of self-awareness?",
        "What is a time you felt a strong sense of purpose in your personal growth?",
        "What is a way you've learned to be more intentional with your time and energy?",
        "What is a time you felt a deep sense of connection to a goal you achieved?",
        "What is a way you've found to bring more laughter into your life?",
        "What is a time you felt a strong sense of clarity about a relationship?",
        "What is a way you've learned to be more present in nature?",
        "What is a time you felt a deep sense of connection to a book?",
        "What is a way you've found to cultivate a more peaceful inner state?",
        "What is a time you felt a strong sense of responsibility to care for yourself?",
        "What is a way you've learned to be more grateful for your own strengths and talents?",
        "What is a time you felt a deep sense of connection to a movie?",
        "What is a way you've found to bring more creativity into your work?",
        "What is a time you felt a strong sense of clarity about your life's path?",
        "What is a way you've learned to be more present with your own thoughts and feelings?",
        "What is a time you felt a deep sense of connection to a poem?",
        "What is a way you've found to cultivate a more compassionate relationship with yourself?",
        "What is a time you felt a strong sense of responsibility to your community?",
        "What is a way you've learned to be more grateful for the challenges you've overcome?",
        "What is a time you felt a deep sense of connection to a historical event?",
        "What is a way you've found to bring more spontaneity into your life?"
    ];

    /**
     * Shows a screen and hides all others.
     * @param {string} screenId The ID of the screen to show.
     */
    function showScreen(screenId) {
        // Loop through all the screens
        for (const screen in screens) {
            // Toggle the 'active' class based on whether the screen ID matches the current screen
            screens[screen].classList.toggle('active', screen === screenId);
        }
    }

    /**
     * Shows a modal.
     * @param {HTMLElement} modal The modal element to show.
     */
    function showModal(modal) {
        // Set the display style of the modal to 'block' to make it visible
        modal.style.display = 'block';
    }

    /**
     * Hides a modal.
     * @param {HTMLElement} modal The modal element to hide.
     */
    function hideModal(modal) {
        // Set the display style of the modal to 'none' to hide it
        modal.style.display = 'none';
    }

    // Add an event listener to the "Start Game" button
    buttons.start.addEventListener('click', () => {
        // Reset the array of drawn cards
        drawnCards = [];
        // Show the game screen
        showScreen('game');

        // A variable to store the index of the randomly selected card
        let cardIndex;
        // A loop to ensure that the selected card has not been drawn before
        do {
            // Select a random card index
            cardIndex = Math.floor(Math.random() * cardDescriptions.length);
        } while (drawnCards.includes(cardIndex)); // Continue looping as long as the card has already been drawn

        // Add the selected card index to the array of drawn cards
        drawnCards.push(cardIndex);

        // Select a random color index from the cardColors array
        const colorIndex = Math.floor(Math.random() * cardColors.length);
        // Set the text content of the card display to the selected card description
        displays.card.textContent = cardDescriptions[cardIndex];
        // Set the background color of the card display to the selected color
        displays.card.style.backgroundColor = cardColors[colorIndex];
    });

    // Add an event listener to the "Draw Next Card" button
    buttons.drawCard.addEventListener('click', () => {
        // Check if all cards have been drawn
        if (drawnCards.length === cardDescriptions.length) {
            // If all cards have been drawn, display a message and do nothing else
            displays.card.textContent = "All cards have been drawn!";
            return;
        }

        // A variable to store the index of the randomly selected card
        let cardIndex;
        // A loop to ensure that the selected card has not been drawn before
        do {
            // Select a random card index
            cardIndex = Math.floor(Math.random() * cardDescriptions.length);
        } while (drawnCards.includes(cardIndex)); // Continue looping as long as the card has already been drawn

        // Add the selected card index to the array of drawn cards
        drawnCards.push(cardIndex);

        // Select a random color index from the cardColors array
        const colorIndex = Math.floor(Math.random() * cardColors.length);
        // Set the text content of the card display to the selected card description
        displays.card.textContent = cardDescriptions[cardIndex];
        // Set the background color of the card display to the selected color
        displays.card.style.backgroundColor = cardColors[colorIndex];
    });
});
