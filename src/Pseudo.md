Why is it hard getting started?

-Idk where to start, I have a lot of components
-how do we solve it?
-figure out what is needed first - in my app I want to be able to draw from the valid deck,
//so verifying the deck is valid is the first move - should I put the deck is valid in a different component? - does putting it in state transfer over to other components?
// I can do this by using useContext or use it as custom hook
// I can check if deck is valid, if not, fetch new shuffled deck if app is refreshed - In my app I need to draw 2 cards from the deckapi and give it to 2 player type 1 at a time (StartRound)
-I can do this by:
// doing a for loop until the dealers hand has 2 card
// fetch api to draw card and add card value in state
// fetch api to store drawState to dealer
// ----------> draw card and another card to state
// ----------> store drawState to playerA - In my app I need to see what card each player has and display on browser
-I can do this by
// fetch api for player type list (https://deckofcardsapi.com/api/deck/{deck}/pile/{name}/list)
//.map the data and store it into state
-How do I target it? - In my app I need to a hit or stay button
//if hit, run drawCard Function
// if stay, createState for stay = true or false
// if stay = true, let dealer sequence starts - In my app I need to count the cards based on Hi-Lo theory that is in discard pile and every card on the table - In my app I need to discard player hand to the discard pile - In my app I need a button to allow visitors to restart
