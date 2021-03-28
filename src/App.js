import './App.css';
import './Tabs'
import FullWidthTabs from './Tabs';
import React from 'react';
import Firebase from "firebase";

export default function App() {
  const firebaseApp = Firebase.apps[0];
  return (
    <div className="App">
      
      <p>COVID-19 Dashboard</p>
        
      <div className="App-header">
      
      <FullWidthTabs></FullWidthTabs>
        
    </div>
        
    </div>
  );

}

