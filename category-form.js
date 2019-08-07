Vue.component('category-form', {
    template: `
<div>
    <label>Наименование</label>
    <input type="text" v-model="name"><br>
    <label>Статус</label>
    <input type="text" v-model="status">
</div> 
    `,
    props: {object:{default:{}}},
    data: function () {
        return {
            name: null,
            status: null
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
            this.status = this.object.status
        }
    }
})