import React from 'react'

import BannerComp from '../components/BannerComp'
import OurFavComp from '../components/OurFavComp'
import MeatPlans from '../components/MeatPlans'
import Recipes from '../components/Recipes'
import OurProcess from '../components/OurProcess/OurProcess'
import MealPlansCarousel from '../components/MealPlansCarousel'
import WhatTheySay from '../components/WhatTheySay/WhatTheySay'
import SpecialPlans from '../components/SpecialPlans/SpecialPlans'

const Home = () => {
  return (
    <div>
      <BannerComp />
      <OurFavComp />
      <MeatPlans />
      <Recipes />
      <OurProcess />
      <MealPlansCarousel /> 
      <WhatTheySay />
      <SpecialPlans />
    </div>
  )
  
}

export default Home