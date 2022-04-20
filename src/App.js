import React from 'react'
import '../src/styles/index.css';
import Navbar from './components/Header/Navbar';
import Hompage from './pages/Hompage';

function App() {
  return (
   
     <React.Fragment>
       <Navbar />
       <Hompage />
     </React.Fragment>
  
  );
}

export default App;
