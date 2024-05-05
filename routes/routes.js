import baseCtrl from '../controllers/baseCtrl';
import deletionCtrl from '../controllers/deletionCtrl';
import insertionCtrl from '../controllers/insertionCtrl';
import searchCtrl from '../controllers/searchCtrl';
import updateCtrl from '../controllers/updateCtrl'; 
import getAllCtrl from '../controllers/getAllCtrl';
import filterCategoryCtrl from '../controllers/filterCategoryCtrl';

const routes = (router) => {
  router.route('/basePage')
    .get(baseCtrl.basePage);

  router.route('/')
    .post(insertionCtrl.insertValue);

  router.route('/search/id/:id')
    .get(searchCtrl.searchById);

  router.route('/items/:id')
    .delete(deletionCtrl.deleteValue)
    .put(updateCtrl.updateById); 
  
    router.route('/items') 
    .get(getAllCtrl.getAllItems); 

    // router.route('/filter/:category')
    // .get(filterCategoryCtrl.filterByCategory);
}
  

export default routes;
