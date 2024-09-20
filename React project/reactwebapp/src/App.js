import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/pages/Layout';
import Home from './Component/pages/Home';
import Blogs from './Component/pages/Blogs';
import Contact from './Component/pages/Contact';
import NoPage from './Component/pages/NoPage';

function App(){
return(
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </>
)
}
export default App; 