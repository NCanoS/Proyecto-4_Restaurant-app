import {Routes,Route} from 'react-router-dom';
import Menu from '../pages/Menu';
import AboutUs from '../pages/AboutUs';
import Reservation from '../pages/Reservation';


function NavigationRoute() {
    return(
        <Routes>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/' element={<AboutUs/>}/>
            <Route path='/reservation' element={<Reservation/>}/>
        </Routes>
    )
}
export default NavigationRoute;