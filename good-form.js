const GOOD_FORM = {
    template: `
        <div>
            <label>Наименование: <input type="text" v-model="name"></label><br>
            <label>Кол-во: <input type="number" v-model="qty"></label><br>
            <label>Цена: <input type="number" v-model="price"></label><br>
            <div v-on:click='submitGoodFormClicked' class='btn btn-primary'>Сохранить</div>
        </div>
    `,
    props:{id:{ }, object:{default:{} } },
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
        submitGoodFormClicked: function () {
            this.$emit('good-form-submited', {id: this.id, name: this.name, qty: this.qty, this: this.price})
        },
        fillForm: function () {
            this.name = this.object.name
            this.qty = this.object.qty
            this.price = this.object.price

        }
    }
}
    Vue.component('good-form', GOOD_FORM)