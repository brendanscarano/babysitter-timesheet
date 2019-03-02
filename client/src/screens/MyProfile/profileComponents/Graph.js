import React from 'react';
import { Bar } from 'react-chartjs';

const Graph = ({ loading, error, data }) => {
  if (loading) {
    return <div>Loading Data...</div>;
  }
  if (error) {
    return <div>There was an error loading the data...</div>;
  }
  return (
    <Bar
      data={data}
      height="250"
      options={{
        responsive: true,
        maintainAspectRatio: false,
        titleFontColor: 'red',
        tooltips: {
          callbacks: {
            label: (toolTipItem, data) => {
              console.log('toolTipItem, data', toolTipItem, data);
              return 'Oh hello...';
            },
          },
        },
      }}
    />
  );
};

export default Graph;
