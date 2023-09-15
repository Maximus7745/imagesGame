import React from 'react';
import getDeclension from '@dubaua/get-declension';

function ResultsPage({results, result, onResetGame}){
    const wordsDeclension = getDeclension({
      count: result,
      one: 'шаг', few: 'шага', many: 'шагов'
    });
    const sortedResults = [...results, { name: 'Ваш результат', stepsCount: result }].sort(
      (a,b) => (a.stepsCount - b.stepsCount));
    const resultRows = sortedResults.map(({name, stepsCount}, i) =>{
      return(
        <tr class={`result-table-row ${result === stepsCount ? 'active' : ''}`}>
          <td>{i + 1}</td>
          <td>{name}</td>
          <td>{stepsCount}</td>
        </tr>
      );
    });
    return(<section class="result container">
  <h2>Лучшие результаты:</h2>
  <p>Вы завершили игру за <b>{wordsDeclension}</b>, так держать!</p>
  <table class="result-table">
    <thead>
    <tr class="result-table-row">
      <th>Место</th>
      <th>Имя</th>
      <th>Шаги</th>
    </tr>
    </thead>
    <tbody>
      {resultRows}
    </tbody>
  </table>
  <p>Хотите попробовать ещё раз?</p>
  <button class="button result-button" onClick={onResetGame} type="button">Новая игра</button>
  </section>
    );
  }
export default ResultsPage;