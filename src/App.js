import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Join from './pages/Join';
import Tnc from './pages/tnc';
import Blog from './pages/blog';
import CDO from './pages/team/cdo'
import CTO from './pages/team/cto'
import CEO from './pages/team/ceo'
import CPO from './pages/team/cpo'
import Mentor from './pages/team/mentor'
import Designer from './pages/team/designer'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/tnc" element={<Tnc/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/team/ceo" element={<CEO/>}/>
        <Route path="/team/cto" element={<CTO/>}/>
        <Route path="/team/cdo" element={<CDO/>}/>
        <Route path="/team/cpo" element={<CPO/>}/>
        <Route path="/team/mentor" element={<Mentor/>}/>
        <Route path="/team/designer" element={<Designer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
