import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing.jsx';
import Authentication from './pages/Authentication.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';




function App() {
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>
          <Routes>
            {/* Example route */}
            <Route path="/" element={<LandingPage />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
          </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;

