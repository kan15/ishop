const CATEGORY_FORM = {


    template: `
<div>
    <label>Наименование</label>
    <input type="text" v-model="name"><br>
    <label>Статус</label>
    <input type="text" v-model="status">
    </br>
    <div v-on:click='submitFormClicked' class='btn btn-primary'>Сохранить</div>
</div> 
    `,
    props: {id:{}, object:{ default:{} } },
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
        submitFormClicked: function(){
            this.$emit('category-form-submited', {id: this.id, name: this.name, status: this.status})
        },
        fillForm: function () {
            this.name = this.object.name
            this.status = this.object.status
        }
    }
}
Vue.component('category-form', CATEGORY_FORM)
