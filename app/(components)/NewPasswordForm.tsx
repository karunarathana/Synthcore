'use client';
import { Button, Form, Input } from 'antd';
import { FormProps } from 'antd/es/form/Form';

type FieldType = {
  newPassword?: string;
  confirmPassword?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function NewPasswordForm() {
  return (
    <>
    <div className="w-full flex items-center justify-center bg-gray-100 ">
        <Form
          layout="vertical"
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item<FieldType>
            label="NewPassword"
            name="newPassword"
            rules={[{ required: true, message: "Please enter your new password" }]}
          >
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

           <Form.Item<FieldType>
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: "Please enter your confirmPassword" }]}
          >
            <Input.Password placeholder="Enter confirmPassword" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
                Change Password
            </Button>
          </Form.Item>

        </Form>
    </div>
    </>
  )
}
