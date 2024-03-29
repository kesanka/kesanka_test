import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path='/dialogs' Component={Dialogs} />
            <Route exact path='/profile' Component={Profile} />
            <Route exact path='/news' Component={News} />
            <Route exact path='/music' Component={Music} />
            <Route exact path='/settings' Component={Settings} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );

}

export default App