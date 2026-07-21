const express = require("express");
const router = express.Router();

const roleController = require("../controllers/roleController");

router.post("/", roleController.addRole);
router.get("/:id",roleController.getRole);

module.exports = router;