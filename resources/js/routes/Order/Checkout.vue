<template>
    <div class="w-full">
        <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Item</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Quantity</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Price</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Actions</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cart" :key="item.id">
                        <td class="p-4" v-text="item.name"></td>
                        <td class="p-4">
                            <button
                                class="text-sm text-white bg-blue-600 border-0 py-1 px-2 focus:outline-none hover:bg-blue-700 rounded"
                                @click="$store.commit('removeFromCartTillZero', item)"
                            ><font-awesome-icon icon="fa-solid fa-minus fa-xs"/>
                            </button>
                            <span class="mx-1.5">{{ item.quantity }}</span>
                            <button
                                class="text-sm text-white bg-blue-600 border-0 py-1 px-2 focus:outline-none hover:bg-blue-700 rounded"
                                @click="$store.commit('addToCart', item)"
                            ><font-awesome-icon icon="fa-solid fa-plus fa-xs"/>
                            </button>
                        </td>
                        <td class="p-4" v-if="productPriceWithQuantityPromo(item) !== (item.price * item.quantity)">
                            {{ productTotal(item) }}
                            <span class="line-through">{{ ((item.price * item.quantity) / 100).toLocaleString('en-US', { style: 'currency', currency: 'EUR' }) }}</span>
                        </td>
                        <td v-else class="p-4" v-text="productTotal(item)"></td>
                        <td class="w-10 text-right">
                            <button
                                class="flex ml-auto text-sm text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
                                @click="$store.commit('removeFromCart', index)"
                            >Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 font-bold">Total Amount</td>
                        <td class="p-4 font-bold" v-text="cartQuantity"></td>
                        <td class="p-4 font-bold" v-text="cartTotal"></td>
                        <td class="w-10 text-right"></td>
                    </tr>
                    <hr v-if="usedPromoCodes.length > 0">
                    <tr v-if="usedPromoCodes.length > 0">
                        <td class="p-4 font-bold">Total Amount with Promo Codes</td>
                        <td class="p-4 font-bold"></td>
                        <td class="p-4 font-bold" v-text="cartTotalWithPromos.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })"></td>
                        <td class="w-10 text-right"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Promo Codes section -->
        <div class="lg:w-2/3 w-full mx-auto mt-8">
            <div class="flex items-end justify-end">
                <div class="p-1 w-1/6">
                    <div class="relative">
                        <label for="promo_code" class="leading-7 text-sm text-gray-600">Enter Promo Code:</label>
                        <input
                            id="promo_code"
                            name="promo_code"
                            class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            :class="{'focus:border-indigo-500': !cardErrors.cardExpiry,  'focus:border-red-500 border-red-500': cardErrors.cardExpiry}"
                            :disabled="paymentProcessing"
                            maxlength="10"
                            v-model="promoCodeInput"
                        >
                    </div>
                    <!-- Errors for adding promos -->
                </div>
                <div class="p-1 w-1/6">
                    <button 
                        class="align-bottom text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
                        :class="{ 'opacity-25 cursor-not-allowed': readyForPayment || cart.length < 1}"
                        @click="addPromoCode"
                        :disabled="readyForPayment || cart.length < 1"
                        >Add
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-end" v-if="usedPromoCodes.length > 0">
                <div class="p-1 w-1/6 text-green-600 font-bold">
                    Successfully added:
                </div>
                <div class="p-1 w-1/6">
                    <div v-for="item in usedPromoCodes" :key="item.id">
                        <div class="bg-indigo-100 inline-flex items-center text-sm rounded mt-2 mr-1">
                            <span class="ml-2 mr-1 leading-relaxed truncate max-w-xs" v-text="item.name"></span>
                            <button 
                                class="w-6 h-8 inline-block align-middle text-gray-500 hover:text-gray-600 focus:outline-none"
                                @click="removeUsedPromoCode(item.id)"
                            >
                                <svg class="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:w-2/3 w-full mx-auto mt-8" v-if="cart.length > 0">
            <!-- Backend errors -->
            <div v-if="errors" class="bg-red-500 text-white py-2 px-4 pr-0 rounded font-bold mb-4 shadow-lg">
                <div v-for="(v, k) in errors" :key="k">
                    <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                    </p>
                </div>
            </div>
            <span class="text-l">Customer Details</span>
            <div class="flex flex-wrap -mx-2 mt-8">
                <div class="p-2 w-1/3">
                    <div class="relative">
                        <label for="first_name" class="leading-7 text-sm text-gray-600">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            :class="{'focus:border-indigo-500': !$v.customer.first_name.$error,  'focus:border-red-500 border-red-500': $v.customer.first_name.$error}"
                            v-model.trim="$v.customer.first_name.$model"
                            :disabled="readyForPayment"
                        >
                    </div>
                    <div v-if="!$v.customer.first_name.required && $v.customer.first_name.$error" class="text-red-500">
                            <small>First Name field is required.</small>
                    </div>
                </div>
                <div class="p-2 w-1/3">
                    <div class="relative">
                        <label for="last_name" class="leading-7 text-sm text-gray-600">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            :class="{'focus:border-indigo-500': !$v.customer.last_name.$error,  'focus:border-red-500 border-red-500': $v.customer.last_name.$error}"
                            v-model.trim="$v.customer.last_name.$model"
                            :disabled="readyForPayment"
                        >
                    </div>
                    <div v-if="!$v.customer.last_name.required && $v.customer.last_name.$error" class="text-red-500">
                            <small>Last Name field is required.</small>
                    </div>
                </div>
                <div class="p-2 w-1/3">
                    <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            :class="{'focus:border-indigo-500': !$v.customer.email.$error,  'focus:border-red-500 border-red-500': $v.customer.email.$error}"
                            v-model.trim="$v.customer.email.$model"
                            :disabled="readyForPayment"
                        >
                    </div>
                    <div v-if="!$v.customer.email.required && $v.customer.email.$error" class="text-red-500">
                            <small>Email Address field is required.</small>
                    </div>
                    <div v-if="!$v.customer.email.email && $v.customer.email.$error" class="text-red-500">
                            <small>Email Address field is not valid.</small>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-2 mt-4">
                <div class="p-2 w-1/3">
                    <div class="relative">
                        <label for="address" class="leading-7 text-sm text-gray-600">Street Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            :class="{'focus:border-indigo-500': !$v.customer.address.$error,  'focus:border-red-500 border-red-500': $v.customer.address.$error}"
                            v-model.trim="$v.customer.address.$model"
                            :disabled="readyForPayment"
                        >
                    </div>
                    <div v-if="!$v.customer.address.required && $v.customer.address.$error" class="text-red-500">
                            <small>Street Address field is required.</small>
                    </div>
                </div>
                <div class="p-2 w-1/3">
                    <div class="relative">
                        <label for="city" class="leading-7 text-sm text-gray-600">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            :class="{'focus:border-indigo-500': !$v.customer.city.$error,  'focus:border-red-500 border-red-500': $v.customer.city.$error}"
                            v-model.trim="$v.customer.city.$model"
                            :disabled="readyForPayment"
                        >
                    </div>
                    <div v-if="!$v.customer.city.required && $v.customer.city.$error" class="text-red-500">
                            <small>City field is required.</small>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-8">
                <button 
                    class="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
                    :class="{ 'opacity-25 cursor-not-allowed': readyForPayment || customerDetailsValidated}"
                    @click="continueToPaymentDetails"
                    :disabled="readyForPayment || customerDetailsValidated"
                    >Continue to Payment details
                </button>
            </div>

            <div v-if="readyForPayment">
                <span class="text-l">Payment details</span>
                <div class="flex flex-wrap -mx-2 mt-8">
                    <div class="p-2 w-2/3">
                        <div class="relative">
                            <label for="card_number" class="leading-7 text-sm text-gray-600">Card Number</label>
                            <font-awesome-icon :icon="cardBrandClass" class="text-gray-400"/>
                            <span class="leading-7 text-sm text-gray-600 italic"> (for eg. use visa 4242 4242 4242 4242)</span>
                            <input
                                id="card_number"
                                name="card_number"
                                ref="cardNumInput"
                                class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                :class="{'focus:border-indigo-500': !cardErrors.cardNumber,  'focus:border-red-500 border-red-500': cardErrors.cardNumber}"
                                placeholder="#### #### #### ####"
                                v-model="cardNumber"
                                :disabled="paymentProcessing"
                                v-cardformat:formatCardNumber
                            >
                        </div>
                        <div v-if="cardErrors.cardNumber" class="text-red-500">
                            <small>{{ cardErrors.cardNumber }}</small>
                        </div>
                    </div>
                    <div class="p-2 w-1/6">
                        <div class="relative">
                            <label for="card_expiration" class="leading-7 text-sm text-gray-600">Card Expiration</label>
                            <input
                                id="card_expiration"
                                name="card_expiration"
                                ref="cardExpInput"
                                class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                :class="{'focus:border-indigo-500': !cardErrors.cardExpiry,  'focus:border-red-500 border-red-500': cardErrors.cardExpiry}"
                                :disabled="paymentProcessing"
                                maxlength="10"
                                v-model="cardExpiry"
                                v-cardformat:formatCardExpiry
                            >
                        </div>
                        <div v-if="cardErrors.cardExpiry" class="text-red-500">
                            <small>{{ cardErrors.cardExpiry }}</small>
                        </div>
                    </div>
                    <div class="p-2 w-1/6">
                        <div class="relative">
                            <label for="card_cvc" class="leading-7 text-sm text-gray-600">Card CVC</label>
                            <input
                                id="card_cvc"
                                name="card_cvc"
                                ref="cardCvcInput"
                                class="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                :class="{'focus:border-indigo-500': !cardErrors.cardCvc,  'focus:border-red-500 border-red-500': cardErrors.cardCvc}"
                                :disabled="paymentProcessing"
                                v-model="cardCvc"
                                v-cardformat:formatCardCVC
                            >
                        </div>
                        <div v-if="cardErrors.cardCvc" class="text-red-500">
                            <small>{{ cardErrors.cardCvc }}</small>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-8 pb-7">
                    <button 
                        class="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
                        :class="{ 'opacity-25 cursor-not-allowed': paymentProcessing }"
                        @click="readyForPayment = !readyForPayment"
                        :disabled="paymentProcessing"
                        >Edit Customer Details
                    </button>
                    <button 
                        class="text-white bg-blue-600 border-0 py-2 px-6 ml-3 focus:outline-none hover:bg-blue-700 rounded"
                        :class="{ 'opacity-25 cursor-not-allowed': paymentProcessing }"
                        @click="processPayment"
                        :disabled="paymentProcessing"
                        v-text="paymentProcessing ? 'Processing' : 'Process Payment'"
                        >
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { email, required } from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                customer: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    address: '',
                    city: '',
                },
                errors: null,
                promoCodeInput: '',
                usedPromoCodes: [],
                combinePromoCodes: true,
                readyForPayment: false,
                paymentProcessing: false,
                cardNumber: null,
                cardExpiry: null,
                cardCvc: null,
                cardBrand: null,
                cardErrors: {}
            }
        },
        validations: {
            customer: {
                first_name:{
                    required
                },
                last_name:{
                    required
                },
                email:{
                    email,
                    required
                },
                address:{
                    required
                },
                city:{
                    required
                },
            },
        },
        computed: {
            customerDetailsValidated(){
                return !(!this.$v.customer.first_name.$invalid && !this.$v.customer.last_name.$invalid && 
                         !this.$v.customer.email.$invalid && !this.$v.customer.address.$invalid &&
                         !this.$v.customer.city.$invalid);
            },

            cardBrandClass(){
                return this.getBrandClass(this.cardBrand);
            },
            cart() {
                return this.$store.state.cart;
            },
            cartQuantity() {
                return this.$store.state.cart.reduce((acc, item) => acc + item.quantity, 0);
            },
            cartTotal() {
                let amount = this.$store.state.cart.reduce((acc, item) => acc + this.productPriceWithQuantityPromo(item), 0);
                amount = (amount / 100);
                return amount.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
            },

            cartTotalWithPromos() {
                let amount = this.$store.state.cart.reduce((acc, item) => acc + this.productPriceWithQuantityPromo(item), 0);
                amount = (amount / 100);

                if (this.usedPromoCodes.length > 0) {
                    for (const el of this.usedPromoCodes) {
                        if(el.type === 'percentage') {
                            amount = amount * ((100 - el.value) / 100);
                        } else {
                            amount -= el.value
                        }
                    }
                }
                return amount;
            },

            promoCodes(){
                return this.$store.state.promo_codes;
            }
        },
        methods: {
            productTotal(item) {
                let amount = item.price * item.quantity;

                if (item.quantity_promos.length > 0) {
                    let quantityPromoIndex = item.quantity_promos.findIndex(el => el.quantity === item.quantity)
                    //IRL here should be another check if this promo hasn't expired
                    if (quantityPromoIndex !== -1) {
                        amount = (item.quantity_promos[quantityPromoIndex].price / 100);
                        return amount.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
                    }
                }

                amount = (amount / 100);
                return amount.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
            },
            productPriceWithQuantityPromo(item) {
                let amount = item.price * item.quantity;

                if (item.quantity_promos.length > 0) {
                    let quantityPromoIndex = item.quantity_promos.findIndex(el => el.quantity === item.quantity)
                    if (quantityPromoIndex !== -1) {
                        amount = item.quantity_promos[quantityPromoIndex].price;
                        return amount
                    }
                }
                return amount
            },
            addPromoCode(){
                let usedPromoCodesIndex = this.usedPromoCodes.findIndex(item => item.name === this.promoCodeInput);
                if (usedPromoCodesIndex !== -1) {
                    //Duplicate promo code
                    //TODO: display error
                    this.promoCodeInput = '';
                    return;
                }
                let usedPromoCodesLength = this.usedPromoCodes.length;
                for (const el of this.promoCodes) {
                    if(el.name === this.promoCodeInput) {
                        if (usedPromoCodesLength > 0) {
                            if (this.usedPromoCodes[usedPromoCodesLength - 1].combination === 0) {
                                //Cant add promo code after promo which can't be combined
                                //TODO: display error
                                return;
                            }
                            if (el.combination === 0) {
                                //Cant add promo code that can't be combined on existing ones
                                //TODO: display error
                                return;
                            }
                        }

                        this.usedPromoCodes.push({
                            'id': el.id,
                            'name': el.name,
                            'type': el.type,
                            'value': el.value,
                            'combination': el.combination,
                        });
                        this.promoCodeInput = '';
                        return;
                    } else {
                        // Comes here erry time not in array
                    }
                }
            },

            removeUsedPromoCode(id){
                this.usedPromoCodes = this.usedPromoCodes.filter(el => el.id !== id);
            },
            continueToPaymentDetails(){
                this.readyForPayment = !this.readyForPayment;
                this.$nextTick(function () {
                    this.$refs.cardNumInput.focus();
                })
            },

            getBrandClass(brand) {
                let icon = '';
                brand = brand || 'unknown';
                let cardBrandToClass = {
                    'visa': 'fab fa-cc-visa',
                    'mastercard': 'fab fa-cc-mastercard',
                    'amex': 'fab fa-cc-amex',
                    'diners': 'fab fa-cc-diners-club',
                    'unknown': 'fa fa-credit-card',
                };
                if (cardBrandToClass[brand]) {
                    icon = cardBrandToClass[brand];
                };

                return icon;
            },
            processPayment () {
                this.cardErrors = {};
                // validate card number
                if(!this.$cardFormat.validateCardNumber(this.cardNumber)){
                    this.cardErrors.cardNumber = "Invalid Credit Card Number.";
                    return;
                };
                // validate card expiry
                if (!this.$cardFormat.validateCardExpiry(this.cardExpiry)) {
                    this.cardErrors.cardExpiry = "Invalid Expiration Date.";
                    return;
                };
                // validate card CVC
                if (!this.$cardFormat.validateCardCVC(this.cardCvc)) {
                    this.cardErrors.cardCvc = "Invalid CVC.";
                    return;
                };

                this.paymentProcessing = true;
                this.customer.amount = parseInt(this.cartTotalWithPromos * 100);
                this.customer.cart = JSON.stringify(this.$store.state.cart);
                this.customer.promos = JSON.stringify(this.usedPromoCodes);
                //if i would be using stripe, i would be using this data
                //but for this purpose i will not be saving this info to the database
                //this.customer.cardNumber = this.cardNumber;
                //this.customer.cardExpiry = this.cardExpiry;
                //this.customer.cardCvc = this.cardCvc;

                axios.post('/api/purchase', this.customer)
                    .then((response) => {
                        this.paymentProcessing = false;
                        this.$store.commit('updateOrder', response.data);
                        this.$store.dispatch('clearCart');
                        this.$router.push({ name: 'order.summary' });
                    })
                    .catch((error) => {
                        console.log(error);
                        this.paymentProcessing = false;
                        this.errors = error.response.data.error;
                    });
            }

        },
        watch: {
        // Note: since CVC can be 3 OR 4 digits we don't watch it
        cardNumber: function(val){
            if(this.$cardFormat.validateCardNumber(val)){
                delete this.cardErrors.cardNumber;
            } else {
                this.cardErrors.cardNumber = "Invalid Credit Card Number."
            }
        },
        cardExpiry: function (val) {
            if (this.$cardFormat.validateCardExpiry(val)) {
                delete this.cardErrors.cardExpiry;
            } else {
                this.cardErrors.cardExpiry = "Invalid Expiry Date.";
            }
        },
      },
    }
</script>