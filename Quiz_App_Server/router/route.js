import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.route('/questions')
        .get(controller.getAllQuestionSets) /** GET Request */
        .post(controller.insertQuestionSet) /** POST Request */
        .delete(controller.dropAllQuestionSets) /** DELETE Request */

router.route('/questions/:lang')
        .get(controller.getQuestionSet) /** GET Request */
        .delete(controller.dropQuestionSet) /** DELETE Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;