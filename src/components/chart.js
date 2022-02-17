import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

export default function Chart({priceData}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(priceData);
    }, [priceData])

    const options = {
        title: {
            text: 'Guess the correct Cryptocurrency!'
        },
        series: [
            {
                data:data
            }
        ],
        navigator: {
            enabled: false
        },
        rangeSelector: {
            enabled: false
        },
        scrollbar: { 
            enabled: false 
        },
    };

    return (
        <div className="chart-container" style={{width:"100%"}}>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    )
}