import React from "react";

function About({ about, logo, image = "https://via.placeholder.com/215" }) {

  return (
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  )
}
export default About;