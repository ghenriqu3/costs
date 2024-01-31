import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/Projects/Projects';
import Footer from './components/layout/Footer/Footer';
import PageProject from './components/pages/PageProject/PageProject';
import NavBar from './components/layout/Navbar/Navbar'

import Container from './components/layout/Container/Container';
import PageEdit from './components/pages/Edit/PageEdit';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Container customClass="min-height">
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/company' element={<Company />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/newproject' element={<NewProject />} />
              <Route path='/page-project' element={<PageProject />} />
              <Route path='/page-edit/:id' element={<PageEdit />} />
          </Routes>
          </Container>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
