import Vuex from 'vuex'
import products from './modules/products';
import basket from './modules/basket';


export default new Vuex.Store({
    state:{},
    getters:{},
    actions:{},
    mutations:{},
    modules:{
        products,
        basket,
    }

})