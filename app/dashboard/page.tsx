'use client';

import React, { useState } from 'react';
import {
    Layout,
    Menu,
    Button,
    theme,
    Avatar,
    Card,
    Row,
    Col,
    Statistic,
    Breadcrumb,
    Dropdown,
} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DashboardOutlined,
    LogoutOutlined,
    SettingOutlined,
    BellOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;

export default function DashBoard() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const userMenuItems: MenuProps['items'] = [
        {
            key: '1',
            label: 'Profile',
            icon: <UserOutlined />,
        },
        {
            key: '2',
            label: 'Settings',
            icon: <SettingOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: 'Logout',
            icon: <LogoutOutlined />,
            danger: true,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                theme="light"
                className="shadow-md z-10"
            >
                <div className="flex items-center justify-center h-16 border-b border-gray-100">
                    <h1
                        className={`text-xl font-bold text-indigo-600 transition-all duration-300 ${collapsed ? 'scale-0 w-0' : 'scale-100'
                            }`}
                    >
                        SynthCore
                    </h1>
                    {collapsed && (
                        <h1 className="text-xl font-bold text-indigo-600">SC</h1>
                    )}
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    className="border-r-0 mt-2"
                    items={[
                        {
                            key: '1',
                            icon: <DashboardOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Projects',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Uploads',
                        },
                        {
                            key: '4',
                            icon: <SettingOutlined />,
                            label: 'Settings',
                        },
                    ]}
                />
            </Sider>
            <Layout className="bg-slate-50 dark:bg-zinc-900">
                <Header
                    style={{ padding: 0, background: colorBgContainer }}
                    className="flex justify-between items-center px-6 shadow-sm sticky top-0 z-10"
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="flex items-center gap-6">
                        <Button
                            type="text"
                            icon={<BellOutlined />}
                            size="large"
                            className="text-gray-600"
                        />
                        <Dropdown
                            menu={{ items: userMenuItems }}
                            placement="bottomRight"
                            arrow
                        >
                            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <Avatar
                                    style={{ backgroundColor: '#87d068' }}
                                    icon={<UserOutlined />}
                                />
                                <div className="hidden md:block text-sm">
                                    <p className="font-semibold leading-none">Admin User</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        admin@synthcore.com
                                    </p>
                                </div>
                            </div>
                        </Dropdown>
                    </div>
                </Header>
                <Content className="m-4 p-0 md:m-6">
                    <div className="mb-6">
                        <Breadcrumb
                            items={[{ title: 'Home' }, { title: 'Dashboard' }]}
                        />
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-2">
                            Welcome back, Admin!
                        </h1>
                    </div>

                    {/* Stats Row */}
                    <Row gutter={[16, 16]} className="mb-8">
                        <Col xs={24} sm={8}>
                            <Card
                                variant="borderless"
                                className="shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Statistic
                                    title="Active Users"
                                    value={12893}
                                    precision={0}
                                    styles={{ content: { color: '#3f8600' } }}
                                    prefix={<UserOutlined />}
                                />
                            </Card>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Card
                                variant="borderless"
                                className="shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Statistic
                                    title="Total Revenue"
                                    value={92893}
                                    precision={2}
                                    styles={{ content: { color: '#cf1322' } }}
                                    prefix={<span className="font-bold">$</span>}
                                />
                            </Card>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Card
                                variant="borderless"
                                className="shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Statistic
                                    title="New Projects"
                                    value={42}
                                    styles={{ content: { color: '#1677ff' } }}
                                    prefix={<VideoCameraOutlined />}
                                />
                            </Card>
                        </Col>
                    </Row>

                    <div
                        style={{
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                        className="p-6 min-h-[360px]"
                    >
                        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Activity</h2>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg h-64 flex items-center justify-center bg-gray-50">
                            <p className="text-gray-400">
                                Chart or Table Component goes here
                            </p>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
