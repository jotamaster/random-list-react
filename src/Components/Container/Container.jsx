import React, { Component } from 'react'
import Navbar from '../Navbar'
import AddRegister from '../AddRegister'
import List from '../List/'
import 'antd/dist/antd.css'
import './Container.css'
import { Layout, Row, Col } from 'antd'


const { Content } = Layout;




class Container extends Component {
    state = {
        registers : []
    };
    add(e){
        //esta constante pesca el value del input de id registro
        const registerInput = e
        
        let newRegister ={
            register: registerInput.value
        }
        //register pesca el valor del state resgiters
        let registers =  this.state.registers
        // unshift va agregando elementos de newRegister al array registers
        registers.unshift(newRegister)
        //se setea el state register con el valor de register de la funcion add()
        this.setState({
            registers : registers
        })
    }
       
    render() {

        return (
            <Layout className="layout">
                <Navbar />

                <Content style={{ padding: '0 50px', height: '90vh' }}>
                    <Row gutter={16}>
                        <Col sm={24} md={10}>
                            <AddRegister addOp={this.add.bind(this)} />
                        </Col>
                        <Col  sm={24} md={14}>
                            <List registros={this.state.registers}/>
                        </Col>
                    </Row>
                </Content>

            </Layout>
        )
    }
}


export default Container;