import React from 'react'
import './Services.css'
import { useLanguage } from '../../../context/LanguageContext'

// IMAGES
import MetalStructures from "../../../assets/Images/service_metal_structures.png";
import DesignPlanning from "../../../assets/Images/service_design_planning.png";
import BuildingConstruction from "../../../assets/Images/service_building_construction.png";
import RoadConstruction from "../../../assets/Images/service_road_construction.png";
import Repair from "../../../assets/Images/service_repair.png";
import EngineeringNetworks from "../../../assets/Images/service_engineering_networks.png";
import Imageser from '../../../assets/Components/ImageService/ImageService';

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className='services' id='services'>
      <div className="container">
        <h2 className='services-title'>{t.services.title}</h2>
        <div className="servicecard-wrapper">
          <Imageser imageUrl={MetalStructures} text={t.services.item1} />
          <Imageser imageUrl={DesignPlanning} text={t.services.item2} />
          <Imageser imageUrl={BuildingConstruction} text={t.services.item3} />
          <Imageser imageUrl={RoadConstruction} text={t.services.item4} />
          <Imageser imageUrl={Repair} text={t.services.item5} />
          <Imageser imageUrl={EngineeringNetworks} text={t.services.item6} />
        </div>
      </div>
    </section>
  )
}

export default Services
