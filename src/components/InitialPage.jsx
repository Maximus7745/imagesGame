import {GAME_TYPES} from '../settings.js';
import React from 'react';

function InitialPage({onStart}){
    const buttons = GAME_TYPES.map(({type, label}) => {
      return <button class={`ico-button ico-button-${type}`} onClick={() => onStart(type)} type="button">{label}</button>;
    });
    return(
      <section class="rules container">
       <h2>Добро пожаловать!</h2>
       <p>Memory — игра для тренировки визуальной памяти</p>
       <div class="rules-panel">
         <h3>Правила игры</h3>
         <ul class="rules-list">
           <li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
           <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
           <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
         </ul>
        </div>
         {buttons}
      </section>
    );
  };
export default InitialPage;