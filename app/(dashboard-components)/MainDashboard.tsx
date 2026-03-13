import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Col, Row, Statistic } from "antd";

export default function MainDashboard() {
    return (
        <div>
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
        </div>
    )
}
