import {addItemToArray} from './flex.utils'

const INITIAL_STATE={
    //signupInput:{},
    //sub:[],
    details:{},
    //signininput:{},
    detailsupdate:{},
    detailssignin:{},
    forgotpassword:{},
    cancelicon:{display:"flex"},
    newemail:"",
    // subarray:[{Amount:"5000",package:"tre"}],
    subarray:[],
    subscription:{},
    editarray:[],
    // addsub:{},
    customer:{},
     
    presentcolor:{partcolor:"",
                    howcolor:"",
                    privacystyle:"#030640",
                    aboutstyle:"",
                    blogcolor:"",
                    dashheadercolor:"",
                    dashinvitecolor:"",
                    dashsubscribecolor:"",
                    paymentcolor:""
                },


    
}

const FlexReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){

        case'signup':
        return{
            ...state,
            signupInput:action.value
           
        }
        case'cancelicon':
        return{
            ...state,
            cancelicon:action.value
           
        }
        case'setnewemail':
        return{
            ...state,
            newemail:action.value
           
        }
        case'addarray':
  

         return{
           ...state,
        //    subarray:[...state.subarray, action.value],
        subarray:state.subarray.concat(action.value)
        // subarray:addItemToArray(state.subarray, action.value)
     }
     case'editarray':
  

     return{
       ...state,
    //    subarray:[...state.subarray, action.value],
    editarray:state.editarray.concat(action.value)
    // subarray:addItemToArray(state.subarray, action.value)
 }
     
        case 'addsubs' :
            
        
        
                
            Object.assign(state.subscription,action.value)
       
       
        // ...state,
        //    // cartitem:[...state.cartitem, action.payload]
        //    cartitem:addItemToCart(state.cartitem, action.payload)
         case 'signupdetails' :
            
        
        
                
               Object.assign(state.details,action.value)
               case 'customerdetails' :
            
        
        
                
                Object.assign(state.customer,action.value)
              
               case 'passwordreset' :
            
        
        
                
               Object.assign(state.forgotpassword,action.value)
              
       
                
               case'signin':
               return{
                   ...state,
                  signininput:action.value
                  
               } 


               case 'signindetails' :
            
        
        
                
                Object.assign(state.detailssignin,action.value)

                case 'updatedetails': 

                Object.assign(state.detailsupdate,action.value)


                case'headercolor':
                return{
                    ...state,
                   presentcolor:action.value
                   
                } 

            default:
                return state

    }
}

export default FlexReducer