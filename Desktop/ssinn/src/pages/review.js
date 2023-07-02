import React from "react";
import { Parallax } from "react-parallax";
import Testimonial from "../components/Testimonial";

const imageDemo = "https://www.granitifiandre.com/img/referenze/405/main.jpg";
export const Review = () => {
return (
<div className="services">
<Parallax bgImage={imageDemo} strength={500}>
      <div style={{ height: 500,}}>
	
        <h1 style={{marginTop:"10%", fontWeight:"bold", fontSize:"70px", color:"white",}}>What Our Customers Say About Us!</h1>
		<p style={{ fontWeight:"bold", color:"white"}}>Let us know what you think!</p>
      </div>
    </Parallax>

<Testimonial/>
	

	</div>

);
};

export default Review;