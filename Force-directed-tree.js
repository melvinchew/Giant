/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

// Create chart
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

// Icons
var workstation = "M0 30l4-8h24l4 8zM4 2v18h24V2H4zm22 16H6V4h20v14z";
var server = "M6 0v30h2v2h4v-2h8v2h4v-2h2V0H6zm6 6H8V4h4v2z";
var printer = "M28 26h2V16h-4V2H6v14H2v10h2l-2 4h28l-2-4zM8 4h16v12H8V4zm0 20h16l2 4H6l2-4z";
var router = "M26 20v-8a5 5 0 1 0-2 0v8l-2 1-11-11a5 5 0 0 0-4-8 5 5 0 0 0-1 10v8a5 5 0 1 0 2 0v-8l2-1 11 11-1 3a5 5 0 1 0 6-5z";

// Set data
series.data = [{
  "name": "Network #1",
  "path": server,
  "children": [{
    "name": "Workstation #1",
    "value": 1,
    "path": workstation
  }, {
    "name": "Workstation #2",
    "value": 1,
    "path": workstation
  }, {
    "name": "Workstation #3",
    "value": 1,
    "path": workstation
  }, {
    "name": "Workstation #4",
    "value": 1,
    "path": workstation
  }, {
    "name": "Printer",
    "value": 1,
    "path": printer
  }, {
    "name": "Bridge",
    "value": 1,
    "path": router,
    "link": ["n2"]
  }]
}, {
  "name": "Network #2",
  "path": server,
  "children": [{
    "name": "Workstation #1",
    "value": 1,
    "path": workstation
  }, {
    "name": "Workstation #2",
    "value": 1,
    "path": workstation
  }, {
    "name": "Workstation #3",
    "value": 1,
    "path": workstation
  }, {
    "id": "n2",
    "name": "Bridge",
    "value": 1,
    "path": router
  }]
}];

// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.id = "id";
series.dataFields.children = "children";
series.dataFields.linkWith = "link";

// Add labels
series.nodes.template.label.text = "{name}";
series.nodes.template.label.valign = "bottom";
series.nodes.template.label.fill = am4core.color("#000");
series.nodes.template.label.dy = 10;
series.nodes.template.tooltipText = "{name}: [bold]{value}[/]";
series.fontSize = 10;
series.minRadius = 30;
series.maxRadius = 30;

// Configure circles
series.nodes.template.circle.fill = am4core.color("#fff");
series.nodes.template.circle.fill = am4core.color("#fff");

// Configure icons
var icon = series.nodes.template.createChild(am4core.Sprite);
icon.propertyFields.path = "path";
icon.horizontalCenter = "middle";
icon.verticalCenter = "middle";

series.centerStrength = 0.4;
