import React from 'react';
import Image from "next/image";

const About = ({ value }) => {
  
  const {
    homeAboutTitle,
    homeAboutSubtitle,
    homeAboutDescription,
    homeAboutButton,
    homeAboutVideoImage,
    homeAboutVideoUrl,
  } = value;

  return (
    <div className='flex about-main'>
      <div className='content about-dec'>
        
        <h1 className='text-2xl pb-4'>{homeAboutSubtitle}</h1>
        <h1 className='text-3xl font-bold mb-5'>{homeAboutTitle}</h1>
        <div className='mb-9' dangerouslySetInnerHTML={{ __html: homeAboutDescription }} />
        <a className='about-btn' href={homeAboutButton.url} target={homeAboutButton.target}>
          {homeAboutButton.title}
        </a>
      </div>
      <div className='video'>
        <Image className='video-img' src={homeAboutVideoImage.node.sourceUrl} alt="About Video" 
         width={590}  
         height={360} />
        <a className='watch' href={homeAboutVideoUrl} target="_blank" rel="noopener noreferrer">
          Watch Video
        </a>
      </div>
    </div>
  );
};

export default About;
