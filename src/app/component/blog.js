import React from 'react'
import Image from "next/image";

const blog = ({value3,value}) => {
    console.log("blog",value3)
    const {
        blogTitle,
        blogSubtitle,
      } = value;
  return (
    <div className='mt-20'>
      <div className=''>
      <h2 className='px-12 text-xl font-bold mb-2'>{blogSubtitle}</h2>
      <h1 className='px-12 text-4xl font-bold mb-2'>{blogTitle}</h1>
      
      </div>
      <div className='all-cont'>  
      <div className='first'>
      {value3.slice(0, 2).map((blogPost) => (
    <div key={blogPost.slug} className="blog-post mt-6" 
    style={{
        backgroundImage: `url(${blogPost.featuredImage.node.sourceUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px', 
        color: 'white', 
      }}>
        <div className='mt-20'>
      <p className='mb-3 '>{new Date(blogPost.date).toLocaleDateString()}</p>
        <h2 className='text-xl font-bold'>{blogPost.title}</h2>
        
      </div>
        
        
    </div>
))}
        </div>
        <div className='second'>
        {value3.slice(2, 3).map((blogPost) => (
    <div key={blogPost.slug} className="blog-post2 mt-6" 
    style={{
        backgroundImage: `url(${blogPost.featuredImage.node.sourceUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px', 
        color: 'white', 
      }}>
      <div className='mt-64'>
      <p className='mb-2'>{new Date(blogPost.date).toLocaleDateString()}</p>
        <h2 className='mb-2 text-xl font-bold'>{blogPost.title}</h2>
        
        <a className='blog-btn ' href={`/blog/${blogPost.slug}`}>Read More</a>
      </div>
       
    </div>
))}
        </div>
        <div className='third'>
        {value3.slice(0, 2).map((blogPost) => (
    <div key={blogPost.slug} className="blog-post mt-6" 
    style={{
        backgroundImage: `url(${blogPost.featuredImage.node.sourceUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px', 
        color: 'white', 
      }}>

<div className='mt-20'>
      <p className='mb-3'>{new Date(blogPost.date).toLocaleDateString()}</p>
        <h2 className='text-xl font-bold'>{blogPost.title}</h2>
        
      </div>
        
        
    </div>
))}
        </div>
      </div>
    </div>
  )
}

export default blog


// {value3.map((blogPost) => (
//     <div key={blogPost.slug} className="blog-post">
//         <Image src={blogPost.featuredImage.node.sourceUrl} alt={blogPost.title} width={280} 
// height={300}/>
//         <h2>{blogPost.title}</h2>
//         <p>{new Date(blogPost.date).toLocaleDateString()}</p>
//         <a href={`/blog/${blogPost.slug}`}>Read More</a>
//     </div>
// ))}