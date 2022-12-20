import About from "./ReactRouter/About";
import Home from "./ReactRouter/Home";
import Services from "./ReactRouter/Services";

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App1(){

    return(
        <div>
             <BrowserRouter>

            <ul>
                {/* <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/services'>Services</a></li> */}
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>

            </ul>
           
             <Routes>
               <Route path='/home' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/services' element={<Services/>}/>
             </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App1