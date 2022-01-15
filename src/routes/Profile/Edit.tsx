import React from 'react';
import { Layout, Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SiteFooter from '../../components/partials/Footer';

const Profile = function () {
  return (
    <div className="Profile">
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Layout
            className="site-layout-background profile-edit-layout"
            style={{ padding: '24px 0' }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="1">option9</Menu.Item>
                <Menu.Item key="2">option10</Menu.Item>
                <Menu.Item key="3">option11</Menu.Item>
                <Menu.Item key="4">option12</Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <img
                style={{ display: 'block', width: '50%', height: 'auto', margin: '2rem' }}
                src="https://www.belenco.com/images/urunler/spablacktas_256d7.jpg"
                alt=""
              />
              <img
                style={{ display: 'block', width: '50%', height: 'auto', margin: '2rem' }}
                src="https://www.belenco.com/images/urunler/spablacktas_256d7.jpg"
                alt=""
              />
              <img
                style={{ display: 'block', width: '50%', height: 'auto', margin: '2rem' }}
                src="https://www.belenco.com/images/urunler/spablacktas_256d7.jpg"
                alt=""
              />
              <img
                style={{ display: 'block', width: '50%', height: 'auto', margin: '2rem' }}
                src="https://www.belenco.com/images/urunler/spablacktas_256d7.jpg"
                alt=""
              />
            </Content>
          </Layout>
        </Content>
      </Layout>
      <SiteFooter />
    </div>
  );
};

export default Profile;
