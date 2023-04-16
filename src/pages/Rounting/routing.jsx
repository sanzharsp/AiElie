import Main from '../Main/Main'
import {useRoutes} from "react-router-dom";
import Uploads from '../Image/image'


const Routings = () => {

    let routes = useRoutes([
      { path: "/", element: <Main  content={<Uploads/>}/>},

      

      
      
      
 
      
      
     
    ]);
    return routes;

}
export default Routings