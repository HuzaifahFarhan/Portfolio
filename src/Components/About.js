import React from 'react'

const About = () => {
  return (
    <div className='container mb-3 about_container' style={{ minHeight: "100%" }}>
      <div className='row main-container d-flex justify-content-around flex- wrap'>
        <div className='col-md-5 left_container mt-5' style={{ width: 500 }}>
          <h2>Muhammad Huzaifah</h2>
          <p style={{ color: "#666", letterSapacing: ".5px", marginTop: 2, lineHeight: 2 }}>Passionate MERN stack developer with extensive experience in building dynamic web applications. Proficient in MongoDB, Express.js, React, and Node.js. Committed to delivering high-quality code and exceptional user experiences. Strong problem-solving skills and a knack for creating scalable and efficient solutions. Excited to contribute to innovative projects and collaborate with fellow developers.
          </p>
        </div>
        <div className='col-md-5 right_container mt-3'>
          <img width="100%" src="about.svg" />
        </div>
      </div>
    </div>
  )
}

export default About
