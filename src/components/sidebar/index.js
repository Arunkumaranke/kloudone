import React from 'react';
import 'antd/dist/antd.css';
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Layout, Row, Col } from 'antd';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const SideBar = (props) => {
    const sideBarData = [
        {
            name: 'Dashboard',
            icon: <MailOutlined />,
            path: "/"
        },
        {
            name: 'Users',
            icon: <CalendarOutlined />,
            path: "/users"
        },
        {
            name: 'Locations',
            icon: <LinkOutlined />,
            path: "/"
        },
        {
            name: 'Shops',
            icon: <MailOutlined />,
            path: "/"
        },
        {
            name: 'Orders',
            icon: <MailOutlined />,
            path: "/"
        },
        {
            name: 'Categories',
            icon: <MailOutlined />,
            path: "/"
        },
        {
            name: 'Templates',
            icon: <AppstoreOutlined />,
            path: "/"
        },
        {
            name: 'General settings',
            icon: <SettingOutlined />,
            path: "/"
        },
    ]
    return (
            <Layout>
                <Sider
                    className="sider"
                    breakpoint="sm"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    {/* Night Mode <Switch size={'small'} onChange={changeTheme} /> */}
                    <Row>
                        <Col className="title-name">
                            <Row className="row1">
                                <Col>
                                    <div>
                                        <img className="africa-img" src="../assets/img/africa.svg" alt="" />
                                    </div>
                                </Col>
                                <Col className="row1-col2">
                                    <h4 className="row1-col2-h4">AFRICAN TUNES</h4>
                                    <h6>ONLINE SHOPPING</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Menu
                        defaultSelectedKeys={['0']}
                        theme={props.theme ? "dark" : "light"}
                        className="menu"
                    >
                        {sideBarData.map((data, key) => {
                            return (
                            <Menu.Item key={key} icon={data.icon}>
                                {data.name}
                            </Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
            </Layout>
    )
}
export default withRouter(SideBar);