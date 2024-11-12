var size = 0;
var placement = 'point';

var style_Buhairhousingproject_2_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "23.400000000000002px \'Open Sans\', sans-serif";
    var labelFill = "#fb101a";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("AREA_NAME") !== null) {
        labelText = String(feature.get("AREA_NAME"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,3,3,1.0)', lineDash: [19.0,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
