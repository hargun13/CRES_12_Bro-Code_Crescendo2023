import React from 'react'
import Dash_Navbar from './Dash_Navbar'
import Personal from './Personal_Info/Personalinfo';
import Physical from './Personal_Info/Physicalinfo';
import Medical from './Personal_Info/Medicalinfo';

const Dashboard = () => {
  return (
    <div>
        <Medical/>
        <Dash_Navbar />
    </div>
  )
}

export default Dashboard