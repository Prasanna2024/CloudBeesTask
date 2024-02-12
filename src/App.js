import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/userList/userList';
import { Route, Routes } from 'react-router-dom';
import UserDetails from './components/userDetails/userDetails';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='/user/:item' element={<UserDetails/>}></Route>
      </Routes>
    </>

  );
}

export default App;
