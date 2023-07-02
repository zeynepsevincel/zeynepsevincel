import React from "react";
import { Parallax } from "react-parallax";
import Carousel from 'react-bootstrap/Carousel';


const imag = "https://www.hoteldupont.com/resourcefiles/mainimages/dining-overview-masthead.jpg?version=7182022134123";

export const Resto = () => {
return (
<div className="events">
<Parallax bgImage={imag} strength={500}>
      <div style={{ height: 500 }}>
        <h1 style={{marginTop:"10%", fontWeight:"bold", fontSize:"100px", marginLeft:"34%", color:"white",}}>DINE&DRINK</h1>
		<p style={{fontSize:"40px", marginLeft:"24%", color:"white",marginTop:"20px"}}>Keep Smiling. It makes people wonder where you have been.</p>
      </div>
    </Parallax>



<h3 style={{marginTop:"70px", marginLeft:"-800px", textAlign:"center"}}>OPENING TIMES<br></br><br></br>

Mon - Fri, Lunch: 12:30 – 17:30 | <br></br>
Dinner: 19:00 – 22:30 | <br></br>
Sat - Sun, 12:30 - 22:30</h3>

<h3 style={{marginTop:"-178px", marginLeft:"800px", marginBottom:"100px", textAlign:"center"}}>TO RESERVE A TABLE CONTACT US<br></br><br></br>
<br></br>
restaurants@sunsetinn.com<br></br>
123 456-7890</h3>





<div style={{backgroundColor:"#818181", paddingBottom:"20px", marginBottom: "50px"}}>

  <h2 style={{marginLeft:"45%", color:"white"}}>OUR MENU</h2><br></br>
<div>
<h4 style={{marginLeft:"120px", color:"white"}}>BREAKFAST</h4>
<h4 style={{marginLeft:"120px", color:"white"}}>LUNCH</h4>
<h4 style={{marginLeft:"120px", color:"white"}}>DINNER</h4>

</div>


</div>




<Carousel id="car1" style={{width:"50%", marginLeft:"25%", marginBottom:"100px", marginTop:"100px"}}>
        <Carousel.Item >
          <img
            className=" w-100 img-fluid"
            src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/10/header.jpg?fit=1267%2C713&ssl=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/hotel-restaurant-6-Skyhigh.png?itok=7ORfeFto"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://qtxasset.com/quartz/qcloud1/media/image/hotelmanagement/1522085116/Hearth-Dram-Interiors-Night-23.jpg?VersionId=J2bxR3.UEWQWzU.p0ubnfcM_YdEqOuUU"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>




</div>



);
};

export default Resto;