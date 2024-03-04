import  {Router} from "express";
import { addTodo, getTodos } from "../controllers/todoController";


const router:Router=Router()

router.get('/',getTodos);

router.post('/',addTodo);

export default router;