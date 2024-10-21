import React from 'react'
import classes from "./page.module.css";
import Image from 'next/image';
import { getMealDetails } from '@/lib/meals';
import { notFound } from 'next/navigation';

// Every page js file receives a special params prop from next js.

const page = ({params}) => {

  const meal = getMealDetails(params.mealsSlug);

  if(!meal){
    notFound(); //when the route is not navigbale, this function will go to the nearest error page or not-found page if defined.
  }

  const instructions = meal.instructions.replace(/\n/g, '<br/>')

  return (
    <>
       <header className={classes.header}>
          <div className={classes.image}>
            <Image src={meal.image} fill/>
          </div>
          <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
              by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className={classes.summary}>{meal.summary}</p>
          </div>
       </header>
       <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: instructions
        }}></p>
       </main>
    </>
  )
}

export default page