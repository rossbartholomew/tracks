import CreateDataContex from "./CreateDataContex";
import trackerApi from '../api/tracker';

const authReducer = (state, action) =>{
    switch (action.type){
        default:
            return state;
    }
};

const signup =  (dispatch) =>{
    return async ({email, password}) =>{
        try{
            console.log(email , password)
            const response = await trackerApi.post('/signup', {email, password});
            console.log(response.data)
        }catch(err){
            console.log("failed Ross")
        }
    }
}

const signin = (dispatch) =>{
    return ({email, password}) =>{

    }
}

const signout = (dispatch) =>{
    return () =>{

    }
}


export const {Provider, Context} = CreateDataContex(
    authReducer, {signin, signup, signout}, {isSignedIn: false}
);