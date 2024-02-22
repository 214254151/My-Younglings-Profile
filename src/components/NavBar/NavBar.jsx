import "./NavBar.css";
import React from "react";


function navBar() {
  return (
     <div className="nav-bar">
          <img className="logo" alt="logo" src="logo.png" />
          <div className="menu-cage">
            <div className="home-cage">
              <div className="text-wrapper">Home</div>
            </div>

            <div className="about-cage">
              <div className="text-wrapper">About</div>
            </div>

            <div className="services-cage">
              <div className="text-wrapper">Services</div>
            </div>

            <div className="projects-cage">
              <div className="text-wrapper">Projects</div>
            </div>

            <div className="contact-cage">
              <div className="text-wrapper">Contact</div>
            </div>
          </div>
        </div>
  );
};

export default navBar;






// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Home />} />
          
//           <Route path="/about" element={<About />} />
//           <Route path="/comment" element={<Comment />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/product" element={<Product />} />
         
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };

// export default App;