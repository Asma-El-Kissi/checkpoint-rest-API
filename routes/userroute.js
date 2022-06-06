const express =requitre('express');
const person=require('../models/User.js');
const router =express.Router();
// // GET : RETURN ALL USERS
router.get("/", (req, res) => {
    user.find((error,data)=>{console.log(data)});
    console.log(req.params);
})
// POST: ADD USER
router.post("/new_user", (req, res) => {
  User.create(req.body)
});

// PUT : UPDATE USER
router.put("/:userId", (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
});

// DELETE : DELETE USER
router.delete("/:userId", (req, res) => {
  User.findByIdAndDelete(req.params.userId)
});
module.exports = router;