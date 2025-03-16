import * as Yup from 'yup';

export const userSignUpSchema = Yup.object({
    name: Yup.string().min(3,'Name must be at least 3 characters').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    
})

export const userSignInSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

export const categorySchema = Yup.object({
  categoryId:Yup.string(),
  name: Yup.string().min(3,'Name must be at least 3 characters').required('Name is required'),
  description: Yup.string().min(10,'Description must be at least 10 characters')
  
})
export const tagSchema = Yup.object({
  name: Yup.string().min(3,'Name must be at least 3 characters').required('Name is required'),
  description: Yup.string().min(10,'Description must be at least 10 characters')
})

export const postSchema = Yup.object({
  title:Yup.string().min(3, "Name must be at least 3 characters").required("Title is required"),
  content:Yup.string().required("Content is required"),
  category:Yup.string().required("Category is required"),
  tag:Yup.string().required("Tag is required"),
  status: Yup.string().required("Status is required")
})


export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

  export type SessionPayload={
    userId: string
    expiresAt: Date
}