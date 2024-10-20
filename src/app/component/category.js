import React from "react";
import Image from "next/image";

const category = ({ value }) => {
  const { homeCategorySubtitle, homeCategoryTitle, categories } = value;
  const firstCategory = categories[0];
  const filteredCategories = categories.slice(1);
  return (
    <div className="mt-10">
      <h2 className="text-xl pt-4 pb-3 px-12 font-bold">{homeCategorySubtitle} Categories</h2>
      <h1 className="text-3xl font-bold mb-5 px-12">{homeCategoryTitle}</h1>
      <div className="flex categories-section px-12 space-x-8">
        <div className="fist-section">
          <div className="categories">
            <div className="category-card">
              <a href={firstCategory.link}>
                <Image
                className="first-img"
                  src={firstCategory.image.node.sourceUrl}
                  alt={firstCategory.title}
                  width={700} 
                  height={200} 
                />
                <div className="flex justify-between px-10 fist-title">
                  <h3 className="text-2xl font-bold">{firstCategory.title}</h3>
                  <button className="first-section-button">Read More</button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="scond-section grid grid-cols-2  gap-4 pl-20">
  {filteredCategories.map((category, index) => (
    <div key={index} className="category-item">
      <a href={category.link}>
        <Image 
          className="second-width"
          src={category.image.node.sourceUrl} 
          alt={category.title} 
          width={280} 
          height={300} 
        />
        <div className="scond-item">
        <h3 className="scont-title">{category.title}</h3>
        </div>
        
      </a>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default category;
