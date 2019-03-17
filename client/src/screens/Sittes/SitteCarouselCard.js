import React from 'react';
import {
  Calendar,
  Icon,
  Input,
  Card,
  Button,
  Comment,
  Tooltip,
} from 'antd';
import { Link } from 'react-router-dom';
import { FlexRow, FlexColumn } from '../../components/Flex';
import { getGenderEmoji } from '../../utils/sittes';
import PaymentType from './PaymentType';


const SitteCarouselCard = ({
  sitte, onSetDate, date, onSetPayment, payment,
  onSetNote, note, onSubmit, updateId,
}) => (
  <FlexColumn>
    <FlexRow>
      <h2>
        <Link to={`/sitte/${sitte.id}`}>
          {`${sitte.firstName} ${sitte.lastName} `}
        </Link>
      </h2>
      <div style={{ marginLeft: '0.5rem' }}>
        {getGenderEmoji(sitte.gender)}
      </div>
    </FlexRow>
    <div style={{ fontWeight: '600' }}>
      {` ${sitte.rateType.toLowerCase()} rate`}
      <span style={{ color: 'green' }}>
        {` $${sitte.rateAmount}`}
      </span>
    </div>
    <FlexRow style={{
      marginTop: '2rem',
    }}
    >
      <div
        style={{
          border: '1px solid #d9d9d9',
          borderRadius: 4,
          backgroundColor: 'white',
          marginRight: '2rem',
        }}
      >
        <Calendar
          fullscreen
          onChange={d => onSetDate({
            formattedDate: d.format('YYYY-MM'),
            momentDate: d,
          })}
          dateCellRender={
            value => (
                <>
                  {
                    sitte.dates.map(sitteDate => (
                      value.format('YY-M-D') === `${sitteDate.year}-${sitteDate.month}-${sitteDate.day}`
                      && (
                        <>
                          <Icon type="dollar" theme="twoTone" twoToneColor="#52c41a" />
                          <p>{(sitteDate.hours) ? `Sat for ${sitteDate.hours} hours` : ''}</p>
                          <p>{sitteDate.notes}</p>
                        </>
                      )
                    ))
                  }
                </>
            )
          }
        />
      </div>

      <div>
        <Card
          title={date.momentDate.format('MMMM Do YYYY')}
          actions={[
            <Button
              icon="edit"
              onClick={() => {
                onSubmit();
                onSetPayment(null);
                onSetNote(null);
              }}
            >
              {updateId ? 'Update' : 'Create'}
            </Button>,
          ]}
          style={{ width: 300 }}
        >
          {!updateId && (
            <div>
              <PaymentType
                rateType={sitte.rateType}
                rateAmount={sitte.rateAmount}
                value={payment}
                checked={!!updateId}
                onChange={value => onSetPayment(value)}
              />
            </div>
          )}
          <div>
            <h3>Notes</h3>
            <Input.TextArea
              style={{ resize: 'none' }}
              rows={4}
              value={note}
              onChange={e => onSetNote(e.target.value)}
            />
          </div>
          {
            sitte.dates.map(sitteDate => (date.momentDate.format('YY-M-D') === `${sitteDate.year}-${sitteDate.month}-${sitteDate.day}`
                && (
                  <Comment
                    datetime={(
                      <Tooltip title={date.momentDate.format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{date.momentDate.fromNow()}</span>
                      </Tooltip>
                    )}
                    content={(
                      <p>{sitteDate.notes}</p>
                    )}
                  />
                )))
          }
        </Card>

      </div>
    </FlexRow>
  </FlexColumn>
);

export default SitteCarouselCard;
