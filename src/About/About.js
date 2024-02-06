import React    from "react";
import template from "./About.jsx";

class About extends React.Component {
  render() {
    return template.call(this);
  }
}


const About = () => {
  return (
      <div>
          <h2>About</h2>
          {/* Add content for the About page */}
      </div>
  );
}

export default About;
