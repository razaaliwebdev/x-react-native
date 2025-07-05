import express from 'express';
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from '../controllers/userController.js';
import { protectRoute } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public Route
router.post("/profile/:username", getUserProfile);

// Update the profile => auth
router.put("/profile", protectRoute, updateProfile);
router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrentUser);
router.post("/follow:targetUserId", protectRoute, followUser);

export default router;