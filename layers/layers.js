var wms_layers = [];


        var lyr_satellitemaps_0 = new ol.layer.Tile({
            'title': ' satellite  maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CADASTRAL_RIFFA_ALBUHAIR_1 = new ol.format.GeoJSON();
var features_CADASTRAL_RIFFA_ALBUHAIR_1 = format_CADASTRAL_RIFFA_ALBUHAIR_1.readFeatures(json_CADASTRAL_RIFFA_ALBUHAIR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADASTRAL_RIFFA_ALBUHAIR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADASTRAL_RIFFA_ALBUHAIR_1.addFeatures(features_CADASTRAL_RIFFA_ALBUHAIR_1);
var lyr_CADASTRAL_RIFFA_ALBUHAIR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADASTRAL_RIFFA_ALBUHAIR_1, 
                style: style_CADASTRAL_RIFFA_ALBUHAIR_1,
                popuplayertitle: "CADASTRAL_RIFFA_ALBUHAIR",
                interactive: true,
                title: '<img src="styles/legend/CADASTRAL_RIFFA_ALBUHAIR_1.png" /> CADASTRAL_RIFFA_ALBUHAIR'
            });
var format_Buhairhousingproject_2_2 = new ol.format.GeoJSON();
var features_Buhairhousingproject_2_2 = format_Buhairhousingproject_2_2.readFeatures(json_Buhairhousingproject_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buhairhousingproject_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buhairhousingproject_2_2.addFeatures(features_Buhairhousingproject_2_2);
var lyr_Buhairhousingproject_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buhairhousingproject_2_2, 
                style: style_Buhairhousingproject_2_2,
                popuplayertitle: "Buhairhousingproject_2",
                interactive: true,
                title: '<img src="styles/legend/Buhairhousingproject_2_2.png" /> Buhairhousingproject_2'
            });
var format_Parcel_numberRIFFA_ALBUHAIR_3 = new ol.format.GeoJSON();
var features_Parcel_numberRIFFA_ALBUHAIR_3 = format_Parcel_numberRIFFA_ALBUHAIR_3.readFeatures(json_Parcel_numberRIFFA_ALBUHAIR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcel_numberRIFFA_ALBUHAIR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcel_numberRIFFA_ALBUHAIR_3.addFeatures(features_Parcel_numberRIFFA_ALBUHAIR_3);
var lyr_Parcel_numberRIFFA_ALBUHAIR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcel_numberRIFFA_ALBUHAIR_3, 
                style: style_Parcel_numberRIFFA_ALBUHAIR_3,
                popuplayertitle: "Parcel_number-RIFFA_ALBUHAIR",
                interactive: true,
                title: '<img src="styles/legend/Parcel_numberRIFFA_ALBUHAIR_3.png" /> Parcel_number-RIFFA_ALBUHAIR'
            });
var format_polyline_FCAD_4 = new ol.format.GeoJSON();
var features_polyline_FCAD_4 = format_polyline_FCAD_4.readFeatures(json_polyline_FCAD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polyline_FCAD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polyline_FCAD_4.addFeatures(features_polyline_FCAD_4);
var lyr_polyline_FCAD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polyline_FCAD_4, 
                style: style_polyline_FCAD_4,
                popuplayertitle: "polyline_FCAD",
                interactive: true,
                title: '<img src="styles/legend/polyline_FCAD_4.png" /> polyline_FCAD'
            });

