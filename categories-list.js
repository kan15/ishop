Vue.component('categories-list',{
    template:`
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Наименование</th>
                <th scope="col">Количество товаров</th>
                <th scope="col">Статус</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Одежда мужская</td>
                <td>0</td>
                <td>Online</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Одежда женская</td>
                <td>0</td>
                <td>Online</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Обувь</td>
                <td>0</td>
                <td>Online</td>
            </tr>
        </tbody>
        </table>
    `

})