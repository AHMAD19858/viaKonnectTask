'use client'
import React from 'react'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import empty from '../../../../public/empty.svg'
import Global from '@/components/Global';
import Link from 'next/link';
import { useArticles } from '../../../store/news.api';

function detailsPage() {
  const searchParams = useSearchParams()
  const description = searchParams.get('description')
  const content = searchParams.get('content')
  const title = searchParams.get('title')
  const image = searchParams.get('image')
  const { isLoading, error, data } = useArticles();
  if (isLoading) return 'Loading Article...';
  if (error) console.log('An error occurred while fetching the user data ', error);
  
  return (
    <div>
 <div className=' my-8'>
 <Global/>
 </div>
    <div className=' col-span-12 lg:grid grid-cols-12 gap-4  my-8  '>
     
    <div className=' col-span-8 border-r px-8'>
    {image ? (
    <img  className=' rounded-lg w-full' src={image} alt="Article"  />

  ): ( 
  <div>
    
    <Image
          className=' !flex !justify-center w-full h-[100px]'
          objectFit='cover'
          src={empty}
          alt='/'
        />
          <p className='pt-2 flex justify-center'>No image to show!</p>
  </div>
      )}
   <p className='py-4 font-bold text-xl'>{title}</p>
   <p className=' font-medium text-base '>{description}</p>
   <p className='py-4 font-normal text-lg text-zinc-700'>{content}</p>

      </div>
      <div className='col-span-3'>
            <div className='flex items-center gap-2 pb-4 px-4'>
            {data.articles.length > 0 && (
                  <Link className='!w-1/2' href={{
                    pathname: `/${data.articles[10].description}`,
                    query: { description: data.articles[10].description,
                      content:data.articles[10].content,
                      title:data.articles[10].title,
                      image:data.articles[10].urlToImage
                    },
                  }}>

                    <img className='rounded-lg ' src={data.articles[10].urlToImage} alt="Article" />
                  </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                         <Link href={{
                          pathname: `/${data.articles[10].description}`,
                          query: { description: data.articles[10].description,
                            content:data.articles[10].content,
                            title:data.articles[10].title,
                            image:data.articles[10].urlToImage
                          },
                        }}>
                          <p className='py-4 font-bold text-sm'>{data.articles[10].title.substring(
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
                      pathname: `/${data.articles[11].description}`,
                      query: { description: data.articles[11].description,
                        content:data.articles[11].content,
                        title:data.articles[11].title,
                        image:data.articles[11].urlToImage
                      },
                    }}>
                      <img className='rounded-lg' src={data.articles[11].urlToImage} alt="Article" />
                      </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                      <Link  href={{
                        pathname: `/${data.articles[11].description}`,
                        query: { description: data.articles[11].description,
                          content:data.articles[11].content,
                          title:data.articles[11].title,
                          image:data.articles[11].urlToImage
                        },
                      }}>

                        <p className='py-4 font-semibold text-sm'>{data.articles[11].title.substring(0, 45) + "..."}</p>
                        </Link>
                )}
              </div>
            </div>

            <hr className='m-4' />
            <div className='flex items-center gap-2 pb-4 px-4'>
              {data.articles.length > 0 && (
                    <Link className='!w-1/2' href={{
                      pathname: `/${data.articles[12].description}`,
                      query: { description: data.articles[12].description,
                        content:data.articles[12].content,
                        title:data.articles[12].title,
                        image:data.articles[12].urlToImage
                      },
                    }}>

                      <img className='rounded-lg' src={data.articles[12].urlToImage} alt="Article" />
                      </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                      <Link  href={{
                        pathname: `/${data.articles[12].description}`,
                        query: { description: data.articles[12].description,
                          content:data.articles[12].content,
                          title:data.articles[12].title,
                          image:data.articles[12].urlToImage
                        },
                      }}>

                        <p className='py-4 font-semibold text-sm'>{data.articles[12].title.substring(0, 45) + "..."}</p>
                        </Link>
                )}
              </div>
            </div>
            <hr className='m-4' />
            <div className='flex items-center gap-2 pb-4 px-4'>
              {data.articles.length > 0 && (
                    <Link className='!w-1/2' href={{
                      pathname: `/${data.articles[15].description}`,
                      query: { description: data.articles[15].description,
                        content:data.articles[15].content,
                        title:data.articles[15].title,
                        image:data.articles[15].urlToImage
                      },
                    }}>
                      <img className='rounded-lg ' src={data.articles[15].urlToImage} alt="Article" />
                      </Link>
              )}
              <div>
                {data.articles.length > 0 && (
                      <Link href={{
                        pathname: `/${data.articles[15].description}`,
                        query: { description: data.articles[15].description,
                          content:data.articles[15].content,
                          title:data.articles[15].title,
                          image:data.articles[15].urlToImage
                        },
                      }}>

                        <p className='py-4 font-semibold text-sm'>{data.articles[15].title.substring(0, 45) + "..."}</p>
                        </Link>
                )}
              </div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default detailsPage