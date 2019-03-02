import React from 'react';
import { flatMap } from 'lodash';
import { Table as Tbl, Checkbox } from 'antd';
import moment from 'moment';
import { getDayArrayByDate } from '../../utils/dates';

// {
//   "id": "cjsb2cwc3002r09350emnitdp",
//   "month": 1,
//   "day": 27,
//   "year": 19,
//   "hours": 0,
//   "paid": null,
//   "dateObjectId": "012719",
//   "isFixedRate": false
// },


const columns = [{
  title: 'Date',
  dataIndex: 'prettyDate',
  key: 'prettyDate',
},
{
  title: 'Sitting',
  dataIndex: 'isSitting',
  key: 'isSitting',
  render: checked => <Checkbox checked={checked} />,
},
];


const Table = ({ data, date }) => {
  const dates = flatMap(getDayArrayByDate(date)).filter(d => d.monthNumber === date.split('-')[1]);
  const dateObjIds = data.map(p => p.dateObjectId);
  const dat = dates.map((d) => {
    const prettyDate = moment(`20${d.year}-${d.monthNumber}-${d.number}`).format('DD-YY');

    if (dateObjIds.includes(d.formattedDate)) {
      return ({
        ...d,
        prettyDate,
        isSitting: true,
      });
    }

    return ({
      ...d,
      prettyDate,
    });
  });

  return (
    <div>
      <Tbl
        columns={columns}
        dataSource={dat}
        pagination={{ pageSize: 35 }}
        scroll={{ y: 300 }}
      />
    </div>
  );
};

Table.propTypes = {

};

export default Table;
