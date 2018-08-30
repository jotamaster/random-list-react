import React, { Component } from 'react'
import Navbar from '../Navbar'
import AddRegister from '../AddRegister'
import List from '../List/'
import 'antd/dist/antd.css'
import './Container.css'
import { Layout, Row, Col } from 'antd'


const { Content } = Layout;




class Container extends Component {

    render() {

        return (
            <Layout className="layout">
                <Navbar />

                <Content style={{ padding: '0 50px', height: '90vh' }}>
                    <Row gutter={16}>
                        <Col sm={24} md={10}>
                            <AddRegister />
                        </Col>
                        <Col  sm={24} md={14}>
                            <List/>
                        </Col>
                    </Row>

                </Content>

            </Layout>
        )
    }
}


export default Container;