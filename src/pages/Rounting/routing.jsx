import Main from '../Main/Main'
import {useRoutes} from "react-router-dom";
import Uploads from '../Image/image'
import About_diploms from '../about_diplom/about_diplom'
import ReadMore from '../ReadMore/ReadMore'

const Routings = () => {

    let routes = useRoutes([
      { path: "/", element: <Main  content={<Uploads/>}/>},
      { path: "/about_diplom", element: <Main content={<About_diploms/>}/>},
      { path: "/read_more", element: <Main content={<ReadMore/>}/>},
      
      
      
 
      
      
     
    ]);
    return routes;

}
export default Routings