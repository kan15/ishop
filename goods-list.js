Vue.component('goods-list',{
    template:`
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Наименования</th>
                <th scope="col">Количество</th>
                <th scope="col">Цена</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Рюки мужские</td>
                <td>35</td>
                <td>3650</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Платье женское</td>
                <td>18</td>
                <td>2300</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Шлепки</td>
                <td>131</td>
                <td>700</td>
            </tr>
        </tbody>
        </table>
    `

})