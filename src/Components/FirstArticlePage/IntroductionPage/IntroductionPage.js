import React from 'react'
import Br from '../../br'
import Cr from '../../Cr'
import Title from '../../Title'
import RealismoCapitalista from '../../../IMGs/RealismoCapitalista.jpeg'
import { Link } from 'react-router-dom'

function IntroductionPage() {
  return (
    <div className='w-full h-full py-10 px-10 md:px-0'>
      <div className='w-full flex justify-center'>
        <img src={RealismoCapitalista}></img>
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
                03/03/2022
            </div>
        </div>
        }
        
        <div className='py-2'>
          <Title>Lo strano caso Fisher</Title>
        </div>
        
        <Br/>
        <div className='w-full md:w-3/4  text-gray-500 whitespace-pre-wrap break-words'>
            <div>
            Cari internauti, era da un bel po’ che non vi deliziavo con la rubrica “Misteri irrisolti” quindi ho deciso di accontentarvi, ma non fateci l’abitudine.
            </div>
            <Cr/>
            Bazzicando sul web sono incappato in una storia sin troppo incredibile per essere stata dimenticata cosí facilmente. Mi sto riferendo alla scomparsa di Jacopo Fisher, un giovane attivista di origini inglesi. 
            <Cr/>
            Raccogliendo le informazioni per l'articolo, i miei occhi brillarono di fronte a cotanta eccezionalitá; azzarderei a riassumere la complessa figura di Jacopo con "Ardito", per il coraggio con cui si é scagliato contro la mafia e la societá, e "Carismatico", poiché riuscí ad attirare a sé un gran numero di follower. Ve lo anticipo giá da ora: questa storia non ha un lieto fine ;(
            <Cr/>
            La tragedia cominciò il 22 Febbraio 2021: la sera del ritorno di Jacopo da un viaggio a Bologna, né sul treno né in stazione c’era traccia di lui. Che avesse sbagliato treno? Magari era erroneamente sceso prima della sua destinazione? Un altro dettaglio inquietante emerse: non solo il ragazzo ignorava le chiamate, ma il suo ultimo accesso WhatsApp risaliva a più di 3 ore prima. Ma dubbio genera dubbio: e se la sua scomparsa fosse stata pianificata da qualcuno che voleva sbarazzarsi del ragazzo? I genitori sapevano bene che Jacopo si era inimicato folte fronde di politici e industriali, per cui non esclusero questa tragica possibilità; il giorno successivo denunciarono la sua scomparsa alla polizia.
            <Cr/>
            La notizia si diffuse a macchia d’olio su tutti i giornali e s’aprì un vaso di pandora: da ogni dove, uomini, bambini, donne, mossi dall’ammirazione per il ragazzo, si improvvisarono investigatori; il giorno stesso in cui la notizia apparve, le segnalazioni alla polizia sembravano non finire mai; il giorno seguente già l’interesse sembrava affievolirsi. A 2 giorni dalla scomparsa, persino gli amici più cari ricordavano a stento il suo nome.
            <Cr/>
            Credo che Jacopo meriti più dell’oblio della stessa gente per cui si era sacrificato. 
            <Cr/>
            Ma l’ipotesi del rapimento è davvero plausibile? Cercherò, dunque, di dare una risposta al tragico mistero analizzando i post piú rilevanti direttamente dalla sua <a target={'_blank'} href="https://www.instagram.com/jacopo_fisher/">Pagina Instagram</a>
            
        </div>
        <div className='w-full flex justify-center py-10 '>
          <Link to={"/IlCasoFisher"}>
            <button className='px-4 py-2 border-2 hover:bg-green-800 hover:text-white transition-all duration-300 rounded-md '>Continua la storia</button>
          </Link>
       </div>
      </div>
      
    </div>
  )
}

export default IntroductionPage