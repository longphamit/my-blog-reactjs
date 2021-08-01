const initState={
    data:null,
}
const UserReducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case "LOGIN":{
            return {
                ...state
            }
        }
        case "LOGIN_SUCCESS":{
            return {
                ...state,
                data:payload
            }
        }
        case "LOGOUT":{
            return {
                ...state,
                data:null
            }
        }
        default:{
            return {...state};
        }
    }
}
export default UserReducer;