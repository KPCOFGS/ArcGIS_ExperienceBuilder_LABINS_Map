/* eslint-disable no-prototype-builtins */
/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.

  SWH - this is the coordinate icon in the on map panel

*/
import { React, type AllWidgetProps, jsx } from 'jimu-core'
import { type IMConfig } from '../config'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'

import type Point from 'esri/geometry/Point'

import defaultMessages from './translations/default'


import proj4 from 'proj4';
//import transform from 'proj4';
//import * from 'proj4';

interface IState {
  latitude: string
  longitude: string
  scale: number
  zoom: number
  mapViewReady: boolean
}

export default class Widget extends React.PureComponent<
AllWidgetProps<IMConfig>,
IState
> {
  state = {
    latitude: '',
    longitude: '',
    zoom: 0,
    scale: 0,
    mapViewReady: false
  }

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      // When the extent moves, update the state with all the updated values.
      jmv.view.watch('extent', evt => {
        this.setState({
          latitude: jmv.view.center.latitude.toFixed(6),
          longitude: jmv.view.center.longitude.toFixed(6),
          scale: Math.round(jmv.view.scale * 1) / 1,
          zoom: jmv.view.zoom,
          // this is set to false initially, then once we have the first set of data (and all subsequent) it's set
          // to true, so that we can hide the text until everything is ready:
          mapViewReady: true
        })
      })

      // When the pointer moves, take the pointer location and create a Point
      // Geometry out of it (`view.toMap(...)`), then update the state.


      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // point-down vs point-move
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


      jmv.view.on('pointer-down', evt => {
        const point: Point = jmv.view.toMap({
          x: evt.x,
          y: evt.y
        })
        this.setState({
          latitude2: point.latitude.toFixed(7),
          longitude2: point.longitude.toFixed(7),
          scale: Math.round(jmv.view.scale * 1) / 1,
          zoom: jmv.view.zoom,
          mapViewReady: true
        })
      })
    }
  }


//console.log('Ready?', this.state.latitude)

