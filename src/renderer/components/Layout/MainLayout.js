import React from 'react';
import styles from './MainLayout.css';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'dva/router';

const {Header, Content, Footer, Sider} = Layout;

function MainLayout({children, selected}) {
  return (
    <Layout style={{height: '100%'}}>
      <Sider>
        <div className={styles.logo}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[selected || '1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="team"/>
              <span>消费者</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/create_consumer">
              <Icon type="user-add"/>
              <span>新建消费者</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link>
              <Icon type="database"/>
              <span>Kafka</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{padding: 0}}/>
        <Content style={{margin: '24px 14px 0', height: '100%'}}>
          <div style={{padding: 24, background: '#fff', minHeight: 360, height: '100%'}}>
            {children}
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
