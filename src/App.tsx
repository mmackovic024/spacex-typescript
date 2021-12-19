import { FC } from 'react';
import { Layout } from 'antd';
import { Header, Content, Footer } from '@/components';
import styled from 'styled-components';

const StyledLayout = styled(Layout)`
  background: url('starship-1920×1080.jpg') no-repeat center;
  background-size: cover;
  minwidth: 320px;
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
