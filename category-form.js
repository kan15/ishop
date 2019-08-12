const CATEGORY_FORM = {
    template: `
<form>
    <div class="form-group w-50">
        <label>Наименование: </label>
        <input type="text" v-model="name" class="form-control">
    </div>
    <div class="form-group w-50">
        <label>Статус: </label>
        <select type="text" v-model="status" class="form-control">
            <option value="active">active</option>
            <option value="non-active">non-active</option>
        </select>
    </div>
    <div v-on:click="submitFormClicked" class="btn btn-primary mt-3 font-weight-bold">Сохранить</div>
</form> 
    `,
    props: {id: {}, object: {default:{}}},
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
        },
        submitFormClicked: function () {
            this.$emit('category-form-submitted', {id: this.id, name: this.name, status: this.status})
        }
    }
}

Vue.component('category-form', CATEGORY_FORM)