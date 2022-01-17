import { createElement, lazy, Suspense, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import './index.less'
import routes from "../../router/routesAdmin";

const { Header, Sider, Content } = Layout;

export default function DashboardTemplate({component: Component, ...rest}) {
  const [collapsed, setCollapsed] = useState(false)
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div id="sidebar" className="logo" >
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              twoToneColor:"#fff",
              onClick: () => { setCollapsed(!collapsed) }
            })}
            </div>
            <Menu theme="dark" mode="inline">
              {
                routes.map( (route, index) =>{
                  const icons = require(`@ant-design/icons`);
                  const Component = icons[route.icon];
                  return <Menu.Item icon={<Component />} key={index} >
                    <Link to={route.path} >
                      {route.name}
                    </Link>
                  </Menu.Item>

                })
              }
            </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          </Header>
          <Content
            className=""
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route {...rest} render={props => (
              <Suspense fallback={ "Cargando..." }>
                <Component {...props} >
                  {props.children}
                </Component>
              </Suspense>
            )} />
          </Content>
        </Layout>
      </Layout>
    );
}
