import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-yellow-200 min-h-[200vh] h-full">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
