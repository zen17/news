import React from 'react';
import './App.css';
import TopNewsWrapperPage from "./top-news/pages/top-news-wrapper-page/top-news-wrapper-page";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <TopNewsWrapperPage/>
      </BrowserRouter>
  );
}

export default App;
