import React from 'react';
import InitialPage from './InitialPage.jsx';
import GamePage from './GamePage.jsx';
import ResultsPage from './ResultsPage.jsx';
import {AppRoute} from '../settings.js';
import {getImages} from '../data.js';

function App({results=[]}){
    const [images, setImages] = React.useState([]);
    const [page, setPage] = React.useState(AppRoute.Initial);
    const [result, setResult] = React.useState(0);
    const [type, setType] = React.useState();
    const showResults = (count) =>{
      setResult(count);
      setPage(AppRoute.Results);
    };
    const handleReset = () =>{
      setPage(AppRoute.Initial);
    };
    const handelStart = (type) =>{
      setImages(getImages(type));
      setType(type);
      setPage(AppRoute.Game);
    };
    const getPage = (route) =>{
      switch(route){
        case AppRoute.Initial :
          return <InitialPage onStart={handelStart}/>;
        case AppRoute.Game :
          return <GamePage images={images} onShowResults={showResults} type={type}/>;
        case AppRoute.Results :
          return <ResultsPage results={results} result={result} onResetGame={handleReset}/>;
        default :
          return null;
      }
    };
    return getPage(page);
  }
export default App;