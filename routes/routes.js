import baseCtrl from '../controllers/baseCtrl';
import deletionCtrl from '../controllers/deletionCtrl';
import insertionCtrl from '../controllers/insertionCtrl';
import searchCtrl from '../controllers/searchCtrl';
import updateCtrl from '../controllers/updateCtrl';

const routes = (router) => {
  router.route('/basePage')
    .get(baseCtrl.basePage);

  router.route('/')
    .post(insertionCtrl.insertValue);

  router.route('/search/id/:searchQuery')
    .get(searchCtrl.searchById);

  router.route('/items/:id')
    .delete(deletionCtrl.deleteValue)

    router.route('/updateItem/:id')
    .patch(updateCtrl.updateItem);  

}

export default routes;
