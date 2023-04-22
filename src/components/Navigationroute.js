import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import AboutUs from '../pages/AboutUs';
import Reservation from '../pages/Reservation';


function NavigationRoute() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/reservation' element={<Reservation/>}/>
        </Routes>
    )
}
export default NavigationRoute;