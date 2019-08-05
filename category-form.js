Vue.component('category-form', {
    template: `
    <div>
        <label>Наименование</label>
        <input v-model='name'></input>
        </br>
        <label>Статус</label>
        <input v-model='status'></input>
        </br>
    </div>
    `,
    props: {object: {default: {} } }, // по умолчанию сделали пустой массив 1 час 10 минут
    data: function(){
        return {
            name: null,
            status: null
        }
    },
    created: function() { // callback для vue. используем - как только создали компонент - заполняем форму данными
        this.fillForm() // и тут. при создании заполняем форму сразу
    },
    watch: {
        object: function(){
            this.fillForm() // и тут
        }
    },
    methods: {
        fillForm: function() {
            this.name = this.object.name
            this.status = this.object.status
        }
    }
}
)