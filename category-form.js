const CATEGORY_FORM = {
    template: `
    <div id="myModal1" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Редактирование категории:</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                    <label>Наименование: </label>
                    <input type="text" v-model="name" class="form-control">
                    <label> Статус: </label>
                    <select type="text" v-model="status" class="form-control">
                        <option value="active">active</option>
                        <option value="non-active">non-active</option>
                    </select>
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
    props: ['id'],
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
          var category = this.$store.state.categories.find(category => category.id === this.id)
          if (category) {
            this.name = category.name
            this.status = category.status
          }
        },
        submitFormClicked: function () {
            this.$emit('category-form-submitted', {id: this.id, name: this.name, status: this.status})
        }
    }
}

Vue.component('category-form', CATEGORY_FORM)
