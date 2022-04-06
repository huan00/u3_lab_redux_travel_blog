import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h4>Project Details</h4>
      <p>
        This is a MERN project, build using React and Redux in the front end.
        <br></br>
        Collabrated with 3 GA students to build this in a day of time.
      </p>
      <h5>Features</h5>
      <ul>
        <li>Create Review</li>
        <li>Add Comment to Post</li>
        <li>Click Like on Post</li>
        <li>Post are sorted from newest to oldest</li>
      </ul>
    </div>
  )
}

export default About
