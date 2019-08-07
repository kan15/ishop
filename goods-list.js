Vue.component('goods-list', {
    template: `
<div>
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Наименование</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Цена</th>
            <th scope="col">Цена</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="good in goods">
            <th scope="row">{{good.id}}</th>
            <td>{{good.name}}</td>
            <td>{{good.qty}}</td>
            <td>{{good.price}}</td>
            <td><div v-on:click="editGood(good.id)" class="btn btn-danger btn-sm">Редактировать</div></td>
        </tr>
        </tbody>
    </table>
    <good-form v-if="editing_good_id" v-bind:object="editingGood"></good-form> 
</div>
    `,
    props: ['goods'],
        data: function () {
            return {
                editing_good_id: null
            }
        },
        computed: {
            editingGood: function () {
                if (this.editing_good_id === null) return
                return this.goods.find(function (el) {return el.id === this.editing_good_id}.bind(this))
            }
        },
        methods: {
            editGood: function (id) {
                this.editing_good_id = id
            }
    }
})