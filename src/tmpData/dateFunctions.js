// REDUCE INPUT => OUTPUT
// days2018.reduce((acc, curr) => {
//     if (acc[curr.weekNumber]) {
//         return {
//             ...acc,
//             [curr.weekNumber]: [...acc[curr.weekNumber], curr]
//         }
//     }

//     return {
//         ...acc,
//         [curr.weekNumber]: [curr]
//     }
// }, {})

// INPUT
export const days2018 = [
  {
    month: '12', day: '31', year: '2017', weekNumber:	'1',
  },
  {
    month: '1',	day: '1',	year: '2018', weekNumber:	'1',
  },
  {
    month: '1',	day: '2',	year: '2018', weekNumber:	'1',
  },
  {
    month: '1',	day: '3',	year: '2018', weekNumber:	'1',
  },
  {
    month: '1',	day: '4',	year: '2018', weekNumber:	'1',
  },
  {
    month: '1',	day: '5',	year: '2018', weekNumber:	'1',
  },
  {
    month: '1',	day: '6',	year: '2018', weekNumber:	'1',
  },
  {
    month: '1',	day: '7',	year: '2018', weekNumber:	'2',
  },
  {
    month: '1',	day: '8',	year: '2018', weekNumber:	'2',
  },
  {
    month: '1',	day: '9',	year: '2018', weekNumber:	'2',
  },
  {
    month: '1',	day: '10',	year: '2018', weekNumber:	'2',
  },
  {
    month: '1',	day: '11',	year: '2018', weekNumber:	'2',
  },
  {
    month: '1',	day: '12',	year: '2018', weekNumber:	'2',
  },
  {
    month: '1',	day: '13',	year: '2018', weekNumber:	'2',
  },
  {
    month: '1',	day: '14',	year: '2018', weekNumber:	'3',
  },
  {
    month: '1',	day: '15',	year: '2018', weekNumber:	'3',
  },
  {
    month: '1',	day: '16',	year: '2018', weekNumber:	'3',
  },
  {
    month: '1',	day: '17',	year: '2018', weekNumber:	'3',
  },
  {
    month: '1',	day: '18',	year: '2018', weekNumber:	'3',
  },
  {
    month: '1',	day: '19',	year: '2018', weekNumber:	'3',
  },
  {
    month: '1',	day: '20',	year: '2018', weekNumber:	'3',
  },
  {
    month: '1',	day: '21',	year: '2018', weekNumber:	'4',
  },
  {
    month: '1',	day: '22',	year: '2018', weekNumber:	'4',
  },
  {
    month: '1',	day: '23',	year: '2018', weekNumber:	'4',
  },
  {
    month: '1',	day: '24',	year: '2018', weekNumber:	'4',
  },
  {
    month: '1',	day: '25',	year: '2018', weekNumber:	'4',
  },
  {
    month: '1',	day: '26',	year: '2018', weekNumber:	'4',
  },
  {
    month: '1',	day: '27',	year: '2018', weekNumber:	'4',
  },
  {
    month: '1',	day: '28',	year: '2018', weekNumber:	'5',
  },
  {
    month: '1',	day: '29',	year: '2018', weekNumber:	'5',
  },
  {
    month: '1',	day: '30',	year: '2018', weekNumber:	'5',
  },
  {
    month: '1',	day: '31',	year: '2018', weekNumber:	'5',
  },
  {
    month: '2',	day: '1',	year: '2018', weekNumber:	'5',
  },
  {
    month: '2',	day: '2',	year: '2018', weekNumber:	'5',
  },
  {
    month: '2',	day: '3',	year: '2018', weekNumber:	'5',
  },
  {
    month: '2',	day: '4',	year: '2018', weekNumber:	'6',
  },
  {
    month: '2',	day: '5',	year: '2018', weekNumber:	'6',
  },
  {
    month: '2',	day: '6',	year: '2018', weekNumber:	'6',
  },
  {
    month: '2',	day: '7',	year: '2018', weekNumber:	'6',
  },
  {
    month: '2',	day: '8',	year: '2018', weekNumber:	'6',
  },
  {
    month: '2',	day: '9',	year: '2018', weekNumber:	'6',
  },
  {
    month: '2',	day: '10',	year: '2018', weekNumber:	'6',
  },
  {
    month: '2',	day: '11',	year: '2018', weekNumber:	'7',
  },
  {
    month: '2',	day: '12',	year: '2018', weekNumber:	'7',
  },
  {
    month: '2',	day: '13',	year: '2018', weekNumber:	'7',
  },
  {
    month: '2',	day: '14',	year: '2018', weekNumber:	'7',
  },
  {
    month: '2',	day: '15',	year: '2018', weekNumber:	'7',
  },
  {
    month: '2',	day: '16',	year: '2018', weekNumber:	'7',
  },
  {
    month: '2',	day: '17',	year: '2018', weekNumber:	'7',
  },
  {
    month: '2',	day: '18',	year: '2018', weekNumber:	'8',
  },
  {
    month: '2',	day: '19',	year: '2018', weekNumber:	'8',
  },
  {
    month: '2',	day: '20',	year: '2018', weekNumber:	'8',
  },
  {
    month: '2',	day: '21',	year: '2018', weekNumber:	'8',
  },
  {
    month: '2',	day: '22',	year: '2018', weekNumber:	'8',
  },
  {
    month: '2',	day: '23',	year: '2018', weekNumber:	'8',
  },
  {
    month: '2',	day: '24',	year: '2018', weekNumber:	'8',
  },
  {
    month: '2',	day: '25',	year: '2018', weekNumber:	'9',
  },
  {
    month: '2',	day: '26',	year: '2018', weekNumber:	'9',
  },
  {
    month: '2',	day: '27',	year: '2018', weekNumber:	'9',
  },
  {
    month: '2',	day: '28',	year: '2018', weekNumber:	'9',
  },
  {
    month: '3',	day: '1',	year: '2018', weekNumber:	'9',
  },
  {
    month: '3',	day: '2',	year: '2018', weekNumber:	'9',
  },
  {
    month: '3',	day: '3',	year: '2018', weekNumber:	'9',
  },
  {
    month: '3',	day: '4',	year: '2018', weekNumber:	'10',
  },
  {
    month: '3',	day: '5',	year: '2018', weekNumber:	'10',
  },
  {
    month: '3',	day: '6',	year: '2018', weekNumber:	'10',
  },
  {
    month: '3',	day: '7',	year: '2018', weekNumber:	'10',
  },
  {
    month: '3',	day: '8',	year: '2018', weekNumber:	'10',
  },
  {
    month: '3',	day: '9',	year: '2018', weekNumber:	'10',
  },
  {
    month: '3',	day: '10',	year: '2018', weekNumber:	'10',
  },
  {
    month: '3',	day: '11',	year: '2018', weekNumber:	'11',
  },
  {
    month: '3',	day: '12',	year: '2018', weekNumber:	'11',
  },
  {
    month: '3',	day: '13',	year: '2018', weekNumber:	'11',
  },
  {
    month: '3',	day: '14',	year: '2018', weekNumber:	'11',
  },
  {
    month: '3',	day: '15',	year: '2018', weekNumber:	'11',
  },
  {
    month: '3',	day: '16',	year: '2018', weekNumber:	'11',
  },
  {
    month: '3',	day: '17',	year: '2018', weekNumber:	'11',
  },
  {
    month: '3',	day: '18',	year: '2018', weekNumber:	'12',
  },
  {
    month: '3',	day: '19',	year: '2018', weekNumber:	'12',
  },
  {
    month: '3',	day: '20',	year: '2018', weekNumber:	'12',
  },
  {
    month: '3',	day: '21',	year: '2018', weekNumber:	'12',
  },
  {
    month: '3',	day: '22',	year: '2018', weekNumber:	'12',
  },
  {
    month: '3',	day: '23',	year: '2018', weekNumber:	'12',
  },
  {
    month: '3',	day: '24',	year: '2018', weekNumber:	'12',
  },
  {
    month: '3',	day: '25',	year: '2018', weekNumber:	'13',
  },
  {
    month: '3',	day: '26',	year: '2018', weekNumber:	'13',
  },
  {
    month: '3',	day: '27',	year: '2018', weekNumber:	'13',
  },
  {
    month: '3',	day: '28',	year: '2018', weekNumber:	'13',
  },
  {
    month: '3',	day: '29',	year: '2018', weekNumber:	'13',
  },
  {
    month: '3',	day: '30',	year: '2018', weekNumber:	'13',
  },
  {
    month: '3',	day: '31',	year: '2018', weekNumber:	'13',
  },
  {
    month: '4',	day: '1',	year: '2018', weekNumber:	'14',
  },
  {
    month: '4',	day: '2',	year: '2018', weekNumber:	'14',
  },
  {
    month: '4',	day: '3',	year: '2018', weekNumber:	'14',
  },
  {
    month: '4',	day: '4',	year: '2018', weekNumber:	'14',
  },
  {
    month: '4',	day: '5',	year: '2018', weekNumber:	'14',
  },
  {
    month: '4',	day: '6',	year: '2018', weekNumber:	'14',
  },
  {
    month: '4',	day: '7',	year: '2018', weekNumber:	'14',
  },
  {
    month: '4',	day: '8',	year: '2018', weekNumber:	'15',
  },
  {
    month: '4',	day: '9',	year: '2018', weekNumber:	'15',
  },
  {
    month: '4',	day: '10',	year: '2018', weekNumber:	'15',
  },
  {
    month: '4',	day: '11',	year: '2018', weekNumber:	'15',
  },
  {
    month: '4',	day: '12',	year: '2018', weekNumber:	'15',
  },
  {
    month: '4',	day: '13',	year: '2018', weekNumber:	'15',
  },
  {
    month: '4',	day: '14',	year: '2018', weekNumber:	'15',
  },
  {
    month: '4',	day: '15',	year: '2018', weekNumber:	'16',
  },
  {
    month: '4',	day: '16',	year: '2018', weekNumber:	'16',
  },
  {
    month: '4',	day: '17',	year: '2018', weekNumber:	'16',
  },
  {
    month: '4',	day: '18',	year: '2018', weekNumber:	'16',
  },
  {
    month: '4',	day: '19',	year: '2018', weekNumber:	'16',
  },
  {
    month: '4',	day: '20',	year: '2018', weekNumber:	'16',
  },
  {
    month: '4',	day: '21',	year: '2018', weekNumber:	'16',
  },
  {
    month: '4',	day: '22',	year: '2018', weekNumber:	'17',
  },
  {
    month: '4',	day: '23',	year: '2018', weekNumber:	'17',
  },
  {
    month: '4',	day: '24',	year: '2018', weekNumber:	'17',
  },
  {
    month: '4',	day: '25',	year: '2018', weekNumber:	'17',
  },
  {
    month: '4',	day: '26',	year: '2018', weekNumber:	'17',
  },
  {
    month: '4',	day: '27',	year: '2018', weekNumber:	'17',
  },
  {
    month: '4',	day: '28',	year: '2018', weekNumber:	'17',
  },
  {
    month: '4',	day: '29',	year: '2018', weekNumber:	'18',
  },
  {
    month: '4',	day: '30',	year: '2018', weekNumber:	'18',
  },
  {
    month: '5',	day: '1',	year: '2018', weekNumber:	'18',
  },
  {
    month: '5',	day: '2',	year: '2018', weekNumber:	'18',
  },
  {
    month: '5',	day: '3',	year: '2018', weekNumber:	'18',
  },
  {
    month: '5',	day: '4',	year: '2018', weekNumber:	'18',
  },
  {
    month: '5',	day: '5',	year: '2018', weekNumber:	'18',
  },
  {
    month: '5',	day: '6',	year: '2018', weekNumber:	'19',
  },
  {
    month: '5',	day: '7',	year: '2018', weekNumber:	'19',
  },
  {
    month: '5',	day: '8',	year: '2018', weekNumber:	'19',
  },
  {
    month: '5',	day: '9',	year: '2018', weekNumber:	'19',
  },
  {
    month: '5',	day: '10',	year: '2018', weekNumber:	'19',
  },
  {
    month: '5',	day: '11',	year: '2018', weekNumber:	'19',
  },
  {
    month: '5',	day: '12',	year: '2018', weekNumber:	'19',
  },
  {
    month: '5',	day: '13',	year: '2018', weekNumber:	'20',
  },
  {
    month: '5',	day: '14',	year: '2018', weekNumber:	'20',
  },
  {
    month: '5',	day: '15',	year: '2018', weekNumber:	'20',
  },
  {
    month: '5',	day: '16',	year: '2018', weekNumber:	'20',
  },
  {
    month: '5',	day: '17',	year: '2018', weekNumber:	'20',
  },
  {
    month: '5',	day: '18',	year: '2018', weekNumber:	'20',
  },
  {
    month: '5',	day: '19',	year: '2018', weekNumber:	'20',
  },
  {
    month: '5',	day: '20',	year: '2018', weekNumber:	'21',
  },
  {
    month: '5',	day: '21',	year: '2018', weekNumber:	'21',
  },
  {
    month: '5',	day: '22',	year: '2018', weekNumber:	'21',
  },
  {
    month: '5',	day: '23',	year: '2018', weekNumber:	'21',
  },
  {
    month: '5',	day: '24',	year: '2018', weekNumber:	'21',
  },
  {
    month: '5',	day: '25',	year: '2018', weekNumber:	'21',
  },
  {
    month: '5',	day: '26',	year: '2018', weekNumber:	'21',
  },
  {
    month: '5',	day: '27',	year: '2018', weekNumber:	'22',
  },
  {
    month: '5',	day: '28',	year: '2018', weekNumber:	'22',
  },
  {
    month: '5',	day: '29',	year: '2018', weekNumber:	'22',
  },
  {
    month: '5',	day: '30',	year: '2018', weekNumber:	'22',
  },
  {
    month: '5',	day: '31',	year: '2018', weekNumber:	'22',
  },
  {
    month: '6',	day: '1',	year: '2018', weekNumber:	'22',
  },
  {
    month: '6',	day: '2',	year: '2018', weekNumber:	'22',
  },
  {
    month: '6',	day: '3',	year: '2018', weekNumber:	'23',
  },
  {
    month: '6',	day: '4',	year: '2018', weekNumber:	'23',
  },
  {
    month: '6',	day: '5',	year: '2018', weekNumber:	'23',
  },
  {
    month: '6',	day: '6',	year: '2018', weekNumber:	'23',
  },
  {
    month: '6',	day: '7',	year: '2018', weekNumber:	'23',
  },
  {
    month: '6',	day: '8',	year: '2018', weekNumber:	'23',
  },
  {
    month: '6',	day: '9',	year: '2018', weekNumber:	'23',
  },
  {
    month: '6',	day: '10',	year: '2018', weekNumber:	'24',
  },
  {
    month: '6',	day: '11',	year: '2018', weekNumber:	'24',
  },
  {
    month: '6',	day: '12',	year: '2018', weekNumber:	'24',
  },
  {
    month: '6',	day: '13',	year: '2018', weekNumber:	'24',
  },
  {
    month: '6',	day: '14',	year: '2018', weekNumber:	'24',
  },
  {
    month: '6',	day: '15',	year: '2018', weekNumber:	'24',
  },
  {
    month: '6',	day: '16',	year: '2018', weekNumber:	'24',
  },
  {
    month: '6',	day: '17',	year: '2018', weekNumber:	'25',
  },
  {
    month: '6',	day: '18',	year: '2018', weekNumber:	'25',
  },
  {
    month: '6',	day: '19',	year: '2018', weekNumber:	'25',
  },
  {
    month: '6',	day: '20',	year: '2018', weekNumber:	'25',
  },
  {
    month: '6',	day: '21',	year: '2018', weekNumber:	'25',
  },
  {
    month: '6',	day: '22',	year: '2018', weekNumber:	'25',
  },
  {
    month: '6',	day: '23',	year: '2018', weekNumber:	'25',
  },
  {
    month: '6',	day: '24',	year: '2018', weekNumber:	'26',
  },
  {
    month: '6',	day: '25',	year: '2018', weekNumber:	'26',
  },
  {
    month: '6',	day: '26',	year: '2018', weekNumber:	'26',
  },
  {
    month: '6',	day: '27',	year: '2018', weekNumber:	'26',
  },
  {
    month: '6',	day: '28',	year: '2018', weekNumber:	'26',
  },
  {
    month: '6',	day: '29',	year: '2018', weekNumber:	'26',
  },
  {
    month: '6',	day: '30',	year: '2018', weekNumber:	'26',
  },
  {
    month: '7',	day: '1',	year: '2018', weekNumber:	'27',
  },
  {
    month: '7',	day: '2',	year: '2018', weekNumber:	'27',
  },
  {
    month: '7',	day: '3',	year: '2018', weekNumber:	'27',
  },
  {
    month: '7',	day: '4',	year: '2018', weekNumber:	'27',
  },
  {
    month: '7',	day: '5',	year: '2018', weekNumber:	'27',
  },
  {
    month: '7',	day: '6',	year: '2018', weekNumber:	'27',
  },
  {
    month: '7',	day: '7',	year: '2018', weekNumber:	'27',
  },
  {
    month: '7',	day: '8',	year: '2018', weekNumber:	'28',
  },
  {
    month: '7',	day: '9',	year: '2018', weekNumber:	'28',
  },
  {
    month: '7',	day: '10',	year: '2018', weekNumber:	'28',
  },
  {
    month: '7',	day: '11',	year: '2018', weekNumber:	'28',
  },
  {
    month: '7',	day: '12',	year: '2018', weekNumber:	'28',
  },
  {
    month: '7',	day: '13',	year: '2018', weekNumber:	'28',
  },
  {
    month: '7',	day: '14',	year: '2018', weekNumber:	'28',
  },
  {
    month: '7',	day: '15',	year: '2018', weekNumber:	'29',
  },
  {
    month: '7',	day: '16',	year: '2018', weekNumber:	'29',
  },
  {
    month: '7',	day: '17',	year: '2018', weekNumber:	'29',
  },
  {
    month: '7',	day: '18',	year: '2018', weekNumber:	'29',
  },
  {
    month: '7',	day: '19',	year: '2018', weekNumber:	'29',
  },
  {
    month: '7',	day: '20',	year: '2018', weekNumber:	'29',
  },
  {
    month: '7',	day: '21',	year: '2018', weekNumber:	'29',
  },
  {
    month: '7',	day: '22',	year: '2018', weekNumber:	'30',
  },
  {
    month: '7',	day: '23',	year: '2018', weekNumber:	'30',
  },
  {
    month: '7',	day: '24',	year: '2018', weekNumber:	'30',
  },
  {
    month: '7',	day: '25',	year: '2018', weekNumber:	'30',
  },
  {
    month: '7',	day: '26',	year: '2018', weekNumber:	'30',
  },
  {
    month: '7',	day: '27',	year: '2018', weekNumber:	'30',
  },
  {
    month: '7',	day: '28',	year: '2018', weekNumber:	'30',
  },
  {
    month: '7',	day: '29',	year: '2018', weekNumber:	'31',
  },
  {
    month: '7',	day: '30',	year: '2018', weekNumber:	'31',
  },
  {
    month: '7',	day: '31',	year: '2018', weekNumber:	'31',
  },
  {
    month: '8',	day: '1',	year: '2018', weekNumber:	'31',
  },
  {
    month: '8',	day: '2',	year: '2018', weekNumber:	'31',
  },
  {
    month: '8',	day: '3',	year: '2018', weekNumber:	'31',
  },
  {
    month: '8',	day: '4',	year: '2018', weekNumber:	'31',
  },
  {
    month: '8',	day: '5',	year: '2018', weekNumber:	'32',
  },
  {
    month: '8',	day: '6',	year: '2018', weekNumber:	'32',
  },
  {
    month: '8',	day: '7',	year: '2018', weekNumber:	'32',
  },
  {
    month: '8',	day: '8',	year: '2018', weekNumber:	'32',
  },
  {
    month: '8',	day: '9',	year: '2018', weekNumber:	'32',
  },
  {
    month: '8',	day: '10',	year: '2018', weekNumber:	'32',
  },
  {
    month: '8',	day: '11',	year: '2018', weekNumber:	'32',
  },
  {
    month: '8',	day: '12',	year: '2018', weekNumber:	'33',
  },
  {
    month: '8',	day: '13',	year: '2018', weekNumber:	'33',
  },
  {
    month: '8',	day: '14',	year: '2018', weekNumber:	'33',
  },
  {
    month: '8',	day: '15',	year: '2018', weekNumber:	'33',
  },
  {
    month: '8',	day: '16',	year: '2018', weekNumber:	'33',
  },
  {
    month: '8',	day: '17',	year: '2018', weekNumber:	'33',
  },
  {
    month: '8',	day: '18',	year: '2018', weekNumber:	'33',
  },
  {
    month: '8',	day: '19',	year: '2018', weekNumber:	'34',
  },
  {
    month: '8',	day: '20',	year: '2018', weekNumber:	'34',
  },
  {
    month: '8',	day: '21',	year: '2018', weekNumber:	'34',
  },
  {
    month: '8',	day: '22',	year: '2018', weekNumber:	'34',
  },
  {
    month: '8',	day: '23',	year: '2018', weekNumber:	'34',
  },
  {
    month: '8',	day: '24',	year: '2018', weekNumber:	'34',
  },
  {
    month: '8',	day: '25',	year: '2018', weekNumber:	'34',
  },
  {
    month: '8',	day: '26',	year: '2018', weekNumber:	'35',
  },
  {
    month: '8',	day: '27',	year: '2018', weekNumber:	'35',
  },
  {
    month: '8',	day: '28',	year: '2018', weekNumber:	'35',
  },
  {
    month: '8',	day: '29',	year: '2018', weekNumber:	'35',
  },
  {
    month: '8',	day: '30',	year: '2018', weekNumber:	'35',
  },
  {
    month: '8',	day: '31',	year: '2018', weekNumber:	'35',
  },
  {
    month: '9',	day: '1',	year: '2018', weekNumber:	'35',
  },
  {
    month: '9',	day: '2',	year: '2018', weekNumber:	'36',
  },
  {
    month: '9',	day: '3',	year: '2018', weekNumber:	'36',
  },
  {
    month: '9',	day: '4',	year: '2018', weekNumber:	'36',
  },
  {
    month: '9',	day: '5',	year: '2018', weekNumber:	'36',
  },
  {
    month: '9',	day: '6',	year: '2018', weekNumber:	'36',
  },
  {
    month: '9',	day: '7',	year: '2018', weekNumber:	'36',
  },
  {
    month: '9',	day: '8',	year: '2018', weekNumber:	'36',
  },
  {
    month: '9',	day: '9',	year: '2018', weekNumber:	'37',
  },
  {
    month: '9',	day: '10',	year: '2018', weekNumber:	'37',
  },
  {
    month: '9',	day: '11',	year: '2018', weekNumber:	'37',
  },
  {
    month: '9',	day: '12',	year: '2018', weekNumber:	'37',
  },
  {
    month: '9',	day: '13',	year: '2018', weekNumber:	'37',
  },
  {
    month: '9',	day: '14',	year: '2018', weekNumber:	'37',
  },
  {
    month: '9',	day: '15',	year: '2018', weekNumber:	'37',
  },
  {
    month: '9',	day: '16',	year: '2018', weekNumber:	'38',
  },
  {
    month: '9',	day: '17',	year: '2018', weekNumber:	'38',
  },
  {
    month: '9',	day: '18',	year: '2018', weekNumber:	'38',
  },
  {
    month: '9',	day: '19',	year: '2018', weekNumber:	'38',
  },
  {
    month: '9',	day: '20',	year: '2018', weekNumber:	'38',
  },
  {
    month: '9',	day: '21',	year: '2018', weekNumber:	'38',
  },
  {
    month: '9',	day: '22',	year: '2018', weekNumber:	'38',
  },
  {
    month: '9',	day: '23',	year: '2018', weekNumber:	'39',
  },
  {
    month: '9',	day: '24',	year: '2018', weekNumber:	'39',
  },
  {
    month: '9',	day: '25',	year: '2018', weekNumber:	'39',
  },
  {
    month: '9',	day: '26',	year: '2018', weekNumber:	'39',
  },
  {
    month: '9',	day: '27',	year: '2018', weekNumber:	'39',
  },
  {
    month: '9',	day: '28',	year: '2018', weekNumber:	'39',
  },
  {
    month: '9',	day: '29',	year: '2018', weekNumber:	'39',
  },
  {
    month: '9',	day: '30',	year: '2018', weekNumber:	'40',
  },
  {
    month: '10',	day: '1',	year: '2018', weekNumber:	'40',
  },
  {
    month: '10',	day: '2',	year: '2018', weekNumber:	'40',
  },
  {
    month: '10',	day: '3',	year: '2018', weekNumber:	'40',
  },
  {
    month: '10',	day: '4',	year: '2018', weekNumber:	'40',
  },
  {
    month: '10',	day: '5',	year: '2018', weekNumber:	'40',
  },
  {
    month: '10',	day: '6',	year: '2018', weekNumber:	'40',
  },
  {
    month: '10',	day: '7',	year: '2018', weekNumber:	'41',
  },
  {
    month: '10',	day: '8',	year: '2018', weekNumber:	'41',
  },
  {
    month: '10',	day: '9',	year: '2018', weekNumber:	'41',
  },
  {
    month: '10',	day: '10',	year: '2018', weekNumber:	'41',
  },
  {
    month: '10',	day: '11',	year: '2018', weekNumber:	'41',
  },
  {
    month: '10',	day: '12',	year: '2018', weekNumber:	'41',
  },
  {
    month: '10',	day: '13',	year: '2018', weekNumber:	'41',
  },
  {
    month: '10',	day: '14',	year: '2018', weekNumber:	'42',
  },
  {
    month: '10',	day: '15',	year: '2018', weekNumber:	'42',
  },
  {
    month: '10',	day: '16',	year: '2018', weekNumber:	'42',
  },
  {
    month: '10',	day: '17',	year: '2018', weekNumber:	'42',
  },
  {
    month: '10',	day: '18',	year: '2018', weekNumber:	'42',
  },
  {
    month: '10',	day: '19',	year: '2018', weekNumber:	'42',
  },
  {
    month: '10',	day: '20',	year: '2018', weekNumber:	'42',
  },
  {
    month: '10',	day: '21',	year: '2018', weekNumber:	'43',
  },
  {
    month: '10',	day: '22',	year: '2018', weekNumber:	'43',
  },
  {
    month: '10',	day: '23',	year: '2018', weekNumber:	'43',
  },
  {
    month: '10',	day: '24',	year: '2018', weekNumber:	'43',
  },
  {
    month: '10',	day: '25',	year: '2018', weekNumber:	'43',
  },
  {
    month: '10',	day: '26',	year: '2018', weekNumber:	'43',
  },
  {
    month: '10',	day: '27',	year: '2018', weekNumber:	'43',
  },
  {
    month: '10',	day: '28',	year: '2018', weekNumber:	'44',
  },
  {
    month: '10',	day: '29',	year: '2018', weekNumber:	'44',
  },
  {
    month: '10',	day: '30',	year: '2018', weekNumber:	'44',
  },
  {
    month: '10',	day: '31',	year: '2018', weekNumber:	'44',
  },
  {
    month: '11',	day: '1',	year: '2018', weekNumber:	'44',
  },
  {
    month: '11',	day: '2',	year: '2018', weekNumber:	'44',
  },
  {
    month: '11',	day: '3',	year: '2018', weekNumber:	'44',
  },
  {
    month: '11',	day: '4',	year: '2018', weekNumber:	'45',
  },
  {
    month: '11',	day: '5',	year: '2018', weekNumber:	'45',
  },
  {
    month: '11',	day: '6',	year: '2018', weekNumber:	'45',
  },
  {
    month: '11',	day: '7',	year: '2018', weekNumber:	'45',
  },
  {
    month: '11',	day: '8',	year: '2018', weekNumber:	'45',
  },
  {
    month: '11',	day: '9',	year: '2018', weekNumber:	'45',
  },
  {
    month: '11',	day: '10',	year: '2018', weekNumber:	'45',
  },
  {
    month: '11',	day: '11',	year: '2018', weekNumber:	'46',
  },
  {
    month: '11',	day: '12',	year: '2018', weekNumber:	'46',
  },
  {
    month: '11',	day: '13',	year: '2018', weekNumber:	'46',
  },
  {
    month: '11',	day: '14',	year: '2018', weekNumber:	'46',
  },
  {
    month: '11',	day: '15',	year: '2018', weekNumber:	'46',
  },
  {
    month: '11',	day: '16',	year: '2018', weekNumber:	'46',
  },
  {
    month: '11',	day: '17',	year: '2018', weekNumber:	'46',
  },
  {
    month: '11',	day: '18',	year: '2018', weekNumber:	'47',
  },
  {
    month: '11',	day: '19',	year: '2018', weekNumber:	'47',
  },
  {
    month: '11',	day: '20',	year: '2018', weekNumber:	'47',
  },
  {
    month: '11',	day: '21',	year: '2018', weekNumber:	'47',
  },
  {
    month: '11',	day: '22',	year: '2018', weekNumber:	'47',
  },
  {
    month: '11',	day: '23',	year: '2018', weekNumber:	'47',
  },
  {
    month: '11',	day: '24',	year: '2018', weekNumber:	'47',
  },
  {
    month: '11',	day: '25',	year: '2018', weekNumber:	'48',
  },
  {
    month: '11',	day: '26',	year: '2018', weekNumber:	'48',
  },
  {
    month: '11',	day: '27',	year: '2018', weekNumber:	'48',
  },
  {
    month: '11',	day: '28',	year: '2018', weekNumber:	'48',
  },
  {
    month: '11',	day: '29',	year: '2018', weekNumber:	'48',
  },
  {
    month: '11',	day: '30',	year: '2018', weekNumber:	'48',
  },
  {
    month: '12',	day: '1',	year: '2018', weekNumber:	'48',
  },
  {
    month: '12',	day: '2',	year: '2018', weekNumber:	'49',
  },
  {
    month: '12',	day: '3',	year: '2018', weekNumber:	'49',
  },
  {
    month: '12',	day: '4',	year: '2018', weekNumber:	'49',
  },
  {
    month: '12',	day: '5',	year: '2018', weekNumber:	'49',
  },
  {
    month: '12',	day: '6',	year: '2018', weekNumber:	'49',
  },
  {
    month: '12',	day: '7',	year: '2018', weekNumber:	'49',
  },
  {
    month: '12',	day: '8',	year: '2018', weekNumber:	'49',
  },
  {
    month: '12',	day: '9',	year: '2018', weekNumber:	'50',
  },
  {
    month: '12',	day: '10',	year: '2018', weekNumber:	'50',
  },
  {
    month: '12',	day: '11',	year: '2018', weekNumber:	'50',
  },
  {
    month: '12',	day: '12',	year: '2018', weekNumber:	'50',
  },
  {
    month: '12',	day: '13',	year: '2018', weekNumber:	'50',
  },
  {
    month: '12',	day: '14',	year: '2018', weekNumber:	'50',
  },
  {
    month: '12',	day: '15',	year: '2018', weekNumber:	'50',
  },
  {
    month: '12',	day: '16',	year: '2018', weekNumber:	'51',
  },
  {
    month: '12',	day: '17',	year: '2018', weekNumber:	'51',
  },
  {
    month: '12',	day: '18',	year: '2018', weekNumber:	'51',
  },
  {
    month: '12',	day: '19',	year: '2018', weekNumber:	'51',
  },
  {
    month: '12',	day: '20',	year: '2018', weekNumber:	'51',
  },
  {
    month: '12',	day: '21',	year: '2018', weekNumber:	'51',
  },
  {
    month: '12',	day: '22',	year: '2018', weekNumber:	'51',
  },
  {
    month: '12',	day: '23',	year: '2018', weekNumber:	'52',
  },
  {
    month: '12',	day: '24',	year: '2018', weekNumber:	'52',
  },
  {
    month: '12',	day: '25',	year: '2018', weekNumber:	'52',
  },
  {
    month: '12',	day: '26',	year: '2018', weekNumber:	'52',
  },
  {
    month: '12',	day: '27',	year: '2018', weekNumber:	'52',
  },
  {
    month: '12',	day: '28',	year: '2018', weekNumber:	'52',
  },
  {
    month: '12',	day: '29',	year: '2018', weekNumber:	'52',
  },
  {
    month: '12',	day: '30',	year: '2018', weekNumber:	'53',
  },
  {
    month: '12', day: '31',	year: '2018', weekNumber:	'53',
  },
  {
    month: '1', day: '1',	year: '2019', weekNumber: '53',
  },
  {
    month: '1', day: '2',	year: '2019', weekNumber: '53',
  },
  {
    month: '1', day: '3',	year: '2019', weekNumber: '53',
  },
  {
    month: '1', day: '4',	year: '2019', weekNumber: '53',
  },
  {
    month: '1', day: '5',	year: '2019', weekNumber: '53',
  },
];

