const express = require('express')
const router = express.Router()
const { getMovies , getAllMovieId, postMovies, putMovies, deleteMovies } = require('../controllers/movies.Controllers')
const { protect } = require('../middleware/auth.Middleware')

router.get('/', protect, getMovies)
router.get('/:id', protect, getAllMovieId)
router.post('/', protect, postMovies)
router.put('/:id', protect, putMovies)
router.delete('/:id', protect, deleteMovies)


module.exports = router
