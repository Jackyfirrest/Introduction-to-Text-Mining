//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import AppPage from './AppPage';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: auto;
`

const styledPaper = styled(Paper)`
  padding: 2em
`

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/app/:id' element={<AppPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
