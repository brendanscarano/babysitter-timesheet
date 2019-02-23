import React from 'react';
import { flatMap } from 'lodash';
import { Table as Tbl, Checkbox } from 'antd';
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
  title: 'Day',
  dataIndex: 'dayOfWeek',
  key: 'dayOfWeek',
}, {
  title: 'Month',
  dataIndex: 'month',
  key: 'month',
}, {
  title: 'Date',
  dataIndex: 'formattedDate',
  key: 'formattedDate',
},
{
  title: 'Sitting',
  dataIndex: 'isSitting',
  key: 'isSitting',
  render: checked => <Checkbox checked={checked} />,
},
];

const dates = flatMap(getDayArrayByDate('2019-02')).filter(date => date.monthNumber === '02');
console.log(dates);

const Table = ({ data }) => {
  const dateObjIds = data.map(p => p.dateObjectId);
  const dat = dates.map((d) => {
    if (dateObjIds.includes(d.formattedDate)) {
      return ({ ...d, isSitting: true });
    }

    return d;
  });

  return (
    <div>
      <Tbl
        columns={columns}
        dataSource={dat}
        pagination={{ pageSize: 30 }}
        scroll={{ y: 300 }}
      />
    </div>
  );
};

Table.propTypes = {

};

export default Table;
