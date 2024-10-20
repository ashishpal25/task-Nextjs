import React from 'react'
import Image from "next/image";

const join = ({value}) => {
    console.log(value)
    const {
        
        homeJoinTitle,
        homeJoinSubtitle,
        homeJoinButton,
        homeJoinDescription,
        homeJoinBackgroundImage
       
      } = value;
  return (
    <div className='mt-20'>
      <div
        className='join'
        style={{
          backgroundImage: `url(${homeJoinBackgroundImage.node.sourceUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px', 
          color: 'white', 
        }}
        
      >
        <h2 className='text-xl font-bold mb-2'>{homeJoinSubtitle}</h2>
        <h1 className='text-4xl font-bold mb-2'>{homeJoinTitle}</h1>
        <p className='mb-2' dangerouslySetInnerHTML={{ __html: homeJoinDescription }} />
        <a className='joint-btn' href={homeJoinButton.url} target={homeJoinButton.target}>
          {homeJoinButton.title}
        </a>
      </div>
    </div>
  )
}

export default join
