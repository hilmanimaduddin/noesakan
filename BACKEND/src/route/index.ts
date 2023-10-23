import * as express from "express";
// import { authenticate } from "../middlewares/auth"
import ThreadsController from "../controllers/ThreadsController";
import AuthController from "../controllers/AuthController";
import { authenticate } from "../middlewares/Auth";
import StoreController from "../controllers/StoreController";
import ProductController from "../controllers/ProductController";
import { upload } from "../middlewares/UploadFile";
import RatingController from "../controllers/RatingController";
import RepliesController from "../controllers/RepliesController";

// import service from "../service/service"
// import { upload } from "../middlewares/uploadFile"

// import LikeController from "../controllers/LikeController"
// import ReplyController from "../controllers/ReplyController"
// import FollowController from "../controllers/FollowController"
// import RatingController from "../controllers/RatingController"

const router = express.Router();
// const router = express({dest: './uploads'})

router.get("/", (req, res) => {
  res.send("hello from v1");
});

router.get("/thread", ThreadsController.find);
router.get("/thread/:id", authenticate, ThreadsController.findOne);
// router.get("/detail/:id", authenticate, ThreadsController.DetailList);
router.post(
  "/thread/",
  authenticate,
  upload("image"),
  ThreadsController.create
);
router.delete("/thread/:id", ThreadsController.delete);
router.patch("/thread/:id", ThreadsController.update);

router.get("/replies", RepliesController.find);
router.post(
  "/replies/create",
  authenticate,
  upload("image"),
  RepliesController.create
);

router.post("/auth/register", AuthController.register);
// router.get("/auth", AuthController.find);
router.post("/auth/signin", AuthController.login);
router.get("/auth/check", authenticate, AuthController.check);
// router.post("/auth/edit", authenticate, AuthController.editProfile);

router.post(
  "/store/create",
  authenticate,
  upload("image"),
  StoreController.create
);
router.get("/store/get", authenticate, StoreController.findOne);
router.post(
  "/store/update",
  authenticate,
  upload("image"),
  StoreController.update
);

router.get("/product/user", authenticate, ProductController.find);
router.get("/product/:id", ProductController.findOne);
router.get("/product", ProductController.findAll);
router.post(
  "/product/create",
  authenticate,
  upload("image"),
  ProductController.create
);

router.get("/rating", RatingController.find);
router.post("/rating/create", authenticate, RatingController.create);

// router.get("/reply", authenticate, ReplyController.find);
// router.post("/reply", authenticate, ReplyController.create);

// router.get("/rating", authenticate, RatingController.find);
// router.post("/rating", authenticate, RatingController.create);

// router.post("/like",authenticate, LikeController.create)
// router.delete("/like/:threadId",authenticate, LikeController.delete)

// router.get("/follow", authenticate, FollowController.find);
// router.post("/follow",authenticate, FollowController.create)
// router.delete("/unfollow/:userId",authenticate, FollowController.delete)

export default router;
