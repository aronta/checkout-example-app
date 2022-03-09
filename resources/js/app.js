require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faBasketShopping, faCreditCard, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDinersClub } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faBasketShopping, faCreditCard, faCcVisa, faCcMastercard, faCcAmex, faCcDinersClub, faPlus, faMinus);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueCardFormat from 'vue-credit-card-validation';
Vue.use(VueCardFormat);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes.js')
})

const store = new Vuex.Store({
    state: {
        products: [],
        promo_codes: [],
        cart: [],
        order: {}
    },

    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        updatePromoCodes(state, promo_codes) {
            state.promo_codes = promo_codes;
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug)
            if (productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity++;
                //HACK for keeping reactivity cart
                state.cart = [
                    ...state.cart
                ]
                return;
            }
            product.quantity = 1;
            state.cart.push(product);
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        removeFromCartTillZero(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug)
            if (productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity--;
                if(state.cart[productInCartIndex].quantity == 0) {
                    state.cart.splice(productInCartIndex, 1);
                    return;
                }
                state.cart = [
                    ...state.cart
                ]
                return;
            }
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart){
            state.cart = cart;
        }
    },
    actions: {
        getProducts({ commit }){
            axios.get('/api/products')
                .then((response) => {
                    commit('updateProducts', response.data);

                })
                .catch((error) => console.error(error));
        },
        getPromoCodes({ commit }){
            axios.get('/api/promo_codes')
                .then((response) => {
                    commit('updatePromoCodes', response.data);

                })
                .catch((error) => console.error(error));
        },
        clearCart({ commit }) {
            commit('updateCart', []);
        }
    },
});

const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('getProducts')
            .then(_ => {})
            .catch((error) => console.error(error));

        store.dispatch('getPromoCodes')
            .then(_ => {})
            .catch((error) => console.error(error));  
    }
});