//console.log("-------------above render");
  render () {
    const sections = []
    sections.push(
      <span>
        {defaultMessages.latLon}, {this.state.latitude2}, {this.state.longitude2}
      </span>

    )
//console.log("above GSV");
// get the DMS ready

//console.log('can we see lat', this.state.latitude2)
    var dd = 0
    dd = this.state.latitude2;
    var deg = dd | 0; // truncate dd to get degrees
    var frac = Math.abs(dd - deg); // get fractional part
    var min = (frac * 60) | 0; // multiply fraction by 60 and truncate
    var sec = frac * 3600 - min * 60;
    var lat_dms = deg + '° ' + min + '" ' + sec.toFixed(1) + "'"
    //console.log ('lat is now ', lat_dms)

    dd = this.state.longitude2;
    var deg = dd | 0; // truncate dd to get degrees
    var frac = Math.abs(dd - deg); // get fractional part
    var min = (frac * 60) | 0; // multiply fraction by 60 and truncate
    var sec = frac * 3600 - min * 60;
    var lon_dms = deg + '° ' + min + '" ' + sec.toFixed(1) + "'"
    //console.log ('lon is now ', lon_dms)

//  var latdms = ConvertDDToDMS(this.state.latitude);
//  var londms = ConvertDDToDMS(this.state.longitude);

// SWH - Code for generating the Google StreetView is next
//console.log('google streetview setup');
   const str1 = new URL("https://maps.google.com")
   str1.searchParams.append('q','')
   str1.searchParams.append('layer','c')
   str1.searchParams.append('cbll',[this.state.latitude2,this.state.longitude2])
   //console.log('what does the streetview link look like',str1)


// SWH - now to covert the Lat / Lon we get to other coordinates
// first state plane North feet NAD 83

// WGS84 world system
proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs +type=crs");

//-------------------------

//NAD83(HARN) North Zone (2779 meter)
proj4.defs("EPSG:2883", "+proj=lcc +lat_0=29 +lon_0=-84.5 +lat_1=30.75 +lat_2=29.5833333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=-0.991,1.9072,0.5129,-1.25033e-07,-4.6785e-08,-5.6529e-08,0 +units=us-ft +no_defs +type=crs");

//NAD83(2011) North Zone (6440 meters)
proj4.defs("EPSG:6441","+proj=lcc +lat_0=29 +lon_0=-84.5 +lat_1=30.75 +lat_2=29.5833333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs +type=crs");

//NAD83(CORS96) North Zone  (103256 meters)
proj4.defs("EPSG:103259", "+proj=lcc +lat_0=29 +lon_0=-84.5 +lat_1=29.5833333333333 +lat_2=30.75 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs +type=crs");

//NAD83(NSRS2007) North Zone (3514 meters)
proj4.defs("EPSG:3515", "+proj=lcc +lat_0=29 +lon_0=-84.5 +lat_1=30.75 +lat_2=29.5833333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs +type=crs");

//-------------------------

// NAD83(HARN) East Zone
proj4.defs("EPSG:2881","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016 +y_0=0 +ellps=GRS80 +towgs84=-0.991,1.9072,0.5129,-1.25033e-07,-4.6785e-08,-5.6529e-08,0 +units=us-ft +no_defs +type=crs");

// NAD83(2011) East Zone (6437 meters)
proj4.defs("EPSG:6438","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs +type=crs");

// NAD83(CORS96) East Zone (103254 meters)
proj4.defs("EPSG:103257","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-81 +k=0.999941176470588 +x_0=200000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs +type=crs");

// NAD83(NSRS2007) East Zone (3511 meters)
proj4.defs("EPSG:3512","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs +type=crs");

//-------------------------

// NAD83(HARN) West Zone (2778 meters)
proj4.defs("EPSG:2882","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016 +y_0=0 +ellps=GRS80 +towgs84=-0.991,1.9072,0.5129,-1.25033e-07,-4.6785e-08,-5.6529e-08,0 +units=us-ft +no_defs +type=crs");

// NAD83(2011) West Zone (6442 meters)
proj4.defs("EPSG:6443","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs +type=crs");

// NAD83(CORS96) West Zone(103255 meters)
proj4.defs("EPSG:103258","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-82 +k=0.999941176470588 +x_0=200000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs +type=crs");

// NAD83(NSRS2007) West Zone (3516 meters)
proj4.defs("EPSG:3517","+proj=tmerc +lat_0=24.3333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs +type=crs");


// put other source projections here
var source  = new proj4.Proj('EPSG:4326');

var thePoint = new proj4.toPoint([parseFloat(this.state.longitude2), parseFloat(this.state.latitude2)])
//console.log("look here", this.state.latitude, "Parse float version", parseFloat(this.state.latitude) );

if (parseFloat(this.state.latitude2) > 1.0) {
// this is needed now as this script gets run during startup of the map.  maybe we can figure out how to not run it on load
//North
//console.log("hellow world", thePoint)
    var destination = new proj4.Proj("EPSG:3515");
    var convertedPoint = proj4.transform(source, destination, thePoint);
    var stpl_n_x = convertedPoint.x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    var stpl_n_y = convertedPoint.y.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
//East
    destination = new proj4.Proj("EPSG:3512");
    convertedPoint = proj4.transform(source, destination, thePoint);
    var stpl_e_x = convertedPoint.x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    var stpl_e_y = convertedPoint.y.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
// West
    destination = new proj4.Proj("EPSG:3517");
    convertedPoint = proj4.transform(source, destination, thePoint);
    var stpl_w_x = convertedPoint.x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    var stpl_w_y = convertedPoint.y.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}
else {
var stpl_n_x = 0;
var stpl_n_y = 0;
var stpl_e_x = 0;
var stpl_e_y = 0;
var stpl_w_x = 0;
var stpl_w_y = 0;
}
    if (this.props.config.showZoom) {
    // commented out for now SWH
    //  sections.push(<span>Zoom {this.state.zoom.toFixed(0)}</span>)
    }

    if (this.props.config.showScale) {
    // commented out for now SWH
    //  sections.push(<span>Scale 1:{this.state.scale}</span>)
    }
    // We have 1, 2, or 3 JSX Elements in our array, we want to join them
    // with " | " between them. You cannot use `sections.join(" | ")`, sadly.
    // So we use array.reduce(...) to return an array of JSX elements.
    const allSections = sections.reduce((previousValue, currentValue) => {
      return previousValue === null
        ? [currentValue]
        : [...previousValue, ' | ', currentValue]
    }, null)
//console.log('ready to return-------------');
    return (
      <div className="widget-get-map-coordinates jimu-widget m-2">
        {this.props.hasOwnProperty('useMapWidgetIds') &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={this.activeViewChangeHandler}
            />
        )}

        {/* Only show the data once the MapView is ready */}
       <p>{this.state.mapViewReady ? allSections : defaultMessages.latLonWillBeHere}<br/>
 DMS: {lat_dms}, {lon_dms}</p>
<p>     <a target="_blank" href={str1}>
                Google Street View where you just clicked <font size='2'> (opens in a new tab)</font></a></p>

<p><b> All state plane coordinates are NAD83 (NSRS2007)</b></p>
<table style={{width:"100%"}}>
    <tr >
        <td>State Plane North X:</td>
        <td><b>{stpl_n_x}</b></td>
    </tr>
    <tr>
        <td> State Plane North Y:</td>
        <td> <b>{stpl_n_y}</b> </td>

    </tr>
    <tr style={{height:"20px"}}></tr>
    <tr>
        <td>State Plane East X:</td>
        <td> <b>{stpl_e_x}</b> </td>
    </tr>
    <tr>
        <td>State Plane East Y:</td>
        <td> <b>{stpl_e_y}</b> </td>
    </tr>
    <tr style={{height:"20px"}}></tr>
    <tr>
        <td>State Plane West X:</td>
        <td><b> {stpl_w_x}</b> </td>
    </tr>
    <tr>
        <td><b>State Plane West Y:</td>
        <td><b> {stpl_w_y}</b> </td>
    </tr>
</table>
      </div>
    )
  }
}
