const router = require('express').Router();
const { signup, login } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;


taskRoutes.js

const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const ctrl = require('../controllers/taskController');

router.use(auth);

router.post('/', ctrl.createTask);
router.get('/', ctrl.getTasks);
router.put('/:id', ctrl.updateTask);
router.delete('/:id', ctrl.deleteTask);

module.exports = router;
