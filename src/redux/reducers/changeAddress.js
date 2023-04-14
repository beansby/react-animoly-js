import { CHANGE_ADDRESS1, CHANGE_ADDRESS2, CHANGE_ZIP } from "../actions/postcodeAction";

const initialState = {zipcode:"", address1:""};

export default function changeAddress(state=initialState, action){
    // if(state == undefined) {
    //     return (
    //         // {zipcode:"", address1:"", address2:""}
    //         {zipcode:"", address1:""}
    //     )
    // }

    const newState = {...state};
    switch(action.type) {
        case CHANGE_ZIP: newState.zipcode = action.data; break;
        case CHANGE_ADDRESS1: newState.address1 = action.data; break;
        // case CHANGE_ADDRESS2: newState.address2 = action.data; break;
    }
    return newState;
}