import { useEffect } from "react";

import  './map.scss';

const Map = () => {
    const AmCharts = window.AmCharts;

    useEffect(() => {
        AmCharts.makeChart("map",{
            "type": "map",
            "pathToImages": "http://www.amcharts.com/lib/3/images/",
            "addClassNames": true,
            "fontSize": 15,
            "mouseWheelZoomEnabled": true,
            "zoomDuration": 0.1,
            "fitMapToContainer": true,
            "color": "#000000",
            "projection": "mercator",
            "backgroundAlpha": 1,
            "backgroundColor": "rgba(229,229,229,1)",
            "dataProvider": {
              "map": "worldLow",
              "getAreasFromMap": true,
              "areas": [
                {
                  "id": "AL",
                  "title": "Albania",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "AM",
                  "title": "Armenia",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "AT",
                  "title": "Austria",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "AZ",
                  "title": "Azerbaijan",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "BA",
                  "title": "Bosnia and Herzegovina",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "BE",
                  "title": "Belgium",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "BG",
                  "title": "Bulgaria",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "BY",
                  "title": "Belarus",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "CA",
                  "title": "Canada",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "CH",
                  "title": "Switzerland",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "CZ",
                  "title": "Czechia",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "DE",
                  "title": "Germany",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "DK",
                  "title": "Denmark",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "EE",
                  "title": "Estonia",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "ES",
                  "title": "Spain",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "FI",
                  "title": "Finland",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "FR","title": "France",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "GB",
                  "title": "United Kingdom",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "GE",
                  "title": "Georgia",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "GR",
                  "title": "Greece",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "HR",
                  "title": "Croatia",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "HU",
                  "title": "Hungary",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "IE",
                  "title": "Ireland",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "IS",
                  "title": "Iceland",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "IT",
                  "title": "Italy",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "KG",
                  "title": "Kyrgyzstan",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "XK",
                  "title": "Kosovo",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "KZ",
                  "title": "Kazakhstan",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "LT",
                  "title": "Lithuania",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "LU",
                  "title": "Luxembourg",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "LV",
                  "title": "Latvia",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "MD",
                  "title": "Moldova",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "ME",
                  "title": "Montenegro",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "MK",
                  "title": "North Macedonia",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "MN",
                  "title": "Mongolia",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "NL",
                  "title": "Netherlands",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "NO",
                  "title": "Norway",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "NZ",
                  "title": "New Zealand",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "PL",
                  "title": "Poland",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "PT",
                  "title": "Portugal",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "RO",
                  "title": "Romania",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "RS",
                  "title": "Serbia",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "RU",
                  "title": "Russia",
                  "color": "rgba(61,61,61,1)"
                },
                {
                  "id": "SE",
                  "title": "Sweden",
                  "color": "rgba(255,255,255,1)"
                },
                {
                  "id": "SI",
                  "title": "Slovenia",
                  "color": "rgba(255,255,255,1)"
                  },
                  {
                    "id": "SK",
                    "title": "Slovakia",
                    "color": "rgba(255,255,255,1)"
                  },
                  {
                    "id": "TJ",
                    "title": "Tajikistan",
                    "color": "rgba(61,61,61,1)"
                  },
                  {
                    "id": "TR",
                    "title": "Turkey",
                    "color": "rgba(255,255,255,1)"
                  },
                  {
                    "id": "UA",
                    "title": "Ukraine",
                    "color": "rgba(61,61,61,1)"
                  },
                  {
                    "id": "US",
                    "title": "United States",
                    "color": "rgba(61,61,61,1)"
                  },
                  {
                    "id": "UZ",
                    "title": "Uzbekistan",
                    "color": "rgba(61,61,61,1)"
                  },
                  {
                    "id": "ZA",
                    "title": "South Africa",
                    "color": "rgba(61,61,61,1)"
                  }
                ]
              },
              "balloon": {
                "horizontalPadding": 15,
                "borderAlpha": 0,
                "borderThickness": 1,
                "verticalPadding": 15
              },
              "areasSettings": {
                "color": "rgba(255,255,255,1)",
                "outlineColor": "rgba(229,229,229,1)",
                "rollOverOutlineColor": "rgba(229,229,229,1)",
                "rollOverBrightness": 20,
                "selectedBrightness": 20,
                "selectable": false,
                "unlistedAreasAlpha": 0,
                "unlistedAreasOutlineAlpha": 0
              },
              "imagesSettings": {
                "alpha": 1,
                "color": "rgba(255,255,255,1)",
                "outlineAlpha": 0,
                "rollOverOutlineAlpha": 0,
                "outlineColor": "rgba(229,229,229,1)",
                "rollOverBrightness": 20,
                "selectedBrightness": 20,
                "selectable": false
              },
              "linesSettings": {
                "color": "rgba(255,255,255,1)",
                "selectable": false,
                "rollOverBrightness": 20,
                "selectedBrightness": 20
              },
              "zoomControl": {
                "zoomControlEnabled": true,
                "homeButtonEnabled": true,
                "panControlEnabled": false,
                "right": 38,
                "bottom": 30,
                "minZoomLevel": 0.75,
                "gridHeight": 100,
                "gridAlpha": 0.1,
                "gridBackgroundAlpha": 0,
                "gridColor": "#FFFFFF",
                "draggerAlpha": 1,
                "buttonCornerRadius": 2
              }
        });
    }, [])
    
    return (
        <>
            <div id="map" />
            <div className="status">
                <p>Availability</p>
                <div>
                    <div name="available"></div>
                    <p>Available</p>
                </div>
                <div>
                    <div name="coming"></div>
                    <p>Coming soon</p>
                </div>
            </div>
        </>
    )
}

export default Map;