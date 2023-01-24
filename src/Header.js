import React from 'react'
import logo from './mlh-prep.png'
import './App.css';
import Button from './Button';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <header id='header'>
      <h1>
        <img src={logo} alt="MLH Prep Logo" style={headingStyle}></img>
        <Button text='Signup'/>
        <Button text='Login'/>
        <Dropdown/>
      </h1>
    </header>
  )
}
const headingStyle={
    backgroundColor:'#f95959',
    width:100,
}

export default Header