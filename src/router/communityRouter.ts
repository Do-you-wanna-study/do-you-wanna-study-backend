var express : any = require('express');
import communityController from '../controller/communityController'
var router : any = express.Router({mergeParams : true});


router.get('/', communityController.mainPage)
router.get('/:communityID/all', communityController.mainPage)
router.get('/:communityID/proc', communityController.procStudy)
router.get('/:communityID/done', communityController.doneStudy)


export default router;