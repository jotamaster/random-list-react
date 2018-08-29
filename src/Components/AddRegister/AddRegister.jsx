import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { Input } from 'antd';




class AddRegister extends Component {
    state = {
        size: 'default',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
    render() {
        const size = this.state.size;
        return (
           
                <Card title="Agrega un registro a la lista" style={{ width: '100%', marginTop: 20, backgroundColor: '' }}>
                    <Row gutter={16}>
                        <Col sm={24} md={14}>
                            <Input style={{marginBottom:10}} placeholder="Nuevo Registro" />
                        </Col>
                        <Col sm={24} md={6}>
                            <Button type="primary" icon="plus" size={size}>Agregar</Button>
                        </Col>
                    </Row>
                </Card>
            
        );
    }
}

export default AddRegister;
