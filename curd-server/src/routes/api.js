const express = require('express');
const SampleController = require("../controllers/SampleController");

const router = express.Router();

//registration
router.post("/sample-create", SampleController.SampleItemsCreate);
router.get("/sample-all", SampleController.SampleItemsAll);
router.get("/sample-single/:id", SampleController.SampleItemsFindById);
router.delete("/sample-delete/:id", SampleController.DeleteItemsFindById);

module.exports = router;