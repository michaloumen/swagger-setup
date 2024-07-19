const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Fetch user details
 *     description: Fetch details of a user
 *     tags:
 *       - User
 *     responses:
 *       '200':
 *         description: User details fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *       '400':
 *         description: Unable to fetch user data
 */
router.get('/user', async (req, res) => {
  const demoUser = {
    id: 1,
    name: 'John Doe'
  };

  res.status(200).json(demoUser);
});

module.exports = router;
