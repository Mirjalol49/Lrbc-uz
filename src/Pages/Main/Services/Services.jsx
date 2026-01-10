import React from 'react'
import './Services.css'


// IMAGES
import MetalStructures from "../../../assets/Images/service_metal_structures.png";
import DesignPlanning from "../../../assets/Images/service_design_planning.png";
import BuildingConstruction from "../../../assets/Images/service_building_construction.png";
import RoadConstruction from "../../../assets/Images/service_road_construction.png";
import Repair from "../../../assets/Images/service_repair.png";
import EngineeringNetworks from "../../../assets/Images/service_engineering_networks.png";
import ServiceC from '../../../assets/Components/ServiceC/ServiceC';
import Imageser from '../../../assets/Components/ImageService/ImageService';
const Services = () => {
  return (
    <section className='services' id='services'>
      <div className="container">
        <h2 className='services-title'>Xizmatlar</h2>
        <div className="servicecard-wrapper">


          <Imageser imageUrl={MetalStructures} text="1. Metal konstruskiyalarni ishlab chiqarish va o'rnatish" />
          <Imageser imageUrl={DesignPlanning} text="2. Loyihalash va qurilish xujjatlarini tayyorlash" />
          <Imageser imageUrl={BuildingConstruction} text="3. Bino va inshoatlarni qurish" />
          <Imageser imageUrl={RoadConstruction} text="4. Yo'l qurulishi va obodonlashtirish" />
          <Imageser imageUrl={Repair} text="5. Ta'mirlash" />
          <Imageser imageUrl={EngineeringNetworks} text="6. Injiner va komunikatsiya tarmoqlarini qurish" />

        </div>

      </div>
    </section>
  )
}

export default Services
