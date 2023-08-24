import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./data";
import Spinner from "react-bootstrap/Spinner";
import image from "../Assets/comingSoon-gif.gif";
const Project = () => {
  //   const [Spin, setSpin] = useState(true)
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setSpin(false)
  //     }, 1500)
  //   })

  return (
    <>
      <img src={image} width="100%"/>

      {/* {
        Spin ? <div className='d-flex justify-content-center align-items-center' style={{height:"90vh"}}>
          <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading...
        </div> : <div className='container'>
          <h2 className='text-center mt-2'>Projects</h2>
          <div className='card_div'>
            <div className='row d-flex justify-content-around align-items-center'>
              <Card style={{ width: '20rem', height: '18rem' }} className='mt-4 mb-4'>
                <Card.Img variant="top" style={{ width: '20rem', marginLeft: -13 }} src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Car Renta System</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='card_div'>
            <div className='row d-flex justify-content-around align-items-center'>
              <Card style={{ width: '20rem', height: '18rem' }} className='mt-4 mb-4'>
                <Card.Img variant="top" style={{ width: '20rem', marginLeft: -13 }} src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Car Renta System</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='card_div'>
            <div className='row d-flex justify-content-around align-items-center'>
              <Card style={{ width: '20rem', height: '18rem' }} className='mt-4 mb-4'>
                <Card.Img variant="top" style={{ width: '20rem', marginLeft: -13 }} src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Car Renta System</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      } */}
    </>
  );
};
export default Project;
