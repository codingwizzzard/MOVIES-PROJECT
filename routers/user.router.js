const { Router } = require("express")
const { indexPage, add, addPage, editData, edittbl, deleteData } = require("../controllers/user.controller")
const upload = require("../middlewares/upload")

const router = Router()

router.get('/', indexPage)
router.get('/add', add)
router.post('/add', upload, addPage)
router.get('/editData/:id',editData)
router.get('/edittbl',edittbl)
router.get('/deleteData/:id',deleteData)

module.exports = router