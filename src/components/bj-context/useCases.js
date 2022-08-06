const initialState = {
   bJ: {
      deck: null,
	   start: false,
	   restart: false,
	   dealer: null,
	   dealerTurn: false,
	   dealerHit: false,
	   dealerStay: false,
	   playerA: null,
	   playerTurn: false,
	   playerHit: false,
	   playerStay: false,
	   updateNeeded: false,
   }
}


const START = "START"
const RESTART = "RESTART"
const PLAYER_HIT = "PLAYER_HIT"
const PLAYER_STAY = "PLAYER_STAY"
const DEALER_HIT = "DEALER_HIT"
const DEALER_STAY = "DEALER_STAY"
const CALCULATE_PLAYER = "CALCULATE_PLAYER"
const CALCULATE_DEALER = "CALCULATE_DEALER"


export { 
   initialState,
   START, 
   RESTART, 
   PLAYER_HIT, 
   PLAYER_STAY, 
   DEALER_HIT, 
   DEALER_STAY, 
   CALCULATE_PLAYER,
   CALCULATE_DEALER 
}