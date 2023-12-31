import './App.css'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

import Footer from './components/Footer'
import React from 'react';
import { Layout, Flex } from 'antd';
const { Header, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#ffa500',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  color: '#000000',
  backgroundColor: '#ffffff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#cacaca',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
    maxWidth: '100% !important',
    width: '100% !important'
};


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
    <h1><a href="/" title='Lenzlee Wheeler'>Lenzlee Wheeler</a></h1>
      <Header style={headerStyle}>
        <Navbar />
      </Header>
      <Content style={contentStyle}><Outlet /></Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    </Flex>
    </>
  )
}

export default App
