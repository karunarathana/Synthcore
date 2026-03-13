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
    <Form
      layout="vertical"
      name="new-password"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="w-full"
    >
      <Form.Item<FieldType>
        label="New Password"
        name="newPassword"
        rules={[{ required: true, message: "Please enter your new password" }]}
      >
        <Input.Password placeholder="Enter new password" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['newPassword']}
        rules={[
          { required: true, message: "Please confirm your new password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm new password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Change Password
        </Button>
      </Form.Item>
    </Form>
  );
}
