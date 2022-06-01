import logo from './logo.svg';
import './App.css';
import Circle from './Components/Circle';
import Navbar from './Components/TopBar/Navbar';
import IntroductionPage from './Components/FirstArticlePage/IntroductionPage/IntroductionPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FisherCase from './Components/FirstArticlePage/MainFirstPage/FisherCase';
import SecondArticle from './Components/SecondArticlePage/SecondArticle';
import 'katex/dist/katex.min.css';
function App() {
  return (
    <div className='flex w-full h-full flex-col relative'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroductionPage/>}/>
            <Route path="/IlCasoFisher" element={<FisherCase/>} />
            <Route path="/2ndPart" element={<SecondArticle/>} />
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
