import { Action } from "../../models/action";

export function isLoggedIn (state = false, action: Action):boolean {
   return (action.type === 'IS_LOGGEDIN' && action.payload) || state
}

export function token (state = null, action: Action):string|null {
   if (action.type === 'SAVE_TOKEN') {
      return action.payload
   }
   return state
}

export function uid (state = null, action: Action):string|null {
   if (action.type === 'USER_ID') {
      return action.payload
   }
   return state
}