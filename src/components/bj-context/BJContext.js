import { createContext } from "react";


export const initialState = {
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



const BJContext = createContext()

export default BJContext