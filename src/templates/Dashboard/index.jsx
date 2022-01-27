import { createElement, Suspense, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Menu, Skeleton } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.less";
import routes from "../../router/routesAdmin";
import HeaderLayout from "../../components/organisms/Layout/Header";
import SubHeaderLayout from "../../components/organisms/Layout/SubHeader";
import PageHeaderLayout from "../../components/organisms/Layout/PageHeader";

const { Sider, Content } = Layout;

export default function DashboardTemplate({ component: Component, ...rest }) {
  const [collapsed, setCollapsed] = useState(false);
  const icons = require(`@ant-design/icons`);
  const [itemSelected, setItemSelected] = useState(routes[0]);

  return (
    <>
      <HeaderLayout />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: "#fff" }}>
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
                          <Link to={item.path} onClick={() => setItemSelected(item)}>
                            {item.name}
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </Menu.SubMenu>
                  : <Menu.Item icon={<Component />}>
                    <Link style={{ width: "flex" }} to={route.path} onClick={() => setItemSelected(route)}>
                      {route.name}
                    </Link>
                  </Menu.Item>
              )
            })}
          </Menu>
          <Menu mode="inline" className="menu-help">
            <Menu.Item icon={<QuestionCircleOutlined />}>
              <Link style={{ width: "flex" }} to="/ayuda" onClick={() => setItemSelected("/ayuda")}>
                Ayuda
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <SubHeaderLayout />
          <PageHeaderLayout title={itemSelected.name} />
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
      </Layout>
    </>
  );
}
