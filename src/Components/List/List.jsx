import React, {Component} from 'react';
import {Card,Row,Col} from 'antd'


class List extends Component{
    render(){
        return(
            <Card title="Lista de Registros" style={{ width: '100%', marginTop: 20, backgroundColor: '' }}>
                    <Row gutter={16}>
                        <Col sm={24} md={14}>
                           
                        </Col>
                        <Col sm={24} md={6}>
                           
                        </Col>
                    </Row>
                </Card>
        )
    }

}

export default List;