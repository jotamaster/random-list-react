import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css'




class AddRegister extends Component {
    state = {
        size: 'default',
        //un arreglo que tendra los registros
        registers : []
    };

//esta arrow function es de ant design 
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
                            {/* el onclick dispara el evento que se encuentra en el contexto de este componenete */}
                            <Button onClick={() => this.props.addOp(document.getElementById('registro'))}   type="primary" icon="plus" size={size}>Agregar</Button>
                        </Col>
                    </Row>
                </Card>
            
        );
    }
}

export default AddRegister;
