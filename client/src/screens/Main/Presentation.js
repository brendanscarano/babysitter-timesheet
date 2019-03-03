import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Avatar, Icon } from 'antd';
import { DataSheet } from '../../components/DataSheet';
import { MonthPicker } from '../../components/MonthPicker';
import { FlexRow } from '../../components/Flex';
import { NewSitteModal } from '../../components/NewSitteModal';
import { theme } from '../../shared/theme';
import { formatCurr } from '../../helpers/formatCurr';

const TOP_BAR_HEIGHT = 64;

const StyledContent = styled.div`
  height: 100%;
  overflow: scroll;
  background-color: ${theme.colors.background};
`;

// Need the extra TopBarBackground so when the datasheet scrolls up,
// the border-radius of the TopBar doesn't get conflicted
const TopBarBackground = styled.div`
  height: ${TOP_BAR_HEIGHT}px;
  background-color: ${theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 1;
`;
const TopBar = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  background-color: ${theme.colors.dataSheetBackground};
  padding: 1rem;
  border: 1px solid ${theme.colors.dataSheetBackground};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const DateWrapper = styled(FlexRow)`
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
`;

const SheetsWrapper = styled(FlexRow)`
  background-color: ${theme.colors.dataSheetBackground};
  padding: 0 1rem;
`;

const NoDataWrapper = styled(SheetsWrapper)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5rem;
  height: 100%;
`;

const Presentation = ({
  onCalendarMonthClick,
  monthToView,
  monthlyTotal,
  data,
  onCellsChanged,
}) => {
  const leftPanel = data.map(array => array.slice(0, 4));
  const rightPanel = data.map(array => array.slice(4));
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <StyledContent>
      <Avatar
        onClick={() => setModalVisable(true)}
        style={{
          marginRight: '0.5rem',
          marginBottom: '0.5rem',
          color: '#00FF7F',
          backgroundColor: '',
          cursor: 'pointer',
        }}
      >
        <Icon type="plus" />
      </Avatar>
      <TopBarBackground>
        <TopBar>
          <DateWrapper>
            <MonthPicker
              onCalendarMonthClick={onCalendarMonthClick}
              monthToView={monthToView}
            />
            <h3>
              Monthly Total:
              {' '}
              <b>{formatCurr(monthlyTotal)}</b>
            </h3>
          </DateWrapper>
        </TopBar>
      </TopBarBackground>
      <NewSitteModal onToggle={setModalVisable} visable={modalVisable} />
      {data.length === 0
        ? (
          <NoDataWrapper>
            <h2>
              You haven
              {'\''}
              t added any sittes yet.
            </h2>
            <Button type="primary" onClick={() => setModalVisable(true)}>
              Add a Child
            </Button>
          </NoDataWrapper>
        )
        : (
          <SheetsWrapper>
            <DataSheet
              data={leftPanel}
              onCellsChanged={onCellsChanged}
              topBarHeight={TOP_BAR_HEIGHT}
            />

            <DataSheet
              data={rightPanel}
              onCellsChanged={onCellsChanged}
              topBarHeight={TOP_BAR_HEIGHT}
            />
          </SheetsWrapper>
        )
      }
    </StyledContent>
  );
};

Presentation.propTypes = {
  onCalendarMonthClick: PropTypes.func.isRequired,
  // YYYY-MM
  monthToView: PropTypes.string.isRequired,
  monthlyTotal: PropTypes.number.isRequired,
  // data: dataSheetModel,
  onCellsChanged: PropTypes.func.isRequired,
};

export { Presentation };
