"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Header from "./component/header";
import Banner from "./component/banner";
import Content from './component/content';
export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        pages(where: {name: "Homepage"}) {
          nodes {
            homepage {
              banners {
                bannerImage {
                  node {
                    sourceUrl
                  }
                }
                bannersTitle
                bannerDescription
                bannerButton {
                  title
                  url
                  target
                }
              }
              homeAboutTitle
              homeAboutSubtitle
              homeAboutButton {
                target
                title
                url
              }
              homeAboutVideoImage {
                node {
                  sourceUrl
                }
              }
              homeAboutVideoUrl
              homeAboutDescription
              homeCategoryTitle
              homeCategorySubtitle
              homeServicesTitle
              homeServicesSubtitle
              homeColoursTitle
              homeColoursSubtitle
              homeColoursButton {
                target
                title
                url
              }
              homeJoinBackgroundImage {
                node {
                  sourceUrl
                }
              }
              homeJoinTitle
              homeJoinSubtitle
              homeJoinButton {
                target
                title
                url
              }
              homeJoinDescription
              blogTitle
              blogSubtitle
              categories {
                link
                title
                image {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            seo {
              canonical
              metaKeywords
              metaDesc
              title
              opengraphType
              opengraphSiteName
              opengraphTitle
              opengraphDescription
              opengraphUrl
              schema {
                raw
              }
              opengraphImage {
                mediaItemUrl
              }
            }
          }
        }
        allColourCategory(where: {slug: "popular"}) {
          nodes {
            name
            colours {
              nodes {
                title
                slug
                colourInfo {
                  selectColor
                  colourRgb
                }
              }
            }
          }
        }
        blogs {
          nodes {
            featuredImage {
              node {
                sourceUrl
                slug
              }
            }
            slug
            title
            date
          }
        }
      }`;

      try {
        const response = await fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        console.log(result)
        setData(result.data); 
      } catch (error) {
        console.error('Error fetching GraphQL data:', error);
        setError(error); 
      }
    };

    fetchData();
  }, []);

  
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  
  if (!data || !data.pages || !data.pages.nodes.length) {
    return <div>Loading...</div>;
  }

  const homepage = data.pages.nodes[0].homepage; 
  const blogs = data.blogs.nodes; 
  // console.log(blogs)
  const colorCategories = data.allColourCategory.nodes;

  return (
    <div>
      <Header />
      <Banner value={homepage}/>
      <Content value={homepage} value2={colorCategories} value3={blogs}/>

     
      {/* {homepage.banners.map((banner, index) => (
        <div key={index}>
          <Image src={banner.bannerImage.node.sourceUrl} alt={banner.bannersTitle} width={1336} height={650} />
          <h2>{banner.bannersTitle}</h2>
          <p>{banner.bannerDescription}</p>
          <a href={banner.bannerButton.url} target={banner.bannerButton.target}>{banner.bannerButton.title}</a>
        </div>
      ))}

      */}
    </div>
  );
}
