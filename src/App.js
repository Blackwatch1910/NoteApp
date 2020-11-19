import React from 'react';

import NewNote  from './components/NewNote';
import NoteList from './components/NoteList';

const style = {
  'marginTop' : '0px',
  'padding' : '20px',
  'textAlign' : 'center',
  'backgroundColor' : '#2e34a1',
  'color' : '#fff'
}

function App() {
  return (
    <div>
      <h1 style={style}>NoteBook</h1>
      <NewNote />
      <NoteList />
    </div>
  );
}

export default App;
