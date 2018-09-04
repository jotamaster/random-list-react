import React, { Component } from 'react'
import Navbar from '../Navbar'
import AddRegister from '../AddRegister'
import List from '../List/'
import 'antd/dist/antd.css'
import './Container.css'
import { Layout, Row, Col, message } from 'antd'

const { Content } = Layout;

class Container extends Component {
    state = {
        registers: []
    };
    add(e) {
        const registerInput = e
        if (registerInput.value) {
            let newRegister = {
                register: registerInput.value
            }
            let { registers } = this.state

            registers.unshift(newRegister)

            this.setState({
                registers
            })

        } else {
            message.warning('El campo registro esta vacio');
        }

    }

    delete(e) {
       

        let registers = this.state.registers

        registers.splice(e, 1)

        this.setState({
            registers
        })
    }

    aleatorio(array) {
        array = this.state.registers
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        
        while (0 !== currentIndex) {
      
         
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
         
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        
        this.setState({
            registers: array
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
                        <Col sm={24} md={14}>
                            <List registros={this.state.registers} deleteOp={this.delete.bind(this)}  aleatorioOp={this.aleatorio.bind(this)} />
                        </Col>
                    </Row>
                </Content>

            </Layout>
        )
    }
}


export default Container;