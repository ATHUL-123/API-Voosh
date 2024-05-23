const express = require('express');
const { registerUser, authUser, getUserProfile, updateUserProfile, getPublicProfiles, getAllProfiles } = require('../controllers/userController');
const { protect, admin } = require('../middlewares/authMiddleware');
const { userRegistrationValidator, userLoginValidator, profileUpdateValidator, validate } = require('../utils/validators');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/register', userRegistrationValidator, validate, registerUser);
router.post('/login', userLoginValidator, validate, authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, upload.single('photo'), profileUpdateValidator, validate, updateUserProfile);
router.get('/profiles', protect, getPublicProfiles);
router.get('/profiles/all', protect, admin, getAllProfiles);

module.exports = router;
