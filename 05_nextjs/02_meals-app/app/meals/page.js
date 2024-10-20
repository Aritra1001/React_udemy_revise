import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meal/meals-grid";
import { getMeals } from "@/lib/meals";

// Server components can be converted to async/await.
const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
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
        {/* The data fetching part in our code will trigger the Suspense and it will show the fallback text until the data is fetched */}
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
