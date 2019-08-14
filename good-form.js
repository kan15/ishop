const GOOD_FORM = {
    template: `
    <div id="myModal2" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Редактирование категории:</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                    <label>Наименование: </label>
                    <input type="text" v-model="name" class="form-control">
                    <label>Кол-во: </label>
                    <input type="number" v-model="qty" class="form-control">
                    <label>Цена: </label>
                    <input type="number" v-model="price" class="form-control">
                </div>
                    <div class="modal-footer">
                        <button v-on:click="submitFormClicked" data-dismiss="modal" type="button" class="btn btn-primary">Сохранить изменения</button>
                        <button type="button" class="btn btn-default btn-danger" data-dismiss="modal">Закрыть</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props:['id'],
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
            if (good) {
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
