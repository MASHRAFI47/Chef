import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Meal from '../components/Platters/Meal';
import style from './order.module.css'
import Search from '../components/Search';
import Meals from '../components/Platters/Meals';



const url = "https://chef-norman-meals.onrender.com/meals"

// props
const Order = (props) => {


  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState(allMeals);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllMeals(data);
      setFilteredMeals(data)
      setIsLoading(false);
      setError(null)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    return () => {
      fetchData(url);
    };
  }, []);

  const handleSearch = (searchValue) => {
    console.log(searchValue)
    let value = searchValue.toLowerCase();
    const newMeal = allMeals.filter((meal) => {
      const mealName = meal.title.toLowerCase();
      return mealName.startsWith(value);
    })
    setFilteredMeals(newMeal)
  }


  // const [meals, setMeals] = useState(Platters);
  return (

    <>
      <div className={style.ourMealsTopHeading}>
      <h1 className={style.ourMealsHeading}>Our Meals</h1>
      <Search onSearch={handleSearch} />
      </div>
      {isLoading && <p style={{color:"#000"}}>Loading...</p>}
      {error && <p>{error.message}</p>}
      {/*   */}
      {allMeals && <Meals meals={filteredMeals} handleClick={props.handleClick}/>}
    </>
  )
}

export default Order