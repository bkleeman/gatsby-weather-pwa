import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
    openWeather{
      coord{
        lon
        lat
      
      }
      weather {
        id
        main
        description
        icon
      }
      dt
      wind {
        speed
        deg
      }
      name
    }
  }`
}
    render={data => (
  <div>
        <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
        {/* <Link to="/">Home    </Link>  */}

        <div class="grid-container">
      <div class="grid-item">
        <h3>Wind Speed: {data.openWeather.wind.speed} mph</h3>
      </div>
      <div class="grid-item">
        <h3>Latitude: {data.openWeather.coord.lat}</h3>
      </div>
      <div class="grid-item">
        <h3>Longitude: {data.openWeather.coord.lon}</h3>
      </div>  
    </div>
  </div>
    )}
  />
    )