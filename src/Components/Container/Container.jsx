import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import AddRegister from '../AddRegister/AddRegister'
import 'antd/dist/antd.css';
import './Container.css'
import { Layout, } from 'antd';


const { Content } = Layout;




class Container extends Component {

    render() {

        return (
            <Layout className="layout">
                <Navbar/>

                <Content style={{ padding: '0 50px', height : '90vh' }}>

                    <AddRegister/>
                </Content>
                
            </Layout>
        )
    }
}


export default Container;