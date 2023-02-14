import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';

export default function App() {
  let customerDetail = JSON.parse(localStorage.getItem('customerDetail'));
  let customerInfo = JSON.parse(localStorage.getItem('userObject'));
  
  let email=customerDetail.email
  let phone=""
  let first=customerDetail.firstname
  let last=customerDetail.lastname
  let customerName=first +" "+ last
 
    const history=useHistory()
   const config = {
    // public_key: 'FLWPUBK-**************************-X',
    public_key:'FLWPUBK_TEST-ab1fabc93f0a6002ce24acf71270d3c4-X',
    tx_ref: Date.now(),
    // amount: customerInfo.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phonenumber:phone,
      name: customerName,
    },
    customizations: {
      title: 'Flex',
      description: 'Payment for subscription',
    //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    // logo:<FlexLogo/>
},
  };

  const fwConfig = {
    ...config,
    text: 'PAY WITH FLUTTERWAVE!',
    callback: (response) => {
       console.log(response);
       localStorage.setItem('fundRes', JSON.stringify(response))
      closePaymentModal() // this will close the modal programmatically
      history.push("/Fundsuccess")
    },
    onClose: () => {
        history.push("/Fundwallet")
    },
  };

  return (
    <div className="App">
     {/* <h1>Hello Test user</h1> */}
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}