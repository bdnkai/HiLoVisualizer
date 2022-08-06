import { useMemo, useReducer } from "react"
import BJContext from './BJContext'
import bJReducer from './BJReducer'
//------  Initial State & Reducer Cases  -------//
import { initialState, 
   START, 
   RESTART, 
   PLAYER_HIT, 
   PLAYER_STAY, 
   DEALER_HIT, 
   DEALER_STAY, 
   CALCULATE_PLAYER, 
   CALCULATE_DEALER } from './useCases'



const BJState = ( component_receiver ) =>{
   
   const [state, dispatch] = useReducer( bJReducer, initialState )

   const startInit = (BlackJack) => {
      dispatch({
         type: START,
         payload: BlackJack,
      })
   }

   const restartInit = (BlackJack) => {
      dispatch({
         type: RESTART,
         payload: BlackJack,
      })
   }

   const playerHit = (BlackJack) => {
      dispatch({
         type: PLAYER_HIT,
         payload: BlackJack,
      })
   }

   const playerStay = (BlackJack) => {
      dispatch({
         type: PLAYER_STAY,
         payload: BlackJack,
      })
   }

   const dealerHit = (BlackJack) => {
      dispatch({
         type: DEALER_HIT,
         payload: BlackJack,
      })
   }

   const dealerStay = (BlackJack) => {
      dispatch({
         type: DEALER_STAY,
         payload: BlackJack,
      })
   }

   const calculatePlayer= (BlackJack) =>{
      dispatch({
         type: CALCULATE_PLAYER,
         payload: BlackJack,
      })
   }

   const calculateDealer = (BlackJack) =>{
      dispatch({
         type: CALCULATE_DEALER,
         payload: BlackJack,
      })
   }

   const updateBJ = useMemo(() => ({
      bJ: state.bJ,
      start: startInit,
      restart: restartInit,
      playerHit: playerHit,
      playerStay: playerStay,
      playerHand: calculatePlayer,
      dealerHit: dealerHit,
      dealerStay: dealerStay,
      dealerHand: calculateDealer,
   }), [{ bJ: state.bJ }])

   return(
      <BJContext.Provider value={updateBJ}>
         { component_receiver.children }
      </BJContext.Provider>
   )
}

export default BJState