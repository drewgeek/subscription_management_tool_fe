import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from "react-loader-spinner";
import '../Processing/Processing.css'
function Processing(){
    let history= useHistory()
    useEffect(()=>{
        setTimeout(function(){
            history.push("/walletsuccesspayment")},3000);

    },[])
    return(
        <div className="Processing-and-loader">
            <div className="process-and-loader"></div>
            <Loader
            type="Oval" width={30} color="#030640"/>
            <h2>Processing</h2>
        </div>
    )

}

export default Processing