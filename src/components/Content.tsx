import styled from 'styled-components';
import { Layout } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/reducers/rootReducer';
import { fetchLatestRequest } from '@/state/actions/latestActions';
import { /* Card, */ LargeCard } from '@/components';

const StyledContent = styled(Layout.Content)`
  padding: 0;
  min-height: 85.2vh;

  & > div {
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem 0.5rem;
    max-width: 1200px !important;
    margin: 0 auto;
    color: white;
  }

  &:hover {
    box-shadow: 0 1px 2px -2px rgb(255 255 255 / 16%), 0 3px 6px 0 rgb(255 255 255 / 12%),
      0 5px 12px 4px rgb(255 255 255 / 9%);
  }
`;

const Content = (): JSX.Element => {
  const dispatch = useDispatch();
  const { pending, latest, error } = useSelector((state: RootState) => state.latest);

  useEffect(() => {
    dispatch(fetchLatestRequest());
  }, [dispatch]);

  // console.log({ pending, latest, error });

  return (
    <StyledContent>
      <div>
        <LargeCard
          cover={latest?.links?.patch?.small}
          title={latest?.name}
          details={latest?.details}
          success={latest?.success}
          date={latest?.date_utc}
          pending={pending}
        />
        <br />
        <br />
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <br />
        <br />
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <div>CONTENT</div>
        <br />
        <br />
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
