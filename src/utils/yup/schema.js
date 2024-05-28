import * as  yup from 'yup';
import {string, number, date, phone } from 'yup';
export const categorySchema = yup.object().shape({
    name: string().min(3, 'must be at least 3 characters long').required("Required"),
    // categoryParent:string().required("Required"),
})

export const productSchema = yup.object().shape({
    Name: string().min(3, 'must be at least 3 characters long').required("Required"),
    Description:string().min(5, 'must be at least 5 characters long').required("Required"),
    Reference:string().min(5, 'must be at least 5 characters long').required("Required"),
    PrixUnitaire:number().integer("nombre sans virgule").positive().required("Required"),
    Category:string().required("Required"),
})  