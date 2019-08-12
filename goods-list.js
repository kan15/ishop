const GOODS_LIST = {
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
            <td>
                <router-link v-bind:to="{name: 'good-form', params: {id: good.id, object: good}}">
                    <div class="btn btn-danger btn-sm">Редактировать</div>
                </router-link>
            </td>
        </tr>
        </tbody>
    </table>
    <router-link to="/" class="nav-link">На главную</router-link>
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
}

Vue.component('goods-list', GOODS_LIST)