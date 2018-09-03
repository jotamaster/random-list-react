import React, {Component} from 'react'
import { List } from 'antd';
import 'antd/dist/antd.css'


class Register extends Component{
    
    render (){

        let registro = this.props.registro
        let id = this.props.posicion
        return(
            

                <List.Item actions={[<a>Eliminar</a>]}>{id} {registro}</List.Item>
            
        )
    }
      
    
}

export default Register