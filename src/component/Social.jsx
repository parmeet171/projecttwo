import React from "react";

const Social = () => {
  return (
    <div className="socials">
      <div className="background">
        <h1>Follow our Socials:</h1>
        <div className="logo_container">
          <a className="one" href="">
            <div className="logo">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href="">
            <div className="logo">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </a>
          <a href="">
            <div className="logo">
              <i class="fa-brands fa-twitter"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
