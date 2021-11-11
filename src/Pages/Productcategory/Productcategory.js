import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import Smallbox from '../../Components/Smallbox/Smallbox';
import { useHistory } from 'react-router-dom';
import MobileDash from '../../Components/MobileDash/MobileDash'
import {ReactComponent as UdemyLogo} from '../../Asset/Udemy.svg';
import {ReactComponent as YoutubeLogo} from '../../Asset/Youtube.svg';
import {ReactComponent as IkedcLogo} from '../../Asset/Ikedc.svg';
import Netflix from '../../Asset/Netflix.png';
import  Showmax from '../../Asset/Showmax.png';
import Gotv from '../../Asset/GOTV.png';
import startimes from '../../Asset/Startimes.png';
import Dstv from '../../Asset/Dstv.png';
import Boxoffice from '../../Asset/BoxOffice.png';
import '../Productcategory/Productcategory.css'

function Productcategory({presentcolor,headercolor}){
    const history=useHistory()
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200F0"})
                    
       
     },[])
     const[data,setData]=useState({date:""})
return(
    <div className="productcategory-All">
        <div className="productcategory-web">
    <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
        <div className="product-categ-container">
            <div className="listAndHeader" >
                <div className="product-category-inner">
                    <h3>Product Category</h3>
                    <input type="search" placeholder="Search for products"/>
                </div>
                <div className="listOfproduct">
                    <p id="entertainment">Entertainment</p>
                    <p>Utilities</p>
                    <p>Productivity</p>
                    <p>Education</p>
                    <p>Insurance</p>
                </div>
            </div>
            <hr className="product-catg-line"/>
            <div className="product-category-second">
                <h3>PRODUCT LIST</h3>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                           
                            <div><Smallbox icon={Gotv}/></div>
                            <p>GOtv</p>
                        </div>
                        <button className="productADD" onClick={(()=>{
                            
                            history.push("/newsub/Gotv")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={Dstv}/></div>
                            <p>DStv</p>
                        </div>
                        <button className="productADD" onClick={(()=>{
                            
                            history.push("/newsub/Dstv")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={Netflix}/></div>
                            <p>Netflix</p>
                        </div>
                        <button className="productADD" onClick={(()=>{
                            
                            history.push("/newsub/Netflix")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={Showmax}/></div>
                            <p>Showmax</p>
                        </div>
                        <button className="productADD" onClick={(()=>{
                            
                            history.push("/newsub/Showmax")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={startimes}/></div>
                            <p>Startimes</p>
                        </div>
                        <button className="productADD" onClick={(()=>{
                            
                            history.push("/newsub/Startimes")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={Boxoffice}/></div>
                            <p>Boxoffice</p>
                        </div>
                        <button className="productADD" onClick={(()=>{
                            
                            history.push("/newsub/Boxoffice")})}>ADD </button>
                    </div>
                </div>
            </div>
        </div>
         
    </DashFrame>
    </div>
    <div className="productcategory-mobile">
    <MobileDash/>
    <div className="product-category-inner">
                    <h3>Product Category</h3>
                    <input type="search"/>
                </div>
                <div className="inner-product-catg-All">
                <div className="listOfproduct">
                    <p id="entertainment">Entertainment</p>
                    <p>Utilities</p>
                    <p>Productivity</p>
                    <p>Education</p>
                    <p>Insurance</p>
                </div>

    <div className="product-category-second">
                <h3>ProductList</h3>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={Gotv}/></div>
                            <p>Gotv</p>
                        </div>
                        <button className="productADD" onClick={(()=>{history.push("/addsub")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button className="productADD">ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={Netflix}/></div>
                            <p>Gotv</p>
                        </div>
                        <button className="productADD">ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox icon={Showmax}/></div>
                            <p>Gotv</p>
                        </div>
                        <button className="productADD">ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button className="productADD">ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button className="productADD">ADD </button>
                    </div>
                    </div>
                </div>
            </div>


    </div>
    </div>
)


} 
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Productcategory)