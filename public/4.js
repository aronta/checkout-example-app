(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        city: ''
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
    };
  },
  validations: {
    customer: {
      first_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      last_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      email: {
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"],
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      address: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      city: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  computed: {
    customerDetailsValidated: function customerDetailsValidated() {
      return !(!this.$v.customer.first_name.$invalid && !this.$v.customer.last_name.$invalid && !this.$v.customer.email.$invalid && !this.$v.customer.address.$invalid && !this.$v.customer.city.$invalid);
    },
    cardBrandClass: function cardBrandClass() {
      return this.getBrandClass(this.cardBrand);
    },
    cart: function cart() {
      return this.$store.state.cart;
    },
    cartQuantity: function cartQuantity() {
      return this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var _this = this;

      var amount = this.$store.state.cart.reduce(function (acc, item) {
        return acc + _this.productPriceWithQuantityPromo(item);
      }, 0);
      amount = amount / 100;
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR'
      });
    },
    cartTotalWithPromos: function cartTotalWithPromos() {
      var _this2 = this;

      var amount = this.$store.state.cart.reduce(function (acc, item) {
        return acc + _this2.productPriceWithQuantityPromo(item);
      }, 0);
      amount = amount / 100;

      if (this.usedPromoCodes.length > 0) {
        var _iterator = _createForOfIteratorHelper(this.usedPromoCodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var el = _step.value;

            if (el.type === 'percentage') {
              amount = amount * ((100 - el.value) / 100);
            } else {
              amount -= el.value;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return amount;
    },
    promoCodes: function promoCodes() {
      return this.$store.state.promo_codes;
    }
  },
  methods: {
    productTotal: function productTotal(item) {
      var amount = item.price * item.quantity;

      if (item.quantity_promos.length > 0) {
        var quantityPromoIndex = item.quantity_promos.findIndex(function (el) {
          return el.quantity === item.quantity;
        }); //IRL here should be another check if this promo hasn't expired

        if (quantityPromoIndex !== -1) {
          amount = item.quantity_promos[quantityPromoIndex].price / 100;
          return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'EUR'
          });
        }
      }

      amount = amount / 100;
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR'
      });
    },
    productPriceWithQuantityPromo: function productPriceWithQuantityPromo(item) {
      var amount = item.price * item.quantity;

      if (item.quantity_promos.length > 0) {
        var quantityPromoIndex = item.quantity_promos.findIndex(function (el) {
          return el.quantity === item.quantity;
        });

        if (quantityPromoIndex !== -1) {
          amount = item.quantity_promos[quantityPromoIndex].price;
          return amount;
        }
      }

      return amount;
    },
    addPromoCode: function addPromoCode() {
      var _this3 = this;

      var usedPromoCodesIndex = this.usedPromoCodes.findIndex(function (item) {
        return item.name === _this3.promoCodeInput;
      });

      if (usedPromoCodesIndex !== -1) {
        //Duplicate promo code
        //TODO: display error
        this.promoCodeInput = '';
        return;
      }

      var usedPromoCodesLength = this.usedPromoCodes.length;

      var _iterator2 = _createForOfIteratorHelper(this.promoCodes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var el = _step2.value;

          if (el.name === this.promoCodeInput) {
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
              'combination': el.combination
            });
            this.promoCodeInput = '';
            return;
          } else {// Comes here erry time not in array
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    removeUsedPromoCode: function removeUsedPromoCode(id) {
      this.usedPromoCodes = this.usedPromoCodes.filter(function (el) {
        return el.id !== id;
      });
    },
    continueToPaymentDetails: function continueToPaymentDetails() {
      this.readyForPayment = !this.readyForPayment;
      this.$nextTick(function () {
        this.$refs.cardNumInput.focus();
      });
    },
    getBrandClass: function getBrandClass(brand) {
      var icon = '';
      brand = brand || 'unknown';
      var cardBrandToClass = {
        'visa': 'fab fa-cc-visa',
        'mastercard': 'fab fa-cc-mastercard',
        'amex': 'fab fa-cc-amex',
        'diners': 'fab fa-cc-diners-club',
        'unknown': 'fa fa-credit-card'
      };

      if (cardBrandToClass[brand]) {
        icon = cardBrandToClass[brand];
      }

      ;
      return icon;
    },
    processPayment: function processPayment() {
      var _this4 = this;

      this.cardErrors = {}; // validate card number

      if (!this.$cardFormat.validateCardNumber(this.cardNumber)) {
        this.cardErrors.cardNumber = "Invalid Credit Card Number.";
        return;
      }

      ; // validate card expiry

      if (!this.$cardFormat.validateCardExpiry(this.cardExpiry)) {
        this.cardErrors.cardExpiry = "Invalid Expiration Date.";
        return;
      }

      ; // validate card CVC

      if (!this.$cardFormat.validateCardCVC(this.cardCvc)) {
        this.cardErrors.cardCvc = "Invalid CVC.";
        return;
      }

      ;
      this.paymentProcessing = true;
      this.customer.amount = parseInt(this.cartTotalWithPromos * 100);
      this.customer.cart = JSON.stringify(this.$store.state.cart);
      this.customer.promos = JSON.stringify(this.usedPromoCodes); //if i would be using stripe, i would be using this data
      //but for this purpose i will not be saving this info to the database
      //this.customer.cardNumber = this.cardNumber;
      //this.customer.cardExpiry = this.cardExpiry;
      //this.customer.cardCvc = this.cardCvc;

      axios.post('/api/purchase', this.customer).then(function (response) {
        _this4.paymentProcessing = false;

        _this4.$store.commit('updateOrder', response.data);

        _this4.$store.dispatch('clearCart');

        _this4.$router.push({
          name: 'order.summary'
        });
      })["catch"](function (error) {
        console.log(error);
        _this4.paymentProcessing = false;
        _this4.errors = error.response.data.error;
      });
    }
  },
  watch: {
    // Note: since CVC can be 3 OR 4 digits we don't watch it
    cardNumber: function cardNumber(val) {
      if (this.$cardFormat.validateCardNumber(val)) {
        delete this.cardErrors.cardNumber;
      } else {
        this.cardErrors.cardNumber = "Invalid Credit Card Number.";
      }
    },
    cardExpiry: function cardExpiry(val) {
      if (this.$cardFormat.validateCardExpiry(val)) {
        delete this.cardErrors.cardExpiry;
      } else {
        this.cardErrors.cardExpiry = "Invalid Expiry Date.";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full" }, [
    _c("div", { staticClass: "lg:w-2/3 w-full mx-auto mt-8 overflow-auto" }, [
      _c(
        "table",
        { staticClass: "table-auto w-full text-left whitespace-no-wrap" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.cart, function (item, index) {
                return _c("tr", { key: item.id }, [
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(item.name) },
                  }),
                  _vm._v(" "),
                  _c("td", { staticClass: "p-4" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "text-sm text-white bg-blue-600 border-0 py-1 px-2 focus:outline-none hover:bg-blue-700 rounded",
                        on: {
                          click: function ($event) {
                            return _vm.$store.commit(
                              "removeFromCartTillZero",
                              item
                            )
                          },
                        },
                      },
                      [
                        _c("font-awesome-icon", {
                          attrs: { icon: "fa-solid fa-minus fa-xs" },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "mx-1.5" }, [
                      _vm._v(_vm._s(item.quantity)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "text-sm text-white bg-blue-600 border-0 py-1 px-2 focus:outline-none hover:bg-blue-700 rounded",
                        on: {
                          click: function ($event) {
                            return _vm.$store.commit("addToCart", item)
                          },
                        },
                      },
                      [
                        _c("font-awesome-icon", {
                          attrs: { icon: "fa-solid fa-plus fa-xs" },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.productPriceWithQuantityPromo(item) !==
                  item.price * item.quantity
                    ? _c("td", { staticClass: "p-4" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.productTotal(item)) +
                            "\n                        "
                        ),
                        _c("span", { staticClass: "line-through" }, [
                          _vm._v(
                            _vm._s(
                              (
                                (item.price * item.quantity) /
                                100
                              ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "EUR",
                              })
                            )
                          ),
                        ]),
                      ])
                    : _c("td", {
                        staticClass: "p-4",
                        domProps: {
                          textContent: _vm._s(_vm.productTotal(item)),
                        },
                      }),
                  _vm._v(" "),
                  _c("td", { staticClass: "w-10 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex ml-auto text-sm text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded",
                        on: {
                          click: function ($event) {
                            return _vm.$store.commit("removeFromCart", index)
                          },
                        },
                      },
                      [_vm._v("Remove")]
                    ),
                  ]),
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "p-4 font-bold" }, [
                  _vm._v("Total Amount"),
                ]),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.cartQuantity) },
                }),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.cartTotal) },
                }),
                _vm._v(" "),
                _c("td", { staticClass: "w-10 text-right" }),
              ]),
              _vm._v(" "),
              _vm.usedPromoCodes.length > 0 ? _c("hr") : _vm._e(),
              _vm._v(" "),
              _vm.usedPromoCodes.length > 0
                ? _c("tr", [
                    _c("td", { staticClass: "p-4 font-bold" }, [
                      _vm._v("Total Amount with Promo Codes"),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "p-4 font-bold" }),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "p-4 font-bold",
                      domProps: {
                        textContent: _vm._s(
                          _vm.cartTotalWithPromos.toLocaleString("en-US", {
                            style: "currency",
                            currency: "EUR",
                          })
                        ),
                      },
                    }),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-10 text-right" }),
                  ])
                : _vm._e(),
            ],
            2
          ),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "lg:w-2/3 w-full mx-auto mt-8" }, [
      _c("div", { staticClass: "flex items-end justify-end" }, [
        _c("div", { staticClass: "p-1 w-1/6" }, [
          _c("div", { staticClass: "relative" }, [
            _c(
              "label",
              {
                staticClass: "leading-7 text-sm text-gray-600",
                attrs: { for: "promo_code" },
              },
              [_vm._v("Enter Promo Code:")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.promoCodeInput,
                  expression: "promoCodeInput",
                },
              ],
              staticClass:
                "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
              class: {
                "focus:border-indigo-500": !_vm.cardErrors.cardExpiry,
                "focus:border-red-500 border-red-500":
                  _vm.cardErrors.cardExpiry,
              },
              attrs: {
                id: "promo_code",
                name: "promo_code",
                disabled: _vm.paymentProcessing,
                maxlength: "10",
              },
              domProps: { value: _vm.promoCodeInput },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.promoCodeInput = $event.target.value
                },
              },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "p-1 w-1/6" }, [
          _c(
            "button",
            {
              staticClass:
                "align-bottom text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded",
              class: {
                "opacity-25 cursor-not-allowed":
                  _vm.readyForPayment || _vm.cart.length < 1,
              },
              attrs: { disabled: _vm.readyForPayment || _vm.cart.length < 1 },
              on: { click: _vm.addPromoCode },
            },
            [_vm._v("Add\n                ")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.usedPromoCodes.length > 0
        ? _c("div", { staticClass: "flex items-center justify-end" }, [
            _c("div", { staticClass: "p-1 w-1/6 text-green-600 font-bold" }, [
              _vm._v("\n                Successfully added:\n            "),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-1 w-1/6" },
              _vm._l(_vm.usedPromoCodes, function (item) {
                return _c("div", { key: item.id }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-indigo-100 inline-flex items-center text-sm rounded mt-2 mr-1",
                    },
                    [
                      _c("span", {
                        staticClass:
                          "ml-2 mr-1 leading-relaxed truncate max-w-xs",
                        domProps: { textContent: _vm._s(item.name) },
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "w-6 h-8 inline-block align-middle text-gray-500 hover:text-gray-600 focus:outline-none",
                          on: {
                            click: function ($event) {
                              return _vm.removeUsedPromoCode(item.id)
                            },
                          },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "w-6 h-6 fill-current mx-auto",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "fill-rule": "evenodd",
                                  d: "M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ])
              }),
              0
            ),
          ])
        : _vm._e(),
    ]),
    _vm._v(" "),
    _vm.cart.length > 0
      ? _c("div", { staticClass: "lg:w-2/3 w-full mx-auto mt-8" }, [
          _vm.errors
            ? _c(
                "div",
                {
                  staticClass:
                    "bg-red-500 text-white py-2 px-4 pr-0 rounded font-bold mb-4 shadow-lg",
                },
                _vm._l(_vm.errors, function (v, k) {
                  return _c(
                    "div",
                    { key: k },
                    _vm._l(v, function (error) {
                      return _c("p", { key: error, staticClass: "text-sm" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(error) +
                            "\n                "
                        ),
                      ])
                    }),
                    0
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _c("span", { staticClass: "text-l" }, [_vm._v("Customer Details")]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-wrap -mx-2 mt-8" }, [
            _c("div", { staticClass: "p-2 w-1/3" }, [
              _c("div", { staticClass: "relative" }, [
                _c(
                  "label",
                  {
                    staticClass: "leading-7 text-sm text-gray-600",
                    attrs: { for: "first_name" },
                  },
                  [_vm._v("First Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.customer.first_name.$model,
                      expression: "$v.customer.first_name.$model",
                      modifiers: { trim: true },
                    },
                  ],
                  staticClass:
                    "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                  class: {
                    "focus:border-indigo-500":
                      !_vm.$v.customer.first_name.$error,
                    "focus:border-red-500 border-red-500":
                      _vm.$v.customer.first_name.$error,
                  },
                  attrs: {
                    type: "text",
                    id: "first_name",
                    name: "first_name",
                    disabled: _vm.readyForPayment,
                  },
                  domProps: { value: _vm.$v.customer.first_name.$model },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.customer.first_name,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              !_vm.$v.customer.first_name.required &&
              _vm.$v.customer.first_name.$error
                ? _c("div", { staticClass: "text-red-500" }, [
                    _c("small", [_vm._v("First Name field is required.")]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 w-1/3" }, [
              _c("div", { staticClass: "relative" }, [
                _c(
                  "label",
                  {
                    staticClass: "leading-7 text-sm text-gray-600",
                    attrs: { for: "last_name" },
                  },
                  [_vm._v("Last Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.customer.last_name.$model,
                      expression: "$v.customer.last_name.$model",
                      modifiers: { trim: true },
                    },
                  ],
                  staticClass:
                    "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                  class: {
                    "focus:border-indigo-500":
                      !_vm.$v.customer.last_name.$error,
                    "focus:border-red-500 border-red-500":
                      _vm.$v.customer.last_name.$error,
                  },
                  attrs: {
                    type: "text",
                    id: "last_name",
                    name: "last_name",
                    disabled: _vm.readyForPayment,
                  },
                  domProps: { value: _vm.$v.customer.last_name.$model },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.customer.last_name,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              !_vm.$v.customer.last_name.required &&
              _vm.$v.customer.last_name.$error
                ? _c("div", { staticClass: "text-red-500" }, [
                    _c("small", [_vm._v("Last Name field is required.")]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 w-1/3" }, [
              _c("div", { staticClass: "relative" }, [
                _c(
                  "label",
                  {
                    staticClass: "leading-7 text-sm text-gray-600",
                    attrs: { for: "email" },
                  },
                  [_vm._v("Email Address")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.customer.email.$model,
                      expression: "$v.customer.email.$model",
                      modifiers: { trim: true },
                    },
                  ],
                  staticClass:
                    "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                  class: {
                    "focus:border-indigo-500": !_vm.$v.customer.email.$error,
                    "focus:border-red-500 border-red-500":
                      _vm.$v.customer.email.$error,
                  },
                  attrs: {
                    type: "email",
                    id: "email",
                    name: "email",
                    disabled: _vm.readyForPayment,
                  },
                  domProps: { value: _vm.$v.customer.email.$model },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.customer.email,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              !_vm.$v.customer.email.required && _vm.$v.customer.email.$error
                ? _c("div", { staticClass: "text-red-500" }, [
                    _c("small", [_vm._v("Email Address field is required.")]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.$v.customer.email.email && _vm.$v.customer.email.$error
                ? _c("div", { staticClass: "text-red-500" }, [
                    _c("small", [_vm._v("Email Address field is not valid.")]),
                  ])
                : _vm._e(),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-wrap -mx-2 mt-4" }, [
            _c("div", { staticClass: "p-2 w-1/3" }, [
              _c("div", { staticClass: "relative" }, [
                _c(
                  "label",
                  {
                    staticClass: "leading-7 text-sm text-gray-600",
                    attrs: { for: "address" },
                  },
                  [_vm._v("Street Address")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.customer.address.$model,
                      expression: "$v.customer.address.$model",
                      modifiers: { trim: true },
                    },
                  ],
                  staticClass:
                    "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                  class: {
                    "focus:border-indigo-500": !_vm.$v.customer.address.$error,
                    "focus:border-red-500 border-red-500":
                      _vm.$v.customer.address.$error,
                  },
                  attrs: {
                    type: "text",
                    id: "address",
                    name: "address",
                    disabled: _vm.readyForPayment,
                  },
                  domProps: { value: _vm.$v.customer.address.$model },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.customer.address,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              !_vm.$v.customer.address.required &&
              _vm.$v.customer.address.$error
                ? _c("div", { staticClass: "text-red-500" }, [
                    _c("small", [_vm._v("Street Address field is required.")]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 w-1/3" }, [
              _c("div", { staticClass: "relative" }, [
                _c(
                  "label",
                  {
                    staticClass: "leading-7 text-sm text-gray-600",
                    attrs: { for: "city" },
                  },
                  [_vm._v("City")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.customer.city.$model,
                      expression: "$v.customer.city.$model",
                      modifiers: { trim: true },
                    },
                  ],
                  staticClass:
                    "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                  class: {
                    "focus:border-indigo-500": !_vm.$v.customer.city.$error,
                    "focus:border-red-500 border-red-500":
                      _vm.$v.customer.city.$error,
                  },
                  attrs: {
                    type: "text",
                    id: "city",
                    name: "city",
                    disabled: _vm.readyForPayment,
                  },
                  domProps: { value: _vm.$v.customer.city.$model },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.customer.city,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              !_vm.$v.customer.city.required && _vm.$v.customer.city.$error
                ? _c("div", { staticClass: "text-red-500" }, [
                    _c("small", [_vm._v("City field is required.")]),
                  ])
                : _vm._e(),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-center mt-8" }, [
            _c(
              "button",
              {
                staticClass:
                  "text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded",
                class: {
                  "opacity-25 cursor-not-allowed":
                    _vm.readyForPayment || _vm.customerDetailsValidated,
                },
                attrs: {
                  disabled: _vm.readyForPayment || _vm.customerDetailsValidated,
                },
                on: { click: _vm.continueToPaymentDetails },
              },
              [_vm._v("Continue to Payment details\n            ")]
            ),
          ]),
          _vm._v(" "),
          _vm.readyForPayment
            ? _c("div", [
                _c("span", { staticClass: "text-l" }, [
                  _vm._v("Payment details"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-wrap -mx-2 mt-8" }, [
                  _c("div", { staticClass: "p-2 w-2/3" }, [
                    _c(
                      "div",
                      { staticClass: "relative" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "leading-7 text-sm text-gray-600",
                            attrs: { for: "card_number" },
                          },
                          [_vm._v("Card Number")]
                        ),
                        _vm._v(" "),
                        _c("font-awesome-icon", {
                          staticClass: "text-gray-400",
                          attrs: { icon: _vm.cardBrandClass },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "leading-7 text-sm text-gray-600 italic",
                          },
                          [_vm._v(" (for eg. use visa 4242 4242 4242 4242)")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.cardNumber,
                              expression: "cardNumber",
                            },
                            {
                              name: "cardformat",
                              rawName: "v-cardformat:formatCardNumber",
                              arg: "formatCardNumber",
                            },
                          ],
                          ref: "cardNumInput",
                          staticClass:
                            "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                          class: {
                            "focus:border-indigo-500":
                              !_vm.cardErrors.cardNumber,
                            "focus:border-red-500 border-red-500":
                              _vm.cardErrors.cardNumber,
                          },
                          attrs: {
                            id: "card_number",
                            name: "card_number",
                            placeholder: "#### #### #### ####",
                            disabled: _vm.paymentProcessing,
                          },
                          domProps: { value: _vm.cardNumber },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.cardNumber = $event.target.value
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.cardErrors.cardNumber
                      ? _c("div", { staticClass: "text-red-500" }, [
                          _c("small", [
                            _vm._v(_vm._s(_vm.cardErrors.cardNumber)),
                          ]),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-2 w-1/6" }, [
                    _c("div", { staticClass: "relative" }, [
                      _c(
                        "label",
                        {
                          staticClass: "leading-7 text-sm text-gray-600",
                          attrs: { for: "card_expiration" },
                        },
                        [_vm._v("Card Expiration")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cardExpiry,
                            expression: "cardExpiry",
                          },
                          {
                            name: "cardformat",
                            rawName: "v-cardformat:formatCardExpiry",
                            arg: "formatCardExpiry",
                          },
                        ],
                        ref: "cardExpInput",
                        staticClass:
                          "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                        class: {
                          "focus:border-indigo-500": !_vm.cardErrors.cardExpiry,
                          "focus:border-red-500 border-red-500":
                            _vm.cardErrors.cardExpiry,
                        },
                        attrs: {
                          id: "card_expiration",
                          name: "card_expiration",
                          disabled: _vm.paymentProcessing,
                          maxlength: "10",
                        },
                        domProps: { value: _vm.cardExpiry },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.cardExpiry = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.cardErrors.cardExpiry
                      ? _c("div", { staticClass: "text-red-500" }, [
                          _c("small", [
                            _vm._v(_vm._s(_vm.cardErrors.cardExpiry)),
                          ]),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-2 w-1/6" }, [
                    _c("div", { staticClass: "relative" }, [
                      _c(
                        "label",
                        {
                          staticClass: "leading-7 text-sm text-gray-600",
                          attrs: { for: "card_cvc" },
                        },
                        [_vm._v("Card CVC")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cardCvc,
                            expression: "cardCvc",
                          },
                          {
                            name: "cardformat",
                            rawName: "v-cardformat:formatCardCVC",
                            arg: "formatCardCVC",
                          },
                        ],
                        ref: "cardCvcInput",
                        staticClass:
                          "w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                        class: {
                          "focus:border-indigo-500": !_vm.cardErrors.cardCvc,
                          "focus:border-red-500 border-red-500":
                            _vm.cardErrors.cardCvc,
                        },
                        attrs: {
                          id: "card_cvc",
                          name: "card_cvc",
                          disabled: _vm.paymentProcessing,
                        },
                        domProps: { value: _vm.cardCvc },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.cardCvc = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.cardErrors.cardCvc
                      ? _c("div", { staticClass: "text-red-500" }, [
                          _c("small", [_vm._v(_vm._s(_vm.cardErrors.cardCvc))]),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex justify-center mt-8 pb-7" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded",
                      class: {
                        "opacity-25 cursor-not-allowed": _vm.paymentProcessing,
                      },
                      attrs: { disabled: _vm.paymentProcessing },
                      on: {
                        click: function ($event) {
                          _vm.readyForPayment = !_vm.readyForPayment
                        },
                      },
                    },
                    [_vm._v("Edit Customer Details\n                ")]
                  ),
                  _vm._v(" "),
                  _c("button", {
                    staticClass:
                      "text-white bg-blue-600 border-0 py-2 px-6 ml-3 focus:outline-none hover:bg-blue-700 rounded",
                    class: {
                      "opacity-25 cursor-not-allowed": _vm.paymentProcessing,
                    },
                    attrs: { disabled: _vm.paymentProcessing },
                    domProps: {
                      textContent: _vm._s(
                        _vm.paymentProcessing ? "Processing" : "Process Payment"
                      ),
                    },
                    on: { click: _vm.processPayment },
                  }),
                ]),
              ])
            : _vm._e(),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl",
          },
          [_vm._v("Item")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200",
          },
          [_vm._v("Quantity")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200",
          },
          [_vm._v("Price")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200",
          },
          [_vm._v("Actions")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue":
/*!************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=b4c63204& */ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*******************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=b4c63204& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);