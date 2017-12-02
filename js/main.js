
for (var x = 1; x < 2; x++) {
    var radial = 'gauge-radial-'+x
    var radial_draw = new RadialGauge({
        renderTo: radial,
        width: 200,
        height: 200,
        units: 'Km/h',
        title: true,
        value: 122,
        minValue: 0,
        maxValue: 220,
        majorTicks: [
            '0','20','40','60','80','100','120','140','160','180','200','220'
        ],
        minorTicks: 2,
        strokeTicks: false,
        highlights: [
            { from: 0, to: 220, color: 'rgba(46, 64, 83)' },
            // { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
            // { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
            // { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
            // { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
        ],
        colorPlate: '#222',
        colorMajorTicks: '#f5f5f5',
        colorMinorTicks: '#ddd',
        colorTitle: '#fff',
        colorUnits: '#ccc',
        colorNumbers: '#eee',
        colorNeedle: 'rgba(240, 128, 128, 1)',
        colorNeedleEnd: 'rgba(255, 160, 122, .9)',
        valueBox: true,
        animationRule: 'bounce',
        animationDuration: 500
    }).draw();
}

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

         
