import React, { useState } from 'react'
import Title from '../Title'
import ModalImage from 'react-modal-image'

import XIcon from './XIcon'
import MathTXTArticle from './MathTXTArticle'

function ReaderTXT({titolo,contenuto,commento,IMGsrc,math}) {
  const resLocation = process.env.PUBLIC_URL + "/IMGs/"
  const [isActive,setActive] = useState(false)
  return (
      <div className='pb-4'>
        <div className='w-full h-full border border-gray-400 flex flex-col '>
            <div className='w-full h-12 flex justify-between  bg-white items-center border-b'>
                <div className='text-sm text-black pl-4 text-ellipsis overflow-hidden whitespace-nowrap w-1/2'>{titolo} - Blocco note di Windows</div>
                <div className='w-1/4 h-full flex items-center justify-end ' >
                    <button className='h-full flex items-center px-5 hover:bg-gray-300 duration-150' onClick={()=>setActive(false)}>
                        <div className='w-4 h-1 border border-white bg-black '></div>
                    </button>
                    <button className='h-full flex items-center px-5 hover:bg-gray-300 duration-150 ' onClick={()=>setActive(!isActive)}>
                        <div className='w-3 h-3 border border-black '></div>
                    </button>
                    <button className='h-full flex items-center px-5 hover:bg-red-600 group duration-150'  onClick={()=>setActive(false)}>
                        <div className='w-4 h-4 border-black '>
                            <XIcon />
                        </div>
                    </button>
                </div>
            </div>
            <p className={` font-mono text-justify h-full text-base ${isActive ? 'max-h-96 px-6 py-5 ' : 'max-h-0 px-0 py-0'} duration-200 overflow-auto`}>
                {contenuto}
            </p>
        </div>
        {
            !math ?
                <p className={`px-4 text-justify py-4 border border-gray-300 h-full mt-1 ${isActive ? 'max-h-96' : 'max-h-0 px-0 py-0 mt-0'} duration-200 overflow-auto whitespace-pre-wrap`}>
                <Title size={'text-2xl'}>Commento</Title>
                <p className='text-gray-600 pt-2'>{commento}</p>
                {IMGsrc &&
                    <img src={resLocation + IMGsrc} ></img>
                }
                </p>
                :
                <MathTXTArticle IMGsrc={IMGsrc} commento={commento} isActive={isActive}/>
        }
        
    </div>
  )
}

export default ReaderTXT