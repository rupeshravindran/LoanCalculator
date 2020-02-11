import React, {useMemo} from 'react';
import './Grid.css';

export function Grid({data, columns}) {
    const header = useMemo(() => {
      return columns.map(({label}) => <div className="grid-header">{label}</div>)
    },[columns]);

    
    const rows = useMemo(() => {
      let index = 0; 
       return data.map((item) =>{
          index++;
          let rowStyle = index % 2 === 0 ? "grid-item-even" : "grid-item-odd"
          const row = columns.map(({dataField, formatter}) =>(<div className={rowStyle}>{
            formatter ? formatter(item[dataField]): item[dataField]
            }</div>))
          return row;
       })
    }, [data, columns]);

  return (
    <div className="grid-container">
        {[...header, ...rows]}
    </div>
  );
}