import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {ReactComponent as Calendar} from '../../Asset/Calender Icon.svg'
import { useEffect } from 'react';
import axios from 'axios'
import { baseURL } from '../../domain';
import Subscription from '../../Pages/Subscription/Subscription';
 import '../../Components/Pie/Pie.css'
//const[hap,setHap]=useState("")


let newval=[]
let newArr=[]
let newamt=[]
let amtArr=[]
let itemArray=[]
//const PieChart = () =>{
  //const[pieArr,setPieArr]=useState([])
  
  let userDisplay=[]
  let token = JSON.parse(localStorage.getItem('bearertoken'));
        axios.defaults.headers.common['Authorization'] = token; 
  axios.get(`${baseURL}/users/subscription`)
.then(res=>{
console.log(res.data.data)
itemArray=res.data.data
console.log(itemArray)
userDisplay = JSON.parse(localStorage.getItem('userDisplay'));
newval=userDisplay.map((val,index)=>{
  console.log(val)
  if(val.subscriptionStatus!=="Inactive"){
newArr.push(val.subCategory)
//setPieArr(newArr)
localStorage.setItem('piearr', JSON.stringify(newArr))
console.log(newArr)
return newArr
}
})
newamt=userDisplay.map((val,index)=>{
  if(val.subscriptionStatus!=="Inactive"){
  amtArr.push(val.amount)
  console.log(val.amount)
  //setPieArr(newArr)
  localStorage.setItem('amtArr', JSON.stringify(amtArr))
  console.log(amtArr)
  return amtArr
  }
  
  })
//setPieArr(newArr)
console.log(newval)
}
)

console.log()
console.log(amtArr)
let pieVal;
let pieamt;
let pieamtData=JSON.parse(localStorage.getItem('amtArr'));
console.log(pieamtData)
let pieData=JSON.parse(localStorage.getItem('piearr'));
console.log(pieData)
if(pieData===null){
pieVal=["Subscription"]
}
else{pieVal=pieData
}
if(pieamtData==null){
  pieamt=[1]
  }
  else{pieamt=pieamtData
    console.log(pieamt)
  }

const data = {
 
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  labels: pieVal,
  datasets: [
    {
      label: '# of Votes',
      //data: [1],
       data: pieamt,
      backgroundColor: [
        
        '#ACB9FF',
        '#e289f2',
        '#855cf8',
        '#b089ff',
        '#503975',
         'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        //'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
     
      // borderColor: [
      //   '#ACB9FF',
      //   'rgba(54, 162, 235, 1)',
      //  'rgba(255, 206, 86, 1)',
        //'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      //],
      borderWidth: 1,
    },
  ],
};

 const PieChart = ({month}) => (


  <>
  
    <div className='header'>
      {/* <h1 className='title' style={{textAlign:"left",marginLeft:"30px",marginBottom:"20px"}}>Pie Chart</h1>
      <span className="subscriptionPie" style={{display:"flex",marginLeft:"30px"}}> <p style={{marginRight:"30px"}}>Monthly Subscription</p> <Calendar /><p className="calendar">{month}</p></span> */}
      {/* <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js'
        >
          Github Source
        </a>
      </div> */}
    </div>
    <Pie data={data} />
   
    
  </>
);

export default PieChart;