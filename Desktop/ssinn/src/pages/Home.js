import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPlayer from "react-player";
import "../App.css";
import Services from "../components/Services"



export const Home = () => {
return (
  
     <div className="home">
      <Carousel id="car1">
        <Carousel.Item >
          <img
            className=" w-100 img-fluid"
            src="https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
         
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://digital.ihg.com/is/image/ihg/crowne-plaza-sanya-6594727714-2x1?wid=1440&fit=fit,1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://ebusinesscumbria.com/wp-content/uploads/2020/07/Beech-Hill-Hotel-2-1440x720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

<h1 style={{ fontWeight:"bold", marginLeft:"100px", marginTop:"100px", marginBottom:"50px"}}>ROOMS</h1>

<Card style={{ width: '18rem' , marginLeft:'100px'}}>
      <Card.Img variant="top" src="https://image-tc.galaxy.tf/wijpeg-afu0zj5rhmyyirzditj3g96mk/deluxe-room-king-1-2000px.jpg" />
      <Card.Body>
        <Card.Title>Deluxe Room</Card.Title>

        <Button variant="primary" href="./rooms/Deluxe" style={{ backgroundColor: "#818181", borderRadius:"0%", borderColor:"#818181"}}>Explore</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem', marginLeft:"600px", marginTop:"-300px" }}>
      <Card.Img variant="top" src="https://jumeirah-beach-hotel-dubai.booked.net/data/Photos/OriginalPhoto/11574/1157466/1157466240/Jumeirah-Beach-Hotel-Dubai-Exterior.JPEG" />
      <Card.Body>
        <Card.Title>Ocean View</Card.Title>

       <Button variant="primary" href="./rooms/Ocean" style={{ backgroundColor: "#818181", borderRadius:"0%", borderColor:"#818181"}}>Explore</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem',  marginLeft:"1090px", marginTop:"-310px" }}>
      <Card.Img variant="top" src="https://gold3hotel.com/wp-content/uploads/2016/09/G3Hotel_2743_edited-1-1140x699.jpg" />
      <Card.Body>
        <Card.Title>Family Suite</Card.Title>

        <Button variant="primary" href="./rooms/Family" style={{ backgroundColor: "#818181", borderRadius:"0%", borderColor:"#818181"}}>Explore</Button>
      </Card.Body>
    </Card>


<Services/>






<div>




    <h1 style={{ fontWeight:"bold", marginLeft:"40%", marginTop:"100px", marginBottom:"50px"}}>Sunset Inn Restaurant</h1>









    <ReactPlayer style={{ marginLeft:"100px", marginTop:"100px", marginBottom:"50px"}} url="https://www.youtube.com/embed/ZRnIn8IS2JA"/>
    <h4 style={{textAlign: "center", fontSize: "25px", position: "absolute", marginLeft:"770px", marginTop: "-300px",marginRight:"50px"}}>
    Welcome to Sunset Inn, where culinary excellence meets breathtaking views.Indulge in our exquisite dishes crafted with fresh, 
    local ingredients while enjoying the stunning sunset over the horizon. A dining experience like no other.
    
   </h4>
   <Button variant="primary" href="./resto" style={{ backgroundColor: "#818181", borderRadius:"0%", borderColor:"#818181", marginTop:"-260px", marginLeft:"1200px"}}>Explore</Button>
   </div>
    </div>

);
};
export default Home;