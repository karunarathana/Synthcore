'use client';

import { useState } from 'react';
import {
    Layout,
    Menu,
    Button,
    theme,
    Avatar,
    Dropdown,
    Spin,
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
import MainDashboard from '../(dashboard-components)/MainDashboard';
import ErrorNotification from '../(notification)/page';

const { Header, Sider} = Layout;

export default function DashBoard() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const {
        token: { colorBgContainer },
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
                    onClick={(e) => { setActiveTab((Number(e.key)))}}
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
                {activeTab === 1 && (
                    <div className="m-4 p-0 md:m-6">
                        <MainDashboard />
                    </div>
                )}

                {activeTab === 2 && (
                    <div className="m-4 p-0 md:m-6">
                        {/* <Spin size="large" /> */}
                        <h1 className="text-2xl font-semibold">Projects</h1>
                        <ErrorNotification/>
                    </div>
                )}

                {activeTab === 3 && (
                    <div>
                        <h1 className="text-2xl font-semibold">Uploads</h1>
                    </div>
                )}

                {activeTab === 4 && (
                    <div>
                        <h1 className="text-2xl font-semibold">Settings</h1>
                    </div>
                )}
            </Layout>
        </Layout>
    );
}
