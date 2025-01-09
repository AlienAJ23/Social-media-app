import React from 'react'
import { Form, Input, Button} from 'antd';


interface LogInProps {
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const logIn: React.FC<LogInProps> = ({ setLoggedIn }) => {
    const onFinish = (values: any) => {
        const {username, password } = values;

        if(username === 'your_username' && password === 'your_password'){
            console.log('Login succesful!');
            setLoggedIn(true);
        }else {
            console.log('Invalid credentials!')
        }
    }
  return (
    <Form name='login' onFinish={onFinish}>
        <h3>Log In</h3>
        <Form.Item label='Username' name="username" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
        <Form.Item label='Password' name="password" rules={[{required: true}]}>
            <Input.Password />
        </Form.Item>
        <Form.Item>
            <Button type='primary' htmlType='submit'>
                Log In
            </Button>
        </Form.Item>
    </Form>
  )
}


export default logIn
