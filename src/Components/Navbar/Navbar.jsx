import React , {Component} from 'react';
import { Layout, Menu  } from 'antd';


const { Header } = Layout;

class Navbar extends Component{

    render(){
        return(
            <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
             <h1 style={{ color:'white'}}>Lista Aleatoria</h1> 
            </Menu>
          </Header>
        );
    }

}

export default Navbar;