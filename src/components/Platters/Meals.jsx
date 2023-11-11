import React, { useState } from 'react'
import Meal from './Meal';

import style from './meals.module.css'


const Meals = (props) => {

    const {meals} = props;
  return (
    <div className={style.shopSection}>
        {meals?.map((meal) => {
          // 
            return <Meal key={meal.id} meal={meal} handleClick={props.handleClick}/>
        })}
    </div>
  )
}


export default Meals