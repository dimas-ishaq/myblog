"use server"
import { FormState, categorySchema } from "../lib/definitions";
import { prisma } from "../lib/prisma";
import * as Yup from "yup";

export async function createPostCategory(state: FormState, formData: FormData) {
   const data ={
    name: formData.get("category")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
   }
   console.log(data)
   try {
    const category = await categorySchema.validate(data,{
        abortEarly:false
    })

    
    const categoryExist = await prisma.category.findUnique({
        where:{
            name: data.name
        }
    })
    if(categoryExist){
        const errors: Record<string, string> = {
            name: "Category already exists",
          };
          return {
            errors,
          };
    }
    const categoryCreate = await prisma.category.create({
        data
    })
    return {
        name: categoryCreate.name,
        description: categoryCreate.description
    }
   } catch (err) {
    console.log(err)
    if(err instanceof Yup.ValidationError){
        const errors: Record<string, string> = {};
        err.inner.forEach((error) => {
            if (!error.path) return;
            errors[error.path] = error.message;
          });
          return {
            errors,
          };
    }
   }

   
}

export async function findManyCategory(){
    const data = await prisma.category.findMany()
    return data
}
