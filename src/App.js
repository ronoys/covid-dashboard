import './App.css';
import './Tabs'
 import FullWidthTabs from './Tabs';
import React from 'react';
import Test123 from './mainViews/casesAPI'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      
      <p>COVID-19 Dashboard</p>
      
      
      
      <div className="App-header">
      
      <FullWidthTabs></FullWidthTabs>
      <Test123></Test123>
      
      
      
      
    </div>
    
      
    </div>
  );
}
}
export default App;
