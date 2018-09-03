import React, {Component} from 'react'
import { List } from 'antd';
import 'antd/dist/antd.css'


class Register extends Component{
    
    render (){

        let {registro} = this.props
        let { posicion }= this.props
        return(
            
                
                <List.Item actions={[<a>Eliminar</a>]}>{posicion} {registro}</List.Item>
            
        )
    }
      
    
}

export default Register