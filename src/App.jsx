import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn({ username, password });
      console.log('登录成功：', user);
    } catch (err) {
      console.error('登录失败：', err.message);
    }
  };

  return (
    <div>
      <input placeholder="用户名" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="密码" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>登录</button>
    </div>
  );
}
