
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar.css"
import { Link } from 'react-router-dom';



function NavBar() {
  return (
   <nav>
    <h1 className='logo'><Link className='titulo aNav'to={"/"}>CASACASHOWROOM</Link></h1>
    <ul>
      <li><Link className='aNav' to={"/Boca Juniors"}>Boca</Link></li>
      <li><Link className='aNav' to={"/River Plate"}>River</Link></li>
      <li><Link className='aNav' to={"/Argentina"}>Seleccion</Link></li>
    </ul>
    <CartWidget/>
   </nav>
  );
}

export default NavBar;