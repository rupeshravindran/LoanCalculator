import React, { useMemo } from 'react';
import './Grid.css';

export function Grid({ id, data, columns }) {
  const header = useMemo(() => {
    let headerIndex = 0;
    return columns.map(({ label }) => {
      headerIndex++;
      return <div className="grid-header" key={`${headerIndex}-${id}-header`}>{label}</div>
    })
  }, [columns]);

  const rows = useMemo(() => {
    let rowIndex = 0;
    return data.map((item) => {
      rowIndex++;
      let rowStyle = rowIndex % 2 === 0 ? "grid-item-even" : "grid-item-odd";
      let colIndex = 0
      const row = columns.map(({ dataField, formatter }) => {
        colIndex++;
        return (<div className={rowStyle} key={`${id}-${rowIndex}-${colIndex}`}>{
          formatter ? formatter(item[dataField]) : item[dataField]
        }</div>)
      })
      return row;
    })
  }, [data, columns]);

  return (
    <div className="grid-container">
      {[...header, ...rows]}
    </div>
  );
}