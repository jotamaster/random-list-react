import React, {Component} from 'react'
import Register from '../Register'
import {Card,Row,Col,List as Lista} from 'antd'


class List extends Component{
    render(){
        console.log(this.props.registros)
        return(
            
            <Card title="Lista de Registros" style={{ width: '100%', marginTop: 20, backgroundColor: '' }}>
                    <Row gutter={16}>
                        <Col sm={24} md={14}>
                        {
                            this.props.registros.length  ?  <Lista bordered>
                        
                            {this.props.registros.map((register,index) =>{
                                
                            return <Register
                                        key ={index}
                                        posicion ={index}
                                        registro={register.register}
                                     
                                    />
                            })}
                          
                            </Lista>  :
                            <h3>Sin registros</h3>
                        }
                      
                        
                        </Col>
                        <Col sm={24} md={6}>
                       
                        </Col>
                    </Row>
                </Card>
        )
    }

}

export default List;