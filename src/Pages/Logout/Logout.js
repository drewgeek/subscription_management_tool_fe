import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { headercolor } from '../../redux/flex/flex.actions';
import '../Logout/Logout.css'

function Logout(){
    const history=useHistory()
    // useEffect(()=>{
    //     headercolor({ dashinvitecolor:"purple"})   
    //  },[])
    const logout = () => {
        localStorage.clear();
        history.push("/signin");
    }

return(
    
        <div className="logout">

            <div className="logout-inner">

               <p>You would be required to sign-in once you logout of this account</p> 
               <h3>Are you sure you want to leave Flex ?</h3>
               <div className="LOGOUT-BUTTON">
                   <button onClick={history.goBack} className="logout-first-button">DISCARD</button>
                   <button onClick={logout} className="logout-second-button">PROCEED</button>
               </div>
            </div>
        </div>
         
 

)


} 

export default  Logout