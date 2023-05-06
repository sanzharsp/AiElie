import { Layout, Menu } from 'antd';
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Animations from '../anim/anim'
const { Header } = Layout;

const items1 = [
  {
    key:1,
    label: `ЖҰМЫС ТУРАЛЫ`,
  },
  {
    key:2,
    label: `БОЛЖАУ`,
  },
  {
    key:3,
    label: `ТОЛЫҒЫРАҚ`,
  }
]

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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} onClick={menu} items={items1} />
      </Header>
      <Layout>
 

           
  
           {content}
      
      </Layout>
    </Layout>
    </>
}
    </>
          
  );
};
export default Main;
