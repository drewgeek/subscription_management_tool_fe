import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { headercolor } from '../../redux/flex/flex.actions'
import BlogCard from './BlogCard';
import CardImage from '../../Asset/blogCardImage.png';
import data from './BlogData'
import '../Blog/Blog.css';

function Blog({headercolor,presentcolor}){
    useEffect(()=>{
        headercolor({ blogcolor:"#9953FF"})
                    
       
     },[])
    return(
        <>
            <div className="Blog">
            <Navbar blogstyle={{color:presentcolor.blogcolor,paddingBottom:"0",marginBottom:"0",}}
             bloglinestyle={{marginTop:"6px",paddingTop:"0",borderTop:"1px solid #6200f0",alignSelf:"start",width:"16px"}}
            aboutstyle={{textDecoration:"none"}}  privacystyle={{textDecoration:"none"}}/>
                <div className="heading">
                    <h1>The news that surrounds us is collected here</h1>
                    <p>Read, watch and absorb the content that we publish in our news blog. 
                        Also leave comments and communicate with other users.</p>
                </div>
                <div className="blog-card-except">
                    <h3 className="header-except-blog">Omdia foreCasts cloud gaming to nudge $12bn by 2026</h3>
                    <div className="image-div-header-img"><img src={CardImage} alt="header-image"/></div>
                    <p>Subscription services such as Xbox Game Pass Ultimate and playStation Now will be the primary force 
                        driving cloud gaming helping to generate $3.7bn in total in 2021.</p>
                <div className="blog-card-except-below"><p>Tina Lawal</p> <p>02 Dec</p></div>
                </div>
                <div className="blogs">
                    {data
                        .map((data, index) => (
                            <BlogCard
                                key={index}
                                header={data.header}
                                body={data.body}
                                authorName={data.authorName}
                                date={data.date}
                            />
                        ))}
                </div>
                <div className="lower-blog-except">
                                <div className="image-lower-except-div"><img src={CardImage} alt="cardimage"/></div>

                <h3>Future of Work</h3>
                <p>Majority of people will work in jobs that don't exist today...</p>
                <div className="lower-blog-except-profile-detail">
                    <p>Tina Lawal</p>
                    <p>02 Dec</p>
                </div>
                </div>
                <Footer/>
            </div>
        </>
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
export default connect(mapstatetoprops,MapDispatchToProps) (Blog)