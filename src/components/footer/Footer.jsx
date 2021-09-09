import React from "react";
import Information from "./Informations";
import About from "./About";

//GET about _ START
const getAbout =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aspernatur placeat dolor culpa, fugiat blanditiis, tempora reiciendis unde natus at ullam, atque odio quam nisi modi totam voluptate neque perspiciatis";
//GET about _ END

function Footer() {
  return (
    <div className="page-content">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="about-me">
            <div className="block-title">
              <h3>
                About <span>Me</span>
              </h3>
            </div>
            <div>
              <About About={getAbout} />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <ul className="info-list">
            <Information
              Info={[
                { title: "Age", value: "23" },
                { title: "ResidenceUSA", value: "USA" },
                { title: "AddressLos", value: "Los Angeles, USA" },
                { title: "E-mail", value: "email@example.com" },
                { title: "Phone", value: "912-870-3992" },
                { title: "Freelance", value: "Avalibale" },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
