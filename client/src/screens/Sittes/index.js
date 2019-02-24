import React, { useState } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import {
  Calendar,
  Carousel,
  Spin,
  Layout,
  Icon,
  Avatar,
  Input,
} from 'antd';
import moment from 'moment';
import { FlexRow, FlexColumn } from '../../components/Flex';
import { GET_SITTES } from '../../graphql/queries/GET_SITTES';
import { getGenderEmoji } from '../../utils/sittes';
import Table from './Table';

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
  const [date, setDate] = useState(moment().format('YYYY-MM'));
  const carousel = React.createRef();

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
          <Layout style={{ backgroundColor: 'transparent' }}>
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
            <Content>
              <Wrapper>
                <Carousel ref={carousel}>
                  {data.sittes.map(sitte => (
                    <FlexColumn>
                      <FlexRow>
                        <h2>
                          {sitte.firstName}
                          {' '}
                          {sitte.lastName}
                        </h2>
                        <div style={{ marginLeft: '0.5rem' }}>{getGenderEmoji(sitte.gender)}</div>
                      </FlexRow>
                      <div style={{ fontWeight: '600' }}>
                        {sitte.rateType.toLowerCase()}
                        {' '}
                        rate
                        {' '}
                        <span style={{ color: 'green' }}>
                          $
                          {sitte.rateAmount}
                        </span>
                      </div>
                      <FlexRow style={{
                        marginTop: '2rem',
                      }}
                      >
                        <div
                          style={{
                            marginRight: '2rem',
                          }}
                        >
                          <Table date={date} data={sitte.dates} />
                        </div>
                        <div
                          style={{
                            border: '1px solid #d9d9d9',
                            borderRadius: 4,
                            backgroundColor: 'white',
                            marginRight: '2rem',
                            maxWidth: '400px',
                            minWidth: '300px',
                            height: '330px',
                          }}
                        >
                          <Calendar
                            fullscreen={false}
                            onChange={(d) => {
                              setDate(d.format('YYYY-MM'));
                            }}
                            dateCellRender={
                              value => (
                                <>
                                  {
                                    sitte.dates.map(sitteDate => (
                                      value.format('YY-M-D') === `${sitteDate.year}-${sitteDate.month}-${sitteDate.day}`
                                      && (
                                        <Icon type="dollar" theme="twoTone" twoToneColor="#52c41a" />
                                      )
                                    ))
                                  }
                                </>
                              )
                            }
                          />
                        </div>
                      </FlexRow>
                      <FlexRow>
                        <div style={{ flex: 1 }}>
                          <h3>Notes</h3>
                          <Input.TextArea style={{ resize: 'none' }} rows={4} />
                        </div>
                      </FlexRow>
                    </FlexColumn>
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
        );
      }}
    </Query>
  );
};

export default Children;
