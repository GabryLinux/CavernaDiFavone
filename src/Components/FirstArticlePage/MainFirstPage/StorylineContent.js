import React, { useEffect, useRef, useState } from 'react'
import ReactFormatter from 'react-text-format'
import FormattedText from 'formatted-text'
import ModalImage from 'react-modal-image'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import src from 'formatted-text';

function StorylineContent({ArticoloContent,srcIMG,Briciola,isActive,TItle,Audioo,Videoo,spin}) {
  const resLocation = process.env.PUBLIC_URL + "/IMGs/"
  var storyRef = useRef();
  const [articoloActive,setArticolo] = useState(false);
  const [passedTime,setPassedTime] = useState(false);
  setTimeout(()=>setPassedTime(true),1000);
  useEffect(()=>{
    storyRef.current.style.opacity = "0"
    storyRef.current.style.maxWidth = "0px"
    storyRef.current.style.display = "none"
  },[])
  useEffect(()=>{

    if(isActive) {
      storyRef.current.style.display = "flex"
      storyRef.current.style.opacity = "1" 
      storyRef.current.style.maxWidth = "5000px"
    }
    else {
      storyRef.current.style.opacity = "0"
      storyRef.current.style.maxWidth = "0px"
      storyRef.current.style.display = "none"
    }

  },[isActive])

  

  var testo ='\n a \n vbaaaaaaaaaaaaaaaaasdsddddddddddddddddddddddddddddddddddzxcccccc\n\nccccccccccccccccccccccccccccccccc'
  return (
    <div className={`absolute right-0 lg:left-20 pb-10 ${spin ? 'w-full' : 'w-5/6'}  h-auto border-gray-500 z-30 flex flex-row duration-300 justify-between`} ref={storyRef} >
        <div className='w-full xl:flex hidden flex-col shadow-md  max-h-screen overflow-auto  rounded-xl border-4   border-white px-5 py-5'>
        <h1 className='text-5xl pb-5 px-5 bg-white z-50 '>{TItle}</h1>
          <div className='flex flex-col xl:flex-row justify-between'> 
            <div className='flex xl:hidden  flex-col w-48'>
              {
                passedTime && srcIMG && srcIMG[0].map(x=>{
                  return <ModalImage small={resLocation + x} large={resLocation + x} hideDownload hideZoom></ModalImage>
                })
              }
            </div>
            
            <div className='w-full overflow-auto px-4 pt-4 text-left bg-white' style={{ whiteSpace: "pre-line", overflowWrap: "break-word" }}>
                {ReactHtmlParser(ArticoloContent)}
                {
                  Audioo && 
                  <div className='w-full flex justify-end py-2 '>
                    <audio controls className='w-full'>
                      <source src={process.env.PUBLIC_URL+'/AUDIOs/'+Audioo} /> 
                    </audio>
                  </div>
                }{
                  Videoo && 
                  <div className='w-full flex justify-end py-2 '>
                    <video controls className='w-full'>
                      <source src={process.env.PUBLIC_URL+'/IMGs/'+Videoo} /> 
                    </video>
                  </div>
                }
                <div className='py-4'>
                  {
                      srcIMG && srcIMG[1].map((x,index)=>{
                        if(index==0)
                        return <ModalImage small={resLocation + x} large={resLocation + x} hideDownload hideZoom></ModalImage>
                      })
                    }
                  
                </div>
                <div className={`${Briciola == "" ? 'hidden' : 'flex'} flex-col py-4`}>
                  <p className='text-lg font-bold pb-2'>Approfondimento :</p>
                  <p>{`${Briciola}`}</p>
                  <div >
                  {
                      srcIMG && srcIMG[1].map((x,index)=>{
                        if(index==1)
                        return <ModalImage small={resLocation + x} large={resLocation + x} hideDownload hideZoom></ModalImage>
                      })
                    }
                  </div>
                </div>
              </div>
          </div>
        </div>
      <div className='flex justify-end'>
        <div className='flex flex-col xl:hidden'>
          <h1 className='text-5xl pb-5 px-5 xl:sticky top-0 bg-white shadow-md z-50'>{TItle}</h1>
          <div className='flex flex-col xl:flex-row justify-between'> 
            <div className='flex xl:hidden  flex-col w-full'>
                  {  srcIMG &&
              <div className={`xl:hidden xl:w-0 flex flex-col w-full h-full border px-2 py-2 border-gray-200`}>
                <div className='text-2xl font-bold pb-2 border-b'>
                    Post sotto analisi
                    <p className='text-lg font-light'>(Clicca sulla foto per maggiori dettagli)</p>
                </div>
              {
            srcIMG && srcIMG[0].map(x=>{
              console.log(x)
              return <ModalImage small={resLocation + x} large={resLocation + x} hideDownload hideZoom></ModalImage>
            })
          }
        </div>
      }
            </div>
            
            <div className='w-full overflow-auto px-4 pt-4 text-left ' style={{ whiteSpace: "pre-line", overflowWrap: "break-word" }}>
                {ReactHtmlParser(ArticoloContent)}
                {
                  Audioo && 
                  <div className='w-full flex justify-end py-2 '>
                    <audio controls className='w-full'>
                      <source src={process.env.PUBLIC_URL+'/AUDIOs/'+Audioo} /> 
                    </audio>
                  </div>
                }{
                  Videoo && 
                  <div className='w-full flex justify-end py-2 '>
                    <video controls className='w-full'>
                      <source src={process.env.PUBLIC_URL+'/IMGs/'+Videoo} /> 
                    </video>
                  </div>
                }
                <div className='py-4'>
                  {
                      srcIMG && srcIMG[1].map((x,index)=>{
                        if(index==0)
                        return <ModalImage small={resLocation + x} large={resLocation + x} hideDownload hideZoom></ModalImage>
                      })
                    }
                  
                </div>
                <div className={`${Briciola == "" ? 'hidden' : 'flex'} flex-col py-4`}>
                  <p className='text-lg font-bold pb-2'>Approfondimento :</p>
                  <p>{`${Briciola}`}</p>
                  <div >
                  {
                      srcIMG && srcIMG[1].map((x,index)=>{
                        if(index==1)
                        return <ModalImage small={resLocation + x} large={resLocation + x} hideDownload hideZoom></ModalImage>
                      })
                    }
                  </div>
                </div>
              </div>
          </div>
        </div>
      {  srcIMG &&
        <div className={`hidden w-0 xl:flex flex-col xl:w-3/5 h-full border px-2 py-2 border-gray-200`}>
          <div className='text-2xl font-bold pb-2 border-b'>
              Post sotto analisi
              <p className='text-lg font-light'>(Clicca sulla foto per maggiori dettagli)</p>
          </div>
        {
            srcIMG && srcIMG[0].map(x=>{
              console.log(x)
              return <ModalImage small={resLocation + x} large={resLocation + x} hideDownload hideZoom></ModalImage>
            })
          }
        </div>
      }
        
      </div>  
    </div>
  )
}

export default StorylineContent