lyr_satellitemaps_0.setVisible(true);lyr_CADASTRAL_RIFFA_ALBUHAIR_1.setVisible(true);lyr_Buhairhousingproject_2_2.setVisible(true);lyr_Parcel_numberRIFFA_ALBUHAIR_3.setVisible(true);lyr_polyline_FCAD_4.setVisible(true);
var layersList = [lyr_satellitemaps_0,lyr_CADASTRAL_RIFFA_ALBUHAIR_1,lyr_Buhairhousingproject_2_2,lyr_Parcel_numberRIFFA_ALBUHAIR_3,lyr_polyline_FCAD_4];
lyr_CADASTRAL_RIFFA_ALBUHAIR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_1': 'FID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Mt': 'Mt', 'AREA': 'AREA', 'AREA_MT': 'AREA_MT', });
lyr_Buhairhousingproject_2_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'PROJECTID_': 'PROJECTID_', 'PROJECT_NA': 'PROJECT_NA', 'AREA_NAME': 'AREA_NAME', 'BLOCK_NO': 'BLOCK_NO', 'PROJ_TYPE': 'PROJ_TYPE', 'SITE_NO': 'SITE_NO', 'TOWNHOUSES': 'TOWNHOUSES', 'TH_UNITS': 'TH_UNITS', 'APARTMENT_': 'APARTMENT_', 'APARTMENT1': 'APARTMENT1', 'PLOT_UNITS': 'PLOT_UNITS', 'PP_NO': 'PP_NO', 'WL_APP_STA': 'WL_APP_STA', 'PLANNED_ST': 'PLANNED_ST', 'PLANNED_EN': 'PLANNED_EN', 'REV_COMP_D': 'REV_COMP_D', 'PROJ_STATU': 'PROJ_STATU', 'INI_APP_DA': 'INI_APP_DA', 'INI_APP_CO': 'INI_APP_CO', 'PPS_ROADS': 'PPS_ROADS', 'PPS_SEPPD': 'PPS_SEPPD', 'PPS_EDD': 'PPS_EDD', 'PPS_PSD_E': 'PPS_PSD_E', 'PPS_WDD': 'PPS_WDD', 'PPS_PSD_W': 'PPS_PSD_W', 'PPS_TRA': 'PPS_TRA', 'PPS_SURVEY': 'PPS_SURVEY', 'PPS_MUNICI': 'PPS_MUNICI', 'PPS_PARK_M': 'PPS_PARK_M', 'PPS_GOVERN': 'PPS_GOVERN', 'PPS_TV_PLA': 'PPS_TV_PLA', 'PPS_DPS_ED': 'PPS_DPS_ED', 'PPS_CPU': 'PPS_CPU', 'PPS_AGR_EN': 'PPS_AGR_EN', 'PPS_ENV': 'PPS_ENV', 'PPS_COASTG': 'PPS_COASTG', 'PPS_BAPCO': 'PPS_BAPCO', 'PPS_FISHER': 'PPS_FISHER', 'COMMENTS': 'COMMENTS', 'SCH_EDD': 'SCH_EDD', 'SCH_WDD': 'SCH_WDD', 'SCH_TRA': 'SCH_TRA', 'SCH_EDD_ST': 'SCH_EDD_ST', 'SCH_SEPPD': 'SCH_SEPPD', 'SITE_PLAN_': 'SITE_PLAN_', 'SITE_PLAN1': 'SITE_PLAN1', 'GOV_NAME': 'GOV_NAME', 'SECTOR': 'SECTOR', 'CONTRACT_T': 'CONTRACT_T', 'CONTRACT_S': 'CONTRACT_S', 'WORK_COMPL': 'WORK_COMPL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Parcel_numberRIFFA_ALBUHAIR_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'BSI_str': 'BSI_str', });
lyr_polyline_FCAD_4.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Length': 'Length', 'LemMT': 'LemMT', });
lyr_CADASTRAL_RIFFA_ALBUHAIR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Mt': 'TextEdit', 'AREA': 'TextEdit', 'AREA_MT': 'TextEdit', });
lyr_Buhairhousingproject_2_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'Range', 'PROJECTID_': 'TextEdit', 'PROJECT_NA': 'TextEdit', 'AREA_NAME': 'TextEdit', 'BLOCK_NO': 'TextEdit', 'PROJ_TYPE': 'TextEdit', 'SITE_NO': 'Range', 'TOWNHOUSES': 'TextEdit', 'TH_UNITS': 'Range', 'APARTMENT_': 'TextEdit', 'APARTMENT1': 'Range', 'PLOT_UNITS': 'Range', 'PP_NO': 'TextEdit', 'WL_APP_STA': 'TextEdit', 'PLANNED_ST': 'DateTime', 'PLANNED_EN': 'DateTime', 'REV_COMP_D': 'DateTime', 'PROJ_STATU': 'TextEdit', 'INI_APP_DA': 'DateTime', 'INI_APP_CO': 'TextEdit', 'PPS_ROADS': 'TextEdit', 'PPS_SEPPD': 'TextEdit', 'PPS_EDD': 'TextEdit', 'PPS_PSD_E': 'TextEdit', 'PPS_WDD': 'TextEdit', 'PPS_PSD_W': 'TextEdit', 'PPS_TRA': 'TextEdit', 'PPS_SURVEY': 'TextEdit', 'PPS_MUNICI': 'TextEdit', 'PPS_PARK_M': 'TextEdit', 'PPS_GOVERN': 'TextEdit', 'PPS_TV_PLA': 'TextEdit', 'PPS_DPS_ED': 'TextEdit', 'PPS_CPU': 'TextEdit', 'PPS_AGR_EN': 'TextEdit', 'PPS_ENV': 'TextEdit', 'PPS_COASTG': 'TextEdit', 'PPS_BAPCO': 'TextEdit', 'PPS_FISHER': 'TextEdit', 'COMMENTS': 'TextEdit', 'SCH_EDD': 'TextEdit', 'SCH_WDD': 'TextEdit', 'SCH_TRA': 'TextEdit', 'SCH_EDD_ST': 'TextEdit', 'SCH_SEPPD': 'TextEdit', 'SITE_PLAN_': 'TextEdit', 'SITE_PLAN1': 'TextEdit', 'GOV_NAME': 'TextEdit', 'SECTOR': 'TextEdit', 'CONTRACT_T': 'TextEdit', 'CONTRACT_S': 'TextEdit', 'WORK_COMPL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Parcel_numberRIFFA_ALBUHAIR_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'BSI_str': 'TextEdit', });
lyr_polyline_FCAD_4.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Level': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Length': 'TextEdit', 'LemMT': 'TextEdit', });
lyr_CADASTRAL_RIFFA_ALBUHAIR_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label - always visible', 'Mt': 'no label', 'AREA': 'no label', 'AREA_MT': 'no label', });
lyr_Buhairhousingproject_2_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'PROJECTID_': 'no label', 'PROJECT_NA': 'inline label - always visible', 'AREA_NAME': 'no label', 'BLOCK_NO': 'no label', 'PROJ_TYPE': 'no label', 'SITE_NO': 'no label', 'TOWNHOUSES': 'no label', 'TH_UNITS': 'no label', 'APARTMENT_': 'no label', 'APARTMENT1': 'no label', 'PLOT_UNITS': 'no label', 'PP_NO': 'no label', 'WL_APP_STA': 'no label', 'PLANNED_ST': 'no label', 'PLANNED_EN': 'no label', 'REV_COMP_D': 'no label', 'PROJ_STATU': 'no label', 'INI_APP_DA': 'no label', 'INI_APP_CO': 'no label', 'PPS_ROADS': 'no label', 'PPS_SEPPD': 'no label', 'PPS_EDD': 'no label', 'PPS_PSD_E': 'no label', 'PPS_WDD': 'no label', 'PPS_PSD_W': 'no label', 'PPS_TRA': 'no label', 'PPS_SURVEY': 'no label', 'PPS_MUNICI': 'no label', 'PPS_PARK_M': 'no label', 'PPS_GOVERN': 'no label', 'PPS_TV_PLA': 'no label', 'PPS_DPS_ED': 'no label', 'PPS_CPU': 'no label', 'PPS_AGR_EN': 'no label', 'PPS_ENV': 'no label', 'PPS_COASTG': 'no label', 'PPS_BAPCO': 'no label', 'PPS_FISHER': 'no label', 'COMMENTS': 'no label', 'SCH_EDD': 'no label', 'SCH_WDD': 'no label', 'SCH_TRA': 'no label', 'SCH_EDD_ST': 'no label', 'SCH_SEPPD': 'no label', 'SITE_PLAN_': 'no label', 'SITE_PLAN1': 'no label', 'GOV_NAME': 'no label', 'SECTOR': 'no label', 'CONTRACT_T': 'no label', 'CONTRACT_S': 'no label', 'WORK_COMPL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Parcel_numberRIFFA_ALBUHAIR_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'BSI_str': 'inline label - always visible', });
lyr_polyline_FCAD_4.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Level': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Length': 'inline label - always visible', 'LemMT': 'no label', });
lyr_polyline_FCAD_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});