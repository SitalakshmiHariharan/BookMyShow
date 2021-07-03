
export default function(state=null,action){
    switch(action.type){
        case 'GET_RECOM_MOVIES':
            return action.payload
        default:
            return state
    }
}