import Header from "./Header";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import Home from "./Home";
import About from './About';
import Nav from "./Nav";
import Missing from "./Missing";
import Footer from "./Footer";

import { Route,Routes } from "react-router-dom";

import EditPost from "./EditPost";

import { DataProvider } from "./context/DataContext";


function App() {
  
      
 

  return (
   <div className="app">
    <DataProvider> <Header title='Post App' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home
    
        />} />
        <Route path='post' >
          <Route index element={ <Newpost  />} />
      
     
      </Route>
      <Route path='edit/:id' element={<EditPost  />} />
       <Route path='post/:id' element={<Postpage/>} />
      <Route path='about' element={  <About /> } />
      <Route path='*' element={  <Missing />} />
      </Routes>
      <Postpage />
      <Footer />

     </DataProvider>
     
    </div>
  );
}


export default App;
