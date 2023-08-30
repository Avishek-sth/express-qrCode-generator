const router = require("express").Router();


router.use("/mail", mailRouter);
router.use("/qr", qrRouter);





module.exports = router;