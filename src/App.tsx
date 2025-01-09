import { useState } from 'react';
import {Layout, Button } from 'antd';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <Layout>
      <Header>
        <h1>Social Media App</h1>
        {loggedIn ?(
          <Button onClick={handleLogOut}>Log Out</Button>
        ) : (
          <>
          <SignUp setLoggedIn={setLoggedIn} />
          <LogIn setLoggedIn={setLoggedIn} />
          </>
        )}
      </Header>
      <Content>
        {/* Other components and functionalities */}
      </Content>
    </Layout>
  );
}

export default App;
