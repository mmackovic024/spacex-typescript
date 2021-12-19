import styled from 'styled-components';
import { Layout } from 'antd';
import Logo from '@/components/Logo';

const StyledHeader = styled(Layout.Header)`
  background: rgba(0, 21, 41, 0.8);
  /* height: 100%; */
  padding: 0 0.5rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    & > h2 {
      color: white;
      margin: 0;
    }
  }
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <div>
        <Logo width={150} />
        <h2>GIT</h2>
      </div>
    </StyledHeader>
  );
};

export default Header;
