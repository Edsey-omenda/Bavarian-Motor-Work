import React from 'react'
import Bavarian from './Bima'
import Interior from './Interior'
import Cosy     from  './Cosy'
import  Parts    from  './Parts'
import   Garage   from  './Garage'

export default function Home(){


    return(
        <div className="text-bg-secondary p-3">
        <div className='container'>Home
        {/* <center> */}
        <div className='row' >
          <h2>Welcome to Bavarian Motor Works</h2>
          <Bavarian />
          {/* <div className="col m-2"> */}
          <div className='card' style={{width : 25 + 'rem'}} > 
          <Interior />
          <Cosy  />
          <Garage />
          <Parts />
          </div>
          </div>
          {/* </div> */}
        {/* </center> */}
        </div>
        </div>
    )
}