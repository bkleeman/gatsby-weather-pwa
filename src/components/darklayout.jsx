import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
  weatherData{
    latitude
    longitude
    timezone
    currently {
      time
      summary
      icon
      nearestStormDistance
      precipIntensity
      precipProbability
      temperature
      apparentTemperature
      dewPoint
      humidity
      pressure
      windSpeed
      windGust
      windBearing
      cloudCover
      uvIndex
      visibility
      ozone
    }
  }
  
}  `
}
    render={data => (
  <div>
    <Link to="/" style={{ float: `right`,}}>
      Home
    </Link>
    {children}

    <div class="grid-container">
      <div class="grid-item">
        <h3>Summary: {data.weatherData.currently.summary}</h3>
      </div>
      <div class="grid-item">
        <h3>Cloud Cover: {data.weatherData.currently.cloudCover}</h3>
      </div>
      <div class="grid-item">
        <h3>Temperature: {data.weatherData.currently.temperature}<span>&#176; F</span></h3>
      </div>  
      <div class="grid-item">
        <h3>Precipitation: {data.weatherData.currently.precipProbability}%</h3>
      </div>
    </div>

{/*    <Link to="/">Home </Link> */}
    {/* <h3><ul>
      <li><h3>Currently Summary: {data.weatherData.currently.summary}</h3></li> 
      <li><h3>cloudCover: {data.weatherData.currently.cloudCover}</h3></li> 
      <li><h3>latitude: {data.weatherData.latitude}</h3></li>
      <li><h3>longitude: {data.weatherData.longitude}</h3></li>
    </ul></h3>   */}
  </div>
    )}
  />
    )