import React, { Component } from 'react';
import Register from '../Register';
import { Card, Button, Row, Col } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css'




class AddRegister extends Component {
    state = {
        size: 'default',
        registers : []
    };

    add(e){
        const registerInput = document.getElementById('registro')
        
        let newRegister ={
            register: registerInput.value
        }

        let registers =  this.state.registers
        registers.unshift(newRegister)
        this.setState({
            registers : registers
        })
    }

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
    render() {
        const size = this.state.size;
        return (
           
                <Card title="Agrega un registro a la lista" style={{ width: '100%', marginTop: 20, backgroundColor: '' }}>
                    <Row gutter={16}>
                        <Col sm={24} md={14}>
                            <Input id="registro" style={{marginBottom:10}} placeholder="Nuevo Registro" />
                        </Col>
                        <Col sm={24} md={6}>
                            <Button onClick={this.add.bind(this)} type="primary" icon="plus" size={size}>Agregar</Button>
                        </Col>
                    </Row>
                    <ul>
                    {this.state.registers.map(register =>{
                        return <Register/>
                    })}
                    </ul>
                    
                </Card>
            
        );
    }
}

export default AddRegister;
