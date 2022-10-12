import express from 'express'
import myPageController from '../controller/myPageController';

const router : express.Router = express.Router({mergeParams : true});

router.get('/mypage', myPageController.getMyPage)

export default router;