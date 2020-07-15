$(document).ready(function ($) {
  /*---------------------------------------------------*/
  /* Persons DataTable		dom: 'Blfrtip',
  /*---------------------------------------------------*/
  $('#persons').DataTable({
    colReorder: true,
    select: true,
    dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>>" +
      "<'row'<'col-md-6'><'col-md-6'>>" +
      "<'row'<'col-md-12't>>" +
      "<'row'<'col-md-6'i><'col-md-6'p>>",
    buttons: [
      'colvis'
    ],
    columns: [
      {"title": "Id", "data": "Id"},
      {"title": "Пол", "data": "Пол"},
      {"title": "Фамилия", "data": "Фамилия"},
      {"title": "Имя", "data": "Имя"},
      {"title": "Отчество", "data": "Отчество"},
      {"title": "Дата рождения", "data": "Дата рождения"},
      {"title": "Место рождения", "data": "Место рождения"},
      {"title": "В живых", "data": "В живых"},
      {"title": "Дата смерти", "data": "Дата смерти"},
      {
        "title": "Действия", "data": "Действия", "orderable": false,
        "render": function (data, type, row, meta) {
          var result = "<div class=\"dropdown\">\n" +
            "  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" title=\"Выбор команды\">\n" +
            "    &bull;&bull;&bull;\n" +
            "  </button>\n" +
            "  <ul class=\"dropdown-menu dropdown-menu-right\">\n" +
            "    <li @SHOW_TREE_1@><a href=\"tree/tree_t1_" + row.Id + ".html\">Восходящее дерево</a></li>\n" +
            "    <li @SHOW_TREE_2@><a href=\"tree/tree_t2_" + row.Id + ".html\">Нисходящее дерево</a></li>\n" +
            "    <li @SHOW_TREE_3@><a href=\"tree/tree_t3_" + row.Id + ".html\">Дерево \"Бабочка\"</a></li>\n" +
            "    <li @SHOW_TREE_4@><a href=\"tree/tree_t4_" + row.Id + ".html\">Круговая диаграмма</a></li>\n" +
            "  </ul>\n" +
            "</div>";
          return result;
        }
      }
    ],
    language: {
      decimal: ",",
      search: "Фильтр:",
      processing: "Обработка...",
      lengthMenu: "Отображать по _MENU_ персон",
      info: "Показано с _START_ по _END_ из _TOTAL_ персон",
      infoEmpty: "Нет персон",
      infoFiltered: "(всего _MAX_ персон)",
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

  $('#families').DataTable({
    colReorder: true,
    select: true,
    dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>>" +
      "<'row'<'col-md-6'><'col-md-6'>>" +
      "<'row'<'col-md-12't>>" +
      "<'row'<'col-md-6'i><'col-md-6'p>>",
    buttons: [
      'colvis'
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

  $('#events').DataTable({
    colReorder: true,
    select: true,
    dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>>" +
      "<'row'<'col-md-6'><'col-md-6'>>" +
      "<'row'<'col-md-12't>>" +
      "<'row'<'col-md-6'i><'col-md-6'p>>",
    buttons: [
      'colvis'
    ],
    language: {
      decimal: ",",
      search: "Фильтр:",
      processing: "Обработка...",
      lengthMenu: "Отображать по _MENU_ событий",
      info: "Показано с _START_ по _END_ из _TOTAL_ событий",
      infoEmpty: "Нет событий",
      infoFiltered: "(всего _MAX_ событий)",
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

  $('#facts').DataTable({
    paging: false,
    info: false,
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

  $('#factsNew').DataTable({
    paging: false,
    info: false,
    colReorder: true,
    order: [[2, 'asc']],
    rowGroup: {
      dataSrc: 2
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

  $('#pers_event').DataTable({
    colReorder: true,
    searching: false,
    paging: false,
    info: false,
    language: {
      decimal: ",",
      search: "Фильтр:",
      processing: "Обработка...",
      lengthMenu: "Отображать по _MENU_ событий",
      info: "Показано с _START_ по _END_ из _TOTAL_ событий",
      infoEmpty: "Нет событий",
      infoFiltered: "(всего _MAX_ событий)",
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

  $('#childs').DataTable({
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

});