// OUTPUT
{
    "1": [
        {
            "month": "12",
            "day": "31",
            "year": "2017",
            "weekNumber": "1"
        },
        {
            "month": "1",
            "day": "1",
            "year": "2018",
            "weekNumber": "1"
        },
        {
            "month": "1",
            "day": "2",
            "year": "2018",
            "weekNumber": "1"
        },
        {
            "month": "1",
            "day": "3",
            "year": "2018",
            "weekNumber": "1"
        },
        {
            "month": "1",
            "day": "4",
            "year": "2018",
            "weekNumber": "1"
        },
        {
            "month": "1",
            "day": "5",
            "year": "2018",
            "weekNumber": "1"
        },
        {
            "month": "1",
            "day": "6",
            "year": "2018",
            "weekNumber": "1"
        }
    ],
        "2": [
            {
                "month": "1",
                "day": "7",
                "year": "2018",
                "weekNumber": "2"
            },
            {
                "month": "1",
                "day": "8",
                "year": "2018",
                "weekNumber": "2"
            },
            {
                "month": "1",
                "day": "9",
                "year": "2018",
                "weekNumber": "2"
            },
            {
                "month": "1",
                "day": "10",
                "year": "2018",
                "weekNumber": "2"
            },
            {
                "month": "1",
                "day": "11",
                "year": "2018",
                "weekNumber": "2"
            },
            {
                "month": "1",
                "day": "12",
                "year": "2018",
                "weekNumber": "2"
            },
            {
                "month": "1",
                "day": "13",
                "year": "2018",
                "weekNumber": "2"
            }
        ],
            "3": [
                {
                    "month": "1",
                    "day": "14",
                    "year": "2018",
                    "weekNumber": "3"
                },
                {
                    "month": "1",
                    "day": "15",
                    "year": "2018",
                    "weekNumber": "3"
                },
                {
                    "month": "1",
                    "day": "16",
                    "year": "2018",
                    "weekNumber": "3"
                },
                {
                    "month": "1",
                    "day": "17",
                    "year": "2018",
                    "weekNumber": "3"
                },
                {
                    "month": "1",
                    "day": "18",
                    "year": "2018",
                    "weekNumber": "3"
                },
                {
                    "month": "1",
                    "day": "19",
                    "year": "2018",
                    "weekNumber": "3"
                },
                {
                    "month": "1",
                    "day": "20",
                    "year": "2018",
                    "weekNumber": "3"
                }
            ],
                "4": [
                    {
                        "month": "1",
                        "day": "21",
                        "year": "2018",
                        "weekNumber": "4"
                    },
                    {
                        "month": "1",
                        "day": "22",
                        "year": "2018",
                        "weekNumber": "4"
                    },
                    {
                        "month": "1",
                        "day": "23",
                        "year": "2018",
                        "weekNumber": "4"
                    },
                    {
                        "month": "1",
                        "day": "24",
                        "year": "2018",
                        "weekNumber": "4"
                    },
                    {
                        "month": "1",
                        "day": "25",
                        "year": "2018",
                        "weekNumber": "4"
                    },
                    {
                        "month": "1",
                        "day": "26",
                        "year": "2018",
                        "weekNumber": "4"
                    },
                    {
                        "month": "1",
                        "day": "27",
                        "year": "2018",
                        "weekNumber": "4"
                    }
                ],
                    "5": [
                        {
                            "month": "1",
                            "day": "28",
                            "year": "2018",
                            "weekNumber": "5"
                        },
                        {
                            "month": "1",
                            "day": "29",
                            "year": "2018",
                            "weekNumber": "5"
                        },
                        {
                            "month": "1",
                            "day": "30",
                            "year": "2018",
                            "weekNumber": "5"
                        },
                        {
                            "month": "1",
                            "day": "31",
                            "year": "2018",
                            "weekNumber": "5"
                        },
                        {
                            "month": "2",
                            "day": "1",
                            "year": "2018",
                            "weekNumber": "5"
                        },
                        {
                            "month": "2",
                            "day": "2",
                            "year": "2018",
                            "weekNumber": "5"
                        },
                        {
                            "month": "2",
                            "day": "3",
                            "year": "2018",
                            "weekNumber": "5"
                        }
                    ],
                        "6": [
                            {
                                "month": "2",
                                "day": "4",
                                "year": "2018",
                                "weekNumber": "6"
                            },
                            {
                                "month": "2",
                                "day": "5",
                                "year": "2018",
                                "weekNumber": "6"
                            },
                            {
                                "month": "2",
                                "day": "6",
                                "year": "2018",
                                "weekNumber": "6"
                            },
                            {
                                "month": "2",
                                "day": "7",
                                "year": "2018",
                                "weekNumber": "6"
                            },
                            {
                                "month": "2",
                                "day": "8",
                                "year": "2018",
                                "weekNumber": "6"
                            },
                            {
                                "month": "2",
                                "day": "9",
                                "year": "2018",
                                "weekNumber": "6"
                            },
                            {
                                "month": "2",
                                "day": "10",
                                "year": "2018",
                                "weekNumber": "6"
                            }
                        ],
                            "7": [
                                {
                                    "month": "2",
                                    "day": "11",
                                    "year": "2018",
                                    "weekNumber": "7"
                                },
                                {
                                    "month": "2",
                                    "day": "12",
                                    "year": "2018",
                                    "weekNumber": "7"
                                },
                                {
                                    "month": "2",
                                    "day": "13",
                                    "year": "2018",
                                    "weekNumber": "7"
                                },
                                {
                                    "month": "2",
                                    "day": "14",
                                    "year": "2018",
                                    "weekNumber": "7"
                                },
                                {
                                    "month": "2",
                                    "day": "15",
                                    "year": "2018",
                                    "weekNumber": "7"
                                },
                                {
                                    "month": "2",
                                    "day": "16",
                                    "year": "2018",
                                    "weekNumber": "7"
                                },
                                {
                                    "month": "2",
                                    "day": "17",
                                    "year": "2018",
                                    "weekNumber": "7"
                                }
                            ],
                                "8": [
                                    {
                                        "month": "2",
                                        "day": "18",
                                        "year": "2018",
                                        "weekNumber": "8"
                                    },
                                    {
                                        "month": "2",
                                        "day": "19",
                                        "year": "2018",
                                        "weekNumber": "8"
                                    },
                                    {
                                        "month": "2",
                                        "day": "20",
                                        "year": "2018",
                                        "weekNumber": "8"
                                    },
                                    {
                                        "month": "2",
                                        "day": "21",
                                        "year": "2018",
                                        "weekNumber": "8"
                                    },
                                    {
                                        "month": "2",
                                        "day": "22",
                                        "year": "2018",
                                        "weekNumber": "8"
                                    },
                                    {
                                        "month": "2",
                                        "day": "23",
                                        "year": "2018",
                                        "weekNumber": "8"
                                    },
                                    {
                                        "month": "2",
                                        "day": "24",
                                        "year": "2018",
                                        "weekNumber": "8"
                                    }
                                ],
                                    "9": [
                                        {
                                            "month": "2",
                                            "day": "25",
                                            "year": "2018",
                                            "weekNumber": "9"
                                        },
                                        {
                                            "month": "2",
                                            "day": "26",
                                            "year": "2018",
                                            "weekNumber": "9"
                                        },
                                        {
                                            "month": "2",
                                            "day": "27",
                                            "year": "2018",
                                            "weekNumber": "9"
                                        },
                                        {
                                            "month": "2",
                                            "day": "28",
                                            "year": "2018",
                                            "weekNumber": "9"
                                        },
                                        {
                                            "month": "3",
                                            "day": "1",
                                            "year": "2018",
                                            "weekNumber": "9"
                                        },
                                        {
                                            "month": "3",
                                            "day": "2",
                                            "year": "2018",
                                            "weekNumber": "9"
                                        },
                                        {
                                            "month": "3",
                                            "day": "3",
                                            "year": "2018",
                                            "weekNumber": "9"
                                        }
                                    ],
                                        "10": [
                                            {
                                                "month": "3",
                                                "day": "4",
                                                "year": "2018",
                                                "weekNumber": "10"
                                            },
                                            {
                                                "month": "3",
                                                "day": "5",
                                                "year": "2018",
                                                "weekNumber": "10"
                                            },
                                            {
                                                "month": "3",
                                                "day": "6",
                                                "year": "2018",
                                                "weekNumber": "10"
                                            },
                                            {
                                                "month": "3",
                                                "day": "7",
                                                "year": "2018",
                                                "weekNumber": "10"
                                            },
                                            {
                                                "month": "3",
                                                "day": "8",
                                                "year": "2018",
                                                "weekNumber": "10"
                                            },
                                            {
                                                "month": "3",
                                                "day": "9",
                                                "year": "2018",
                                                "weekNumber": "10"
                                            },
                                            {
                                                "month": "3",
                                                "day": "10",
                                                "year": "2018",
                                                "weekNumber": "10"
                                            }
                                        ],
                                            "11": [
                                                {
                                                    "month": "3",
                                                    "day": "11",
                                                    "year": "2018",
                                                    "weekNumber": "11"
                                                },
                                                {
                                                    "month": "3",
                                                    "day": "12",
                                                    "year": "2018",
                                                    "weekNumber": "11"
                                                },
                                                {
                                                    "month": "3",
                                                    "day": "13",
                                                    "year": "2018",
                                                    "weekNumber": "11"
                                                },
                                                {
                                                    "month": "3",
                                                    "day": "14",
                                                    "year": "2018",
                                                    "weekNumber": "11"
                                                },
                                                {
                                                    "month": "3",
                                                    "day": "15",
                                                    "year": "2018",
                                                    "weekNumber": "11"
                                                },
                                                {
                                                    "month": "3",
                                                    "day": "16",
                                                    "year": "2018",
                                                    "weekNumber": "11"
                                                },
                                                {
                                                    "month": "3",
                                                    "day": "17",
                                                    "year": "2018",
                                                    "weekNumber": "11"
                                                }
                                            ],
                                                "12": [
                                                    {
                                                        "month": "3",
                                                        "day": "18",
                                                        "year": "2018",
                                                        "weekNumber": "12"
                                                    },
                                                    {
                                                        "month": "3",
                                                        "day": "19",
                                                        "year": "2018",
                                                        "weekNumber": "12"
                                                    },
                                                    {
                                                        "month": "3",
                                                        "day": "20",
                                                        "year": "2018",
                                                        "weekNumber": "12"
                                                    },
                                                    {
                                                        "month": "3",
                                                        "day": "21",
                                                        "year": "2018",
                                                        "weekNumber": "12"
                                                    },
                                                    {
                                                        "month": "3",
                                                        "day": "22",
                                                        "year": "2018",
                                                        "weekNumber": "12"
                                                    },
                                                    {
                                                        "month": "3",
                                                        "day": "23",
                                                        "year": "2018",
                                                        "weekNumber": "12"
                                                    },
                                                    {
                                                        "month": "3",
                                                        "day": "24",
                                                        "year": "2018",
                                                        "weekNumber": "12"
                                                    }
                                                ],
                                                    "13": [
                                                        {
                                                            "month": "3",
                                                            "day": "25",
                                                            "year": "2018",
                                                            "weekNumber": "13"
                                                        },
                                                        {
                                                            "month": "3",
                                                            "day": "26",
                                                            "year": "2018",
                                                            "weekNumber": "13"
                                                        },
                                                        {
                                                            "month": "3",
                                                            "day": "27",
                                                            "year": "2018",
                                                            "weekNumber": "13"
                                                        },
                                                        {
                                                            "month": "3",
                                                            "day": "28",
                                                            "year": "2018",
                                                            "weekNumber": "13"
                                                        },
                                                        {
                                                            "month": "3",
                                                            "day": "29",
                                                            "year": "2018",
                                                            "weekNumber": "13"
                                                        },
                                                        {
                                                            "month": "3",
                                                            "day": "30",
                                                            "year": "2018",
                                                            "weekNumber": "13"
                                                        },
                                                        {
                                                            "month": "3",
                                                            "day": "31",
                                                            "year": "2018",
                                                            "weekNumber": "13"
                                                        }
                                                    ],
                                                        "14": [
                                                            {
                                                                "month": "4",
                                                                "day": "1",
                                                                "year": "2018",
                                                                "weekNumber": "14"
                                                            },
                                                            {
                                                                "month": "4",
                                                                "day": "2",
                                                                "year": "2018",
                                                                "weekNumber": "14"
                                                            },
                                                            {
                                                                "month": "4",
                                                                "day": "3",
                                                                "year": "2018",
                                                                "weekNumber": "14"
                                                            },
                                                            {
                                                                "month": "4",
                                                                "day": "4",
                                                                "year": "2018",
                                                                "weekNumber": "14"
                                                            },
                                                            {
                                                                "month": "4",
                                                                "day": "5",
                                                                "year": "2018",
                                                                "weekNumber": "14"
                                                            },
                                                            {
                                                                "month": "4",
                                                                "day": "6",
                                                                "year": "2018",
                                                                "weekNumber": "14"
                                                            },
                                                            {
                                                                "month": "4",
                                                                "day": "7",
                                                                "year": "2018",
                                                                "weekNumber": "14"
                                                            }
                                                        ],
                                                            "15": [
                                                                {
                                                                    "month": "4",
                                                                    "day": "8",
                                                                    "year": "2018",
                                                                    "weekNumber": "15"
                                                                },
                                                                {
                                                                    "month": "4",
                                                                    "day": "9",
                                                                    "year": "2018",
                                                                    "weekNumber": "15"
                                                                },
                                                                {
                                                                    "month": "4",
                                                                    "day": "10",
                                                                    "year": "2018",
                                                                    "weekNumber": "15"
                                                                },
                                                                {
                                                                    "month": "4",
                                                                    "day": "11",
                                                                    "year": "2018",
                                                                    "weekNumber": "15"
                                                                },
                                                                {
                                                                    "month": "4",
                                                                    "day": "12",
                                                                    "year": "2018",
                                                                    "weekNumber": "15"
                                                                },
                                                                {
                                                                    "month": "4",
                                                                    "day": "13",
                                                                    "year": "2018",
                                                                    "weekNumber": "15"
                                                                },
                                                                {
                                                                    "month": "4",
                                                                    "day": "14",
                                                                    "year": "2018",
                                                                    "weekNumber": "15"
                                                                }
                                                            ],
                                                                "16": [
                                                                    {
                                                                        "month": "4",
                                                                        "day": "15",
                                                                        "year": "2018",
                                                                        "weekNumber": "16"
                                                                    },
                                                                    {
                                                                        "month": "4",
                                                                        "day": "16",
                                                                        "year": "2018",
                                                                        "weekNumber": "16"
                                                                    },
                                                                    {
                                                                        "month": "4",
                                                                        "day": "17",
                                                                        "year": "2018",
                                                                        "weekNumber": "16"
                                                                    },
                                                                    {
                                                                        "month": "4",
                                                                        "day": "18",
                                                                        "year": "2018",
                                                                        "weekNumber": "16"
                                                                    },
                                                                    {
                                                                        "month": "4",
                                                                        "day": "19",
                                                                        "year": "2018",
                                                                        "weekNumber": "16"
                                                                    },
                                                                    {
                                                                        "month": "4",
                                                                        "day": "20",
                                                                        "year": "2018",
                                                                        "weekNumber": "16"
                                                                    },
                                                                    {
                                                                        "month": "4",
                                                                        "day": "21",
                                                                        "year": "2018",
                                                                        "weekNumber": "16"
                                                                    }
                                                                ],
                                                                    "17": [
                                                                        {
                                                                            "month": "4",
                                                                            "day": "22",
                                                                            "year": "2018",
                                                                            "weekNumber": "17"
                                                                        },
                                                                        {
                                                                            "month": "4",
                                                                            "day": "23",
                                                                            "year": "2018",
                                                                            "weekNumber": "17"
                                                                        },
                                                                        {
                                                                            "month": "4",
                                                                            "day": "24",
                                                                            "year": "2018",
                                                                            "weekNumber": "17"
                                                                        },
                                                                        {
                                                                            "month": "4",
                                                                            "day": "25",
                                                                            "year": "2018",
                                                                            "weekNumber": "17"
                                                                        },
                                                                        {
                                                                            "month": "4",
                                                                            "day": "26",
                                                                            "year": "2018",
                                                                            "weekNumber": "17"
                                                                        },
                                                                        {
                                                                            "month": "4",
                                                                            "day": "27",
                                                                            "year": "2018",
                                                                            "weekNumber": "17"
                                                                        },
                                                                        {
                                                                            "month": "4",
                                                                            "day": "28",
                                                                            "year": "2018",
                                                                            "weekNumber": "17"
                                                                        }
                                                                    ],
                                                                        "18": [
                                                                            {
                                                                                "month": "4",
                                                                                "day": "29",
                                                                                "year": "2018",
                                                                                "weekNumber": "18"
                                                                            },
                                                                            {
                                                                                "month": "4",
                                                                                "day": "30",
                                                                                "year": "2018",
                                                                                "weekNumber": "18"
                                                                            },
                                                                            {
                                                                                "month": "5",
                                                                                "day": "1",
                                                                                "year": "2018",
                                                                                "weekNumber": "18"
                                                                            },
                                                                            {
                                                                                "month": "5",
                                                                                "day": "2",
                                                                                "year": "2018",
                                                                                "weekNumber": "18"
                                                                            },
                                                                            {
                                                                                "month": "5",
                                                                                "day": "3",
                                                                                "year": "2018",
                                                                                "weekNumber": "18"
                                                                            },
                                                                            {
                                                                                "month": "5",
                                                                                "day": "4",
                                                                                "year": "2018",
                                                                                "weekNumber": "18"
                                                                            },
                                                                            {
                                                                                "month": "5",
                                                                                "day": "5",
                                                                                "year": "2018",
                                                                                "weekNumber": "18"
                                                                            }
                                                                        ],
                                                                            "19": [
                                                                                {
                                                                                    "month": "5",
                                                                                    "day": "6",
                                                                                    "year": "2018",
                                                                                    "weekNumber": "19"
                                                                                },
                                                                                {
                                                                                    "month": "5",
                                                                                    "day": "7",
                                                                                    "year": "2018",
                                                                                    "weekNumber": "19"
                                                                                },
                                                                                {
                                                                                    "month": "5",
                                                                                    "day": "8",
                                                                                    "year": "2018",
                                                                                    "weekNumber": "19"
                                                                                },
                                                                                {
                                                                                    "month": "5",
                                                                                    "day": "9",
                                                                                    "year": "2018",
                                                                                    "weekNumber": "19"
                                                                                },
                                                                                {
                                                                                    "month": "5",
                                                                                    "day": "10",
                                                                                    "year": "2018",
                                                                                    "weekNumber": "19"
                                                                                },
                                                                                {
                                                                                    "month": "5",
                                                                                    "day": "11",
                                                                                    "year": "2018",
                                                                                    "weekNumber": "19"
                                                                                },
                                                                                {
                                                                                    "month": "5",
                                                                                    "day": "12",
                                                                                    "year": "2018",
                                                                                    "weekNumber": "19"
                                                                                }
                                                                            ],
                                                                                "20": [
                                                                                    {
                                                                                        "month": "5",
                                                                                        "day": "13",
                                                                                        "year": "2018",
                                                                                        "weekNumber": "20"
                                                                                    },
                                                                                    {
                                                                                        "month": "5",
                                                                                        "day": "14",
                                                                                        "year": "2018",
                                                                                        "weekNumber": "20"
                                                                                    },
                                                                                    {
                                                                                        "month": "5",
                                                                                        "day": "15",
                                                                                        "year": "2018",
                                                                                        "weekNumber": "20"
                                                                                    },
                                                                                    {
                                                                                        "month": "5",
                                                                                        "day": "16",
                                                                                        "year": "2018",
                                                                                        "weekNumber": "20"
                                                                                    },
                                                                                    {
                                                                                        "month": "5",
                                                                                        "day": "17",
                                                                                        "year": "2018",
                                                                                        "weekNumber": "20"
                                                                                    },
                                                                                    {
                                                                                        "month": "5",
                                                                                        "day": "18",
                                                                                        "year": "2018",
                                                                                        "weekNumber": "20"
                                                                                    },
                                                                                    {
                                                                                        "month": "5",
                                                                                        "day": "19",
                                                                                        "year": "2018",
                                                                                        "weekNumber": "20"
                                                                                    }
                                                                                ],
                                                                                    "21": [
                                                                                        {
                                                                                            "month": "5",
                                                                                            "day": "20",
                                                                                            "year": "2018",
                                                                                            "weekNumber": "21"
                                                                                        },
                                                                                        {
                                                                                            "month": "5",
                                                                                            "day": "21",
                                                                                            "year": "2018",
                                                                                            "weekNumber": "21"
                                                                                        },
                                                                                        {
                                                                                            "month": "5",
                                                                                            "day": "22",
                                                                                            "year": "2018",
                                                                                            "weekNumber": "21"
                                                                                        },
                                                                                        {
                                                                                            "month": "5",
                                                                                            "day": "23",
                                                                                            "year": "2018",
                                                                                            "weekNumber": "21"
                                                                                        },
                                                                                        {
                                                                                            "month": "5",
                                                                                            "day": "24",
                                                                                            "year": "2018",
                                                                                            "weekNumber": "21"
                                                                                        },
                                                                                        {
                                                                                            "month": "5",
                                                                                            "day": "25",
                                                                                            "year": "2018",
                                                                                            "weekNumber": "21"
                                                                                        },
                                                                                        {
                                                                                            "month": "5",
                                                                                            "day": "26",
                                                                                            "year": "2018",
                                                                                            "weekNumber": "21"
                                                                                        }
                                                                                    ],
                                                                                        "22": [
                                                                                            {
                                                                                                "month": "5",
                                                                                                "day": "27",
                                                                                                "year": "2018",
                                                                                                "weekNumber": "22"
                                                                                            },
                                                                                            {
                                                                                                "month": "5",
                                                                                                "day": "28",
                                                                                                "year": "2018",
                                                                                                "weekNumber": "22"
                                                                                            },
                                                                                            {
                                                                                                "month": "5",
                                                                                                "day": "29",
                                                                                                "year": "2018",
                                                                                                "weekNumber": "22"
                                                                                            },
                                                                                            {
                                                                                                "month": "5",
                                                                                                "day": "30",
                                                                                                "year": "2018",
                                                                                                "weekNumber": "22"
                                                                                            },
                                                                                            {
                                                                                                "month": "5",
                                                                                                "day": "31",
                                                                                                "year": "2018",
                                                                                                "weekNumber": "22"
                                                                                            },
                                                                                            {
                                                                                                "month": "6",
                                                                                                "day": "1",
                                                                                                "year": "2018",
                                                                                                "weekNumber": "22"
                                                                                            },
                                                                                            {
                                                                                                "month": "6",
                                                                                                "day": "2",
                                                                                                "year": "2018",
                                                                                                "weekNumber": "22"
                                                                                            }
                                                                                        ],
                                                                                            "23": [
                                                                                                {
                                                                                                    "month": "6",
                                                                                                    "day": "3",
                                                                                                    "year": "2018",
                                                                                                    "weekNumber": "23"
                                                                                                },
                                                                                                {
                                                                                                    "month": "6",
                                                                                                    "day": "4",
                                                                                                    "year": "2018",
                                                                                                    "weekNumber": "23"
                                                                                                },
                                                                                                {
                                                                                                    "month": "6",
                                                                                                    "day": "5",
                                                                                                    "year": "2018",
                                                                                                    "weekNumber": "23"
                                                                                                },
                                                                                                {
                                                                                                    "month": "6",
                                                                                                    "day": "6",
                                                                                                    "year": "2018",
                                                                                                    "weekNumber": "23"
                                                                                                },
                                                                                                {
                                                                                                    "month": "6",
                                                                                                    "day": "7",
                                                                                                    "year": "2018",
                                                                                                    "weekNumber": "23"
                                                                                                },
                                                                                                {
                                                                                                    "month": "6",
                                                                                                    "day": "8",
                                                                                                    "year": "2018",
                                                                                                    "weekNumber": "23"
                                                                                                },
                                                                                                {
                                                                                                    "month": "6",
                                                                                                    "day": "9",
                                                                                                    "year": "2018",
                                                                                                    "weekNumber": "23"
                                                                                                }
                                                                                            ],
                                                                                                "24": [
                                                                                                    {
                                                                                                        "month": "6",
                                                                                                        "day": "10",
                                                                                                        "year": "2018",
                                                                                                        "weekNumber": "24"
                                                                                                    },
                                                                                                    {
                                                                                                        "month": "6",
                                                                                                        "day": "11",
                                                                                                        "year": "2018",
                                                                                                        "weekNumber": "24"
                                                                                                    },
                                                                                                    {
                                                                                                        "month": "6",
                                                                                                        "day": "12",
                                                                                                        "year": "2018",
                                                                                                        "weekNumber": "24"
                                                                                                    },
                                                                                                    {
                                                                                                        "month": "6",
                                                                                                        "day": "13",
                                                                                                        "year": "2018",
                                                                                                        "weekNumber": "24"
                                                                                                    },
                                                                                                    {
                                                                                                        "month": "6",
                                                                                                        "day": "14",
                                                                                                        "year": "2018",
                                                                                                        "weekNumber": "24"
                                                                                                    },
                                                                                                    {
                                                                                                        "month": "6",
                                                                                                        "day": "15",
                                                                                                        "year": "2018",
                                                                                                        "weekNumber": "24"
                                                                                                    },
                                                                                                    {
                                                                                                        "month": "6",
                                                                                                        "day": "16",
                                                                                                        "year": "2018",
                                                                                                        "weekNumber": "24"
                                                                                                    }
                                                                                                ],
                                                                                                    "25": [
                                                                                                        {
                                                                                                            "month": "6",
                                                                                                            "day": "17",
                                                                                                            "year": "2018",
                                                                                                            "weekNumber": "25"
                                                                                                        },
                                                                                                        {
                                                                                                            "month": "6",
                                                                                                            "day": "18",
                                                                                                            "year": "2018",
                                                                                                            "weekNumber": "25"
                                                                                                        },
                                                                                                        {
                                                                                                            "month": "6",
                                                                                                            "day": "19",
                                                                                                            "year": "2018",
                                                                                                            "weekNumber": "25"
                                                                                                        },
                                                                                                        {
                                                                                                            "month": "6",
                                                                                                            "day": "20",
                                                                                                            "year": "2018",
                                                                                                            "weekNumber": "25"
                                                                                                        },
                                                                                                        {
                                                                                                            "month": "6",
                                                                                                            "day": "21",
                                                                                                            "year": "2018",
                                                                                                            "weekNumber": "25"
                                                                                                        },
                                                                                                        {
                                                                                                            "month": "6",
                                                                                                            "day": "22",
                                                                                                            "year": "2018",
                                                                                                            "weekNumber": "25"
                                                                                                        },
                                                                                                        {
                                                                                                            "month": "6",
                                                                                                            "day": "23",
                                                                                                            "year": "2018",
                                                                                                            "weekNumber": "25"
                                                                                                        }
                                                                                                    ],
                                                                                                        "26": [
                                                                                                            {
                                                                                                                "month": "6",
                                                                                                                "day": "24",
                                                                                                                "year": "2018",
                                                                                                                "weekNumber": "26"
                                                                                                            },
                                                                                                            {
                                                                                                                "month": "6",
                                                                                                                "day": "25",
                                                                                                                "year": "2018",
                                                                                                                "weekNumber": "26"
                                                                                                            },
                                                                                                            {
                                                                                                                "month": "6",
                                                                                                                "day": "26",
                                                                                                                "year": "2018",
                                                                                                                "weekNumber": "26"
                                                                                                            },
                                                                                                            {
                                                                                                                "month": "6",
                                                                                                                "day": "27",
                                                                                                                "year": "2018",
                                                                                                                "weekNumber": "26"
                                                                                                            },
                                                                                                            {
                                                                                                                "month": "6",
                                                                                                                "day": "28",
                                                                                                                "year": "2018",
                                                                                                                "weekNumber": "26"
                                                                                                            },
                                                                                                            {
                                                                                                                "month": "6",
                                                                                                                "day": "29",
                                                                                                                "year": "2018",
                                                                                                                "weekNumber": "26"
                                                                                                            },
                                                                                                            {
                                                                                                                "month": "6",
                                                                                                                "day": "30",
                                                                                                                "year": "2018",
                                                                                                                "weekNumber": "26"
                                                                                                            }
                                                                                                        ],
                                                                                                            "27": [
                                                                                                                {
                                                                                                                    "month": "7",
                                                                                                                    "day": "1",
                                                                                                                    "year": "2018",
                                                                                                                    "weekNumber": "27"
                                                                                                                },
                                                                                                                {
                                                                                                                    "month": "7",
                                                                                                                    "day": "2",
                                                                                                                    "year": "2018",
                                                                                                                    "weekNumber": "27"
                                                                                                                },
                                                                                                                {
                                                                                                                    "month": "7",
                                                                                                                    "day": "3",
                                                                                                                    "year": "2018",
                                                                                                                    "weekNumber": "27"
                                                                                                                },
                                                                                                                {
                                                                                                                    "month": "7",
                                                                                                                    "day": "4",
                                                                                                                    "year": "2018",
                                                                                                                    "weekNumber": "27"
                                                                                                                },
                                                                                                                {
                                                                                                                    "month": "7",
                                                                                                                    "day": "5",
                                                                                                                    "year": "2018",
                                                                                                                    "weekNumber": "27"
                                                                                                                },
                                                                                                                {
                                                                                                                    "month": "7",
                                                                                                                    "day": "6",
                                                                                                                    "year": "2018",
                                                                                                                    "weekNumber": "27"
                                                                                                                },
                                                                                                                {
                                                                                                                    "month": "7",
                                                                                                                    "day": "7",
                                                                                                                    "year": "2018",
                                                                                                                    "weekNumber": "27"
                                                                                                                }
                                                                                                            ],
                                                                                                                "28": [
                                                                                                                    {
                                                                                                                        "month": "7",
                                                                                                                        "day": "8",
                                                                                                                        "year": "2018",
                                                                                                                        "weekNumber": "28"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "month": "7",
                                                                                                                        "day": "9",
                                                                                                                        "year": "2018",
                                                                                                                        "weekNumber": "28"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "month": "7",
                                                                                                                        "day": "10",
                                                                                                                        "year": "2018",
                                                                                                                        "weekNumber": "28"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "month": "7",
                                                                                                                        "day": "11",
                                                                                                                        "year": "2018",
                                                                                                                        "weekNumber": "28"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "month": "7",
                                                                                                                        "day": "12",
                                                                                                                        "year": "2018",
                                                                                                                        "weekNumber": "28"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "month": "7",
                                                                                                                        "day": "13",
                                                                                                                        "year": "2018",
                                                                                                                        "weekNumber": "28"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "month": "7",
                                                                                                                        "day": "14",
                                                                                                                        "year": "2018",
                                                                                                                        "weekNumber": "28"
                                                                                                                    }
                                                                                                                ],
                                                                                                                    "29": [
                                                                                                                        {
                                                                                                                            "month": "7",
                                                                                                                            "day": "15",
                                                                                                                            "year": "2018",
                                                                                                                            "weekNumber": "29"
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "month": "7",
                                                                                                                            "day": "16",
                                                                                                                            "year": "2018",
                                                                                                                            "weekNumber": "29"
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "month": "7",
                                                                                                                            "day": "17",
                                                                                                                            "year": "2018",
                                                                                                                            "weekNumber": "29"
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "month": "7",
                                                                                                                            "day": "18",
                                                                                                                            "year": "2018",
                                                                                                                            "weekNumber": "29"
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "month": "7",
                                                                                                                            "day": "19",
                                                                                                                            "year": "2018",
                                                                                                                            "weekNumber": "29"
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "month": "7",
                                                                                                                            "day": "20",
                                                                                                                            "year": "2018",
                                                                                                                            "weekNumber": "29"
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "month": "7",
                                                                                                                            "day": "21",
                                                                                                                            "year": "2018",
                                                                                                                            "weekNumber": "29"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                        "30": [
                                                                                                                            {
                                                                                                                                "month": "7",
                                                                                                                                "day": "22",
                                                                                                                                "year": "2018",
                                                                                                                                "weekNumber": "30"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "month": "7",
                                                                                                                                "day": "23",
                                                                                                                                "year": "2018",
                                                                                                                                "weekNumber": "30"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "month": "7",
                                                                                                                                "day": "24",
                                                                                                                                "year": "2018",
                                                                                                                                "weekNumber": "30"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "month": "7",
                                                                                                                                "day": "25",
                                                                                                                                "year": "2018",
                                                                                                                                "weekNumber": "30"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "month": "7",
                                                                                                                                "day": "26",
                                                                                                                                "year": "2018",
                                                                                                                                "weekNumber": "30"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "month": "7",
                                                                                                                                "day": "27",
                                                                                                                                "year": "2018",
                                                                                                                                "weekNumber": "30"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "month": "7",
                                                                                                                                "day": "28",
                                                                                                                                "year": "2018",
                                                                                                                                "weekNumber": "30"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                            "31": [
                                                                                                                                {
                                                                                                                                    "month": "7",
                                                                                                                                    "day": "29",
                                                                                                                                    "year": "2018",
                                                                                                                                    "weekNumber": "31"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "month": "7",
                                                                                                                                    "day": "30",
                                                                                                                                    "year": "2018",
                                                                                                                                    "weekNumber": "31"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "month": "7",
                                                                                                                                    "day": "31",
                                                                                                                                    "year": "2018",
                                                                                                                                    "weekNumber": "31"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "month": "8",
                                                                                                                                    "day": "1",
                                                                                                                                    "year": "2018",
                                                                                                                                    "weekNumber": "31"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "month": "8",
                                                                                                                                    "day": "2",
                                                                                                                                    "year": "2018",
                                                                                                                                    "weekNumber": "31"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "month": "8",
                                                                                                                                    "day": "3",
                                                                                                                                    "year": "2018",
                                                                                                                                    "weekNumber": "31"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "month": "8",
                                                                                                                                    "day": "4",
                                                                                                                                    "year": "2018",
                                                                                                                                    "weekNumber": "31"
                                                                                                                                }
                                                                                                                            ],
                                                                                                                                "32": [
                                                                                                                                    {
                                                                                                                                        "month": "8",
                                                                                                                                        "day": "5",
                                                                                                                                        "year": "2018",
                                                                                                                                        "weekNumber": "32"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "month": "8",
                                                                                                                                        "day": "6",
                                                                                                                                        "year": "2018",
                                                                                                                                        "weekNumber": "32"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "month": "8",
                                                                                                                                        "day": "7",
                                                                                                                                        "year": "2018",
                                                                                                                                        "weekNumber": "32"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "month": "8",
                                                                                                                                        "day": "8",
                                                                                                                                        "year": "2018",
                                                                                                                                        "weekNumber": "32"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "month": "8",
                                                                                                                                        "day": "9",
                                                                                                                                        "year": "2018",
                                                                                                                                        "weekNumber": "32"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "month": "8",
                                                                                                                                        "day": "10",
                                                                                                                                        "year": "2018",
                                                                                                                                        "weekNumber": "32"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "month": "8",
                                                                                                                                        "day": "11",
                                                                                                                                        "year": "2018",
                                                                                                                                        "weekNumber": "32"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                    "33": [
                                                                                                                                        {
                                                                                                                                            "month": "8",
                                                                                                                                            "day": "12",
                                                                                                                                            "year": "2018",
                                                                                                                                            "weekNumber": "33"
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "month": "8",
                                                                                                                                            "day": "13",
                                                                                                                                            "year": "2018",
                                                                                                                                            "weekNumber": "33"
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "month": "8",
                                                                                                                                            "day": "14",
                                                                                                                                            "year": "2018",
                                                                                                                                            "weekNumber": "33"
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "month": "8",
                                                                                                                                            "day": "15",
                                                                                                                                            "year": "2018",
                                                                                                                                            "weekNumber": "33"
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "month": "8",
                                                                                                                                            "day": "16",
                                                                                                                                            "year": "2018",
                                                                                                                                            "weekNumber": "33"
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "month": "8",
                                                                                                                                            "day": "17",
                                                                                                                                            "year": "2018",
                                                                                                                                            "weekNumber": "33"
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "month": "8",
                                                                                                                                            "day": "18",
                                                                                                                                            "year": "2018",
                                                                                                                                            "weekNumber": "33"
                                                                                                                                        }
                                                                                                                                    ],
                                                                                                                                        "34": [
                                                                                                                                            {
                                                                                                                                                "month": "8",
                                                                                                                                                "day": "19",
                                                                                                                                                "year": "2018",
                                                                                                                                                "weekNumber": "34"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "month": "8",
                                                                                                                                                "day": "20",
                                                                                                                                                "year": "2018",
                                                                                                                                                "weekNumber": "34"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "month": "8",
                                                                                                                                                "day": "21",
                                                                                                                                                "year": "2018",
                                                                                                                                                "weekNumber": "34"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "month": "8",
                                                                                                                                                "day": "22",
                                                                                                                                                "year": "2018",
                                                                                                                                                "weekNumber": "34"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "month": "8",
                                                                                                                                                "day": "23",
                                                                                                                                                "year": "2018",
                                                                                                                                                "weekNumber": "34"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "month": "8",
                                                                                                                                                "day": "24",
                                                                                                                                                "year": "2018",
                                                                                                                                                "weekNumber": "34"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "month": "8",
                                                                                                                                                "day": "25",
                                                                                                                                                "year": "2018",
                                                                                                                                                "weekNumber": "34"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                            "35": [
                                                                                                                                                {
                                                                                                                                                    "month": "8",
                                                                                                                                                    "day": "26",
                                                                                                                                                    "year": "2018",
                                                                                                                                                    "weekNumber": "35"
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "month": "8",
                                                                                                                                                    "day": "27",
                                                                                                                                                    "year": "2018",
                                                                                                                                                    "weekNumber": "35"
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "month": "8",
                                                                                                                                                    "day": "28",
                                                                                                                                                    "year": "2018",
                                                                                                                                                    "weekNumber": "35"
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "month": "8",
                                                                                                                                                    "day": "29",
                                                                                                                                                    "year": "2018",
                                                                                                                                                    "weekNumber": "35"
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "month": "8",
                                                                                                                                                    "day": "30",
                                                                                                                                                    "year": "2018",
                                                                                                                                                    "weekNumber": "35"
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "month": "8",
                                                                                                                                                    "day": "31",
                                                                                                                                                    "year": "2018",
                                                                                                                                                    "weekNumber": "35"
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "month": "9",
                                                                                                                                                    "day": "1",
                                                                                                                                                    "year": "2018",
                                                                                                                                                    "weekNumber": "35"
                                                                                                                                                }
                                                                                                                                            ],
                                                                                                                                                "36": [
                                                                                                                                                    {
                                                                                                                                                        "month": "9",
                                                                                                                                                        "day": "2",
                                                                                                                                                        "year": "2018",
                                                                                                                                                        "weekNumber": "36"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "month": "9",
                                                                                                                                                        "day": "3",
                                                                                                                                                        "year": "2018",
                                                                                                                                                        "weekNumber": "36"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "month": "9",
                                                                                                                                                        "day": "4",
                                                                                                                                                        "year": "2018",
                                                                                                                                                        "weekNumber": "36"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "month": "9",
                                                                                                                                                        "day": "5",
                                                                                                                                                        "year": "2018",
                                                                                                                                                        "weekNumber": "36"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "month": "9",
                                                                                                                                                        "day": "6",
                                                                                                                                                        "year": "2018",
                                                                                                                                                        "weekNumber": "36"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "month": "9",
                                                                                                                                                        "day": "7",
                                                                                                                                                        "year": "2018",
                                                                                                                                                        "weekNumber": "36"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "month": "9",
                                                                                                                                                        "day": "8",
                                                                                                                                                        "year": "2018",
                                                                                                                                                        "weekNumber": "36"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                    "37": [
                                                                                                                                                        {
                                                                                                                                                            "month": "9",
                                                                                                                                                            "day": "9",
                                                                                                                                                            "year": "2018",
                                                                                                                                                            "weekNumber": "37"
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            "month": "9",
                                                                                                                                                            "day": "10",
                                                                                                                                                            "year": "2018",
                                                                                                                                                            "weekNumber": "37"
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            "month": "9",
                                                                                                                                                            "day": "11",
                                                                                                                                                            "year": "2018",
                                                                                                                                                            "weekNumber": "37"
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            "month": "9",
                                                                                                                                                            "day": "12",
                                                                                                                                                            "year": "2018",
                                                                                                                                                            "weekNumber": "37"
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            "month": "9",
                                                                                                                                                            "day": "13",
                                                                                                                                                            "year": "2018",
                                                                                                                                                            "weekNumber": "37"
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            "month": "9",
                                                                                                                                                            "day": "14",
                                                                                                                                                            "year": "2018",
                                                                                                                                                            "weekNumber": "37"
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            "month": "9",
                                                                                                                                                            "day": "15",
                                                                                                                                                            "year": "2018",
                                                                                                                                                            "weekNumber": "37"
                                                                                                                                                        }
                                                                                                                                                    ],
                                                                                                                                                        "38": [
                                                                                                                                                            {
                                                                                                                                                                "month": "9",
                                                                                                                                                                "day": "16",
                                                                                                                                                                "year": "2018",
                                                                                                                                                                "weekNumber": "38"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "month": "9",
                                                                                                                                                                "day": "17",
                                                                                                                                                                "year": "2018",
                                                                                                                                                                "weekNumber": "38"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "month": "9",
                                                                                                                                                                "day": "18",
                                                                                                                                                                "year": "2018",
                                                                                                                                                                "weekNumber": "38"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "month": "9",
                                                                                                                                                                "day": "19",
                                                                                                                                                                "year": "2018",
                                                                                                                                                                "weekNumber": "38"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "month": "9",
                                                                                                                                                                "day": "20",
                                                                                                                                                                "year": "2018",
                                                                                                                                                                "weekNumber": "38"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "month": "9",
                                                                                                                                                                "day": "21",
                                                                                                                                                                "year": "2018",
                                                                                                                                                                "weekNumber": "38"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "month": "9",
                                                                                                                                                                "day": "22",
                                                                                                                                                                "year": "2018",
                                                                                                                                                                "weekNumber": "38"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                            "39": [
                                                                                                                                                                {
                                                                                                                                                                    "month": "9",
                                                                                                                                                                    "day": "23",
                                                                                                                                                                    "year": "2018",
                                                                                                                                                                    "weekNumber": "39"
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    "month": "9",
                                                                                                                                                                    "day": "24",
                                                                                                                                                                    "year": "2018",
                                                                                                                                                                    "weekNumber": "39"
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    "month": "9",
                                                                                                                                                                    "day": "25",
                                                                                                                                                                    "year": "2018",
                                                                                                                                                                    "weekNumber": "39"
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    "month": "9",
                                                                                                                                                                    "day": "26",
                                                                                                                                                                    "year": "2018",
                                                                                                                                                                    "weekNumber": "39"
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    "month": "9",
                                                                                                                                                                    "day": "27",
                                                                                                                                                                    "year": "2018",
                                                                                                                                                                    "weekNumber": "39"
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    "month": "9",
                                                                                                                                                                    "day": "28",
                                                                                                                                                                    "year": "2018",
                                                                                                                                                                    "weekNumber": "39"
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    "month": "9",
                                                                                                                                                                    "day": "29",
                                                                                                                                                                    "year": "2018",
                                                                                                                                                                    "weekNumber": "39"
                                                                                                                                                                }
                                                                                                                                                            ],
                                                                                                                                                                "40": [
                                                                                                                                                                    {
                                                                                                                                                                        "month": "9",
                                                                                                                                                                        "day": "30",
                                                                                                                                                                        "year": "2018",
                                                                                                                                                                        "weekNumber": "40"
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        "month": "10",
                                                                                                                                                                        "day": "1",
                                                                                                                                                                        "year": "2018",
                                                                                                                                                                        "weekNumber": "40"
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        "month": "10",
                                                                                                                                                                        "day": "2",
                                                                                                                                                                        "year": "2018",
                                                                                                                                                                        "weekNumber": "40"
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        "month": "10",
                                                                                                                                                                        "day": "3",
                                                                                                                                                                        "year": "2018",
                                                                                                                                                                        "weekNumber": "40"
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        "month": "10",
                                                                                                                                                                        "day": "4",
                                                                                                                                                                        "year": "2018",
                                                                                                                                                                        "weekNumber": "40"
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        "month": "10",
                                                                                                                                                                        "day": "5",
                                                                                                                                                                        "year": "2018",
                                                                                                                                                                        "weekNumber": "40"
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        "month": "10",
                                                                                                                                                                        "day": "6",
                                                                                                                                                                        "year": "2018",
                                                                                                                                                                        "weekNumber": "40"
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                    "41": [
                                                                                                                                                                        {
                                                                                                                                                                            "month": "10",
                                                                                                                                                                            "day": "7",
                                                                                                                                                                            "year": "2018",
                                                                                                                                                                            "weekNumber": "41"
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            "month": "10",
                                                                                                                                                                            "day": "8",
                                                                                                                                                                            "year": "2018",
                                                                                                                                                                            "weekNumber": "41"
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            "month": "10",
                                                                                                                                                                            "day": "9",
                                                                                                                                                                            "year": "2018",
                                                                                                                                                                            "weekNumber": "41"
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            "month": "10",
                                                                                                                                                                            "day": "10",
                                                                                                                                                                            "year": "2018",
                                                                                                                                                                            "weekNumber": "41"
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            "month": "10",
                                                                                                                                                                            "day": "11",
                                                                                                                                                                            "year": "2018",
                                                                                                                                                                            "weekNumber": "41"
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            "month": "10",
                                                                                                                                                                            "day": "12",
                                                                                                                                                                            "year": "2018",
                                                                                                                                                                            "weekNumber": "41"
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            "month": "10",
                                                                                                                                                                            "day": "13",
                                                                                                                                                                            "year": "2018",
                                                                                                                                                                            "weekNumber": "41"
                                                                                                                                                                        }
                                                                                                                                                                    ],
                                                                                                                                                                        "42": [
                                                                                                                                                                            {
                                                                                                                                                                                "month": "10",
                                                                                                                                                                                "day": "14",
                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                "weekNumber": "42"
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                "month": "10",
                                                                                                                                                                                "day": "15",
                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                "weekNumber": "42"
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                "month": "10",
                                                                                                                                                                                "day": "16",
                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                "weekNumber": "42"
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                "month": "10",
                                                                                                                                                                                "day": "17",
                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                "weekNumber": "42"
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                "month": "10",
                                                                                                                                                                                "day": "18",
                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                "weekNumber": "42"
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                "month": "10",
                                                                                                                                                                                "day": "19",
                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                "weekNumber": "42"
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                "month": "10",
                                                                                                                                                                                "day": "20",
                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                "weekNumber": "42"
                                                                                                                                                                            }
                                                                                                                                                                        ],
                                                                                                                                                                            "43": [
                                                                                                                                                                                {
                                                                                                                                                                                    "month": "10",
                                                                                                                                                                                    "day": "21",
                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                    "weekNumber": "43"
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    "month": "10",
                                                                                                                                                                                    "day": "22",
                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                    "weekNumber": "43"
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    "month": "10",
                                                                                                                                                                                    "day": "23",
                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                    "weekNumber": "43"
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    "month": "10",
                                                                                                                                                                                    "day": "24",
                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                    "weekNumber": "43"
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    "month": "10",
                                                                                                                                                                                    "day": "25",
                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                    "weekNumber": "43"
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    "month": "10",
                                                                                                                                                                                    "day": "26",
                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                    "weekNumber": "43"
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    "month": "10",
                                                                                                                                                                                    "day": "27",
                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                    "weekNumber": "43"
                                                                                                                                                                                }
                                                                                                                                                                            ],
                                                                                                                                                                                "44": [
                                                                                                                                                                                    {
                                                                                                                                                                                        "month": "10",
                                                                                                                                                                                        "day": "28",
                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                        "weekNumber": "44"
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "month": "10",
                                                                                                                                                                                        "day": "29",
                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                        "weekNumber": "44"
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "month": "10",
                                                                                                                                                                                        "day": "30",
                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                        "weekNumber": "44"
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "month": "10",
                                                                                                                                                                                        "day": "31",
                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                        "weekNumber": "44"
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                        "day": "1",
                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                        "weekNumber": "44"
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                        "day": "2",
                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                        "weekNumber": "44"
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                        "day": "3",
                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                        "weekNumber": "44"
                                                                                                                                                                                    }
                                                                                                                                                                                ],
                                                                                                                                                                                    "45": [
                                                                                                                                                                                        {
                                                                                                                                                                                            "month": "11",
                                                                                                                                                                                            "day": "4",
                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                            "weekNumber": "45"
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "month": "11",
                                                                                                                                                                                            "day": "5",
                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                            "weekNumber": "45"
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "month": "11",
                                                                                                                                                                                            "day": "6",
                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                            "weekNumber": "45"
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "month": "11",
                                                                                                                                                                                            "day": "7",
                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                            "weekNumber": "45"
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "month": "11",
                                                                                                                                                                                            "day": "8",
                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                            "weekNumber": "45"
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "month": "11",
                                                                                                                                                                                            "day": "9",
                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                            "weekNumber": "45"
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "month": "11",
                                                                                                                                                                                            "day": "10",
                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                            "weekNumber": "45"
                                                                                                                                                                                        }
                                                                                                                                                                                    ],
                                                                                                                                                                                        "46": [
                                                                                                                                                                                            {
                                                                                                                                                                                                "month": "11",
                                                                                                                                                                                                "day": "11",
                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                "weekNumber": "46"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "month": "11",
                                                                                                                                                                                                "day": "12",
                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                "weekNumber": "46"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "month": "11",
                                                                                                                                                                                                "day": "13",
                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                "weekNumber": "46"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "month": "11",
                                                                                                                                                                                                "day": "14",
                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                "weekNumber": "46"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "month": "11",
                                                                                                                                                                                                "day": "15",
                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                "weekNumber": "46"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "month": "11",
                                                                                                                                                                                                "day": "16",
                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                "weekNumber": "46"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "month": "11",
                                                                                                                                                                                                "day": "17",
                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                "weekNumber": "46"
                                                                                                                                                                                            }
                                                                                                                                                                                        ],
                                                                                                                                                                                            "47": [
                                                                                                                                                                                                {
                                                                                                                                                                                                    "month": "11",
                                                                                                                                                                                                    "day": "18",
                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                    "weekNumber": "47"
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    "month": "11",
                                                                                                                                                                                                    "day": "19",
                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                    "weekNumber": "47"
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    "month": "11",
                                                                                                                                                                                                    "day": "20",
                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                    "weekNumber": "47"
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    "month": "11",
                                                                                                                                                                                                    "day": "21",
                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                    "weekNumber": "47"
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    "month": "11",
                                                                                                                                                                                                    "day": "22",
                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                    "weekNumber": "47"
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    "month": "11",
                                                                                                                                                                                                    "day": "23",
                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                    "weekNumber": "47"
                                                                                                                                                                                                },
                                                                                                                                                                                                {
                                                                                                                                                                                                    "month": "11",
                                                                                                                                                                                                    "day": "24",
                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                    "weekNumber": "47"
                                                                                                                                                                                                }
                                                                                                                                                                                            ],
                                                                                                                                                                                                "48": [
                                                                                                                                                                                                    {
                                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                                        "day": "25",
                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                        "weekNumber": "48"
                                                                                                                                                                                                    },
                                                                                                                                                                                                    {
                                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                                        "day": "26",
                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                        "weekNumber": "48"
                                                                                                                                                                                                    },
                                                                                                                                                                                                    {
                                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                                        "day": "27",
                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                        "weekNumber": "48"
                                                                                                                                                                                                    },
                                                                                                                                                                                                    {
                                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                                        "day": "28",
                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                        "weekNumber": "48"
                                                                                                                                                                                                    },
                                                                                                                                                                                                    {
                                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                                        "day": "29",
                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                        "weekNumber": "48"
                                                                                                                                                                                                    },
                                                                                                                                                                                                    {
                                                                                                                                                                                                        "month": "11",
                                                                                                                                                                                                        "day": "30",
                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                        "weekNumber": "48"
                                                                                                                                                                                                    },
                                                                                                                                                                                                    {
                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                        "day": "1",
                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                        "weekNumber": "48"
                                                                                                                                                                                                    }
                                                                                                                                                                                                ],
                                                                                                                                                                                                    "49": [
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                            "day": "2",
                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                            "weekNumber": "49"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                            "day": "3",
                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                            "weekNumber": "49"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                            "day": "4",
                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                            "weekNumber": "49"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                            "day": "5",
                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                            "weekNumber": "49"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                            "day": "6",
                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                            "weekNumber": "49"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                            "day": "7",
                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                            "weekNumber": "49"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                            "day": "8",
                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                            "weekNumber": "49"
                                                                                                                                                                                                        }
                                                                                                                                                                                                    ],
                                                                                                                                                                                                        "50": [
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "month": "12",
                                                                                                                                                                                                                "day": "9",
                                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                                "weekNumber": "50"
                                                                                                                                                                                                            },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "month": "12",
                                                                                                                                                                                                                "day": "10",
                                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                                "weekNumber": "50"
                                                                                                                                                                                                            },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "month": "12",
                                                                                                                                                                                                                "day": "11",
                                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                                "weekNumber": "50"
                                                                                                                                                                                                            },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "month": "12",
                                                                                                                                                                                                                "day": "12",
                                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                                "weekNumber": "50"
                                                                                                                                                                                                            },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "month": "12",
                                                                                                                                                                                                                "day": "13",
                                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                                "weekNumber": "50"
                                                                                                                                                                                                            },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "month": "12",
                                                                                                                                                                                                                "day": "14",
                                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                                "weekNumber": "50"
                                                                                                                                                                                                            },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "month": "12",
                                                                                                                                                                                                                "day": "15",
                                                                                                                                                                                                                "year": "2018",
                                                                                                                                                                                                                "weekNumber": "50"
                                                                                                                                                                                                            }
                                                                                                                                                                                                        ],
                                                                                                                                                                                                            "51": [
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "month": "12",
                                                                                                                                                                                                                    "day": "16",
                                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                                    "weekNumber": "51"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "month": "12",
                                                                                                                                                                                                                    "day": "17",
                                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                                    "weekNumber": "51"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "month": "12",
                                                                                                                                                                                                                    "day": "18",
                                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                                    "weekNumber": "51"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "month": "12",
                                                                                                                                                                                                                    "day": "19",
                                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                                    "weekNumber": "51"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "month": "12",
                                                                                                                                                                                                                    "day": "20",
                                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                                    "weekNumber": "51"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "month": "12",
                                                                                                                                                                                                                    "day": "21",
                                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                                    "weekNumber": "51"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "month": "12",
                                                                                                                                                                                                                    "day": "22",
                                                                                                                                                                                                                    "year": "2018",
                                                                                                                                                                                                                    "weekNumber": "51"
                                                                                                                                                                                                                }
                                                                                                                                                                                                            ],
                                                                                                                                                                                                                "52": [
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                                        "day": "23",
                                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                                        "weekNumber": "52"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                                        "day": "24",
                                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                                        "weekNumber": "52"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                                        "day": "25",
                                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                                        "weekNumber": "52"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                                        "day": "26",
                                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                                        "weekNumber": "52"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                                        "day": "27",
                                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                                        "weekNumber": "52"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                                        "day": "28",
                                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                                        "weekNumber": "52"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        "month": "12",
                                                                                                                                                                                                                        "day": "29",
                                                                                                                                                                                                                        "year": "2018",
                                                                                                                                                                                                                        "weekNumber": "52"
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                    "53": [
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                                            "day": "30",
                                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                                            "weekNumber": "53"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "month": "12",
                                                                                                                                                                                                                            "day": "31",
                                                                                                                                                                                                                            "year": "2018",
                                                                                                                                                                                                                            "weekNumber": "53"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "month": "1",
                                                                                                                                                                                                                            "day": "1",
                                                                                                                                                                                                                            "year": "2019",
                                                                                                                                                                                                                            "weekNumber": "53"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "month": "1",
                                                                                                                                                                                                                            "day": "2",
                                                                                                                                                                                                                            "year": "2019",
                                                                                                                                                                                                                            "weekNumber": "53"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "month": "1",
                                                                                                                                                                                                                            "day": "3",
                                                                                                                                                                                                                            "year": "2019",
                                                                                                                                                                                                                            "weekNumber": "53"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "month": "1",
                                                                                                                                                                                                                            "day": "4",
                                                                                                                                                                                                                            "year": "2019",
                                                                                                                                                                                                                            "weekNumber": "53"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "month": "1",
                                                                                                                                                                                                                            "day": "5",
                                                                                                                                                                                                                            "year": "2019",
                                                                                                                                                                                                                            "weekNumber": "53"
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    ]
}
