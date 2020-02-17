import React from "react";
import * as CanvasJSReact from '../lib/canvasjs.react';
//var CanvasJSReact = require('../lib/canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    title: {
    text: "Basic Column Chart in React"
    },
    data: [{				
            type: "column",
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
    }]
}

class Chart extends React.Component {	
    
    render() {
        
            
        return (
            <div>
            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
            </div>
        );
    }
}

export default Chart