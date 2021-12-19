import { FC } from 'react';
import { Layout } from 'antd';
import { Header, Content, Footer } from '@/components';

const App: FC = () => {
  return (
    <Layout style={{ minWidth: '320px' }}>
      <Header />

      <Content />

      <Footer />
    </Layout>
  );
};

export default App;
