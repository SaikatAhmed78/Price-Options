import { useState } from "react";
import Link from "../Link/Link";
import { MdMenu,} from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";


const BasicNav = () => {
const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" }
      ];
      
      
    return (
        <nav className="text-black bg-yellow-300 p-6">
            
            <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ? 
                   <FaRegWindowClose></FaRegWindowClose>
                    :  <MdMenu></MdMenu>
           
                }
            </div>

          <ul className={`md:flex duration-1000 absolute md:static bg-yellow-300 px-6 ${open ? 'top-12' : '-top-60'}`}>
          {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default BasicNav;