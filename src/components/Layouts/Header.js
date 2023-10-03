import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A food full of delicious meal" />
    </div>
    </>
  )
}

export default Header