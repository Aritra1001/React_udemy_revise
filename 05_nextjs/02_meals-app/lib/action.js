"use server"
import { redirect } from "next/navigation"
  // We can use server action features to create such a function that will be triggered when the form is submitted
  export const shareMeal = async(formData) => {
    "use server"
    const meal = {
      creator_name: formData.get('name'),
      creator_email: formData.get('email'),
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image')
    }
     
    await saveMeal(meal);
    redirect('/meals');
  }
