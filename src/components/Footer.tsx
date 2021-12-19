import styled from 'styled-components';
import { Layout } from 'antd';

const StyledFooter = styled(Layout.Footer)`
  background: rgba(0, 79, 153, 0.7);
  color: white;
  & > div {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <div>
        <p>FOOTER</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
