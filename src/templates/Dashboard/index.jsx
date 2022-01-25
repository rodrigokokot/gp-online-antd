import { createElement, lazy, Suspense, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Avatar, Button, Layout, Menu, PageHeader, Skeleton } from "antd";
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
      {/* <PageHeader
        title="GP"
        style={{ backgroundColor: "#1F263D" }}
        extra={
          <>
            <Link>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9994 0.667969C11.4134 0.672882 8.88459 1.42972 6.72105 2.84629C4.55751 4.26286 2.85261 6.27802 1.814 8.64633C0.775396 11.0146 0.447916 13.6339 0.871449 16.185C1.29498 18.7361 2.45125 21.109 4.19941 23.0146C5.44798 24.368 6.96334 25.4481 8.65 26.1869C10.3367 26.9257 12.1581 27.3071 13.9994 27.3071C15.8408 27.3071 17.6622 26.9257 19.3488 26.1869C21.0355 25.4481 22.5509 24.368 23.7994 23.0146C25.5476 21.109 26.7038 18.7361 27.1274 16.185C27.5509 13.6339 27.2234 11.0146 26.1848 8.64633C25.1462 6.27802 23.4413 4.26286 21.2778 2.84629C19.1142 1.42972 16.5854 0.672882 13.9994 0.667969ZM13.9994 24.668C11.2374 24.6638 8.58463 23.5883 6.59941 21.668C7.20214 20.2007 8.22746 18.9457 9.54509 18.0625C10.8627 17.1793 12.4132 16.7077 13.9994 16.7077C15.5857 16.7077 17.1361 17.1793 18.4537 18.0625C19.7714 18.9457 20.7967 20.2007 21.3994 21.668C19.4142 23.5883 16.7615 24.6638 13.9994 24.668ZM11.3327 11.3346C11.3327 10.8072 11.4891 10.2916 11.7822 9.85312C12.0752 9.41459 12.4917 9.07279 12.9789 8.87096C13.4662 8.66912 14.0024 8.61631 14.5197 8.71921C15.0369 8.8221 15.5121 9.07608 15.885 9.44902C16.258 9.82196 16.5119 10.2971 16.6148 10.8144C16.7177 11.3317 16.6649 11.8679 16.4631 12.3551C16.2613 12.8424 15.9195 13.2589 15.4809 13.5519C15.0424 13.8449 14.5268 14.0013 13.9994 14.0013C13.2922 14.0013 12.6139 13.7204 12.1138 13.2203C11.6137 12.7202 11.3327 12.0419 11.3327 11.3346ZM23.2127 19.3346C22.0215 17.297 20.188 15.712 17.9994 14.828C18.6783 14.0582 19.1207 13.1088 19.2734 12.0939C19.4261 11.0789 19.2827 10.0415 18.8604 9.10597C18.4381 8.17048 17.7549 7.37671 16.8926 6.81992C16.0304 6.26313 15.0258 5.96697 13.9994 5.96697C12.973 5.96697 11.9684 6.26313 11.1062 6.81992C10.244 7.37671 9.56071 8.17048 9.13841 9.10597C8.71612 10.0415 8.57273 11.0789 8.72545 12.0939C8.87818 13.1088 9.32052 14.0582 9.99941 14.828C7.81088 15.712 5.97737 17.297 4.78608 19.3346C3.83667 17.7174 3.33504 15.8766 3.33275 14.0013C3.33275 11.1723 4.45655 8.45922 6.45694 6.45883C8.45733 4.45844 11.1704 3.33464 13.9994 3.33464C16.8284 3.33464 19.5415 4.45844 21.5419 6.45883C23.5423 8.45922 24.6661 11.1723 24.6661 14.0013C24.6638 15.8766 24.1622 17.7174 23.2127 19.3346Z"
                  fill="white"
                />
              </svg>
            </Link>
          </>
        }
      /> */}
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
                          <Link to={item.path} onClick={() => setItemSelected(item)}>
                            {item.name}
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                  : <Menu.Item icon={<Component />}>
                    <Link style={{ width: "flex" }} to={route.path} onClick={() => setItemSelected(route)}>
                      {route.name}
                    </Link>
                  </Menu.Item>
              )
            })}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <PageHeader 
            title={<h2>{itemSelected.name}</h2>}
            extra={"Norma Cardozo"}
          ></PageHeader>
          <Content
            className=""
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              backgroundColor: "#F9F9F9",
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
