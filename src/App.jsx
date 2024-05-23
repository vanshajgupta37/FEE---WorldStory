import Page1 from './components/Page1.jsx';
import Page2 from './components/Page2.jsx';
import Page3 from './components/Page3.jsx';
import Page4 from './components/Page4.jsx';
import Page5 from './components/Page5.jsx';
import React, { useEffect } from 'react';

import './App.css';

function App(){
  useEffect(() => {
    $(function () {
      $('.match-height-bootstrap-row > * > *').matchHeight();
      $('.match-height > *').matchHeight();
    });
  }, []);
  
  return (
    <div class="backgrounds">
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  )
}

export default App;