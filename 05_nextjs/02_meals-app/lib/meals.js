// Code that will reach out to database and fetch the data
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

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

export const saveMeal = async (meal) => {
    // for saving the meal we require a slug, that we will generate from the title.
    meal.slug = slugify(meal.slug, {lower: true});
    meal.instructions = xss(meal.instructions);

    // Image should be stored in the file-system not in the database.
    // Storing files in the database is a bad idea due to performance and databases are not designed for that
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    //writing the image to the file path
    stream.write(Buffer.from(bufferedImage), (error)=>{
        if(error){
            throw new Error("Saving image failed");
        }
    })

    // Storing the overall data into database
    
}