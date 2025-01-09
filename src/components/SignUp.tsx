import React from 'react';
import { Form, Input, Button, message } from 'antd';

interface SignUpProps {
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setLoggedIn }) => {
    const onFinish = (values: any) => {
        console.log('Recieved signup values:', values);

        setTimeout (() =>{
            message.success('Signed up successfully!');
            setLoggedIn(true);
        }, 1000);
    };

  return (
    <Form name="signup" onFinish={onFinish}>
      <h3>Sign Up</h3>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignUp