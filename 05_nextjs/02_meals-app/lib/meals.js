// Code that will reach out to database and fetch the data
import sql from "better-sqlite3";

const db = sql('meals.db');

export const getMeals = async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('Loading meals failed');
    return db.prepare("SELECT * FROM meals").all();
    // all() - It is used when we are fetching data and we want all the rows
    // get() - for getting single row of the data
    // run() - when we are changing data
}

export const getMealDetails = (slug) => {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}