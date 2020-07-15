'use strict';

function TableFamilies() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $('#families').DataTable({
        colReorder: true,
        responsive: true,
        select: true,
        dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>>" +
          "<'row'<'col-md-6'><'col-md-6'>>" +
          "<'row'<'col-md-12't>>" +
          "<'row'<'col-md-6'i><'col-md-6'p>>",
        buttons: [
          // 'colvis'
        ],
        language: {
          decimal: ",",
          search: "Фильтр:",
          processing: "Обработка...",
          lengthMenu: "Отображать по _MENU_ семей",
          info: "Показано с _START_ по _END_ из _TOTAL_ семьи",
          infoEmpty: "Нет семей",
          infoFiltered: "(всего _MAX_ семей)",
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

module.exports = TableFamilies;
