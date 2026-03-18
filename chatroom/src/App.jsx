import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LandingPage from './LandingPage/LandingPage';
import HomePage from './ApplicationStuffs/HomePage';
import ProjectsPage from './ApplicationStuffs/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-yellow-200">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
