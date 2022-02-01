import { createElement, Suspense, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Menu, Skeleton, Typography } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./index.less";
import routes from "../../router/routesAdmin";
import HeaderLayout from "../../components/organisms/Layout/Header";
import SubHeaderLayout from "../../components/organisms/Layout/SubHeader";
import PageHeaderLayout from "../../components/organisms/Layout/PageHeader";
import BackDrop from "../../components/molecules/BackDrop";

const { Sider, Content } = Layout;

export default function DashboardTemplate({ component: Component, ...rest }) {
  const [collapsed, setCollapsed] = useState(true);
  const icons = require(`@ant-design/icons`);
  const [itemSelected, setItemSelected] = useState(routes[0]);

  return (
    <>
      <HeaderLayout />
      <Layout style={{position:'relative'}}>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: "#fff", overflow: 'auto',
          position: 'fixed',
          left: 0,
          top: '48px',
          bottom: 0,
          zIndex: '10000',
        }}>
          <div id="sidebar" className="logo">
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: () => {
                setCollapsed(!collapsed);
              },
            })}
          </div>
          <Menu mode="inline">
            {routes.map((route, index) => {
              const Component = icons[route.icon];
              return (
                route.subItems !== undefined
                  ? <Menu.SubMenu icon={<Component />} key={index} title={route.name}>
                    {route.subItems.map((item, index2) => {
                      return (
                        <Menu.Item key={`${index}.${index2}`}>
                          <Link to={item.path} onClick={() => {setItemSelected(item); setCollapsed(true) }}>
                            <Typography.Text>
                              {item.name}
                            </Typography.Text>
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </Menu.SubMenu>
                  : <Menu.Item icon={<Component />}>
                    <Link to={route.path} onClick={() => {setItemSelected(route); setCollapsed(true)}}>
                      <Typography.Text>
                        {route.name}
                      </Typography.Text>
                    </Link>
                  </Menu.Item>
              )
            })}
          </Menu>
          <Menu mode="inline" className="menu-help">
            <Menu.Item icon={<QuestionCircleOutlined />}>
              <Link to="/ayuda" onClick={() => {setItemSelected("/ayuda"); setCollapsed(true)}}>
                Ayuda
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
            <Layout className="site-layout" style={{ marginLeft: '80px' }} >
              <SubHeaderLayout />
              <PageHeaderLayout title={itemSelected.name} style={{ marginTop: '12%' }} />
              <Content
                className=""
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  backgroundColor: "#E5E5E5",
                }}
              >
                <Route
                  {...rest}
                  render={(props) => (
                    <Suspense fallback={<Skeleton active />}>
                      <Component {...props}>{props.children}</Component>
                    </Suspense>
                  )}
                />
              </Content>
            </Layout>
            {/* BACKDROP */}
            {
              !collapsed && <BackDrop />
            }
      </Layout>
    </>
  );
}
