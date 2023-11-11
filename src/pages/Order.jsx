import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Meal from "../components/Platters/Meal";
import style from "./order.module.css";
import Search from "../components/Search";
import Meals from "../components/Platters/Meals";

const Order = (props) => {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState(allMeals);
  const url = "https://chef-norman-meals.onrender.com/meals";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setAllMeals(data);
        setFilteredMeals(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newMeal = allMeals.filter((meal) => {
      const mealName = meal.title.toLowerCase();
      return mealName.startsWith(value);
    });
    setFilteredMeals(newMeal);
  };

  // const [meals, setMeals] = useState(Platters);
  return (
    <>
      <div className={style.ourMealsTopHeading}>
        <h1 className={style.ourMealsHeading}>Our Meals</h1>
        <Search onSearch={handleSearch} />
      </div>
      {isLoading && <p style={{ color: "#000" }}>Loading...</p>}
      {error && <p>{error.message}</p>}
      {/*   */}
      {allMeals && (
        <Meals meals={filteredMeals} handleClick={props.handleClick} />
      )}
    </>
  );
};

export default Order;
