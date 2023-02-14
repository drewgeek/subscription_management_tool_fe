import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { baseURL } from '../../domain';





let janAmt=0
let febAmt=0
let marAmt=0
let aprAmt=0
let mayAmt=0
let junAmt=0
let julAmt=0
let augAmt=0
let sepAmt=0
let octAmt=0
let novAmt=0
let decAmt=0
let grapharr=[]
let itemArray=[]
let news=0
let newsoct=0
let newoct=0
let newval=[]
//const data={}
//let LineChart
// const LineChart = () => (
  //const LineChart = () => {
let token = JSON.parse(localStorage.getItem('bearertoken'));
axios.defaults.headers.common['Authorization'] = token; 
//location.reload()
//    

//   let token = JSON.parse(localStorage.getItem('bearertoken'));
//   axios.defaults.headers.common['Authorization'] = token;
let userDisplay=[]
axios.get(`${baseURL}/users/subscription`)
.then(res=>{
console.log(res.data.data)
itemArray=res.data.data
console.log(itemArray)
userDisplay = JSON.parse(localStorage.getItem('userDisplay'));
newval=itemArray.map((val,index)=>{
  grapharr.push(val)
  if(val.dateSubscribed.split("-")[1]==11){
    novAmt+=val.amount
    news=novAmt
    console.log(news)
  }
console.log(novAmt)


//console.log(data)
return (novAmt)
})
console.log(newval)
localStorage.setItem('newval', JSON.stringify(news))
console.log(news)

//oct value
newoct=itemArray.map((val,index)=>{
  grapharr.push(val)
  if(val.dateSubscribed.split("-")[1]==10){
    octAmt+=val.amount
    newsoct=octAmt
    console.log(newsoct)
  }
console.log(novAmt)


//console.log(data)
return (novAmt)
})
localStorage.setItem('newsoct', JSON.stringify(newsoct))



})
let newerval=JSON.parse(localStorage.getItem('newval'));
let neweroct=JSON.parse(localStorage.getItem('newsoct'));
console.log(neweroct)
console.log(newerval)
//data
const data = {
  
   labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  //labels: [],
  datasets: [
    {
      label: 'Subscription',
      data: [janAmt, febAmt, marAmt, aprAmt, mayAmt, junAmt,julAmt,augAmt,sepAmt,neweroct,newerval,decAmt],
     lineTension:0.5,
      fill: false,
    //   backgroundColor: 'rgb(255, 99, 132)',
    backgroundColor: '#A6CEE3',
    
    borderColor: '#A6CEE3',
    width:"1000px",
    
    // height:"100%"
    //   borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const LineChart = () => (
  <>
  
  
  <div className='header'>
      {/* <h1 className='title'>Line Chart</h1> */}
      {/* <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a>
      </div> */}
    </div>
    <Line data={data} options={options} style={{minHeight:"150px",maxHeight:"150px"} }/>
  
  
  </>
)
;

export default LineChart;