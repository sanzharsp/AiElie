import { Layout, Menu } from 'antd';
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Animations from '../anim/anim'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';



const { Header } = Layout;



const Main = ({content}) => {
  const [open,setOpen] = useState(true);
  useEffect(() =>{

  setTimeout(()=>setOpen(!open), 9000);
},[])
  const navigate = useNavigate();
  const menu=(e)=>{
    if (e.key === '2'){
      return navigate("/", { replace: true });
    }
    if (e.key === '1'){
      return navigate("/about_diplom", { replace: true });
    }
    if (e.key === '3'){
      return navigate("/read_more", { replace: true });
    }


    
 
  }

  return (
    <>
    {
      open?
    <Animations/>
    :
    <>


    <Layout>

      <Header className="header">
        <div className="logo" />
        <Menu mode="horizontal" theme="dark" >
         
      <Menu.Item key="mail" onClick={()=>navigate("/about_diplom", { replace: true })} style={{ color: 'white'}}  icon={<MailOutlined />} >
      ЖҰМЫС ТУРАЛЫ
      </Menu.Item>
     
   
      <Menu.Item key="app" onClick={()=>navigate("/", { replace: true })} style={{ color: 'white'}}  icon={<AppstoreOutlined />} >
      БОЛЖАУ
      </Menu.Item>
     
      <Menu.Item key="settings" onClick={()=>navigate("/read_more", { replace: true })} style={{color: 'white',}}  icon={<SettingOutlined />} >
      ТОЛЫҒЫРАҚ
      </Menu.Item>
    
    </Menu>
      </Header>
      </Layout>

           
  
           {content}
      

  
    </>
}
    </>
          
  );
};
export default Main;
