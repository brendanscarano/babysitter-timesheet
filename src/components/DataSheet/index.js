/**
* Description here...
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import { mockData } from './mockData';

const DataSheet = () => (
	<ReactDataSheet
		data={mockData}
		valueRenderer={(cell) => cell.value}
	/>
);

export { DataSheet };
