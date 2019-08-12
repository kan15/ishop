const CATEGORIES_LIST = {
    template: `
<div>
    <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Наименование</th>
                <th scope="col">Кол-во товаров</th>
                <th scope="col">Статус</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories">
                <th scope="row">{{category.id}}</th>
                <td>{{category.name}}</td>
                <td>0</td>
                <td>{{category.status}}</td>
                <td>
                    <router-link v-bind:to="{name: 'category-form', params: {id: category.id, object: category}}">
                        <div class="btn btn-danger btn-sm">Редактировать</div>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    <router-link to="/" class="nav-link">На главную</router-link>
    <category-form v-if="editing_category_id" v-bind:object="editingCategory"></category-form>
</div>
    `,
    props: ['categories'],
    data: function () {
        return {editing_category_id: null}
    },
    computed: {
        editingCategory: function () {
            if (this.editing_category_id === null) return
            return this.categories.find(function(el){return el.id === this.editing_category_id}.bind(this))
        }
    },
    methods: {
        editCategory: function (id) {
            this.editing_category_id = id
        }
    }
}

Vue.component('categories-list', CATEGORIES_LIST)