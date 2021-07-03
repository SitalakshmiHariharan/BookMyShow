export default function(state=null,action){
    switch(action.type){
        case 'GET_NEARBY_EVENTS':
            return action.payload
        default:
            return state
    }
}