const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Fetch user profile details
 *     description: Fetch profile details of a user
 *     tags:
 *       - Profile
 *     responses:
 *       '200':
 *         description: User profile fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: johndoe@gmail.com
 *       '400':
 *         description: Unable to fetch user profile data
 */
router.get('/profile', async (req, res) => {
  const demoUser = {
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  };

  res.status(200).json(demoUser);
});

/**
 * @swagger
 * /api/profile/{id}:
 *   delete:
 *     summary: Delete user profile details
 *     description: Delete profile details of a user
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *       '200':
 *         description: User profile deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: johndoe@gmail.com
 *       '400':
 *         description: Unable to delete user profile data
 */
router.get('/profile/:id', async (req, res) => {
  res.status(200).json('Profile deleted successfully');
});

module.exports = router;
