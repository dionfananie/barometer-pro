
// for (var x = 1; x < 2; x++) {
//     var radial = 'gauge-radial-'+x
//     var radial_draw = new RadialGauge({
//         renderTo: radial,
//         width: 200,
//         height: 200,
//         units: 'Km/h',
//         title: true,
//         value: 122,
//         minValue: 0,
//         maxValue: 220,
//         majorTicks: [
//             '0','20','40','60','80','100','120','140','160','180','200','220'
//         ],
//         minorTicks: 2,
//         strokeTicks: false,
//         highlights: [
//             { from: 0, to: 220, color: 'rgba(46, 64, 83)' },
//             // { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
//             // { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
//             // { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
//             // { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
//         ],
//         colorPlate: '#222',
//         colorMajorTicks: '#f5f5f5',
//         colorMinorTicks: '#ddd',
//         colorTitle: '#fff',
//         colorUnits: '#ccc',
//         colorNumbers: '#eee',
//         colorNeedle: 'rgba(240, 128, 128, 1)',
//         colorNeedleEnd: 'rgba(255, 160, 122, .9)',
//         valueBox: true,
//         animationRule: 'bounce',
//         animationDuration: 500
//     }).draw();
// }

for (var i = 1; i < 2;  i++) {
    var compass = 'gauge-compass-'+i;
    console.log(compass)
    var gaugeCompass = new RadialGauge({
        renderTo: compass,
        width: 160,
        height: 160,
        minValue: 0,
        maxValue: 360,
        value: 122,
        title:'122 South East',
        majorTicks: [
            "N",
            "NE",
            "E",
            "SE",
            "S",
            "SW",
            "W",
            "NW",
            "N"
        ],
        minorTicks: 10,
        ticksAngle: 360,
        startAngle: 180,
        strokeTicks: false,
        highlights: false,
        colorPlate: "#00000",
        colorMajorTicks: "#f5f5f5",
        colorMinorTicks: "#ddd",
        colorNumbers: "#ccc",
        colorNeedle: "rgba(240, 128, 128, 1)",
        colorNeedleEnd: "rgba(255, 160, 122, .9)",
        valueBox: true,
        valueBoxBorderRadius: 10,
        valueBoxStroke: 1,
        valueTextShadow: false,
        colorCircleInner: "#fff",
        colorNeedleCircleOuter: "#ccc",
        needleCircleSize: 15,
        needleCircleOuter: false,
        animationRule: "linear",
        needleType: "line",
        needleStart: 50,
        needleEnd: 99,
        needleWidth: 3,
        borders: false,
        borderInnerWidth: 0,
        borderMiddleWidth: 0,
        borderOuterWidth: 10,
        colorBorderOuter: "#ccc",
        colorBorderOuterEnd: "#ccc",
        colorNeedleShadowDown: "#222",
        borderShadowWidth: 0,
        animationDuration: 1500
    }).draw();
}
for (var i = 1; i < 2;  i++) {
    var compass = 'gauge-linear-'+i;
    console.log(compass)
    var gaugeCompass = new LinearGauge({
        renderTo: compass,
        width:120,
        height:220,
        units:"°C",
        minValue:0,
        maxValue:220,
        majorTicks:[0,20,40,60,80,100,120,140,160,180,200,220],
        minorTicks:2,
        strokeTicks:true,
        highlights:[ {from: 100, to: 220, color: "rgba(200, 50, 50, .75)"} ],
        colorPlate:"#fff",
        borderShadowWidth:0,
        borders:false,
        needleType:"arrow",
        needleWidth:2,
        animationDuration:1500,
        animationRule:"linear",
        tickSide:"left",
        numberSide:"left",
        needleSide:"left",
        barStrokeWidth:1,
        barWidth:55,
        barBeginCircle:false,
        value:75,
    }).draw();
}

Highcharts.chart('tekanan_udara', {
            chart: {
                type: 'gauge',
                width: null,
                height: 200,
                // spacingTop:-10,
                plotBackgroundColor: "#f5f5f5",
                plotBackgroundImage: "#f5f5f5",
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#f5f5f5'],
                        [1, '#f5f5f5']
                    ]
                },
                plotBorderColor: '#606063'
            },

            title: {
                text: '',
                background : '#f5f5f5'
            },

            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#f5f5f5'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#333'],
                            [1, '##f5f5f5']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#f5f5f5',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 1020,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'km/h'
                },
                plotBands: [{
                    from: 0,
                    to: 400,
                    color: '#55BF3B' // green
                }, {
                    from: 400,
                    to: 800,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 800,
                    to: 1020,
                    color: '#DF5353' // red
                }]
            },

            series: [{
                name: 'Speed',
                data: [500.6],
                tooltip: {
                    valueSuffix: ' hPa'
                }
            }]

        })

         
