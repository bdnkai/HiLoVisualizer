import { useMemo, useReducer } from "react"
import {initialState, BJContext } from './BJContext'
import { START, RESTART, PLAYER_HIT, PLAYER_STAY, DEALER_HIT, DEALER_STAY, CALCULATE } from './useCases'
import {bJReducer} from './BJReducer'



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

   
   const gameCalculation = (BlackJack) =>{
      dispatch({
         type: CALCULATE,
         payload: BlackJack,
      })
   }

   const updateBJ = useMemo(() => ({
      start: startInit,
      restart: restartInit,
      playerHit: playerHit,
      playerStay: playerStay,
      dealerHit: dealerHit,
      dealerStay: dealerStay,
   }), [{ bJ: state.bJ }])

   return(
      <BJContext.Provider value={updateBJ}>
         { component_receiver.children }
      </BJContext.Provider>
   )

}