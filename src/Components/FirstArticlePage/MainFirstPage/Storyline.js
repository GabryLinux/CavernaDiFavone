import React, { useRef, useState } from 'react'
import StorylineItem from './StorylineItem'
import StorylineContent from './StorylineContent.js'
import storia from '../../../JSONfiles/Storia.json'
import ArrowSVG from '../../ArrowSVG';

function Storyline() {
  const [isChecked, setIsChecked] = useState(false);
  const [spin,setSpin] = useState(false)
  const toggleCheck = e => {
    setIsChecked(() => !isChecked);
  };

 
 const handleRadioChange = e => {
  const { id } = e.currentTarget;
  setIsChecked(id); // Send back id to radio group for comparison
};

var textConclusione = 'Dopo il 20 Febbraio, del giovane piú nulla si seppe e ancora oggi alcuni appassionati del mistero, del complotto, o del paranormale elucubrano le piú strane teorie.\nLeggendo la storia del ragazzo, non posso negarlo, mi sono emozionato; vorrei solo avere un pizzico della sua audacia...\nAttendiamo pazientemente sue notizie'

  return (
    <>
    <button className='w-12 h-12 px-2 py-2 flex xl:hidden mt-5 border border-gray-500 top-5 sticky z-50 bg-white rounded-full' onClick={()=>setSpin(!spin)}>
      <ArrowSVG spin={spin}/>
    </button>
    <div className='h-full relative flex flex-col justify-start py-10 ' >
      <div className={`w-10 flex justify-start items-center flex-col group ${spin && 'max-w-0 overflow-hidden'} duration-200`}>
                        <div className={`w-20 h-14 rounded-full text-xl text-white bg-blue-700   flex items-center justify-center`}  >
                            <div>
                                2020
                            </div>
                        </div>
                        <div className='w-1 h-20 bg-blue-700 rounded-t-full'></div>
                      </div>
      {
        storia.Storia.map((x,index)=>{
          {
          }
          return <>
                  <input type={'radio'} checked={isChecked == index} onChange={e => handleRadioChange(e)} id={index} className="hidden"/>
                  <StorylineContent ArticoloContent={x.Content} srcIMG={x.imgSrc} Briciola={x.Briciola} isActive={isChecked==index} TItle={x.Summary.Title} Audioo={x.audioSrc} Videoo={x.videoSrc} spin={spin}/>
                  
                    <StorylineItem Date={x.Date} TItle={x.Summary.Title} SummaryContent={x.Summary.Content} ArticoloContent={x.Content} srcIMG={x.imgSrc} Briciola={x.Briciola} isChecked={isChecked==index} index={index} spin={spin}/>
                    {
                      index == 6 &&
                      <div className={`w-10 flex justify-start items-center flex-col group ${spin && 'max-w-0 overflow-hidden'} duration-200`}>
                        <div className={`w-20 h-14 rounded-full text-xl text-white bg-blue-700   flex items-center justify-center`}  >
                            <div>
                                2021
                            </div>
                        </div>
                        <div className='w-1 h-20 bg-blue-700 rounded-t-full'></div>
                      </div>
                    }
                 
                </> 
        })
      }
            <div className={`w-10 flex justify-start items-center flex-col group ${spin && 'max-w-0 overflow-hidden'} duration-200`}>
                <div className={`max-w-fit h-14 rounded-full text-xl text-white bg-blue-700   flex items-center justify-center px-2`}  >
                    <div>
                      Conclusione
                    </div>
                </div>
              <div className='w-1 h-20  rounded-t-full'></div>
            </div>
    </div>
    </>
  )
}

export default Storyline