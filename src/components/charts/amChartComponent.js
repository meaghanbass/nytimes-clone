import React from "react"
import "core-js"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

// I removed AMCHARTS because it was breaking on deployment
// run npm install @amcharts/amcharts4 if you want to try to use it again. A chart component has already been created.

am4core.useTheme(am4themes_animated);

class AMChartComponent extends React.Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        // am4core.options.autoSetClassName = true;

        // Set up data source
        chart.dataSource.url = "https://assetsglobal.s3-us-west-1.amazonaws.com/newsblog/datasources/SARS-CV-Data-absolute.json";
        // chart.dataSource.parser = new am4core.CSVParser();
        // chart.dataSource.parser.options.emptyAs = 0;
        // chart.dataSource.parser.options.delimiter = ",";
        // chart.dataSource.parser.options.useColumnNames = true;

        // Cases: https://www.worldometers.info/coronavirus/coronavirus-cases/
        // Deaths: https://www.worldometers.info/coronavirus/coronavirus-death-toll/
        // Sitreps: https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/
        // Dashboard: http://who.maps.arcgis.com/apps/opsdashboard/index.html#/c88e37cfc43b4ed3baf977d77e4a0667
        
        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "day";

        // Create value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.dataFields.value = "total";
        valueAxis.logarithmic = true;

        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "sarscases";
        series1.dataFields.categoryX = "day";
        series1.name = "SARSCases";
        series1.strokeWidth = 1;
        series1.tensionX = 0.7;
        series1.bullets.push(new am4charts.CircleBullet());

        // let circleBullet = series1.bullets.push(new am4charts.CircleBullet());
        // circleBullet.circle.stroke = am4core.color("black");
        // circleBullet.circle.strokeWidth = 0;
        // circleBullet.circle.radius = 10;
        // circleBullet.circle.fill = am4core.color("red");

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