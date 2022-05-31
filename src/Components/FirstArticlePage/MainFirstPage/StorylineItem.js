import React, { useEffect, useRef, useState } from 'react'
import Title from '../../Title'
import StorylineContent from './StorylineContent';
import storylineContent from './StorylineContent';

function StorylineItem({Date,TItle,SummaryContent,ArticoloContent,srcIMG,Briciola,isChecked,index,spin}) {

  var InfoRef = useRef();
  var storyRef = useRef();
  useEffect(()=>{
    
  })

  const [isActive,setActive] = useState(false);
  const [isHover,setHover] = useState(false);

  var onHover = ()=>{
      InfoRef.current.style.opacity = "1"
      setHover(true)
      console.log(isHover)
      
  }

  var onMouseLeave = ()=>{
        InfoRef.current.style.opacity = "0"
        setHover(false) 
  }

  return (
      <>
        {
            //<StorylineContent storyRef={storyRef} ArticoloContent={ArticoloContent} srcIMG={srcIMG} Briciola={Briciola} isActive={isChecked}/>
        }
	
        <div className='w-full flex justify-start relative'>
        <div className={`w-10 flex justify-start items-center flex-col group ${spin && 'max-w-0 overflow-hidden'} duration-200`}>
	    <label htmlFor={index} className="w-auto">
            <div className={`w-auto min-w-fit h-14 rounded-full px-1 py-1 ${index != 9 ? (isChecked ? 'bg-green-700 text-white' : 'bg-white text-black') : 'bg-blue-700 text-white' } focus:text-white hover:bg-green-700 hover:text-white border-2 border-green-700 flex items-center justify-center cursor-pointer`}  onMouseEnter={()=>onHover()} onMouseLeave={()=>onMouseLeave()} onFocus={()=>setActive(true)} onBlur={()=>setActive(false)} >
                <div>
                    {Date}
                </div>
                <div className='absolute'>

                </div>
            </div>
	    </label>
            <div className='w-1 h-20 bg-blue-700 rounded-t-full'></div>
            {/*<div className='absolute left-20 top-5 h-full border border-black' style={{width:"88%"}}>
                <div>
                    Analisi roba fatto ecc
                </div>
            </div>*/}
            
            <div className={`w-64 h-auto absolute left-10  md:pl-2 flex-row opacity-0  duration-300 z-50 xl:flex hidden ${TItle == "" && 'hidden'} `} ref={InfoRef}>
            {isHover && <>
                <div className='h-full pl-2 flex items-end justify-end'>
                    <div className='w-0 h-0 border-r-8 border-t-8 border-b-8 border-t-transparent border-b-transparent border-green-600 translate-y-5'></div>
                </div>
                <div className='w-full px-4 py-4 border-2 rounded-3xl border-green-600 bg-white flex flex-col'>
                    <Title size="text-lg">{TItle}</Title>
                    <div className='w-full bg-white group-hover:flex hidden'>
                        {SummaryContent}
                    </div>
                </div>
            </>}
            </div>
            
        </div>
        
        
    </div>
    
    </>
  )
}

export default StorylineItem