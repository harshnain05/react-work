import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommonHeading } from './components/common/CommonHeading';
import Home from './view/Home';
import About from './view/About';
import Form from './view/Form';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      <CommonHeading />

    </>
  );
}

export default App;
