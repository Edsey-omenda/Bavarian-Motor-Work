import React from 'react'
import Bavarian from './Bima'
import Interior from './Interior'
import Cosy     from  './Cosy'
import  Parts    from  './Parts'
import   Garage   from  './Garage'

export default function Home(){


    return(
        <div className="text-bg-body">
        <div className='container'>Home
        <center>
        <div className='row' >
          <h2>Welcome to Bavarian Motor Works</h2>
          <Bavarian />
          <div className="row">
          <Interior /> <br></br>
          <Cosy  />
          <Garage />
          <Parts />
          </div>
          </div>
        </center>
        </div>
        </div>
    )
}