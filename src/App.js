import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles , ThemeProvider} from "@material-ui/core/styles";
import theme from './theme'
import 'typeface-roboto'
import palette from './theme/palette'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Covid-19 Dashboard 
        </p>
        <Button variant="outlined" color="secondary">Test Button</Button>
      </header>
    </div>
  );
}

export default App;
