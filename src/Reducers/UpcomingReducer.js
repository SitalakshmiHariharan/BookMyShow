
export default function(state=null,action){
    switch(action.type){
        case 'GET_UPCOMING_MOVIES':
            return action.payload
        default:
            return state
    }
}