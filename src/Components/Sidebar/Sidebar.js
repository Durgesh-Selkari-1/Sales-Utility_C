import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Sidebar.css';
import {NavLink } from 'react-router-dom';
// import logo from './../../Assets/Images/logo.jpeg';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  ContactsOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
// const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh', position: 'fixed', top: 65 }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo text-center" >
            {/* <img src={logo} className='img-fluid mx-auto my-2'/> */}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        
            <Menu.Item key="1"style={{background:'none',color:'white'}} icon={<DesktopOutlined />}>
            <NavLink
                to='/Dashboard'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/Dashboard';
                }} >
                Dashboard
                </NavLink>
            </Menu.Item>
           
            <Menu.Item key="2" style={{background:'none',color:'white'}} icon={<ContactsOutlined />}>
             
            <NavLink 
              to='/ContactForm' 
              style={isActive => ({
                color: isActive ? "white" : "white",
                fontWeight: isActive ? "bold" : "normal"
              })}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/ContactForm';
              }}>
              
                Contact Form
              
             
                </NavLink>
            </Menu.Item>
            

            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item> */}
          </Menu>
        </Sider>
        {/* <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
             <AppRoutes/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout> */}
      </Layout>
    );
  }
}

export default SiderDemo;

