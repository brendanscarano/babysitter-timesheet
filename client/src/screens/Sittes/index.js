import React, { useState } from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import {
  Carousel,
  Spin,
  Layout,
  Icon,
  Avatar,
  Card,
  Button,
} from 'antd';
import moment from 'moment';
import { FlexRow } from '../../components/Flex';
import { GET_SITTES } from '../../graphql/queries/GET_SITTES';
import SitteCarouselCard from './SitteCarouselCard';
import { CREATE_OR_UPDATE_DATE_MUTATION } from '../Main/graphql';
import { Desktop, BelowMedium } from '../../utils/responsive';

const { Content } = Layout;

const Wrapper = styled.div`
  > * { 
    min-height: 0;
    min-width: 0; 
  }

  background-color: #eee;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;

  .ant-carousel .slick-slide {
    padding: 2rem;
    padding-top: 1rem;
    padding-bottom: 4rem;
    height: 100%;
    overflow: scroll;
  }

  .anticon-left-circle, .anticon-right-circle {
    svg {
      margin: 1rem;
      width: 2rem;
      height: 2rem;
      color: salmon;
    }
  }
`;


const Children = () => {
  const carousel = React.createRef();
  const [date, setDate] = useState({
    formattedDate: moment().format('YYYY-MM'),
    momentDate: moment(),
  });
  const [dateId, setDateId] = useState('');
  const [payment, setPayment] = useState(null);
  const [note, setNote] = useState(null);
  const [showItem, setShow] = useState(0);

  return (
    <Query query={GET_SITTES}>
      {({ data, loading, error }) => {
        if (loading) {
          return (
            <Spin />
          );
        }
        if (error) {
          return (
            <p>Something went wrong</p>
          );
        }

        return (
          <>
            <Desktop>
              <Layout style={{ backgroundColor: 'transparent', maxWidth: '1200px', margin: 'auto' }}>
                <Content>
                  <FlexRow style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {data.sittes.map((d, i) => (
                      <Avatar
                        onClick={() => carousel.current.slick.slickGoTo(i)}
                        style={{
                          marginRight: '0.5rem',
                          color: 'salmon',
                          backgroundColor: '#fde3cf',
                          cursor: 'pointer',
                        }}
                      >
                        {d.firstName.charAt(0).toUpperCase()}
                        {d.lastName.charAt(0).toUpperCase()}
                      </Avatar>
                    ))}
                  </FlexRow>
                  <Wrapper>
                    <Carousel ref={carousel}>
                      {data.sittes.map(sitte => (
                        <Mutation
                          mutation={CREATE_OR_UPDATE_DATE_MUTATION}
                          refetchQueries={() => [
                            {
                              query: GET_SITTES,
                            },
                          ]}
                        >
                          {createOrUpdateDate => (
                            <SitteCarouselCard
                              sitte={sitte}
                              onSetDate={setDate}
                              date={date}
                              onSetPayment={setPayment}
                              onSetNote={setNote}
                              onSetDateId={setDateId}
                              dateId={dateId}
                              payment={payment}
                              note={note}
                              onSubmit={() => {
                                const savedDateInDb = false;
                                createOrUpdateDate({
                                  variables: {
                                    dateId: savedDateInDb ? savedDateInDb.dateId : '',
                                    dateObjectId: date.momentDate.format('MMDDYY'),
                                    childId: sitte.id,
                                    hours: (typeof payment === 'boolean') ? 0 : payment,
                                    isFixedRate: (typeof payment === 'boolean') ? payment : false,
                                    dayOfWeek: date.momentDate.format('ddd'),
                                    year: parseInt(date.momentDate.format('YY'), 10),
                                    month: parseInt(date.momentDate.format('MM'), 10),
                                    day: parseInt(date.momentDate.format('DD'), 10),
                                    notes: note,
                                  },
                                });
                              }}
                            />
                          )}
                        </Mutation>
                      ))}
                    </Carousel>
                    <div>
                      <Icon
                        type="left-circle"
                        onClick={() => carousel.current.slick.slickPrev()}
                      />
                      <Icon
                        type="right-circle"
                        onClick={() => carousel.current.slick.slickNext()}
                      />
                    </div>
                  </Wrapper>
                </Content>
              </Layout>
            </Desktop>
            <BelowMedium>
              <FlexRow style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
                {data.sittes.map((sitte, i) => (
                  <Avatar
                    onClick={() => {
                      setShow(i);
                    }}
                    style={{
                      marginRight: '0.5rem',
                      color: 'salmon',
                      backgroundColor: '#fde3cf',
                      cursor: 'pointer',
                    }}
                  >
                    {sitte.firstName.charAt(0).toUpperCase()}
                    {sitte.lastName.charAt(0).toUpperCase()}
                  </Avatar>
                ))}
              </FlexRow>
              <div>
                {data.sittes.map((sitte, i) => (
                  <div>
                    {showItem === i && (
                      <Card
                        title={`${sitte.firstName} ${sitte.lastName}`}
                        actions={[
                          <Button
                            onClick={() => {
                              const val = i + 1 !== data.sittes.length ? i + 1 : 0;
                              setShow(val);
                            }}
                          >
                            Next
                          </Button>]}
                      >
                        <p>{sitte.rateType}</p>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            </BelowMedium>
          </>
        );
      }}
    </Query>
  );
};

export default Children;
