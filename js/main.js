for (var i = 1; i < 6; i++) {
    var gauge = 'gauge-id-'+i;
    // console.log(gauge)
    var gauge_draw = new LinearGauge({
        renderTo: gauge,
        colorNumbers: 'red',
        width:120,
        height:300,
        units:'20°C',
        minValue:0,
        maxValue:220,
        majorTicks:['0','20','40','60','80','100','120','140','160','180','200','220'],
        minorTicks:2,
        strokeTicks:true,
        highlights:'[ {"from": 100, "to": 220, "color": "rgba(200, 50, 50, .75)""} ]',
        colorPlate:'#fff',
        borderShadowWidth:0,
        borders:false,
        needleType:'arrow',
        needleWidth:2,
        animationDuration:1500,
        animationRule:'linear',
        tickSide:'left',
        numberSide:'left',
        needleSide:'left',
        barStrokeWidth:7,
        barBeginCircle:false,
        value:75,
    })
    gauge_draw.draw()
}
for (var x = 1; x < 5; x++) {
    var radial = 'gauge-radial-'+x
    console.log(radial)
    var radial_draw = new RadialGauge({
        renderTo: radial,
        width: 200,
        height: 200,
        units: 'Km/h',
        title: false,
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
    });
    radial_draw.draw()
}

         
