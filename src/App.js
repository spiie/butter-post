import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES
import LogIn from './pages/login';
import Register from './pages/register';
import Chat from './pages/chat';

//CSS
import "./css/index.css"

//MAIN FUNC
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="*" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

//EXPORTS
export default App;
