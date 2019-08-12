Vue.use(Vuex)

    const store_for_our_app = new Vuex.Store({
        state: { // все переменные этого store
            counter: 0,
            goods: [
                {id: 1, name: 'Брюки мужские', qty: 35, price: 2650},
                {id: 2, name: 'Платье женское', qty: 13, price: 7500},
                {id: 3, name: 'Кеды', qty: 44, price: 1650}
            ],
        },
        mutations: {
            increment: function(state) {
                state.counter++;
            },
            setCounterValue: function(state, val) {
                state.counter = val
            }
        },
    })