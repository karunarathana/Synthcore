"use client";

import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "antd/es/typography/Link";

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function LoginForm() {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 ">
      <div className="w-full  p-8 bg-gray-50 rounded-lg shadow-lg">

        <Form
          layout="vertical"
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <div className="flex justify-between">
            <div>
              <Form.Item<FieldType> name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </div>
            <div className="mt-[5px]">
              <Link
                href="forgot-password/email"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign In
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
}