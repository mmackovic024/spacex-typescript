import styled from 'styled-components';
import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import { getLatestLaunch } from '@/services/api';

const StyledContent = styled(Layout.Content)`
  padding: 0 0.5rem;
  background: url('starship-1920×1080.jpg') no-repeat center;
  background-size: cover;
  min-height: 85.2vh;

  & > div {
    padding: 1rem 0;
    background: rgba(0, 0, 0, 0.5);
    max-width: 1200px !important;
    margin: 0 auto;
    color: white;
  }
`;

const Content = (): JSX.Element => {
  const [latest, setLatest] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getLatestLaunch();
      setLatest(data);
    };
    getData();
  }, []);

  console.log(latest);

  return (
    <StyledContent>
      <div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
      </div>
    </StyledContent>
  );
};

export default Content;
