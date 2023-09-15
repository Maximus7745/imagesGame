import React from 'react';
import GameHeader from './GameHeader.jsx';
import Grid from './Grid.jsx';
import Modal from './Modal.jsx';

function GamePage({images=[], onShowResults, type}){
    const [finishedItems, setFinishedItems] = React.useState([]);
    const [stepsCount, setStepsCount] = React.useState(0);
    const isWin = finishedItems.length === images.length;
    const checkItems = (id1, id2) => {
      const firstImage = images.find(({id}) => id1 == id);
      const secondImage = images.find(({id}) => id2 == id);
      setStepsCount((i) => i + 1);
      if(firstImage.url === secondImage.url){
        setFinishedItems([...finishedItems, id1, id2]);
      }
    };
    const showResults = () =>{
      setFinishedItems([]);
      setStepsCount(0);
      onShowResults(stepsCount);
    };
    return(
      <section className="game container">
        <GameHeader step={stepsCount} finishedItems={finishedItems} images={images}/>
        <Grid images={images} finishedItems={finishedItems} checkItems={checkItems} type={type}/>
        {isWin && <Modal onShowResults={showResults}/>}
      </section>
    );
  }
export default GamePage;