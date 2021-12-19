import styled from 'styled-components';
import { FC } from 'react';
import { Layout } from 'antd';
import { Header, Content, Footer } from '@/components';

const StyledLayout = styled(Layout)`
  background: url('starship-1920×1080.jpg') no-repeat fixed center;
  background-size: cover;
  min-width: 300px;
`;

const App: FC = () => {
  return (
    <StyledLayout>
      <Header />

      <Content />

      <Footer />
    </StyledLayout>
  );
};

export default App;
