/**
* Description here...
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

const grid = [
	[{
		value: 5,
		component: (
			<button onClick={() => console.log("clicked")}>
				Rendered
      </button>
		)
	}]
]

const DataSheet = () => (
	<ReactDataSheet
		data={grid}
		valueRenderer={(cell) => cell.value}
	/>
);

// class DataSheet extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			grid: [
// 				[{ value: 1 }, { value: 3 }],
// 				[{ value: 2 }, { value: 4 }]
// 			]
// 		}
// 	}
// 	render() {
// 		return (
// 			<ReactDataSheet
// 				data={this.state.grid}
// 				valueRenderer={(cell) => cell.value}
// 				onCellsChanged={changes => {
// 					const grid = this.state.grid.map(row => [...row])
// 					changes.forEach(({ cell, row, col, value }) => {
// 						grid[row][col] = { ...grid[row][col], value }
// 					})
// 					this.setState({ grid })
// 				}}
// 			/>
// 		)
// 	}
// }

export { DataSheet };
