import React, { useEffect, useState } from 'react';
import { Row, Col, DatePicker, Skeleton, Input, Avatar, Dropdown, Menu, Switch, Layout } from 'antd';
import Barchart from '../components/barchart';
import Stacked from '../components/barchart-stacked';
import LineChart from '../components/linechart';
import PieChart from '../components/piechart';
import moment from 'moment';
import DataTable from '../components/table';
import SideBar from '../components/sidebar';
import { UserOutlined, DownOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Search } = Input;
const DataLayout = (props) => {
    const [loading, setLoading] = useState(false);
    
    // const fetchData = () => {
    //     setLoading(true);
    //     fetch("http://localhost:3000/datas").then(res => res.json())
    //         .then(res => setData(res))
    //     setLoading(false);

    // };
    const menu = (
        <Menu>
            <Menu.Item key="0">
                Settings
          </Menu.Item>
            <Menu.Item key="1">
                Log out
          </Menu.Item>
        </Menu>
    );

    const onSearch = value => console.log(value);
    return (
        <Row>
            <Col className="sidebar" xs={1} sm={6} md={6} lg={4}>
                <SideBar theme={props.theme} />
            </Col>


            <Col xs={23} sm={18} md={16} lg={20}>
                <Skeleton loading={loading} active>
                    <Row className="row1">
                        <Col className="search" xs={24} sm={12} md={15} lg={18}>
                            {/* <Icon type="search" /> */}
                            <Search placeholder="Search..." onSearch={onSearch} style={{ width: 200 }} />
                        </Col>
                        <Col className="user-name" xs={24} sm={12} md={9} lg={6}>
                            <Row>
                                <Col>
                                    <h4 className="row1-col2-h4">Adele Mitchell</h4>
                                    <h6>Super Admin</h6>
                                </Col>
                                <Col className="row1-col2">
                                    <Avatar size="large" icon={<UserOutlined />} />
                                    <Dropdown className="row1-col2" overlay={menu} trigger={['click']}>
                                        <DownOutlined className="dropdown" />
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="content-row">
                        <Col span={24}>
                            <Row>
                                <Col xs={12} sm={15} lg={19} md={17}>
                                    <h2>Dashboard</h2>
                                </Col>
                                <Col xs={12} sm={9} lg={5} md={7}>
                                    <Row>
                                        <Col className="theme-name"><h4>Night Mode</h4></Col>
                                        <Col><Switch size="small" onChange={props.themeData} /></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col className="card-cont" xs={24} sm={12} lg={8} md={12}>
                                    <div className="card">
                                        <Stacked />
                                    </div>
                                </Col>
                                <Col className="card-cont" xs={24} sm={12} lg={8} md={12}>
                                    <div className="card">
                                        <LineChart  />
                                    </div>
                                </Col>
                                <Col className="card-cont" xs={24} sm={24} lg={8} md={24}>
                                    <div className="card">
                                        <DataTable />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col className="card-cont" xs={24} sm={24} lg={10} md={12}>
                                    <div className="card">
                                        <PieChart />
                                    </div>
                                </Col>
                                <Col className="card-cont" xs={24} sm={24} lg={10} md={12}>
                                    <div className="card">
                                        <PieChart />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Skeleton>
            </Col>
        </Row>
    );
}

export default DataLayout;
