'use strict';

function TableFacts() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $('#facts').DataTable({
        paging: false,
        info: false,
        responsive: true,
        colReorder: true,
        order: [[4, 'asc']],
        rowGroup: {
          dataSrc: 4
        },
        language: {
          decimal: ",",
          search: "Фильтр:",
          processing: "Обработка...",
          lengthMenu: "Отображать по _MENU_ фактов",
          info: "Показано с _START_ по _END_ из _TOTAL_ фактов",
          infoEmpty: "Нет фактов",
          infoFiltered: "(всего _MAX_ фактов)",
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

module.exports = TableFacts;
