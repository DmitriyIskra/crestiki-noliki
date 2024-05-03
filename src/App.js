import { useEffect } from 'react';
import './App.css';

import { useDispatch } from 'react-redux';

import Cells from './components/cells/wrapper/cells';
import Header from './components/header/wrapper/Header';
import NewGame from './components/button-new-game/wrapper/NewGame';

import { start } from './slice/gameSlice';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(start());
  }, [])

  return (
    <div className="App">
      <div className='wrapper'>
        
        <Header />
        
        <Cells />

        <NewGame />

      </div>
    </div>
  );
}

export default App;


