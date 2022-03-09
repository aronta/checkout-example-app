<template>
    <div class="w-full">
        <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
            <h2
                class="text-sm title-font text-gray-500 tracking-widest"
                v-text="'Transaction ID: ' + order.id"
            ></h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Thank you for your purchase</h1>
            <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Item</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Quantity</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Price</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in order.products" :key="item.id">
                    <td class="p-4" v-text="item.name"></td>
                    <td class="p-4" v-text="item.pivot.quantity"></td>
                    <td class="p-4" v-if="productPriceWithQuantityPromo(item) !== (item.price * item.pivot.quantity)">
                        {{ (productPriceWithQuantityPromo(item) / 100).toLocaleString('en-US', { style: 'currency', currency: 'EUR' }) }}
                        <span class="line-through">{{ ((item.price * item.pivot.quantity) / 100).toLocaleString('en-US', { style: 'currency', currency: 'EUR' }) }}</span>
                    </td>
                    <td v-else class="p-4" v-text="(productPriceWithQuantityPromo(item) / 100).toLocaleString('en-US', { style: 'currency', currency: 'EUR' })"></td>
                </tr>
                <tr>
                    <td class="p-4 font-bold">Total Amount</td>
                    <td class="p-4 font-bold" v-text="orderQuantity"></td>
                    <td class="p-4 font-bold" v-text="orderTotal"></td>
                </tr>
                <hr v-if="usedPromoCodes.length > 0">
                <tr v-if="usedPromoCodes.length > 0">
                    <td class="p-4 font-bold">Total Amount with Promo Codes</td>
                    <td class="p-4 font-bold"></td>
                    <td class="p-4 font-bold" v-text="orderTotalWithPromos"></td>
                    <td class="w-10 text-right"></td>
                </tr>
                </tbody>
            </table>
            <div class="flex items-center justify-start" v-if="usedPromoCodes.length > 0">
                <div class="p-1 w-1/6 font-bold">
                    Used Promo Codes:
                </div>
                <div class="p-1 w-1/6">
                    <div v-for="item in usedPromoCodes" :key="item.id">
                        <div class="bg-indigo-100 inline-flex items-center text-sm rounded mt-2 mr-1">
                            <span class="ml-2 mr-1 leading-relaxed truncate max-w-xs" v-text="item.name"></span>
                            <button 
                                class="w-6 h-8 inline-block align-middle text-gray-500 hover:text-gray-600 focus:outline-none"
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-5">
                <button 
                    class="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
                    @click="$router.push({ name: 'products.index' })"
                    >Shop more
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            productPriceWithQuantityPromo(item) {
                let amount = item.price * item.pivot.quantity;

                if (item.quantity_promos.length > 0) {
                    let quantityPromoIndex = item.quantity_promos.findIndex(el => el.quantity === item.pivot.quantity)
                    if (quantityPromoIndex !== -1) {
                        amount = item.quantity_promos[quantityPromoIndex].price;
                        return amount
                    }
                }
                return amount
            },
        },
        computed: {
            order() {
                return this.$store.state.order;
            },
            orderQuantity() {
                return this.$store.state.order.products.reduce((acc, item) => acc + item.pivot.quantity, 0);
            },
            orderTotal() {
                let amount = this.$store.state.order.products.reduce((acc, item) => acc + this.productPriceWithQuantityPromo(item), 0);
                amount = (amount / 100);
                return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            },
            orderTotalWithPromos() {
                let amount = this.$store.state.order.total;
                amount = (amount / 100);
                return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            },
            usedPromoCodes(){
                return this.$store.state.order.promo_codes;
            }
        }
    }
</script>