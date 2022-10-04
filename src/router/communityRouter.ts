var express : any = require('express');
import communityContriller from '../controller/communityController'
var router : any = express.Router({mergeParams : true});


router.get('/', communityContriller.mainPage)
router.get('/:communityID/all', communityContriller.mainPage)
router.get('/:communityID/proc', communityContriller.procStudy)
router.get('/:communityID/done', communityContriller.doneStudy)


export default router;