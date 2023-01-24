import React from 'react'
import './App.css'
const Dropdown = () => {
  return (
    <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        About us
    <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Courses</a></li>
      <li><a href="#">Branches</a></li>
      <li><a href="#">Location</a></li>
    </ul>
  </div>
  )
}

export default Dropdown
