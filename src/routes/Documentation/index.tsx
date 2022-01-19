import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import './Documentation.scss';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Documentation = () => (
  <div className="Documentation">
    <Layout>
      <Header className="header">
        <div className="logo">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365 51">
            <path
              d="M24.368.6c4.656 0 8.712.768 12.168 2.304 3.456 1.536 6.12 3.744 7.992 6.624 1.872 2.88 2.808 6.24 2.808 10.08s-.936 7.2-2.808 10.08c-1.872 2.88-4.536 5.088-7.992 6.624-3.456 1.536-7.512 2.304-12.168 2.304h-7.272V51H.104V.6h24.264Zm-1.08 24.912c2.304 0 4.032-.504 5.184-1.512 1.152-1.056 1.728-2.52 1.728-4.392 0-1.872-.576-3.312-1.728-4.32-1.152-1.056-2.88-1.584-5.184-1.584h-6.192v11.808h6.192ZM84.722 42.216H65.569L62.185 51h-17.28L66.937.6h16.704L105.673 51H88.105l-3.383-8.784Zm-4.68-12.24-4.897-12.672-4.896 12.672h9.792ZM135.103 32.712V51h-16.992V32.496L99.103.6h17.928l10.296 17.424L137.695.6h16.416l-19.008 32.112ZM201.268 51l-.144-22.968-10.944 18.432h-7.488l-10.944-17.64V51h-15.48V.6h13.968l16.416 26.856L202.636.6h13.968l.144 50.4h-15.48ZM249.227.6c4.656 0 8.712.768 12.168 2.304 3.456 1.536 6.12 3.744 7.992 6.624 1.872 2.88 2.808 6.24 2.808 10.08s-.936 7.2-2.808 10.08c-1.872 2.88-4.536 5.088-7.992 6.624-3.456 1.536-7.512 2.304-12.168 2.304h-7.272V51h-16.992V.6h24.264Zm-1.08 24.912c2.304 0 4.032-.504 5.184-1.512 1.152-1.056 1.728-2.52 1.728-4.392 0-1.872-.576-3.312-1.728-4.32-1.152-1.056-2.88-1.584-5.184-1.584h-6.192v11.808h6.192ZM277.768.6h16.992v37.224h22.752V51h-39.744V.6ZM364.11 38.184V51h-41.904V.6h40.968v12.816H338.91v5.904h21.312v12.24H338.91v6.624h25.2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/documentation">Documentation</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Documentation</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="1">
                <Link to="/documentation">Documentation Home</Link>
              </Menu.Item>
              <SubMenu key="sub1" title="Policies">
                <Menu.Item key="2">
                  <Link to="/documentation/privacy-policy">Privacy Policy</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/documentation/terms-of-use">Terms of Use</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/documentation/cookie-policy">Cookie Policy</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Paymple ©2022</Footer>
    </Layout>
  </div>
);

export default Documentation;
