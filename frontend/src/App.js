import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';


function App() {
  return (

<Router>
  <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Details" element={<Details/>}/>
          <Route exact path="/Category" element={<Category/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>








  );
}

export default App;
