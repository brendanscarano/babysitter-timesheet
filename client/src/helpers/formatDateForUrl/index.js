import moment from 'moment';

// Format date for when going to main route, ie: `/12-2018`
export const formatDateForUrl = moment().format('MM-YYYY');
