import React from 'react'
import { BlockMath, InlineMath } from 'react-katex'
import Cr from '../Cr'
import Title from '../Title'

function MathTXTArticle({isActive,IMGsrc,commento}) {
  const resLocation = process.env.PUBLIC_URL + "/IMGs/"
  return (
    <p className={`px-4 text-justify py-4 border border-gray-300 h-full mt-1 ${isActive ? 'max-h-96' : 'max-h-0 px-0 py-0 mt-0'} duration-200 overflow-auto whitespace-pre-wrap`}>
            <Title size={'text-2xl'}>Commento</Title>
            <p className='text-gray-600 pt-2'>La riflessione espressa in questo file si colloca temporalmente verso gli inizi delle vacanze natalizie e come di tradizione, per aggiustare voti e argomenti entro la fine dell'anno, ecco accumularsi compiti e interrogazioni proprio a ridosso delle stesse vacanze. Probabilmente, Jacopo, oberato di lavoro, cercó di sfogare il suo stress in questo modo. Soffermiamoci ora sul concetto di Lavoro: in termini matematici il lavoro é l'integrale definita da a a b della Forza in funzione dello spostamento, ossia:</p>
            <BlockMath>\int_a^b F(s) ds</BlockMath>
            <p className='text-gray-600 pt-2'>In generale, l'integrale definito in un intervallo [a,b] di una funzione f(x), continua e positiva nell'intervallo, rappresenta l'area del trapezoide sottostante il grafico. Essa si ottiene dividendo in infinitesimi rettangoli l'area sottostante, ciascuno dei quali ha come base:
                <BlockMath math="base = \frac{b-a}{n} = \Delta x"></BlockMath>
                dove n é il numero di rettangoli che noi stiamo considerando.
                
                <Cr/>
                Mentre, l'altezza di questi rettangoli, invece, puó essere:
                <Cr/>  O il minimo della funzione all'interno dell'intervallo;in questo caso la somma di tutte le aree sn dei rettangoli minimi sará <BlockMath math="\sum_{i=1}^{n} s_n  \leq \int_a^bF(x)dx"></BlockMath>
                <Cr/>  O il massimo della funzione all'interno dell'intervallo; questa volta la somma di tutte le aree Sn dei rettangoli massimi sará <BlockMath math="\sum_{i=1}^{n} S_n \geq \int_a^bF(x)dx"></BlockMath>
                <Cr/> Facendo tendere all'infinito il numero dei rettangoli, la somma delle aree dei rettangoli minimi aumenterá, mentre quella dei massimi diminuirá, facendo tendere entrambi al valore esatto dell'area del trapezoide, ossia:
                <BlockMath math="\sum_{i=1}^{+\infty} s_n \leq \int_a^bF(x)dx \leq \sum_{i=1}^{+\infty} S_n "></BlockMath>
             </p>
             <img src={resLocation+'integrale.gif'}/>
            {IMGsrc &&
                <img src={resLocation + IMGsrc} ></img>
            }
    </p>
  )
}

export default MathTXTArticle