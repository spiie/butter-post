import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES
import LogIn from './pages/login';
import Register from './pages/register';
import Chat from './pages/chat';
import Home from './pages/home';
import TestPost from './pages/testpost';
import TestAccueil from './pages/testaccueil';

//CSS
import "./css/index.css"

//MAIN FUNC
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/testpost" element={<TestPost />} />
        <Route path="/testaccueil" element={<TestAccueil />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

//EXPORTS
export default App;
