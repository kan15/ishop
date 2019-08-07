Vue.component('good-form', {
    template: `
<div>
    <label>Наименование: <input type="text" v-model="name"></label><br>
    <label>Кол-во: <input type="number" v-model="qty"></label><br>
    <label>Цена: <input type="number" v-model="price"></label><br>
</div>
    `,
    props: ['object'],
    data: function () {
        return {
            name: null,
            qty: null,
            price: null
        }
    },
    created: function () {
        this.fillForm()
    },
    watch: {
      object: function () {
          this.fillForm()
      }
    },
    methods: {
        fillForm: function () {
            this.name = this.object.name
            this.qty = this.object.qty
            this.price = this.object.price
        }
    }
})