import React, { useState } from 'react';
import App from './App.jsx';
import App2 from './App2.jsx';

function MainApp() {
  const [view, setView] = useState('App');

  const switchView = () => {
    setView((prevView) => (prevView === 'App' ? 'App2' : 'App'));
  };

  return (
    <div>
      <button onClick={switchView}>Changer de Vue</button>
      {view === 'App' ? <App /> : <App2 />}
    </div>
  );
}

export default MainApp;
