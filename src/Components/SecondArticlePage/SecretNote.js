import React, { useState } from 'react'
import Title from '../Title'
import MathTXTArticle from './MathTXTArticle'
import XIcon from './XIcon'

function SecretNote() {
    const [encryActive,setEncry] = useState(false)
    const [inputText,setText] = useState('')
    const titolo = "Manifesto della Nuova Alba.txt"
    const key = 69
    const [check,setCheck] = useState(false)
    const caesarCipher = function(s, k) {
        let result = '';
        
        for (let i = 0; i < s.length; i++) {
      
          let charCode = s[i].charCodeAt();
          // check that charCode is a lowercase letter; automatically ignores non-letters
          if (charCode > 96 && charCode < 123) {
            
            charCode += k % 26 // makes it work with numbers greater than 26 to maintain correct shift
            // if shift passes 'z', resets to 'a' to maintain looping shift
            if (charCode > 122) {
              charCode = (charCode - 122) + 96;
            // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
            } else if (charCode < 97) {
              charCode = (charCode - 97) + 123;
            }
          }
      
          if (charCode > 64 && charCode < 91) {
            
            charCode += k % 26
            
            if (charCode > 90) {
              charCode = (charCode - 90) + 64;
            } else if (charCode < 65) {
              charCode = (charCode - 65) + 91;
            }
          }
      
          result += String.fromCharCode(charCode);
        }
        return result
      }
    const contenuto = `Un’eclissi si è abbattuta sulla nostra societá: è lo spirito del capitalismo. Il pensiero, l’Economia, la politica, la societá, la religione: tutto sembra essere stato fagocitato da questo “sole nero“. Non sapendo ció che sta al di fuori delle sue fauci, crediamo che la luce, la verità, il fine della propria vita, si debba cercare nel suo stesso ventre oscuro. Il risultato? Abbiamo scavato così a fondo da aver generato colline impraticabili e scoperchiato vulcani di succhi gastrici che periodicamente eruttano e provocano disastri. Proviamo dispiacere e impotenza? Senza alcun dubbio, ma chi riesce effettivamente a notarlo in quest’oscurità. Non avendo una percezione totale della realtá, avvertiamo solo il nostro dolore, autobiasimandoci, in questa societá atomizzata.
    In veritá io vi dico che esistono alcuni individui eccezionali, sensibili, caparbi e audaci, grazie alla cui vista acuta riescono a scorgere debolmente i contorni del canale digerente. Io ho tentato di guidare la massa, ma questa ripetutamente si riveló indifferente; ma chi mai affiderebbe mai la propria vita ad una voce fluttuante nell’oscurità.
    La torcia del NOSTRO desiderio l’affido a voi, avanguardia degli audaci! Io sono morto come corpo, ora è vostro compito proteggere il mio spirito! Fate in modo che quella fiamma non si spenga mai! Ma badate bene: nel ventre del sole mostruoso soffiano 4 venti glaciali in tutte le direzioni che minacciano seriamente la NOSTRA missione.; Essi sino: l’economia, la politica, la religione e la cultura. Come ben capí Marx, l’aria gelida parte dall’economia e viene propagato da tutti gli altri ventagli. Ma tra questi, uno spira più debolmente: il vento della cultura. Prestate attenzione! È in questo vento più debole che risiede la nostra occasione di evasione dal mostro. 
    Una roccaforte è esposta a queste deboli raffiche: la scuola. Ë proprio tra le sue quattro mura che i giovani iniziano a raffreddarsi, a perdere la spontaneitá e l’immaginazione, a favore, invece, della pragmaticitá e della disillusione schiavizzanti. È qui che dobbiamo piantare le nostre radici. Soltanto cosí riusciremo a purificare la societá. La scuola sará la nostra base militare.
    Allora, miei seguaci, imbracciate le armi, indossate gli elmetti, rullate i tamburi e preparate le fanfare, perché io dichiaro ufficialmente GUERRA TOTALE, contro qualsiasi autorità, istituzione, la politica, l’economia e la religione. Il vostro compito, avanguardia degli audaci, sarà quello di violentare la morale di questo mondo perbenista attraverso gesti eclatanti, scandali, affermazioni ardite, rinvigorendo le membra flaccide di chi si è adagiato nella fredda oscurità. Il mondo deve incenerirsi di fronte agli accesi scontri ideologici, di fronte al desiderio ardente.
    Il nostro primo obiettivo sarà, dunque, liberare dalle grinfie del mostro la nostra base. Sinora questa non è stata altro se non una caserma proletaria. Per fermare gli ingranaggi, i rulli, di questa omologante fabbrica della conoscenza è necessario abolire i 2 strumenti simbolo della vecchia scuola: il martello dell’istruzione e la falce del voto.
    Con il martello, per generazioni, i grandiosi proletari di questa fabbrica, ossia i professori, hanno continuato a perpetrare un grave crimine: lo STUPRO delle menti. A ritmo insostenibile vengono impartite lezioni e svolte le verifiche per seguire un percorso di studi standardizzato e imposto a livello nazionale. L’argomento non piace? Non viene spiegato bene? Non viene per nulla spiegato? Caro studente, la colpa è solo tua se hai avuto la sfortuna di avere cattedre incompetenti, o meglio, burocrati che hanno solo l'obiettivo di adempiere ai propri doveri; e guai se ti ribelli! Il tuo compito è quello di svolgere bene le verifiche e di fare tutti gli esercizi, ogni giorno, tutti i giorni, per 9 mesi all’anno. Con questi ritmi alienanti si impedisce la realizzazione delle piene capacitá e della fantasia dell’allievo, che si ritrova a navigare tra le pagine dei libri, imparando forzatamente e a memoria un mare di informazioni che, il giorno dopo l’interrogazione, evapora totalmente dalla mente.
    L’altra arma funesta è il voto, il numero, il feticcio di tutta la storia del Capitalismo: con questo strumento, i professori diventano giudici della cultura e si arrogano il diritto di poter quantificare la conoscenza. Questi presunti “insegnanti”, o per meglio dire, burocrati del sistema, dietro l’ipocrita velo di ideali democratici, alimentano la propria presunzione di onniscienza. In “Realismo Capitalista”, il pensatore Mark Fisher afferma che nel capitalismo, soprattutto negli ultimi decenni, si sia affermata una tendenza: lo “Stalinismo di Mercato”, ossia: “l’attaccamento ai simboli dei risultati raggiunti, più che l’effettiva concretezza del risultato in sé”. La scuola non ne è esente. Il fine ultimo della scuola non è trasmettere l’amore per la cultura (anzi, se dobbiamo riconoscere un successo alla scuola è quello di averne trasmesso l’odio) né stimolare pensieri autonomi e originali. NO! Lo scopo di questa scuola è solo e solamente quello di permetterci di raggiungere un punteggio ≥60 agli esami di stato; è per questo motivo che gran parte di noi preferisce affinare le abilità da acrobata di bigliettini piuttosto che pappagallare ció che è scritto sui libri. Dopotutto, quello che conta è solo il risultato finale, quel numero marchiato sul foglio della verifica, non come lo si è conquistato. Ma non pensate che il problema del voto abbia valenza solo entro le 4 mura: in verità io vi dico, il voto, la valutazione, sono stati una delle piaghe dell’intera società moderna per tre motivi:
        1)Il voto causa alienazione rispetto al prossimo: l’individuo che viene oggettivizzato tenderá a sua volta a valutare il prossimo, il quale diventa, agli occhi dell’alienato, la somma di pure e semplici impressioni, totalmente superficiali e talvolta errate.
        2)Il voto disincentiva: proprio come una falce, una valutazione strappa e separa gli alunni (spesso) nei vari piani della piramide. Chi sta alla base continuerá a perpetuare la propria condizione perché fatalmente accettata. A chi domina la vetta viene invece richiesto un impegno sempre maggiore proprio per evitarne il declino. Nessuno studia per il solo e puro amore dello studio.
        3)Il voto riduce il concetto di apprendimento a un processo finito e determinato, che inizia in un determinato periodo e termina con l’esame finale.
    Rasa al suolo la vecchia scuola ed esiliati i burocrati del sistema, sta a noi ricostruire il paradiso della cultura; proprio quella ‘scholé’ il cui significato è stato tragicamente travisato dalla modernitá. Innanzitutto, in questo paradiso non v’è distinzione tra professore e alunno: lo vorrei ricordare, BRANCOLIAMO TUTTI NEL BUIO! è inconcepibile che qualcuno si possa ergere rispetto agli altri. Siamo tutti sia insegnanti che alunni, si impara sempre cosí come possiamo insegnare qualcosa di nuovo al prossimo. Se l’istruzione è stata finora una trasmissione omologante, alienante e unilaterale del pensiero (ossia lo STUPRO della mente), la Nuova scuola deve invece basarsi sull’orgia di riflessioni e pensieri che devono scontrarsi e penetrarsi nei dibattiti. La scuola deve essere aperta SEMPRE e a TUTTI: qui si trova la vera piazza della democrazia, un luogo in cui è possibile incontrare persone e opinioni diverse; inoltre, con l’abbattimento del voto, l’apprendimento non si limita ad un determinato periodo di vita; inoltre, in questo modo, il ritmo di apprendimento rallenterebbe per raggiungere un livello piú “umano”. Ma non basta. La persona deve innanorarsi della stessa struttura scolastica; aboliamo tutti i rigorosi vincoli che limitano e attanagliano gli interessi più autentici dei giovani: licenziate i collaboratori scolastici e lasciate che gli stessi studenti curino la scuola; soltanto cosí le lezioni di educazione civica ed ecologia avranno realmente effetto. Rendiamo la scuola la tela della creatività dello studente, il tempio dell’amore: non solo l’amore per l’otium culturale, ma anche il puro e semplice eros. Avete sentito bene miei discepoli, in questo tempio si deve poter fare pure l’amore!
    Io su questo terreno pianto il seme del “Sogno di una cosa”, di una riforma della coscienza, finalmente libero dal ventre fatiscente del “Sole Nero”.
    
    `
    const [msgEncrypted,setMsg] = useState(caesarCipher(contenuto,key))
    
    const resLocation = process.env.PUBLIC_URL + "/IMGs/"
    const [isActive,setActive] = useState(false)
    return (
        <div className='pb-4'>
          <div className='w-full h-full border border-gray-400 flex flex-col '>
              <div className='border-b border-gray-300 '>
                <div className='w-full h-10 flex justify-between  bg-white items-center '>
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
                <div className=' min-h-max h-auto mx-4 border border-gray-300 w-fit my-2  '>
                    
                    <input value={inputText} onChange={(e)=>setText(e.target.value)} placeholder="Inserisci la chiave per la decrittazione" className="border-2 border-gray-500 focus:border-blue-500 outline-none text-sm w-64 px-2"/>
                    <button className='hover:bg-blue-100 border-blue-300 hover:border text-sm h-full px-4' onClick={()=>{setMsg(caesarCipher(contenuto,key-inputText)); if(key == inputText) setCheck(true); else setCheck(false)}}>Decripta</button>
                </div>
                <p className={` font-mono text-justify h-full text-base ${isActive ? 'max-h-96 px-6 py-5 ' : 'max-h-0 px-0 py-0'} duration-200 overflow-auto whitespace-pre-line`}>
                    <p className={`${check ? 'opacity-1' : 'opacity-0'} text-green-500 text-base duration-200`}>Chiave trovata</p>
                    {msgEncrypted}
                </p>
              </div>
              
          </div>
          
          
      </div>
    )
}

export default SecretNote