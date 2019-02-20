import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import {
  Calendar,
  Carousel,
  Spin,
  Icon,
} from 'antd';
import { FlexRow, FlexColumn } from '../../components/Flex';
import { GET_SITTES } from '../../graphql/queries/GET_SITTES';
import { getGenderEmoji } from '../../utils/sittes';

const Wrapper = styled.div`
  > * { 
    min-height: 0;
    min-width: 0; 
  }
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  
  .ant-carousel .slick-slide {
    padding: 2rem;
    height: 100vh;
    background: #eee;
    overflow: scroll;
  }
  
  /* .anticon-dollar { 
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  } */

  .anticon-left-circle, .anticon-right-circle {
    svg {
      margin: 1rem;
      width: 2rem;
      height: 2rem;
      color: salmon;
    }
  }
`;

const afterChange = (a) => {
  console.log(a);
};

const onPanelChange = (a) => {
  console.log(a);
};

const Children = () => (
  <Query query={GET_SITTES}>
    {({ data, loading, error }) => {
      if (loading) {
        return (
          <Spin />
        );
      }
      if (error) {
        return (
          <Spin />
        );
      }

      const carousel = React.createRef();
      return (
        <Wrapper>
          <Carousel
            afterChange={afterChange}
            ref={carousel}
          >
            {data.sittes.map((d) => {
              function dateCellRender(value) {
                console.log('value', value.date(), value.month(), value.year().toString().substr(2, 2), d);
                // const listData = getListData(value);
                return (
                  <>
                    {
                      d.dates.map((date) => {
                        console.log(date);
                        return (
                          value.date() === date.day
                          && value.month() === date.month
                          && value.year().toString().substr(2, 2) === date.year.toString()
                          && (
                            <Icon type="dollar" theme="twoTone" twoToneColor="#52c41a" />
                          )
                        );
                      })
                    }
                  </>
                );
              }

              return (
                <FlexColumn>
                  <FlexRow>
                    <h2>
                      {d.firstName}
                      {' '}
                      {d.lastName}
                    </h2>
                    <div style={{ marginLeft: '0.5rem' }}>{getGenderEmoji(d.gender)}</div>
                  </FlexRow>
                  <div style={{ fontWeight: '600' }}>
                    {d.rateType.toLowerCase()}
                    {' '}
                    rate
                    {' '}
                    <span style={{ color: 'green' }}>
                      $
                      {d.rateAmount}
                    </span>
                  </div>
                  <div
                    style={{
                      border: '1px solid #d9d9d9',
                      borderRadius: 4,
                      backgroundColor: 'white',
                      marginTop: '1rem',
                      maxWidth: '400px',
                    }}
                  >
                    <Calendar fullscreen={false} dateCellRender={dateCellRender} onPanelChange={onPanelChange} />
                  </div>
                  {/* <pre>
                    {JSON.stringify(d, null, 3)}
                  </pre> */}
                </FlexColumn>
              );
            })}
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
      );
    }}
  </Query>
);
Children.propTypes = {

};

export default Children;
