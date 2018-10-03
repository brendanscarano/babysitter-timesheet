import flattenDeep from 'lodash.flattendeep';
import { MAGGIE, JOHNNY } from './mockChildren';
const PLACEHOLDER_SPACE = { value: ' ', readOnly: true, id: "space" };

const KIDS = [MAGGIE, JOHNNY];

const BASE_HEADERS = ['Month', 'Day', '#', 'Total', ''];
const HEADERS_PER_KID = ['Hours per day', 'Paid/day', 'Notes', ' '];
const HEADERS =
    [...BASE_HEADERS, ...flattenDeep(KIDS.map(kid => HEADERS_PER_KID))].map(
        text => ({ value: text, readOnly: true })
    );

const DATES_TO_SHOW = ["090218", "090318", "090418", "090518", "090618", "090718", "090818"];
const DATES = {
    "090218": { dayOfWeek: "Sun", month: "Sep", dayOfMonth: "02" },
    "090318": { dayOfWeek: "Mon", month: "Sep", dayOfMonth: "03" },
    "090418": { dayOfWeek: "Tue", month: "Sep", dayOfMonth: "04" },
    "090518": { dayOfWeek: "Wed", month: "Sep", dayOfMonth: "05" },
    "090618": { dayOfWeek: "Thu", month: "Sep", dayOfMonth: "06" },
    "090718": { dayOfWeek: "Fri", month: "Sep", dayOfMonth: "07" },
    "090818": { dayOfWeek: "Sat", month: "Sep", dayOfMonth: "08" },
}

const test = () => {
    return DATES_TO_SHOW.map(dateString => {
        console.log('dateString', dateString)
        return [
            { value: DATES[dateString].dayOfWeek, readOnly: true, id: "dayOfWeek" },
            { value: DATES[dateString].month, readOnly: true, id: "month" },
            { value: DATES[dateString].dayOfMonth, readOnly: true, id: "dayOfMonth" },
            { value: '$0.00', readOnly: true, id: "dailyTotal" },
            PLACEHOLDER_SPACE,
            ...flattenDeep(KIDS.map(({ dates }) =>
                [
                    { value: dates[dateString].hours, id: "hours" },
                    { value: dates[dateString].paid, id: "paid" },
                    { value: dates[dateString].notes, id: "notes" },
                    PLACEHOLDER_SPACE,
                ]
            ))
        ]
    })
}

console.log('test', test());


export const mockData = [
    [
        { ...PLACEHOLDER_SPACE, colSpan: 5 },
        ...flattenDeep(KIDS.map(({ info }) =>
            [{ value: info.name, colSpan: 3 }, PLACEHOLDER_SPACE]
        ))
    ],
    HEADERS,
    ...DATES_TO_SHOW.map(dateString => {
        console.log('dateString', dateString)
        return [
            { value: DATES[dateString].dayOfWeek, readOnly: true, id: "dayOfWeek" },
            { value: DATES[dateString].month, readOnly: true, id: "month" },
            { value: DATES[dateString].dayOfMonth, readOnly: true, id: "dayOfMonth" },
            { value: '$0.00', readOnly: true, id: "dailyTotal" },
            PLACEHOLDER_SPACE,
            ...flattenDeep(KIDS.map(({ dates }) =>
                [
                    { value: dates[dateString].hours, id: "hours" },
                    { value: dates[dateString].paid, id: "paid" },
                    { value: dates[dateString].notes, id: "notes" },
                    PLACEHOLDER_SPACE,
                ]
            ))
        ]
    })
    // [{ value: '' }, { value: 'WE Sep 8 Total' }, { value: '$1000.00' }],
]
