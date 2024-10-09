import Link from "next/link";
import React from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meal/meals-grid";
import { getMeals } from "@/lib/meals";

// Serer components cam be converted to async/await.
const MealsPage = async () => {
  let meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself. It is fun!!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
