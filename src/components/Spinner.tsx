import { Spin } from 'antd';
import styled from 'styled-components';

const CustomSpin = styled(Spin)`
  .ant-spin-text {
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }

  .ant-spin-dot-item {
    background-color: white;
  }
`;

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <CustomSpin spinning={true} size='large' tip='loading...' />
    </div>
  );
};

export default Spinner;
