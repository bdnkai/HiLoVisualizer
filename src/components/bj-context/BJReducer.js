import { START, RESTART, PLAYER_HIT, PLAYER_STAY, DEALER_HIT, DEALER_STAY, CALCULATE_PLAYER, CALCULATE_DEALER } from './useCases'

const bJReducer = (state, action) => {
   switch (action.type){
         // -------  CASE: START  ------- //
      case START:
         console.log('Start from reducer is functioning')
         return{
            ...state,
            start: true,
         }
         // -------  CASE: RESTART  ------- //
      case RESTART:
         console.log('ReStart from reducer is functioning')
         return{
         }
         // -------  CASE: PLAYER_HIT  ------- //   
      case PLAYER_HIT:
         console.log('Player_Hit from reducer is functioning')
         return{

         }
         // -------  CASE: PLAYER_STAY  ------- //
      case PLAYER_STAY:
         console.log('Player_Stay from reducer is functioning')
         return{

         }
         // -------  CASE: DEALER_HIT  ------- //
      case DEALER_HIT:
         console.log('Dealer_Hit from reducer is functioning')
         return{

         }
         // -------  CASE: DEALER_STAY  ------- //
      case DEALER_STAY:
         console.log('Dealer_Stay from reducer is functioning')
         return{

         }
         // -------  CASE: CALCULATE  ------- //
      case CALCULATE_PLAYER: 
         console.log('Calculate_Player from reducer is functioning')
         return{

         }
      case CALCULATE_DEALER: 
         console.log('Calculate_Dealer from reducer is functioning')
         return{

         }   
   }
}


export default bJReducer;
