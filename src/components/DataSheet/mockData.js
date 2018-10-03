import flattenDeep from 'lodash.flattendeep';

const HEADERS = ['Month', 'Day', '#', 'Total', '', 'Hours per day', 'Paid/day', 'Notes'].map(text => ({ value: text, readOnly: true }));

const MAGGIE = {
    "0902": { date: 'Sun Sep 2', hours: '0', paid: '0', notes: '' },
    "0903": { date: 'Mon Sep 3', hours: '7.5', paid: '60', notes: '' },
    "0904": { date: 'Tue Sep 4', hours: '6.25', paid: '50', notes: '' },
    "0905": { date: 'Wed Sep 5', hours: '7.5', paid: '60', notes: '' },
    "0906": { date: 'Thu Sep 6', hours: '6.25', paid: '50', notes: '' },
    "0907": { date: 'Fri Sep 7', hours: '0', paid: '0', notes: '' },
    "0908": { date: 'Sun Sep 8', hours: '0', paid: '0', notes: '' },
}

const KIDS = [MAGGIE];

const PLACEHOLDER_SPACE = { value: ' ', readOnly: true, id: "space" };

export const mockData = [
    HEADERS,
    [
        { value: 'Sun', readOnly: true, id: "dayOfWeek" },
        { value: 'Sep', readOnly: true, id: "month" },
        { value: '2', readOnly: true, id: "dayOfMonth" },
        { value: '$0.00', readOnly: true, id: "dailyTotal" },
        PLACEHOLDER_SPACE,
        ...flattenDeep(...KIDS.map(kid =>
            [
                { value: kid["0902"].hours, id: "hours" },
                { value: kid["0902"].paid, id: "paid" },
                { value: kid["0902"].notes, id: "notes" },
                PLACEHOLDER_SPACE,
            ]
        ))
    ],
    [{ value: 'Mon' }, { value: 'Sep' }, { value: '3' }],
    [{ value: 'Tue' }, { value: 'Sep' }, { value: '4' }],
    [{ value: 'Wed' }, { value: 'Sep' }, { value: '5' }],
    [{ value: 'Thu' }, { value: 'Sep' }, { value: '6' }],
    [{ value: 'Fri' }, { value: 'Sep' }, { value: '7' }],
    [{ value: 'Sat' }, { value: 'Sep' }, { value: '8' }],
    [{ value: '' }, { value: 'WE Sep 8 Total' }, { value: '$1000.00' }],
]


// const DATES = {
//     "0902": {
//         { value: 'Sun', "readOnly": true, "id": "dayOfWeek" },
//         { value: 'Sep', "readOnly": true, "id": "month" },
//         { value: '2', "readOnly": true, "id": "dayOfMonth" },
//         { value: '$0.00', "readOnly": true, "id": "dailyTotal" },
//         { value: ' ', "readOnly": true, "id": "space" },
//     },
// };
