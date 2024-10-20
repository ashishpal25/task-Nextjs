import React from "react";
// import Image from "next/image";

const colour = ({ value, value2 }) => {
  const { homeColoursTitle, homeColoursSubtitle, homeColoursButton } = value;
  //   console.log(value2)
  const colorCategories = value2;

  return (
    <div className="main-color  mt-28">
      <div className="new-top flex justify-between ">
        <div className="top-content">
          <h2 className="px-12 text-xl font-bold mb-2">
            {homeColoursSubtitle}
          </h2>
          <h1 className="px-12 text-3xl font-bold mb-4">{homeColoursTitle}</h1>
        </div>
        <div className="top-button mt-5 mr-10">
          <a
            cl
            href={homeColoursButton.url}
            target={homeColoursButton.target}
            className="explore-button"
          >
            {homeColoursButton.title}
          </a>
        </div>
      </div>
      <div className="main-new-color">
        <div className="color-categories">
          {colorCategories.map((category, index) => (
            <div key={index} className="color-category">
              <div className="colours">
                {category.colours.nodes.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="colour-item"
                    style={{ backgroundColor: color.colourInfo.selectColor }}
                  >
                    <div
                      key={colorIndex}
                      className="colour-item1"
                      style={{ backgroundColor: color.colourInfo.selectColor }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="name-color">
              {category.colours.nodes.map((color, colorIndex) => (
                <div 
                  key={colorIndex} 
                  
                >
                  <h4>{color.title}</h4>
                  <p> {color.colourInfo.colourRgb}</p>
                </div>
              ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default colour;
