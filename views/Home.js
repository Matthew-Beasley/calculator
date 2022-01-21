import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Home = () => {
  const [selectFrom, setSelectFrom] = useState('inches');
  const [selectTo, setSelectTo] = useState('feet');
  const [lengthValFrom, setLengthValFrom] = useState('');
  const [lengthResult, setLengthResult] = useState('');


  const convertLength = () => {
    if(!lengthValFrom) {
      alert('We need a value to convert')
      return;
    }
    if (selectFrom === 'inches' && selectTo === 'feet') {
      setLengthResult(parseInt(lengthValFrom) / 12);
    }
    if (selectFrom === 'feet' && selectTo === 'inches') {
      setLengthResult(parseInt(lengthValFrom) * 12);
    }
    if (selectFrom === 'inches' && selectTo === 'millimeters') {
      setLengthResult(parseInt(lengthValFrom) * 2.54);
    }
    if (selectFrom === 'millimeters' && selectTo === 'inches') {
      setLengthResult(parseInt(lengthValFrom) / 2.54);
    }
  }

  return (
    <div>
      <div className="hometext">
        <h2>Welcome to the conversion tool!</h2>
        <p>This site is home to many tools for converting measurements, images and file formats. There are many conversion pages on the internet. But here we try to be the one stop shop, and put all your conversion tools in one place, and in an easy to navigate format.</p>
        <p>Here on the home page we will try to give you the most common tools at your finger tips. For more in depth tools use the tabs above to find them.</p>
      </div>
      <div className="lengthoptions">
        <select name="from" className="lengthfrom" defaultValue="inches" onChange={e => setSelectFrom(e.target.value)}>
          <option value="inches">Inches</option>
          <option value="feet">Feet</option>
          <option value="millimeters">Millimeters</option>
          <option value="meters">Meters</option>
          <option value="yards">Yards</option>
          <option value="miles">Miles</option>
          <option value="kilometers">Kilometers</option>
        </select>
        <input 
          className="lengthinput" 
          type="text" 
          placeholder="Enter Value" 
          value={lengthValFrom}
          onChange={ev => setLengthValFrom(ev.target.value)} 
        />
        <select name="to" className="lengthto" defaultValue="feet" onChange={e => setSelectTo(e.target.value)}>
          <option value="inches">Inches</option>
          <option value="feet">Feet</option>
          <option value="millimeters">Millimeters</option>
        </select>
        <div>{lengthResult}</div>
        <button className="convertbutton" id="convert" /*onKeyPress={(ev) => lookForEnter(ev)}*/ onClick={() => convertLength()}>Convert</button>
      </div>
    </div>
  )
}

export default Home;