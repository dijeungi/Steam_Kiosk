// App.js
import React from 'react';
import Card from './components/Card';
import gamesData from './gamesData'; // gamesData 파일 import

const App = () => {
  return (
    <div className="d-steam-cards">
      {gamesData.map((game, index) => (
        <Card key={index} title={game.title} imageUrl={game.imageUrl} />
      ))}
    </div>
  );
};

export default App;