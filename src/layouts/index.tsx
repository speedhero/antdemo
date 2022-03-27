import { Layout, Menu } from 'antd';
import styles from './index.less';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const {SubMenu}=Menu;
const { Header, Footer, Sider, Content } = Layout;
const menuData = [
  { route: '/products', name: '英雄' },
  { route: '/item', name: '局内道具' },
  { route: '/summoner', name: '召唤师技能' },
];

const subMenuData = [
  {
    id:'sub1',
    name:'测试1',
    icon: <UserOutlined/>,
    sub: [
      { route: '/products', name: 'Table' },
      { route: '/button', name: 'Button' },
      { route: '/summoner', name: '召唤师技能' },
    ],
  },
  {
    id:'sub2',
    name:'测试2',
    icon: <LaptopOutlined/> ,
    sub: [
      { route: '/hero', name: '英雄' },
      { route: '/item', name: '局内道具' },
      { route: '/summoner', name: '召唤师技能' },
    ],
  },
  {
    id:'sub3',
    name:'测试3',
    icon: <NotificationOutlined/> ,
    sub: [
      { route: '/hero', name: '英雄' },
      { route: '/item', name: '局内道具' },
      { route: '/summoner', name: '召唤师技能' },
    ],
  },
];

export default function BaseLayout(props: any) {
  const {
    location: { pathname },
    children,
  } = props;
  return (
    <Layout>
      <Header>
        <div className={styles.logo}>AntD测试</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {menuData.map((menu) => (
            <Menu.Item key={`${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className={`${styles.site_layout_background}`}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['2']}
          >
              {subMenuData.map((menu)=>(
                  <SubMenu key={`${menu.id}`} title={`${menu.name}`} icon={ menu.icon}>
                     {menu.sub.map((item)=>(
                         <Menu.Item key={`${item.route}`} >
                            <Link to={item.route}>{item.name}</Link>
                         </Menu.Item>
                     ))}
                  </SubMenu>
              ))}
          </Menu>
        </Sider>
        <Content style={{ padding: '50px 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {children}
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        {' '}
        Umi 入门教程 Created by 蒋涛
      </Footer>
    </Layout>
  );
}
