// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./reactSimpleCard.css";
import React, { Component } from 'react';
import Title from "./Components/Title.jsx";
import Description from "./Components/Description";
import Image from "./Components/Image";


class SimpleCard extends Component {
  render() {
    let title = "Considered is as middletons uncommonly";
    let description = "Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see sitting. Up twenty limits as months. Inhabit so perhaps of in to certain. Sex excuse chatty was seemed warmth. Nay add far few immediate sweetness earnestly dejection.Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar. Her use behaved spirits and natural attempt say feeling. Exquisite mr incommode immediate he something ourselves it of. Law conduct yet chiefly beloved examine village proceed.";
    // let image = "../src/flower.avif";
    // let image = "IMG";
    // let flower = "flower.avif";
    return (
      <div className='main-body' >
        <h1 id="head" >This is my Assignment.</h1>
        <hr></hr>
        <br></br>
        < Image images="https://images.unsplash.com/photo-1693087654826-f663e7cba602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60" />
        < Title titles={title}/>
        < Description descriptions={description}/>
        
      </div>
    )
  }
}


export default SimpleCard;
