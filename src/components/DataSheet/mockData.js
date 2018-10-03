import flattenDeep from 'lodash.flattendeep';
import { MAGGIE, JOHNNY } from './mockChildren';
const PLACEHOLDER_SPACE = { value: ' ', readOnly: true, id: "space" };

const KIDS = [MAGGIE, JOHNNY];
console.log('KIDS', KIDS)
// console.log('testing', ...flattenDeep(...KIDS.map(kid => HEADERS_PER_KID))
const HEADERS_PER_KID = ['Hours per day', 'Paid/day', 'Notes', ' '];
const HEADERS = ['Month', 'Day', '#', 'Total', '', ...flattenDeep(KIDS.map(kid => HEADERS_PER_KID))]
    .map(text => ({ value: text, readOnly: true }));

export const mockData = [
    [
        { ...PLACEHOLDER_SPACE, colSpan: 5 },
        ...flattenDeep(KIDS.map(({ info }) => console.log('info', info) ||
            [
                { value: info.name, colSpan: 3 },
                PLACEHOLDER_SPACE,
            ]
        ))
    ],
    HEADERS,
    [
        { value: 'Sun', readOnly: true, id: "dayOfWeek" },
        { value: 'Sep', readOnly: true, id: "month" },
        { value: '2', readOnly: true, id: "dayOfMonth" },
        { value: '$0.00', readOnly: true, id: "dailyTotal" },
        PLACEHOLDER_SPACE,
        ...flattenDeep(KIDS.map(({ dates }) =>
            [
                { value: dates["0902"].hours, id: "hours" },
                { value: dates["0902"].paid, id: "paid" },
                { value: dates["0902"].notes, id: "notes" },
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
