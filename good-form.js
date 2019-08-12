const GOOD_FORM = {
    template: `
<form>
    <div class="form-group w-50">
        <label>Наименование: </label>
        <input type="text" v-model="name" class="form-control">
    </div>
    <div class="form-group w-50">
        <label>Кол-во: </label>
        <input type="number" v-model="qty" class="form-control">
    </div>
    <div class="form-group w-50">
        <label>Цена: </label>
        <input type="number" v-model="price" class="form-control">
    </div>
    <div v-on:click="submitFormClicked" class="btn btn-primary mt-3 font-weight-bold">Сохранить</div>
</form>
    `,
    props: ['id'],
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
        id: function () {
            this.fillForm()
        }
    },
    methods: {
        fillForm: function () {
            var good = this.$store.state.goods.find(good => good.id === this.id)
            console.log('fillForm', good, this.id, )
            if(good){
                this.name = good.name
                this.qty = good.qty
                this.price = good.price
            }
            
        },
        submitFormClicked: function () {
            this.$emit('good-form-submitted', {id: this.id, name: this.name, qty: this.qty, price: this.price})
        }
    }
}

Vue.component('good-form', GOOD_FORM)