import React from 'react';
import Card from './Card.jsx';
import {TIMEOUT} from '../settings.js';

function Grid({images=[], finishedItems=[], checkItems, type}){
    const [visibleItems, setVisibleItems] = React.useState([]);
    const handleHardClick = (id) => {
      if(visibleItems.includes(id)){
        return;
      }
      switch (visibleItems.length){
        case 0:
          setVisibleItems([id]);
          break;
        case 1:
          setVisibleItems([...visibleItems, id]);
          checkItems(visibleItems[0], id);
          setTimeout(() => setVisibleItems([]), TIMEOUT);
          break;
        default:
          setVisibleItems([]);
      }
    };
    const cards = images.map((image) => (<Card 
    image={image}
    description={image.description}
    isFinished={finishedItems.includes(image.id)}
    isVisible={visibleItems.includes(image.id)}
    onHardClick={handleHardClick}
    />));
    return(
      <ul className={`cards ${type === 'cats' ? '' : (type === 'cars' ? 'cards-theme-cars' : 'cards-theme-flowers')}`}>
        {cards}
      </ul>
    );
  }
export default Grid;