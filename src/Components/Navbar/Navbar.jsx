import React , {Component} from 'react';
import { Layout, Menu  } from 'antd';


const { Header } = Layout;

class Navbar extends Component{

    render(){
        return(
            <Header>
          
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >

               <Menu.Item key="1"></Menu.Item>
              

            </Menu>

          </Header>
        );
    }

}

export default Navbar;