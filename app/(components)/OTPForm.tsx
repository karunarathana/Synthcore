'use client';


import React from 'react';
import { Flex, Input, Typography } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const OTPForm: React.FC = () => {
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };

  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <Flex gap="medium" align="flex-start" vertical>
      <Title level={5}>With formatter (Upcase)</Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
    </Flex>
  );
};

export default OTPForm;