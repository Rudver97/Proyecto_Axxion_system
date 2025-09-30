import logo from './logo.svg';
import AppRouter from './Router/AppRouter';
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    
  );
}

export default App;
