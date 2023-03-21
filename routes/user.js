import {Router} from 'express';
import {deleteUsers, getUsers, postUsers, putUsers} from '../controllers/users.js';
import {check} from 'express-validator';
const router = Router();



let validations = [
    check('email', 'Email is not valid.').isEmail(),
]

router.get('/', getUsers)

router.put('/:id', putUsers)

router.post('/', validations ,postUsers)

router.delete('/', deleteUsers)



export default router;