import { FC } from 'react';
import { Layout } from 'antd';
import { Header } from '@/components';

const { Content, Footer } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Header />

      <Content>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
      </Content>

      <Footer>
        <p>Footer</p>
      </Footer>
    </Layout>
  );
};

export default App;
