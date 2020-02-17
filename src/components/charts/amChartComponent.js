import React from "react"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(am4themes_animated);

class AMChartComponent extends React.Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);

        // Set up data source
        chart.data = [
            {
              "day": 1,
              "sarscases": 167,
              "sarsdeaths": 4,
              "cvcases": 845,
              "cvdeaths": 41
            },
            {
              "day": 2,
              "sarscases": 219,
              "sarsdeaths": 4,
              "cvcases": 1317,
              "cvdeaths": 56
            },
            {
              "day": 3,
              "sarscases": 264,
              "sarsdeaths": 9,
              "cvcases": 2015,
              "cvdeaths": 80
            },
            {
              "day": 4,
              "sarscases": 306,
              "sarsdeaths": 10,
              "cvcases": 2800,
              "cvdeaths": 106
            },
            {
              "day": 5,
              "sarscases": 350,
              "sarsdeaths": 10,
              "cvcases": 4581,
              "cvdeaths": 132
            },
            {
              "day": 6,
              "sarscases": 386,
              "sarsdeaths": 11,
              "cvcases": 6058,
              "cvdeaths": 170
            },
            {
              "day": 7,
              "sarscases": 456,
              "sarsdeaths": 17,
              "cvcases": 7813,
              "cvdeaths": 213
            },
            {
              "day": 8,
              "sarscases": 487,
              "sarsdeaths": 17,
              "cvcases": 9821,
              "cvdeaths": 259
            },
            {
              "day": 9,
              "sarscases": 1323,
              "sarsdeaths": 49,
              "cvcases": 11948,
              "cvdeaths": 304
            },
            {
              "day": 10,
              "sarscases": 1408,
              "sarsdeaths": 53,
              "cvcases": 14551,
              "cvdeaths": 362
            },
            {
              "day": 11,
              "sarscases": 1485,
              "sarsdeaths": 53,
              "cvcases": 17389,
              "cvdeaths": 426
            },
            {
              "day": 12,
              "sarscases": 1550,
              "sarsdeaths": 54,
              "cvcases": 20628,
              "cvdeaths": 492
            },
            {
              "day": 13,
              "sarscases": 1662,
              "sarsdeaths": 58,
              "cvcases": 24553,
              "cvdeaths": 565
            },
            {
              "day": 14,
              "sarscases": 1804,
              "sarsdeaths": 62,
              "cvcases": 28276,
              "cvdeaths": 638
            },
            {
              "day": 15,
              "sarscases": 2223,
              "sarsdeaths": 78,
              "cvcases": 31439,
              "cvdeaths": 724
            },
            {
              "day": 16,
              "sarscases": 2270,
              "sarsdeaths": 79,
              "cvcases": 34876,
              "cvdeaths": 813
            },
            {
              "day": 17,
              "sarscases": 2353,
              "sarsdeaths": 84,
              "cvcases": 37552,
              "cvdeaths": 910
            },
            {
              "day": 18,
              "sarscases": 2461,
              "sarsdeaths": 89,
              "cvcases": 40553,
              "cvdeaths": 1018
            },
            {
              "day": 19,
              "sarscases": 2601,
              "sarsdeaths": 98,
              "cvcases": 43099,
              "cvdeaths": 1115
            },
            {
              "day": 20,
              "sarscases": 2671,
              "sarsdeaths": 103,
              "cvcases": 45170,
              "cvdeaths": 1261
            },
            {
              "day": 21,
              "sarscases": 2722,
              "sarsdeaths": 106,
              "cvcases": 59283,
              "cvdeaths": 1383
            },
            {
              "day": 22,
              "sarscases": 2781,
              "sarsdeaths": 111,
              "cvcases": 64437,
              "cvdeaths": 1526
            },
            {
              "day": 23,
              "sarscases": 2890,
              "sarsdeaths": 116,
              "cvcases": 67100,
              "cvdeaths": 1669
            },
            {
              "day": 24,
              "sarscases": 2960,
              "sarsdeaths": 119,
              "cvcases": 69197,
              "cvdeaths": 1775
            },
            {
              "day": 25,
              "sarscases": 3169,
              "sarsdeaths": 144,
              "cvcases": 71329,
              "cvdeaths": 0
            },
            {
              "day": 26,
              "sarscases": 3235,
              "sarsdeaths": 154,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 27,
              "sarscases": 3293,
              "sarsdeaths": 159,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 28,
              "sarscases": 3389,
              "sarsdeaths": 165,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 29,
              "sarscases": 3547,
              "sarsdeaths": 182,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 30,
              "sarscases": 3547,
              "sarsdeaths": 182,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 31,
              "sarscases": 3861,
              "sarsdeaths": 217,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 32,
              "sarscases": 3947,
              "sarsdeaths": 229,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 33,
              "sarscases": 4288,
              "sarsdeaths": 251,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 34,
              "sarscases": 4439,
              "sarsdeaths": 263,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 35,
              "sarscases": 4649,
              "sarsdeaths": 274,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 36,
              "sarscases": 4836,
              "sarsdeaths": 293,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 37,
              "sarscases": 5050,
              "sarsdeaths": 321,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 38,
              "sarscases": 5462,
              "sarsdeaths": 353,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 39,
              "sarscases": 5663,
              "sarsdeaths": 372,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 40,
              "sarscases": 5865,
              "sarsdeaths": 391,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 41,
              "sarscases": 6054,
              "sarsdeaths": 417,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 42,
              "sarscases": 6234,
              "sarsdeaths": 435,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 43,
              "sarscases": 6583,
              "sarsdeaths": 461,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 44,
              "sarscases": 6727,
              "sarsdeaths": 478,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 45,
              "sarscases": 6903,
              "sarsdeaths": 495,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 46,
              "sarscases": 7053,
              "sarsdeaths": 506,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 47,
              "sarscases": 7183,
              "sarsdeaths": 514,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 48,
              "sarscases": 7296,
              "sarsdeaths": 526,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 49,
              "sarscases": 7447,
              "sarsdeaths": 552,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 50,
              "sarscases": 7548,
              "sarsdeaths": 573,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 51,
              "sarscases": 7628,
              "sarsdeaths": 587,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 52,
              "sarscases": 7699,
              "sarsdeaths": 598,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 53,
              "sarscases": 7739,
              "sarsdeaths": 611,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 54,
              "sarscases": 7761,
              "sarsdeaths": 623,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 55,
              "sarscases": 7864,
              "sarsdeaths": 643,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 56,
              "sarscases": 7919,
              "sarsdeaths": 662,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 57,
              "sarscases": 7956,
              "sarsdeaths": 666,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 58,
              "sarscases": 8046,
              "sarsdeaths": 682,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 59,
              "sarscases": 8117,
              "sarsdeaths": 689,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 60,
              "sarscases": 8141,
              "sarsdeaths": 696,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 61,
              "sarscases": 8202,
              "sarsdeaths": 725,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 62,
              "sarscases": 8221,
              "sarsdeaths": 735,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 63,
              "sarscases": 8240,
              "sarsdeaths": 745,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 64,
              "sarscases": 8295,
              "sarsdeaths": 750,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 65,
              "sarscases": 8317,
              "sarsdeaths": 754,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 66,
              "sarscases": 8360,
              "sarsdeaths": 764,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 67,
              "sarscases": 8384,
              "sarsdeaths": 770,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 68,
              "sarscases": 8398,
              "sarsdeaths": 772,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 69,
              "sarscases": 8402,
              "sarsdeaths": 772,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 70,
              "sarscases": 8403,
              "sarsdeaths": 775,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 71,
              "sarscases": 8404,
              "sarsdeaths": 779,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 72,
              "sarscases": 8421,
              "sarsdeaths": 784,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 73,
              "sarscases": 8430,
              "sarsdeaths": 789,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 74,
              "sarscases": 8435,
              "sarsdeaths": 789,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 75,
              "sarscases": 8445,
              "sarsdeaths": 790,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 76,
              "sarscases": 8454,
              "sarsdeaths": 792,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 77,
              "sarscases": 8460,
              "sarsdeaths": 799,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 78,
              "sarscases": 8464,
              "sarsdeaths": 799,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 79,
              "sarscases": 8465,
              "sarsdeaths": 801,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 80,
              "sarscases": 8462,
              "sarsdeaths": 804,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 81,
              "sarscases": 8461,
              "sarsdeaths": 804,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 82,
              "sarscases": 8459,
              "sarsdeaths": 805,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 83,
              "sarscases": 8458,
              "sarsdeaths": 807,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 84,
              "sarscases": 8460,
              "sarsdeaths": 808,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 85,
              "sarscases": 8456,
              "sarsdeaths": 809,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 86,
              "sarscases": 8450,
              "sarsdeaths": 810,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 87,
              "sarscases": 8447,
              "sarsdeaths": 811,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 88,
              "sarscases": 8445,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 89,
              "sarscases": 8442,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 90,
              "sarscases": 8439,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 91,
              "sarscases": 8439,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 92,
              "sarscases": 8439,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 93,
              "sarscases": 8436,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 94,
              "sarscases": 8436,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 95,
              "sarscases": 8437,
              "sarsdeaths": 812,
              "cvcases": 0,
              "cvdeaths": 0
            },
            {
              "day": 96,
              "sarscases": 8437,
              "sarsdeaths": 813,
              "cvcases": 0,
              "cvdeaths": 0
            }
          ]
        
        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "day";

        // Create value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.dataFields.value = "total"

        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "sarscases";
        series1.dataFields.categoryX = "day";
        series1.name = "SARSCases";
        series1.strokeWidth = 1;
        series1.tensionX = 0.7;
        series1.bullets.push(new am4charts.CircleBullet());

        let circleBullet = series1.bullets.push(new am4charts.CircleBullet());
        circleBullet.circle.stroke = am4core.color("black");
        circleBullet.circle.strokeWidth = 0;
        circleBullet.circle.radius = 3;
        circleBullet.circle.fill = am4core.color("red");

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "sarsdeaths";
        series2.dataFields.categoryX = "day";
        series2.name = "SARSDeaths";
        series2.strokeWidth = 1;
        series2.tensionX = 0.7;
        series2.bullets.push(new am4charts.CircleBullet());

        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "cvcases";
        series3.dataFields.categoryX = "day";
        series3.name = "CVCases";
        series3.strokeWidth = 1;
        series3.tensionX = 0.7;
        series3.bullets.push(new am4charts.CircleBullet());

        var series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = "cvdeaths";
        series4.dataFields.categoryX = "day";
        series4.name = "CVDeaths";
        series4.strokeWidth = 1;
        series4.tensionX = 0.7;
        series4.bullets.push(new am4charts.CircleBullet());

        // Add legend
        chart.legend = new am4charts.Legend();

        this.chart = chart;
    }
    
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv" style={{width: "100%", height: "500px"}}></div>
        )
    }
}

export default AMChartComponent