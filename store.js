Vue.use(Vuex)

const store_for_our_app = new Vuex.Store ({
    state: {
      goods: [
          {id: 1, name: 'Брюки мужские', qty: 35, price: 2650},
          {id: 2, name: 'Платье женское', qty: 13, price: 7500},
          {id: 3, name: 'Кеды', qty: 44, price: 1650}
      ],
      categories: [
          {id: 1, name: 'Одежда мужская', status: 'active'},
          {id: 2, name: 'Одежда женская', status: 'active'},
          {id: 3, name: 'Обувь', status: 'active'}
      ]
    },
    mutations: {
      updateGood: function (state, good) {
        var index = state.goods.findIndex(el => el.id === good.id)
        state.goods.splice(index, 1, good)
      },
      updateCategory:  function (state, category) {
        var index = state.categories.findIndex( el => el.id === category.id)
        state.categories.splice(index, 1, category)
      }
    }
})
