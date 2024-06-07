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

*/
import { React, type AllWidgetProps, jsx } from 'jimu-core'
import { type IMConfig } from '../config'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'

import type Point from 'esri/geometry/Point'

import defaultMessages from './translations/default'

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

  render () {
    const sections = []
    sections.push(
      <span>
        {defaultMessages.latLon}, {this.state.latitude2}, {this.state.longitude2}
      </span>

    )
// get the DMS ready

//console.log('can we see lat', this.state.latitude2)
    var dd = 0
    dd = this.state.latitude2;
    var deg = dd | 0; // truncate dd to get degrees
    var frac = Math.abs(dd - deg); // get fractional part
    var min = (frac * 60) | 0; // multiply fraction by 60 and truncate
    var sec = frac * 3600 - min * 60;
    var lat_dms = deg + '° ' + min + '" ' + sec.toFixed(1) + "'"
    var dd_lat = dd
    //console.log ('lat is now ', lat_dms)

    dd = this.state.longitude2;
    var deg = dd | 0; // truncate dd to get degrees
    var frac = Math.abs(dd - deg); // get fractional part
    var min = (frac * 60) | 0; // multiply fraction by 60 and truncate
    var sec = frac * 3600 - min * 60;
    var lon_dms = deg + '° ' + min + '" ' + sec.toFixed(1) + "'"
    //console.log ('lon is now ', lon_dms)
    var dd_lon = dd

//  var latdms = ConvertDDToDMS(this.state.latitude);
//  var londms = ConvertDDToDMS(this.state.longitude);


// now build the Tide Interpolation Request link
 const str2 = new URL("https://data.labins.org/TidalInterp_APIS/tide%20interp.html")

   str2.searchParams.append('lat',Number(this.state.latitude2).toFixed(6))
   str2.searchParams.append('lon',Number(this.state.longitude2).toFixed(6))

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
      <div className="widget-get-map-coordinates jimu-widget m-2" >
        {this.props.hasOwnProperty('useMapWidgetIds') &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={this.activeViewChangeHandler}
            />
        )}

        {/* Only show the data once the MapView is ready */}
<p><font size="4" color="#000000">The Latitude / Longitude to use</font></p>
<p><font size="3.5" color="#000000"> Latitude:  {lat_dms}&nbsp;({dd_lat})</font></p>
<p> <font size="4" color="#000000">Longitude: {lon_dms}&nbsp;({dd_lon})</font> </p>
<p>     <a target="_blank" href={str2}>
                <font size='4' color="0000FF"><u>Click this link to request a Tide Interpolation value from DEP</u></font> </a></p>
      </div>
    )
  }
}
