import React from 'react';
import {Modal, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const URL = 'https://auth.beta.futoi.net/login';
// const URL = 'https://www.google.com';

const Login = () => {
  const handleNavStateChange = (newNavState: any) => {
    console.log(newNavState);
  };
  return (
    <Modal>
      <WebView
        source={{uri: URL}}
        onNavigationStateChange={handleNavStateChange}
      />
    </Modal>
  );
};

export default Login;
