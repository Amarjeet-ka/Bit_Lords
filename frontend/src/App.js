import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Community from './pages/Community';
import Skill from './pages/Skill';
import Career from './pages/Career';
import Personal from './pages/Personal';
import Resourse from './pages/Resourse';
import Tutorials from './pages/Tutorials';
import Cources from './pages/Cources';
import Roompage from './components/room/Index';
import VideoUpload from './pages/VedioUpload';
import FilterOptions from './pages/FilterOptions';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/homepage" element={<Homepage/>} />
    <Route path="/home" element={<FilterOptions/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/community" element={<Community/>} />
    <Route path="/skills" element={<Skill/>} />
    <Route path="/career" element={<Career/>} />
    <Route path="/personal" element={<Personal/>} />
    <Route path="/resource" element={<Resourse/>} />
    <Route path="/tutorials" element={<Tutorials/>} />
    <Route path="/course" element={<Cources/>} />
    <Route path="/room/:roomId"  element={<Roompage/>} />
    <Route path="/vedioapi" element={<VideoUpload/>}  />
  </Routes>
  </BrowserRouter>
  );
}

export default App;




// Aaro 