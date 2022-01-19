import { createElement, lazy, Suspense, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Button, Layout, Menu, PageHeader } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.less";
import routes from "../../router/routesAdmin";

const { Header, Sider, Content } = Layout;

export default function DashboardTemplate({ component: Component, ...rest }) {
  const [collapsed, setCollapsed] = useState(false);
  const [itemSelected, setItemSelected] = useState(routes[0])

  return (
    <>
      <PageHeader
        title="GP"
        style={{ backgroundColor: "#1F263D" }}
        extra={<Button>Log out</Button>}
      />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div id="sidebar" className="logo">
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              twoToneColor: "#fff",
              onClick: () => {
                setCollapsed(!collapsed);
              },
            })}
          </div>
          <Menu theme="dark" mode="inline">
            {routes.map((route, index) => {
              const icons = require(`@ant-design/icons`);
              const Component = icons[route.icon];
              return (
                <Menu.Item icon={<Component />} key={index} >
                  <Link to={route.path} onClick={()=>setItemSelected(route)}>{route.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <PageHeader title={itemSelected.name}>
            <PageHeader>
              {itemSelected.options?.map((option,index)=>{return(<Button key={index}>{option}</Button>)})}
            </PageHeader>
          </PageHeader>
          <Content
            className=""
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route
              {...rest}
              render={(props) => (
                <Suspense fallback={"Cargando..."}>
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
