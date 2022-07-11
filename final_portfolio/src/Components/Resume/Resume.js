import React from "react";
import resume from "../../assets/resume.pdf";
const Resume = () => {
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <iframe src={resume} style={{width:"100%", height:"100%"}}></iframe>
    </div>
  );
};

export default Resume;
