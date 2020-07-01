'use strict';

function TableChildren() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $('#children').DataTable({
        colReorder: true,
        searching: false,
        paging: false,
        info: false,
        language: {
          decimal: ",",
          search: "Фильтр:",
          processing: "Обработка...",
          lengthMenu: "Отображать по _MENU_ детей",
          info: "Показано с _START_ по _END_ из _TOTAL_ детей",
          infoEmpty: "Нет детей",
          infoFiltered: "(всего _MAX_ детей)",
          infoPostFix: "",
          loadingRecords: "<div align='center'><img src='/open-account/images/loading.gif' alt='Загрузка' height='80' /></div>",
          zeroRecords: "Данные не найдены",
          emptyTable: "Данные не найдены",
          paginate: {
            first: "Первый",
            previous: "Назад",
            next: "Далее",
            last: "Последний"
          },
          aria: {
            sortAscending: ": активировать столбец для сортировки по возрастанию",
            sortDescending: ": активировать столбец для сортировки в порядке убывания"
          }
        }
      });
    };
}

module.exports = TableChildren;
