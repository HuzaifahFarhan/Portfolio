import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <>
      <div className='container home_container'>
        <div className='row home_innerdiv'>
          <div className='col-md-6 left_div'>
            <h2>Welcome to <span style={{ color: "#6c63ff" }}>Muhammad Huzaifah</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: "2px" }}>I am MERN stack developer showcasing expertise in MongoDB, Express.js, React, and Node.js. Highlights projects demonstrating robust full-stack development skills. Stay updated with industry trends through blog posts and resources. Open to collaboration and project opportunities. Explore my portfolio to see the power of the MERN stack in action.  </p>
            {/* <div className='btn_div mt-4'>
              <Button variant="dark" style={{
                backgroundColor: "#2f2d69", border: "none", borderRadius: 4, letterSpacing: "1px",
                marginRight: 24
              }}>Primary</Button>
              <Button variant="dark" style={{
                backgroundColor: "#6c63ff", border: "none", borderRadius: 4, letterSpacing: "1px",
              }}>Project</Button>
            </div> */}

          </div>

          <div className='col-md-6 right_div'>
            <img src="home.svg" />

          </div>
        </div>

      </div>

    </>
  )
}

export default Home
