import baseCtrl from '../controllers/baseCtrl';
import insertionCtrl from '../controllers/insertionCtrl';
import searchCtrl from '../controllers/searchCtrl';
import deletionCtrl from '../controllers/deletionCtrl';
import updateCtrl from '../controllers/updateCtrl'; 
import getAllCtrl from '../controllers/getAllCtrl';
import filterCategoryCtrl from '../controllers/filterCategoryCtrl';
import filterImageCtrl from '../controllers/filterImageCtrl';

const routes = (router) => {
  router.route('/basePage')
    .get(baseCtrl.basePage);

  router.route('/')
    .post(insertionCtrl.insertValue);

  router.route('/search/id/:id')
    .get(searchCtrl.searchById);

  router.route('/items/:id')
    .delete(deletionCtrl.deleteById)
    .put(updateCtrl.updateById); 
  
    router.route('/items') 
    .get(getAllCtrl.getAllItems); 

    router.route('/filter/:category')
    .get(filterCategoryCtrl.filterByCategory);

    router.route('/filterImage')
    .get(filterImageCtrl.filterByImage)
}
  

export default routes;
