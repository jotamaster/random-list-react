import React, {Component} from 'react'
import { List,Button } from 'antd';
import 'antd/dist/antd.css'


class Register extends Component{
  
    render (){
        
        let {registro} = this.props
        let { posicion }= this.props
        return(
            
                
                <List.Item actions={[ <Button onClick={() => { this.props.deleteOp(posicion)} }  type="primary"  >Eliminar</Button>]}>
                
                {posicion} {registro}
                
                </List.Item>
            
        )
    }
      
    
}

export default Register