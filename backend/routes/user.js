import express from "express";
import { postPicture, register } from "../controllers/user";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + "png");
  },
});

const upload = multer({ storage: storage });

router.post("/register", register);
router.post("/post-picture", upload.single("file"), postPicture);

module.exports = router;
