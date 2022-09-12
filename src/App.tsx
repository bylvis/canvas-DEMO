import React, { FC } from 'react';
import DrawingBoard from './layouts/DrawingBoard';
import Header from './layouts/header';
import ToolBar from './layouts/ToolBar';
const App:FC = () => {
  return (
    <div className="App">
      <Header/>
      <ToolBar/>
      <DrawingBoard/>
    </div>
  );
}

export default App;
