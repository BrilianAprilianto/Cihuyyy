var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Isochrones_Point_20260525_191031_1 = new ol.format.GeoJSON();
var features_Isochrones_Point_20260525_191031_1 = format_Isochrones_Point_20260525_191031_1.readFeatures(json_Isochrones_Point_20260525_191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_Point_20260525_191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_Point_20260525_191031_1.addFeatures(features_Isochrones_Point_20260525_191031_1);
var lyr_Isochrones_Point_20260525_191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones_Point_20260525_191031_1, 
                style: style_Isochrones_Point_20260525_191031_1,
                popuplayertitle: 'Isochrones_Point_2026-05-25_19:10:31',
                interactive: true,
    title: 'Isochrones_Point_2026-05-25_19:10:31<br />\
    <img src="styles/legend/Isochrones_Point_20260525_191031_1_0.png" /> 5 min<br />\
    <img src="styles/legend/Isochrones_Point_20260525_191031_1_1.png" /> 10 min<br />' });
var format_ServiceAreaisochrones_point_20260525_191031_2 = new ol.format.GeoJSON();
var features_ServiceAreaisochrones_point_20260525_191031_2 = format_ServiceAreaisochrones_point_20260525_191031_2.readFeatures(json_ServiceAreaisochrones_point_20260525_191031_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaisochrones_point_20260525_191031_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaisochrones_point_20260525_191031_2.addFeatures(features_ServiceAreaisochrones_point_20260525_191031_2);
var lyr_ServiceAreaisochrones_point_20260525_191031_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaisochrones_point_20260525_191031_2, 
                style: style_ServiceAreaisochrones_point_20260525_191031_2,
                popuplayertitle: 'Service Area — isochrones_point_20260525_191031',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaisochrones_point_20260525_191031_2.png" /> Service Area — isochrones_point_20260525_191031'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Isochrones_Point_20260525_191031_1.setVisible(true);lyr_ServiceAreaisochrones_point_20260525_191031_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Isochrones_Point_20260525_191031_1,lyr_ServiceAreaisochrones_point_20260525_191031_2];
lyr_Isochrones_Point_20260525_191031_1.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_ServiceAreaisochrones_point_20260525_191031_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Isochrones_Point_20260525_191031_1.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_ServiceAreaisochrones_point_20260525_191031_2.set('fieldImages', {'fid': '', 'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Isochrones_Point_20260525_191031_1.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_ServiceAreaisochrones_point_20260525_191031_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_ServiceAreaisochrones_point_20260525_191031_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});