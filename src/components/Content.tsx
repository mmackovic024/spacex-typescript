import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { RootState } from '@/state/reducers/rootReducer';
import { fetchLatestRequest } from '@/state/actions/latestActions';
import { fetchNextRequest } from '@/state/actions/nextActions';
import { fetchLaunchesRequest } from '@/state/actions/launchesActions';
import { Card, LargeCard, Spinner } from '@/components';

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

const NextLaunch = styled.div`
  &.next {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: rgba(0, 204, 255, 0.2);
    color: white;
    font-size: 1rem;

    & > p,
    strong {
      margin: 0 0 0 1.5rem;
    }

    @media only screen and (max-width: 692px) {
      flex-direction: column;
    }
  }
`;

const Content = (): JSX.Element => {
  const page = useRef(0);
  const dispatch = useDispatch();
  const latest = useSelector((state: RootState) => state.latest);
  const next = useSelector((state: RootState) => state.next);
  const launches = useSelector((state: RootState) => state.launches);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    dispatch(fetchLatestRequest());
    dispatch(fetchNextRequest());
  }, [dispatch]);

  useEffect(() => {
    if (latest.latest?.date_utc) {
      dispatch(fetchLaunchesRequest(1, latest.latest.date_utc));
      page.current += 1;
    }
  }, [dispatch, latest.latest?.date_utc]);

  useEffect(() => {
    if (inView && launches.hasMore) {
      dispatch(fetchLaunchesRequest(page.current + 1, latest.latest?.date_utc));
      page.current += 1;
    }
  }, [inView, launches.hasMore, latest.latest?.date_utc, dispatch]);

  return (
    <>
      <NextLaunch className='next'>
        <p>Next mission: </p>
        <strong>{next.next?.name}</strong>
        <p>Launch date: </p>
        <strong>
          {next.next?.date_utc
            ? ` ${new Date(next.next.date_utc).toLocaleString('us', { dateStyle: 'long', timeStyle: 'medium' })}`
            : null}
        </strong>
      </NextLaunch>

      <StyledContent>
        <div>
          <Row gutter={[16, 16]} justify='center'>
            <Col span={24}>
              <LargeCard
                cover={latest.latest?.links?.patch?.small}
                title={latest.latest?.name}
                details={latest.latest?.details}
                success={latest.latest?.success}
                date={latest.latest?.date_utc}
                error={latest.error}
                pending={latest.pending}
              />
            </Col>
            {!launches.error &&
              launches.data?.length > 0 &&
              launches.data.map((launch: any, index: number) => (
                <Col key={index}>
                  <Card
                    cover={launch.links?.patch?.small}
                    title={launch.name}
                    success={launch.success}
                    date={launch.date_utc}
                    ref={ref}
                  />
                </Col>
              ))}
          </Row>
          <br />
          {launches.pending && <Spinner />}
        </div>
      </StyledContent>
    </>
  );
};

export default Content;
