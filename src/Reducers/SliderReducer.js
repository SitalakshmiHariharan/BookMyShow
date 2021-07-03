
export default function(state=null,action){
    switch(action.type){
        case 'GET_SLIDER_DATA':
            return action.payload
        default:
            return state
    }
}