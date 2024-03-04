import { Request,Response } from "express";import { Todo } from "../models/todo";
import { Itodo } from "../types/todo.types";

//let todos:Todo[]=[];
const todos:Itodo[]=[];


export const getTodos=async (req:Request,res:Response):Promise<void> =>{
    try {
        //const todos:Itodo[]=await Todo.find()
        res.status(200).json({todos})
    } catch (error) {
        throw error
    }
}

// export const createTodo=(req:Request,res:Response):void=>{
//     const {title,description}=req.body;

//     const newTodo: Todo{
//         id: todos.length +1,
//         title,
//         description,
//         completed:false,
//     }
//     todos.push(newTodo);
//     res.status(201).json(newTodo);
// };

export const addTodo=async (req:Request,res:Response): Promise<void> =>{
       try {
        const {name,description,status}=req.body;
        const newTodo: Itodo={
            name,
            description,
            status
        }
        todos.push(newTodo);
        res.status(201).json(newTodo);
       } catch (error) {
         res.status(500).json({message: error});
       }
}