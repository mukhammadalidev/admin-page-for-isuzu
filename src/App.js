import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";
import Cars from "./components/Content/Cars";
import {Routes, Route, Link} from "react-router-dom";
import CarForm from "./pages/CarForm";

function App() {
    const [products,setProducts] = useState([])
    const items = ['cars','settings'].map(key => ({
        key,
        label: `${key}`,
    }));
  useEffect(()=>{
    axios.get('https://backend.avtosaltanat.uz/pro/api/products/')
        .then(res=>{
          console.log(res.data)
            setProducts(res.data)
        }).catch(err=>{
        console.log(err)
    })
  },[])
  return (
    <div className="App">
     <Layout>
         <Sider  style={{ minHeight: '100vh',background:'#fff' }}>
<Link to={'/'}>

    <img src="https://storage.yandexcloud.net/printio/assets/realistic_views/notebook_stapled/tile/7eb9b18246239b42c32a11f9e9f0ec7278184cfd.png?1566810028" className={'mx-auto mt-5 rounded-circle'}  alt="" width={70}/>

</Link>
         <Menu
         items={items}
         />
         </Sider>
         <Layout>
             <Header>

             </Header>
             <Content>
                   <div className="mt-5">
                      <Routes>
                          <Route path={'/'} element={ <Cars
                              products={products}
                          />} />
                          <Route path={'/add-cars'} element={<CarForm />} />
                      </Routes>
                   </div>
             </Content>
         </Layout>
     </Layout>
    </div>
  );
}

export default App;
