require(["esri/Map", "esri/layers/FeatureLayer", "esri/views/MapView", "esri/widgets/Editor"], (
    Map,
    FeatureLayer,
    MapView,
    Editor
) => {

    const myMap = new Map({
        basemap: "streets-vector"
    });

    const layer = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Hazards_Uptown_Charlotte/FeatureServer/0"
    });

    myMap.layers.add(layer);

    const view = new MapView({
        map: myMap,
        container: "viewDiv",
        zoom: 2
    });

    view.when(() => {
        layer.on("layerview-create", function (event) {

            const editor = new Editor({
                view: view,
            });

            // Add the widget to the view
            view.ui.add(editor, "top-right");
        });



    });
});