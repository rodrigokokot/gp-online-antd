import { createElement, lazy, Suspense, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Select, Layout, Menu, PageHeader, Skeleton, Divider, Input } from "antd";
import Icon, { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.less";
import routes from "../../router/routesAdmin";
import { GradientIcon, LogoIcon, UserIcon } from "../../assets/svg/icons";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Sider, Content } = Layout;

export default function DashboardTemplate({ component: Component, ...rest }) {
  const [collapsed, setCollapsed] = useState(false);
  const [itemSelected, setItemSelected] = useState(routes[0]);
  const icons = require(`@ant-design/icons`);
  return (
    <>
      <Header className="header">
        <div className="container-logo">
          <Link to="/home" className="logo">
            <Icon component={LogoIcon} />
          </Link>
        </div>
        <div className="container-user">
          <Icon component={UserIcon} />
        </div>
        <Icon className="linear-gradient" component={GradientIcon}></Icon>
      </Header>
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
                  ? <SubMenu icon={<Component />} key={index} title={route.name}>
                    {route.subItems.map((item) => {
                      return (
                        <Menu.Item>
                          <Link to={item.path} onClick={()=>setItemSelected(item)}>
                            {item.name}
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                  : <Menu.Item icon={<Component />}>
                    <Link style={{ width: "flex" }} to={route.path} onClick={()=>setItemSelected(route)}>
                      {route.name}
                    </Link>
                  </Menu.Item>
              )
            })}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="sub-header">
            <div className="logo-empesa">
                
              
                  {/* <Select
                    style={{ width: 240 }}
                    placeholder="custom dropdown render"

                  >
                      <Select.Option value="1" key={1}>
                        <div className="demo-option-label-item">
                          <span role="img" aria-label="China">
                            <IconComponent icon="spin" />
                          </span>
                        </div>
                      </Select.Option>
                      <Select.Option value="2" key={2}>
                        <div className="demo-option-label-item">
                          <span role="img" aria-label="China">
                          </span>
                        </div>
                      </Select.Option>

                  </Select> */}
            </div>
            {/* <div className="container-user">
              <Icon component={UserIcon} />
            </div> */}
          </Header>
          <PageHeader
            title={itemSelected.name}
            extra={"Norma Cardozo"}
          ></PageHeader>
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
