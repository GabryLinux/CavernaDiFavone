import React from 'react'
import Br from '../br'
import Cr from '../Cr'
import Title from '../Title'

import ReaderTXT from './ReaderTXT'
import XIcon from './XIcon'
import Storia2 from '../../JSONfiles/Storia2.json'
import SecretNote from './SecretNote'

function SecondArticle() {
  return (
    <div className='w-full h-full py-10 px-10 md:px-0'>
      <div className='w-full flex justify-center'>
        <img src={process.env.PUBLIC_URL+ 'IMGs/Liberta.png'}></img>
      </div>
      <div className='w-full md:w-1/2 md:translate-x-1/2 py-10'>
        {//profilo autore + nome autore + data pubblicazione
        <div className='w-full flex '>
            <div className='rounded-full'>
                <img></img>
            </div>
            <div className='text-lg text-gray-400 pr-4'>
              Gabriele Favazzi M. 
            </div>
            <div className='text-lg text-gray-400'>
                15/03/2022
            </div>
        </div>
        }
        
        <div className='py-2'>
          <Title>Uno spirito difficile a morire</Title>
        </div>
        
        <Br/>
        <div className='w-full md:w-3/4  text-gray-500 whitespace-pre-wrap break-words'>
            <p>{
                `Cari cuozzi, come va? Spero almeno voi bene. Vi ricordate il caso Fisher? Ecco, c’è stato un leak di informazioni. Un noto hacker della rete, meglio conosciuto come 'Wall', afferma di essere riuscito a infiltrarsi nel dispositivo del giovane per fare luce sul mistero ancora fitto della sua scomparsa. Ebbene, ha fatto trapelare alcuni file dal suo cellulare, sopratutto le note dell'app blocco note, che offrono un interessante spaccato del suo pensiero piú sincero, piú intimo, quello celato agli occhi dei suoi follower. Non crederete mai ai vostri occhi.\n Sperando nell'autenticitá di questi dati, propongo qui di seguito la lettura di alcune note chiave per svelare il mistero.\n\n\n\n`
            }</p>
        </div>
        <div>
          {console.log(Storia2)}
          {
            
            Storia2.Storia2.map((x,index)=>{
              if(index != 2)
              return <ReaderTXT titolo={x.Data} contenuto={x.TxT} commento={x.Commento} IMGsrc={x.IMGsrc}>
                
              </ReaderTXT>
              else{
                return <ReaderTXT titolo={x.Data} contenuto={x.TxT} commento={x.Commento} IMGsrc={x.IMGsrc} math></ReaderTXT>
              }
            })
          }
          <SecretNote />
        </div>
        
      </div>
      
    </div>
  )
}

export default SecondArticle