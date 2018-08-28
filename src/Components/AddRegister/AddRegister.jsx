import React,{Component} from 'react';
import { Card } from 'antd';
import { Input } from 'antd';




class AddRegister extends Component{

    render(){
     
        return(
          <Card title="Agrega un registro a la lista" style={{ width: 300, marginTop:20 }}>
          <Input placeholder="Nuevo Registro" />
        </Card>
        );
    }
}

export default  AddRegister;
