import React, {Component} from 'react'
import Register from '../Register'
import {Card,Row,Col,List as Lista, Button} from 'antd'


class List extends Component{




    render(){
        return(
            
            <Card title="Lista de registros" style={{ width: '100%', marginTop: 20, backgroundColor: '' }} >
           
                    <Row gutter={16}>
                    <Col sm={24} md={24}>
                    <Button onClick={() => { this.props.aleatorioOp()} }  type="primary"  >aleatorio</Button>
                       </Col>
                       <br/><br/>
                        <Col sm={24} md={24}>
                        {
                            this.props.registros.length  ?  <Lista bordered>
                        
                            {this.props.registros.map((register,index) =>{
                                
                            return <Register
                                        key ={index}
                                        posicion ={index}
                                        registro={register.register}
                                        deleteOp={this.props.deleteOp}
                                     
                                    />
                            })}
                          
                            </Lista>  :
                            <h3>Sin registros</h3>
                        }
                      
                        
                        </Col>
                      
                    </Row>
                </Card>
        )
    }

}

export default List;