import React from 'react'
import EssentialAccessories from '../components/EssentialAccessories'
import EssentialsPowerAdapters from '../components/EssentialPowerAdapter'
import EssentialChargingCables from '../components/EssentialsChargingCables'
import EssentialsBackCovers from '../components/EssentialsBackCovers'
import EssentialsAirpodSection from '../components/EssentialsAirpodSection'
import ComponentFooter from '../components/ComponentFooter'

function Essentials() {
  return (
    <div>
      <EssentialAccessories />
      <EssentialsPowerAdapters />
      <EssentialChargingCables />
      <EssentialsBackCovers />
      <EssentialsAirpodSection />
      <ComponentFooter />
    </div>
  )
}

export default Essentials