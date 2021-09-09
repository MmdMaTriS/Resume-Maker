import React from "react";
import Avatar from "./Avatar";
import PersonName from "./PersonName";
import SocialMedias from "./Socialmedias";
import Description from "./Titles/Description";
import Subtitle from "./Titles/Subtitle";

//GET Avatar Data _ START
const getSoruce = "public/images/photo.png";
const getAlt = "My_Profile";
//GET Avatar Data _ END

//GET PersonName _ START
const PName = "Mohammad Fard";
//GET PersonName _ END

//GET Title _ START
const getTitle = "Web Designer";
//GET Title _ END

function Header() {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <Avatar Source={getSoruce} Alt={getAlt} />
        </div>

        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="title-block">
            <div>
              <PersonName PName={PName} />
            </div>
            <div className="owl-carousel text-rotation">
              <Subtitle Title={getTitle} />
              <Description
                Description={[
                  { desText: "Frontend-Developer" },
                  { desText: "HTML,CSS" },
                  { desText: "ReactJS" },
                ]}
              />
            </div>
          </div>

          <div className="social-links">
            <SocialMedias
              Links={[
                { name: "telegram", link: "http://telegram.com" },
                { name: "instagram", link: "http://instagram.com" },
                { name: "youtube", link: "http://youtube.com" },
                { name: "github", link: "http://github.com" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
