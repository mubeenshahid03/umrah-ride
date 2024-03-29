import { Card, Col, Row } from 'antd';
import React from 'react';

import { useContext } from 'react'
import carContext from '../context/cars/carContext'
import Pcard from './Pcard';

function Packages() {
  const {packages,setpackages} =useContext(carContext);
  
  return (
    <>

   {/* top   buttons */}

   <div className='div-btn '>
      <Row className='div-btn-row'>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">All</button></Col>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">Impala</button></Col>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">Coaster</button></Col>
        <Col span={3} ><button id='package-btns'  type="button" class="btn btn-outline-light ">Yukon</button></Col>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">High Roof</button></Col>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">Enova</button></Col>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">Bus</button></Col>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">Camry</button></Col>
        <Col span={3} ><button  id='package-btns' type="button" class="btn btn-outline-light ">H1</button></Col>
      </Row>
    </div>

    <div className='packages-card-container'>
    <Row className='vehicles-card-row' >  
 {
        packages.map((car,index)=>{
         return <Col xs={24} sm={12} md={12} lg={10} xl={10}  style={{marginTop:"40px"}} >  <Pcard car={car} key={index}/> </Col>

        })
      }
</Row>




    </div>
    </>
  )
}

export default Packages