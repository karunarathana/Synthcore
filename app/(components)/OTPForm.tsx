'use client';


import React from 'react';
import { Flex, Input} from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;


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
    <div className='flex justify-center'>
      <Flex gap="medium" align="flex-start" vertical>
        <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      </Flex>
    </div>
  );
};

export default OTPForm;