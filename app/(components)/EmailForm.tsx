'use client';
import { Button, Input, Space } from "antd";

export default function EmailForm() {
    return (
        <div>
            <Space.Compact style={{ width: '100%' }}>
                <Input placeholder="john@gmail.com" />
                <Button type="primary">Submit</Button>
            </Space.Compact>
        </div>
    )
}
