import asyncHandler from 'express-async-handler'

// @desc     Auth user & get token
// @route    POST /api/users/login
// @access   Public
const authUser = asyncHandler(async (req, res) => {
  const { name } = req.body

  res.json({
    name: name,
  })
})

export { authUser }
