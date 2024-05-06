'use client'
import React from 'react';
import empty from '../../../public/empty.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useArticles } from '../../store/news.api';
import Global from '@/components/Global';

function NewsPage() {
  const { isLoading, error, data } = useArticles();
  if (isLoading) return 'Loading Articles...';
  if (error) console.log('An error occurred while fetching the user data ', error);

  const nav = [
    {
      id:1,
      title:'All',
      path:'/#all'
    },
    {
      id:2,
      title:'Feature',
      path:'/#feature'
    }
  ];

  return (
    <div className='m-6 ease-in duration-500'>
     <Global/>

      {/* nav */}
      <section className='  ease-in duration-500 cursor-pointer flex justify-center items-center gap-8 border-t border-b px-2 py-2 mt-4'>
     
     
     <i className="fi fi-rr-apps absolute left-0 mx-8"></i>
   
        {nav.map((nav) => (
          <Link href={nav.path} key={nav.id}>
            <p>{nav.title}</p>
          </Link>
        ))}
        
          <i className="fi fi-rr-search absolute right-0 mx-8"></i>
          
      </section>

      {/* featured */}
      <section id='featured' className='ease-in duration-500'>
        <div className='w-full lg:grid grid-cols-12 items-start mt-8'>
          <div className='col-span-9 grid grid-cols-12 gap-4 border-r px-4'>
            <div className='col-span-8'>
              {data.articles.length > 0 && (
                <Link href={{
                  pathname: `/${data.articles[1].description}`,
                  query: { description: data.articles[1].description,
                    content:data.articles[1].content,
                    title:data.articles[1].title,
                    image:data.articles[1].urlToImage
                  },
                }}>
                  <img className='rounded-lg w-full hover:-translate-y-1 hover:scale-100 duration-300' 
                  src={data.articles[1]?.urlToImage} 
                  alt="Article" />
                </Link>
              )}
              {data.articles.length > 0 && (
                <Link href={{
                  pathname: `/${data.articles[1].description}`,
                  query: { description: data.articles[1].description,
                    content:data.articles[1].content,
                    title:data.articles[1].title,
                    image:data.articles[1].urlToImage
                  },
                }}>
                  <p className='py-4 font-bold text-xl'>{data.articles[1].title}</p>
                </Link>
              )}
              <p className='pb-4 font-normal text-lg text-zinc-600'>{data.articles[1]?.description}</p>
            </div>
            <div className='col-span-4'>
              <div className='mb-4'>
                {data.articles.length > 0 && (
                  <Link href={{
                    pathname: `/${data.articles[2]?.description}`,
                    query: { description: data.articles[2]?.description,
                      content:data.articles[2]?.content,
                      title:data.articles[2]?.title,
                      image:data.articles[2]?.urlToImage
                    },
                  }}>
                    <img className='rounded-lg w-full hover:-translate-y-1 hover:scale-100 duration-300' src={data.articles[2].urlToImage} alt="Article" />
                  </Link>
                )}
                {data.articles.length > 0 && (
                  <Link href={{
                    pathname: `/${data.articles[2].description}`,
                    query: { description: data.articles[2].description,
                      content:data.articles[2].content,
                      title:data.articles[2].title,
                      image:data.articles[2].urlToImage
                    },
                  }}>
                    <p className='py-4 font-bold text-sm'>{data.articles[2].title.substring(0, 45) + "..."}</p>
                  </Link>
                )}
              </div>
              <div>
                {data.articles.length > 0 && (
                  <Link href={{
                    pathname: `/${data.articles[3].description}`,
                    query: { description: data.articles[3].description,
                      content:data.articles[3].content,
                      title:data.articles[3].title,
                      image:data.articles[3].urlToImage
                    },
                  }}>
                    <img className='rounded-lg w-full hover:-translate-y-1 hover:scale-100 duration-300' src={data.articles[3].urlToImage} alt="Article" />
                  </Link>
                )}
                {data.articles.length > 0 && (
                  <Link href={{
                    pathname: `/${data.articles[3].description}`,
                    query: { description: data.articles[3].description,
                      content:data.articles[3].content,
                      title:data.articles[3].title,
                      image:data.articles[3].urlToImage
                    },
                  }}>
                    <p className='py-4 font-bold text-sm'>{data.articles[3].title.substring(0, 45) + "..."}</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='flex items-center gap-2 pb-4 px-4'>
            {data.articles.length > 0 && (
                  <Link className='!w-1/2' href={{
                    pathname: `/${data.articles[4].description}`,
                    query: { description: data.articles[4].description,
                      content:data.articles[4].content,
                      title:data.articles[4].title,
                      image:data.articles[4].urlToImage
                    },
                  }}>

                    <img className='rounded-lg ' src={data.articles[4].urlToImage} alt="Article" />
                  </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                         <Link href={{
                          pathname: `/${data.articles[4].description}`,
                          query: { description: data.articles[4].description,
                            content:data.articles[4].content,
                            title:data.articles[4].title,
                            image:data.articles[4].urlToImage
                          },
                        }}>
                          <p className='py-4 font-bold text-sm'>{data.articles[4].title.substring(
                            0,
                            45
                          ) + "..."}</p>
                          </Link>
                )}
               
              </div>
            </div>
            <hr className='m-4' />
            <div className='flex items-center gap-2 pb-4 px-4'>
              {data.articles.length > 0 && (
                    <Link className='!w-1/2' href={{
                      pathname: `/${data.articles[5].description}`,
                      query: { description: data.articles[5].description,
                        content:data.articles[5].content,
                        title:data.articles[5].title,
                        image:data.articles[5].urlToImage
                      },
                    }}>
                      <img className='rounded-lg' src={data.articles[5].urlToImage} alt="Article" />
                      </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                      <Link  href={{
                        pathname: `/${data.articles[5].description}`,
                        query: { description: data.articles[5].description,
                          content:data.articles[5].content,
                          title:data.articles[5].title,
                          image:data.articles[5].urlToImage
                        },
                      }}>

                        <p className='py-4 font-semibold text-sm'>{data.articles[5].title.substring(0, 45) + "..."}</p>
                        </Link>
                )}
              </div>
            </div>

            <hr className='m-4' />
            <div className='flex items-center gap-2 pb-4 px-4'>
              {data.articles.length > 0 && (
                    <Link className='!w-1/2' href={{
                      pathname: `/${data.articles[7].description}`,
                      query: { description: data.articles[7].description,
                        content:data.articles[7].content,
                        title:data.articles[7].title,
                        image:data.articles[7].urlToImage
                      },
                    }}>

                      <img className='rounded-lg' src={data.articles[7].urlToImage} alt="Article" />
                      </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                      <Link  href={{
                        pathname: `/${data.articles[7].description}`,
                        query: { description: data.articles[7].description,
                          content:data.articles[7].content,
                          title:data.articles[7].title,
                          image:data.articles[7].urlToImage
                        },
                      }}>

                        <p className='py-4 font-semibold text-sm'>{data.articles[7].title.substring(0, 45) + "..."}</p>
                        </Link>
                )}
              </div>
            </div>
            <hr className='m-4' />
            <div className='flex items-center gap-2 pb-4 px-4'>
              {data.articles.length > 0 && (
                    <Link className='!w-1/2' href={{
                      pathname: `/${data.articles[8].description}`,
                      query: { description: data.articles[8].description,
                        content:data.articles[8].content,
                        title:data.articles[8].title,
                        image:data.articles[8].urlToImage
                      },
                    }}>
                      <img className='rounded-lg ' src={data.articles[8].urlToImage} alt="Article" />
                      </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                      <Link href={{
                        pathname: `/${data.articles[8].description}`,
                        query: { description: data.articles[8].description,
                          content:data.articles[8].content,
                          title:data.articles[8].title,
                          image:data.articles[8].urlToImage
                        },
                      }}>

                        <p className='py-4 font-semibold text-sm'>{data.articles[8].title.substring(0, 45) + "..."}</p>
                        </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='my-8'/>

      {/* all news */}
      {data.articles.map((article:any) => (
        <section id='all' key={article.content} className='ease-in duration-300 flex items-start gap-8 w-full mb-8 px-4 py-8'>
          {article.urlToImage ? (
            <Link href={{
              pathname: `/${article.description}`,
              query: { description: article.description,
                content:article.content,
                title:article.title,
                image:article.urlToImage
              },
            }} className='!w-1/2'>
              <img className='rounded-lg hover:-translate-y-1 hover:scale-100 duration-300 ' src={article.urlToImage} alt="Article" />
            </Link>
          ) : (
            <Link href={{
              pathname: `/${article.description}`,
              query: { description: article.description,
                content:article.content,
                title:article.title,
                image:article.urlToImage
              },
            }} className='!w-1/2'>
           <Image
          className='  !flex !justify-center w-full h-[100px]'
          src={empty}
          alt='/'
            />
              <p className='pt-2 flex justify-center'>No image to show!</p>
            </Link>
          )}

          <div className='w-1/2'>
            <Link href={{
              pathname: `/${article.description}`,
              query: { description: article.description,
                content:article.content,
                title:article.title,
                image:article.urlToImage
              },
            }}>
              <p className='text-lg font-bold py-4'>{article.title}</p>
            </Link>
            <p className=' text-zinc-600'>{article.description}</p>
          </div>
        </section>
      ))}
    </div>
  )
}

export default NewsPage;
