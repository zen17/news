import React from 'react';
import './App.css';
import LayoutPage from "./top-news/pages/LayoutPage/LayoutPage";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <LayoutPage/>
      </BrowserRouter>
  );
}

export default App;
