const initState={
    data:null
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
        default:{
            return {...state};
        }
    }
}
export default UserReducer;