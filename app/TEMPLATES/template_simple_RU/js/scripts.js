(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

function Carousels() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    $(".projects-carousel").owlCarousel({
      navigation: true,
      pagination: false,
      slideSpeed: 400,
      stopOnHover: true,
      autoPlay: 3000,
      items: 4,
      itemsDesktopSmall: [900, 3],
      itemsTablet: [600, 2],
      itemsMobile: [479, 1]
    });
  };
}

module.exports = Carousels;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

function Lightboxes() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    $('.lightbox').fancybox({
      //
    });
  };
}

module.exports = Lightboxes;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

function ScrollToTop() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    const offset = 200;
    const duration = 500;

    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    $('.back-to-top').click(function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });
  };
}

module.exports = ScrollToTop;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
(function (global){
'use strict';

function TableChildren() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){
'use strict';

function TableEvents() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    $('#events').DataTable({
      colReorder: true,
      responsive: true,
      select: true,
      dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>>" + "<'row'<'col-md-6'><'col-md-6'>>" + "<'row'<'col-md-12't>>" + "<'row'<'col-md-6'i><'col-md-6'p>>",
      buttons: [
        // 'colvis'
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
  };
}

module.exports = TableEvents;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

function TableEventsPers() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

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
  };
}

module.exports = TableEventsPers;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],7:[function(require,module,exports){
(function (global){
'use strict';

function TableFacts() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
(function (global){
'use strict';

function TableFamilies() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    $('#families').DataTable({
      colReorder: true,
      responsive: true,
      select: true,
      dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>>" + "<'row'<'col-md-6'><'col-md-6'>>" + "<'row'<'col-md-12't>>" + "<'row'<'col-md-6'i><'col-md-6'p>>",
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],9:[function(require,module,exports){
(function (global){
'use strict';

function TablePersons() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    /*---------------------------------------------------*/
    /* Persons DataTable		dom: 'Blfrtip',
    /*---------------------------------------------------*/
    $('#persons').DataTable({
      colReorder: true,
      responsive: true,
      select: true,
      dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>>" + "<'row'<'col-md-6'><'col-md-6'>>" + "<'row'<'col-md-12't>>" + "<'row'<'col-md-6'i><'col-md-6'p>>",
      buttons: [
        // 'colvis'
      ],
      columns: [{ "title": "Id", "data": "Id" }, { "title": "Пол", "data": "Пол" }, { "title": "Фамилия", "data": "Фамилия" }, { "title": "Имя", "data": "Имя" }, { "title": "Отчество", "data": "Отчество" }, { "title": "Дата рождения", "data": "Дата рождения" }, { "title": "Место рождения", "data": "Место рождения" }, { "title": "В живых", "data": "В живых" }, { "title": "Дата смерти", "data": "Дата смерти" }, { "title": "Действия", "data": "Действия", "orderable": false,
        "render": function (data, type, row, meta) {
          return "<div class=\"dropdown\">\n" + "  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" title=\"Выбор команды\">\n" + "    &bull;&bull;&bull;\n" + "  </button>\n" + "  <ul class=\"dropdown-menu dropdown-menu-right\">\n" + "    <li ><a href=\"tree/tree_t1_" + row.Id + ".html\">Восходящее дерево</a></li>\n" + "    <li ><a href=\"tree/tree_t2_" + row.Id + ".html\">Нисходящее дерево</a></li>\n" + "    <li ><a href=\"tree/tree_t3_" + row.Id + ".html\">Дерево \"Бабочка\"</a></li>\n" + "    <li ><a href=\"tree/tree_t4_" + row.Id + ".html\">Круговая диаграмма</a></li>\n" + "  </ul>\n" + "</div>";
          // return result;
        }
      }],
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
  };
}

module.exports = TablePersons;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
(function (global){
'use strict';

const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * ScrollToTop
 */
function initScrollToTop() {
  const ScrollToTop = require('./_scrollToTop');
  const isScrollToTopFunc = new ScrollToTop();

  isScrollToTopFunc.init();
}

/**
 * Persons table
 */
function initTablePersons() {
  const TablePersons = require('./_tablePersons');
  const isTablePersonsFunc = new TablePersons();

  isTablePersonsFunc.init();
}

/**
 * Families table
 */
function initTableFamilies() {
  const TableFamilies = require('./_tableFamilies');
  const isTableFamiliesFunc = new TableFamilies();

  isTableFamiliesFunc.init();
}

/**
 * Events table
 */
function initTableEvents() {
  const TableEvents = require('./_tableEvents');
  const isTableEventsFunc = new TableEvents();

  isTableEventsFunc.init();
}

/**
 * Facts table
 */
function initTableFacts() {
  const TableFacts = require('./_tableFacts');
  const isTableFactsFunc = new TableFacts();

  isTableFactsFunc.init();
}

/**
 * Personal Events table
 */
function initTableEventsPers() {
  const TableEventsPers = require('./_tableEventsPers');
  const isTableEventsPersFunc = new TableEventsPers();

  isTableEventsPersFunc.init();
}

/**
 * Personal Events table
 */
function initTableChildren() {
  const TableChildren = require('./_tableChildren');
  const isTableChildrenFunc = new TableChildren();

  isTableChildrenFunc.init();
}

/**
 * Carousels
 */
function initCarousels() {
  const Carousels = require('./_carousels');
  const isCarouselsFunc = new Carousels();

  isCarouselsFunc.init();
}

/**
 * Lightboxes
 */
function initLightboxes() {
  const Lightboxes = require('./_lightboxes');
  const isLightboxesFunc = new Lightboxes();

  isLightboxesFunc.init();
}

/**
 * Photoalbums / File tree
 * Won't work because of @..@ placeholders for Generatree
 */
// function initPhotoalbums() {
//   const Photoalbums = require('./_photoalbums');
//   const isPhotoalbumsFunc = new Photoalbums();
//
//   isPhotoalbumsFunc.init();
// }

function allScripts() {
  initScrollToTop();
  initTablePersons();
  initTableFamilies();
  initTableEvents();
  initTableFacts();
  initTableEventsPers();
  initTableChildren();
  initCarousels();
  initLightboxes();
  // initPhotoalbums();
}

allScripts();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./_carousels":1,"./_lightboxes":2,"./_scrollToTop":3,"./_tableChildren":4,"./_tableEvents":5,"./_tableEventsPers":6,"./_tableFacts":7,"./_tableFamilies":8,"./_tablePersons":9}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL19jYXJvdXNlbHMuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL19saWdodGJveGVzLmpzIiwiYXBwL1RFTVBMQVRFUy90ZW1wbGF0ZV9zaW1wbGVfUlUvc2NyaXB0cy9fc2Nyb2xsVG9Ub3AuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL190YWJsZUNoaWxkcmVuLmpzIiwiYXBwL1RFTVBMQVRFUy90ZW1wbGF0ZV9zaW1wbGVfUlUvc2NyaXB0cy9fdGFibGVFdmVudHMuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL190YWJsZUV2ZW50c1BlcnMuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL190YWJsZUZhY3RzLmpzIiwiYXBwL1RFTVBMQVRFUy90ZW1wbGF0ZV9zaW1wbGVfUlUvc2NyaXB0cy9fdGFibGVGYW1pbGllcy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfc2ltcGxlX1JVL3NjcmlwdHMvX3RhYmxlUGVyc29ucy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfc2ltcGxlX1JVL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTs7QUFFQSxTQUFTLFNBQVQsR0FBcUI7QUFDakIsUUFBTSxPQUFPLElBQWI7O0FBRUEsT0FBSyxJQUFMLEdBQVksWUFBVztBQUNyQixVQUFNLElBQUksUUFBUSxRQUFSLENBQVY7O0FBRUEsTUFBRSxvQkFBRixFQUF3QixXQUF4QixDQUFvQztBQUNsQyxrQkFBYSxJQURxQjtBQUVsQyxrQkFBWSxLQUZzQjtBQUdsQyxrQkFBYSxHQUhxQjtBQUlsQyxtQkFBYSxJQUpxQjtBQUtsQyxn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LFNBQVMsaUJBQVQsR0FBNkI7QUFDM0IsUUFBTSxnQkFBZ0IsUUFBUSxrQkFBUixDQUF0QjtBQUNBLFFBQU0sc0JBQXNCLElBQUksYUFBSixFQUE1Qjs7QUFFQSxzQkFBb0IsSUFBcEI7QUFDRDs7QUFFRDs7O0FBR0EsU0FBUyxhQUFULEdBQXlCO0FBQ3ZCLFFBQU0sWUFBWSxRQUFRLGNBQVIsQ0FBbEI7QUFDQSxRQUFNLGtCQUFrQixJQUFJLFNBQUosRUFBeEI7O0FBRUEsa0JBQWdCLElBQWhCO0FBQ0Q7O0FBRUQ7OztBQUdBLFNBQVMsY0FBVCxHQUEwQjtBQUN4QixRQUFNLGFBQWEsUUFBUSxlQUFSLENBQW5CO0FBQ0EsUUFBTSxtQkFBbUIsSUFBSSxVQUFKLEVBQXpCOztBQUVBLG1CQUFpQixJQUFqQjtBQUNEOztBQUVEOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsVUFBVCxHQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gQ2Fyb3VzZWxzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoXCIucHJvamVjdHMtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIG5hdmlnYXRpb24gOiB0cnVlLFxyXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlU3BlZWQgOiA0MDAsXHJcbiAgICAgICAgc3RvcE9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgYXV0b1BsYXk6IDMwMDAsXHJcbiAgICAgICAgaXRlbXMgOiA0LFxyXG4gICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsIDogWzkwMCwzXSxcclxuICAgICAgICBpdGVtc1RhYmxldDogWzYwMCwyXSxcclxuICAgICAgICBpdGVtc01vYmlsZSA6IFs0NzksIDFdXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDYXJvdXNlbHM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIExpZ2h0Ym94ZXMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuICAgICAgJCgnLmxpZ2h0Ym94JykuZmFuY3lib3goe1xyXG4gICAgICAgIC8vXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaWdodGJveGVzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBTY3JvbGxUb1RvcCgpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IDIwMDtcclxuICAgICAgY29uc3QgZHVyYXRpb24gPSA1MDA7XHJcblxyXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gb2Zmc2V0KSB7XHJcbiAgICAgICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlSW4oNDAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgZHVyYXRpb24pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbFRvVG9wO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBUYWJsZUNoaWxkcmVuKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNjaGlsZHJlbicpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgY29sUmVvcmRlcjogdHJ1ZSxcclxuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2luZzogZmFsc2UsXHJcbiAgICAgICAgaW5mbzogZmFsc2UsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINC00LXRgtC10LlcIixcclxuICAgICAgICAgIGluZm86IFwi0J/QvtC60LDQt9Cw0L3QviDRgSBfU1RBUlRfINC/0L4gX0VORF8g0LjQtyBfVE9UQUxfINC00LXRgtC10LlcIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0LTQtdGC0LXQuVwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINC00LXRgtC10LkpXCIsXHJcbiAgICAgICAgICBpbmZvUG9zdEZpeDogXCJcIixcclxuICAgICAgICAgIGxvYWRpbmdSZWNvcmRzOiBcIjxkaXYgYWxpZ249J2NlbnRlcic+PGltZyBzcmM9Jy9vcGVuLWFjY291bnQvaW1hZ2VzL2xvYWRpbmcuZ2lmJyBhbHQ9J9CX0LDQs9GA0YPQt9C60LAnIGhlaWdodD0nODAnIC8+PC9kaXY+XCIsXHJcbiAgICAgICAgICB6ZXJvUmVjb3JkczogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgZW1wdHlUYWJsZTogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgcGFnaW5hdGU6IHtcclxuICAgICAgICAgICAgZmlyc3Q6IFwi0J/QtdGA0LLRi9C5XCIsXHJcbiAgICAgICAgICAgIHByZXZpb3VzOiBcItCd0LDQt9Cw0LRcIixcclxuICAgICAgICAgICAgbmV4dDogXCLQlNCw0LvQtdC1XCIsXHJcbiAgICAgICAgICAgIGxhc3Q6IFwi0J/QvtGB0LvQtdC00L3QuNC5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhcmlhOiB7XHJcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjlwiLFxyXG4gICAgICAgICAgICBzb3J0RGVzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0LIg0L/QvtGA0Y/QtNC60LUg0YPQsdGL0LLQsNC90LjRj1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFibGVDaGlsZHJlbjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVGFibGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuICAgICAgJCgnI2V2ZW50cycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgY29sUmVvcmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdDogdHJ1ZSxcclxuICAgICAgICBkb206IFwiPCdyb3cnPCdjb2wtbWQtNCdCPjwnY29sLW1kLTQnbD48J2NvbC1tZC00J2Y+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNic+PCdjb2wtbWQtNic+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtMTIndD4+XCIgK1xyXG4gICAgICAgICAgXCI8J3Jvdyc8J2NvbC1tZC02J2k+PCdjb2wtbWQtNidwPj5cIixcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAvLyAnY29sdmlzJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINGB0L7QsdGL0YLQuNC5XCIsXHJcbiAgICAgICAgICBpbmZvOiBcItCf0L7QutCw0LfQsNC90L4g0YEgX1NUQVJUXyDQv9C+IF9FTkRfINC40LcgX1RPVEFMXyDRgdC+0LHRi9GC0LjQuVwiLFxyXG4gICAgICAgICAgaW5mb0VtcHR5OiBcItCd0LXRgiDRgdC+0LHRi9GC0LjQuVwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINGB0L7QsdGL0YLQuNC5KVwiLFxyXG4gICAgICAgICAgaW5mb1Bvc3RGaXg6IFwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nUmVjb3JkczogXCI8ZGl2IGFsaWduPSdjZW50ZXInPjxpbWcgc3JjPScvb3Blbi1hY2NvdW50L2ltYWdlcy9sb2FkaW5nLmdpZicgYWx0PSfQl9Cw0LPRgNGD0LfQutCwJyBoZWlnaHQ9JzgwJyAvPjwvZGl2PlwiLFxyXG4gICAgICAgICAgemVyb1JlY29yZHM6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIGVtcHR5VGFibGU6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIHBhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiBcItCf0LXRgNCy0YvQuVwiLFxyXG4gICAgICAgICAgICBwcmV2aW91czogXCLQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIG5leHQ6IFwi0JTQsNC70LXQtVwiLFxyXG4gICAgICAgICAgICBsYXN0OiBcItCf0L7RgdC70LXQtNC90LjQuVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXJpYToge1xyXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y5cIixcclxuICAgICAgICAgICAgc29ydERlc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INCyINC/0L7RgNGP0LTQutC1INGD0LHRi9Cy0LDQvdC40Y9cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlRXZlbnRzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBUYWJsZUV2ZW50c1BlcnMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuICAgICAgJCgnI3BlcnNfZXZlbnQnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIGluZm86IGZhbHNlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBkZWNpbWFsOiBcIixcIixcclxuICAgICAgICAgIHNlYXJjaDogXCLQpNC40LvRjNGC0YA6XCIsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogXCLQntGC0L7QsdGA0LDQttCw0YLRjCDQv9C+IF9NRU5VXyDRgdC+0LHRi9GC0LjQuVwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm9GaWx0ZXJlZDogXCIo0LLRgdC10LPQviBfTUFYXyDRgdC+0LHRi9GC0LjQuSlcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZUV2ZW50c1BlcnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIFRhYmxlRmFjdHMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuICAgICAgJCgnI2ZhY3RzJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIGluZm86IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgY29sUmVvcmRlcjogdHJ1ZSxcclxuICAgICAgICBvcmRlcjogW1s0LCAnYXNjJ11dLFxyXG4gICAgICAgIHJvd0dyb3VwOiB7XHJcbiAgICAgICAgICBkYXRhU3JjOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgZGVjaW1hbDogXCIsXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IFwi0KTQuNC70YzRgtGAOlwiLFxyXG4gICAgICAgICAgcHJvY2Vzc2luZzogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFwi0J7RgtC+0LHRgNCw0LbQsNGC0Ywg0L/QviBfTUVOVV8g0YTQsNC60YLQvtCyXCIsXHJcbiAgICAgICAgICBpbmZvOiBcItCf0L7QutCw0LfQsNC90L4g0YEgX1NUQVJUXyDQv9C+IF9FTkRfINC40LcgX1RPVEFMXyDRhNCw0LrRgtC+0LJcIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0YTQsNC60YLQvtCyXCIsXHJcbiAgICAgICAgICBpbmZvRmlsdGVyZWQ6IFwiKNCy0YHQtdCz0L4gX01BWF8g0YTQsNC60YLQvtCyKVwiLFxyXG4gICAgICAgICAgaW5mb1Bvc3RGaXg6IFwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nUmVjb3JkczogXCI8ZGl2IGFsaWduPSdjZW50ZXInPjxpbWcgc3JjPScvb3Blbi1hY2NvdW50L2ltYWdlcy9sb2FkaW5nLmdpZicgYWx0PSfQl9Cw0LPRgNGD0LfQutCwJyBoZWlnaHQ9JzgwJyAvPjwvZGl2PlwiLFxyXG4gICAgICAgICAgemVyb1JlY29yZHM6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIGVtcHR5VGFibGU6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIHBhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiBcItCf0LXRgNCy0YvQuVwiLFxyXG4gICAgICAgICAgICBwcmV2aW91czogXCLQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIG5leHQ6IFwi0JTQsNC70LXQtVwiLFxyXG4gICAgICAgICAgICBsYXN0OiBcItCf0L7RgdC70LXQtNC90LjQuVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXJpYToge1xyXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y5cIixcclxuICAgICAgICAgICAgc29ydERlc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INCyINC/0L7RgNGP0LTQutC1INGD0LHRi9Cy0LDQvdC40Y9cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlRmFjdHM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIFRhYmxlRmFtaWxpZXMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuICAgICAgJCgnI2ZhbWlsaWVzJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBjb2xSZW9yZGVyOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgc2VsZWN0OiB0cnVlLFxyXG4gICAgICAgIGRvbTogXCI8J3Jvdyc8J2NvbC1tZC00J0I+PCdjb2wtbWQtNCdsPjwnY29sLW1kLTQnZj4+XCIgK1xyXG4gICAgICAgICAgXCI8J3Jvdyc8J2NvbC1tZC02Jz48J2NvbC1tZC02Jz4+XCIgK1xyXG4gICAgICAgICAgXCI8J3Jvdyc8J2NvbC1tZC0xMid0Pj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTYnaT48J2NvbC1tZC02J3A+PlwiLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgIC8vICdjb2x2aXMnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgZGVjaW1hbDogXCIsXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IFwi0KTQuNC70YzRgtGAOlwiLFxyXG4gICAgICAgICAgcHJvY2Vzc2luZzogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFwi0J7RgtC+0LHRgNCw0LbQsNGC0Ywg0L/QviBfTUVOVV8g0YHQtdC80LXQuVwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0YHQtdC80YzQuFwiLFxyXG4gICAgICAgICAgaW5mb0VtcHR5OiBcItCd0LXRgiDRgdC10LzQtdC5XCIsXHJcbiAgICAgICAgICBpbmZvRmlsdGVyZWQ6IFwiKNCy0YHQtdCz0L4gX01BWF8g0YHQtdC80LXQuSlcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZUZhbWlsaWVzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBUYWJsZVBlcnNvbnMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAvKiBQZXJzb25zIERhdGFUYWJsZVx0XHRkb206ICdCbGZydGlwJyxcclxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAkKCcjcGVyc29ucycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgY29sUmVvcmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdDogdHJ1ZSxcclxuICAgICAgICBkb206IFwiPCdyb3cnPCdjb2wtbWQtNCdCPjwnY29sLW1kLTQnbD48J2NvbC1tZC00J2Y+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNic+PCdjb2wtbWQtNic+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtMTIndD4+XCIgK1xyXG4gICAgICAgICAgXCI8J3Jvdyc8J2NvbC1tZC02J2k+PCdjb2wtbWQtNidwPj5cIixcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAvLyAnY29sdmlzJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwiSWRcIiwgXCJkYXRhXCI6IFwiSWRcIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0J/QvtC7XCIsIFwiZGF0YVwiOiBcItCf0L7Qu1wiIH0sXHJcbiAgICAgICAgICB7IFwidGl0bGVcIjogXCLQpNCw0LzQuNC70LjRj1wiLCBcImRhdGFcIjogXCLQpNCw0LzQuNC70LjRj1wiIH0sXHJcbiAgICAgICAgICB7IFwidGl0bGVcIjogXCLQmNC80Y9cIiwgXCJkYXRhXCI6IFwi0JjQvNGPXCIgfSxcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcItCe0YLRh9C10YHRgtCy0L5cIiwgXCJkYXRhXCI6IFwi0J7RgtGH0LXRgdGC0LLQvlwiIH0sXHJcbiAgICAgICAgICB7IFwidGl0bGVcIjogXCLQlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPXCIsIFwiZGF0YVwiOiBcItCU0LDRgtCwINGA0L7QttC00LXQvdC40Y9cIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JzQtdGB0YLQviDRgNC+0LbQtNC10L3QuNGPXCIsIFwiZGF0YVwiOiBcItCc0LXRgdGC0L4g0YDQvtC20LTQtdC90LjRj1wiIH0sXHJcbiAgICAgICAgICB7IFwidGl0bGVcIjogXCLQkiDQttC40LLRi9GFXCIsIFwiZGF0YVwiOiBcItCSINC20LjQstGL0YVcIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JTQsNGC0LAg0YHQvNC10YDRgtC4XCIsIFwiZGF0YVwiOiBcItCU0LDRgtCwINGB0LzQtdGA0YLQuFwiIH0sXHJcbiAgICAgICAgICB7IFwidGl0bGVcIjogXCLQlNC10LnRgdGC0LLQuNGPXCIsIFwiZGF0YVwiOiBcItCU0LXQudGB0YLQstC40Y9cIiwgXCJvcmRlcmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwicmVuZGVyXCI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3csIG1ldGEpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiB0aXRsZT1cXFwi0JLRi9Cx0L7RgCDQutC+0LzQsNC90LTRi1xcXCI+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgICAgJmJ1bGw7JmJ1bGw7JmJ1bGw7XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgIDwvYnV0dG9uPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFxcXCI+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgICAgPGxpID48YSBocmVmPVxcXCJ0cmVlL3RyZWVfdDFfXCIgKyByb3cuSWQgKyBcIi5odG1sXFxcIj7QktC+0YHRhdC+0LTRj9GJ0LXQtSDQtNC10YDQtdCy0L48L2E+PC9saT5cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcIiAgICA8bGkgPjxhIGhyZWY9XFxcInRyZWUvdHJlZV90Ml9cIiArIHJvdy5JZCArIFwiLmh0bWxcXFwiPtCd0LjRgdGF0L7QtNGP0YnQtdC1INC00LXRgNC10LLQvjwvYT48L2xpPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICAgIDxsaSA+PGEgaHJlZj1cXFwidHJlZS90cmVlX3QzX1wiICsgcm93LklkICsgXCIuaHRtbFxcXCI+0JTQtdGA0LXQstC+IFxcXCLQkdCw0LHQvtGH0LrQsFxcXCI8L2E+PC9saT5cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcIiAgICA8bGkgPjxhIGhyZWY9XFxcInRyZWUvdHJlZV90NF9cIiArIHJvdy5JZCArIFwiLmh0bWxcXFwiPtCa0YDRg9Cz0L7QstCw0Y8g0LTQuNCw0LPRgNCw0LzQvNCwPC9hPjwvbGk+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgIDwvdWw+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAvLyByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgZGVjaW1hbDogXCIsXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IFwi0KTQuNC70YzRgtGAOlwiLFxyXG4gICAgICAgICAgcHJvY2Vzc2luZzogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFwi0J7RgtC+0LHRgNCw0LbQsNGC0Ywg0L/QviBfTUVOVV8g0L/QtdGA0YHQvtC9XCIsXHJcbiAgICAgICAgICBpbmZvOiBcItCf0L7QutCw0LfQsNC90L4g0YEgX1NUQVJUXyDQv9C+IF9FTkRfINC40LcgX1RPVEFMXyDQv9C10YDRgdC+0L1cIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0L/QtdGA0YHQvtC9XCIsXHJcbiAgICAgICAgICBpbmZvRmlsdGVyZWQ6IFwiKNCy0YHQtdCz0L4gX01BWF8g0L/QtdGA0YHQvtC9KVwiLFxyXG4gICAgICAgICAgaW5mb1Bvc3RGaXg6IFwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nUmVjb3JkczogXCI8ZGl2IGFsaWduPSdjZW50ZXInPjxpbWcgc3JjPScvb3Blbi1hY2NvdW50L2ltYWdlcy9sb2FkaW5nLmdpZicgYWx0PSfQl9Cw0LPRgNGD0LfQutCwJyBoZWlnaHQ9JzgwJyAvPjwvZGl2PlwiLFxyXG4gICAgICAgICAgemVyb1JlY29yZHM6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIGVtcHR5VGFibGU6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIHBhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiBcItCf0LXRgNCy0YvQuVwiLFxyXG4gICAgICAgICAgICBwcmV2aW91czogXCLQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIG5leHQ6IFwi0JTQsNC70LXQtVwiLFxyXG4gICAgICAgICAgICBsYXN0OiBcItCf0L7RgdC70LXQtNC90LjQuVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXJpYToge1xyXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y5cIixcclxuICAgICAgICAgICAgc29ydERlc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INCyINC/0L7RgNGP0LTQutC1INGD0LHRi9Cy0LDQvdC40Y9cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZVBlcnNvbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbi8qKlxyXG4gKiBTY3JvbGxUb1RvcFxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFNjcm9sbFRvVG9wKCkge1xyXG4gIGNvbnN0IFNjcm9sbFRvVG9wID0gcmVxdWlyZSgnLi9fc2Nyb2xsVG9Ub3AnKTtcclxuICBjb25zdCBpc1Njcm9sbFRvVG9wRnVuYyA9IG5ldyBTY3JvbGxUb1RvcCgpO1xyXG5cclxuICBpc1Njcm9sbFRvVG9wRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQZXJzb25zIHRhYmxlXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0VGFibGVQZXJzb25zKCkge1xyXG4gIGNvbnN0IFRhYmxlUGVyc29ucyA9IHJlcXVpcmUoJy4vX3RhYmxlUGVyc29ucycpO1xyXG4gIGNvbnN0IGlzVGFibGVQZXJzb25zRnVuYyA9IG5ldyBUYWJsZVBlcnNvbnMoKTtcclxuXHJcbiAgaXNUYWJsZVBlcnNvbnNGdW5jLmluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZhbWlsaWVzIHRhYmxlXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0VGFibGVGYW1pbGllcygpIHtcclxuICBjb25zdCBUYWJsZUZhbWlsaWVzID0gcmVxdWlyZSgnLi9fdGFibGVGYW1pbGllcycpO1xyXG4gIGNvbnN0IGlzVGFibGVGYW1pbGllc0Z1bmMgPSBuZXcgVGFibGVGYW1pbGllcygpO1xyXG5cclxuICBpc1RhYmxlRmFtaWxpZXNGdW5jLmluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV2ZW50cyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlRXZlbnRzKCkge1xyXG4gIGNvbnN0IFRhYmxlRXZlbnRzID0gcmVxdWlyZSgnLi9fdGFibGVFdmVudHMnKTtcclxuICBjb25zdCBpc1RhYmxlRXZlbnRzRnVuYyA9IG5ldyBUYWJsZUV2ZW50cygpO1xyXG5cclxuICBpc1RhYmxlRXZlbnRzRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGYWN0cyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlRmFjdHMoKSB7XHJcbiAgY29uc3QgVGFibGVGYWN0cyA9IHJlcXVpcmUoJy4vX3RhYmxlRmFjdHMnKTtcclxuICBjb25zdCBpc1RhYmxlRmFjdHNGdW5jID0gbmV3IFRhYmxlRmFjdHMoKTtcclxuXHJcbiAgaXNUYWJsZUZhY3RzRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQZXJzb25hbCBFdmVudHMgdGFibGVcclxuICovXHJcbmZ1bmN0aW9uIGluaXRUYWJsZUV2ZW50c1BlcnMoKSB7XHJcbiAgY29uc3QgVGFibGVFdmVudHNQZXJzID0gcmVxdWlyZSgnLi9fdGFibGVFdmVudHNQZXJzJyk7XHJcbiAgY29uc3QgaXNUYWJsZUV2ZW50c1BlcnNGdW5jID0gbmV3IFRhYmxlRXZlbnRzUGVycygpO1xyXG5cclxuICBpc1RhYmxlRXZlbnRzUGVyc0Z1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogUGVyc29uYWwgRXZlbnRzIHRhYmxlXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0VGFibGVDaGlsZHJlbigpIHtcclxuICBjb25zdCBUYWJsZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9fdGFibGVDaGlsZHJlbicpO1xyXG4gIGNvbnN0IGlzVGFibGVDaGlsZHJlbkZ1bmMgPSBuZXcgVGFibGVDaGlsZHJlbigpO1xyXG5cclxuICBpc1RhYmxlQ2hpbGRyZW5GdW5jLmluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhcm91c2Vsc1xyXG4gKi9cclxuZnVuY3Rpb24gaW5pdENhcm91c2VscygpIHtcclxuICBjb25zdCBDYXJvdXNlbHMgPSByZXF1aXJlKCcuL19jYXJvdXNlbHMnKTtcclxuICBjb25zdCBpc0Nhcm91c2Vsc0Z1bmMgPSBuZXcgQ2Fyb3VzZWxzKCk7XHJcblxyXG4gIGlzQ2Fyb3VzZWxzRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaWdodGJveGVzXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0TGlnaHRib3hlcygpIHtcclxuICBjb25zdCBMaWdodGJveGVzID0gcmVxdWlyZSgnLi9fbGlnaHRib3hlcycpO1xyXG4gIGNvbnN0IGlzTGlnaHRib3hlc0Z1bmMgPSBuZXcgTGlnaHRib3hlcygpO1xyXG5cclxuICBpc0xpZ2h0Ym94ZXNGdW5jLmluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBob3RvYWxidW1zIC8gRmlsZSB0cmVlXHJcbiAqIFdvbid0IHdvcmsgYmVjYXVzZSBvZiBALi5AIHBsYWNlaG9sZGVycyBmb3IgR2VuZXJhdHJlZVxyXG4gKi9cclxuLy8gZnVuY3Rpb24gaW5pdFBob3RvYWxidW1zKCkge1xyXG4vLyAgIGNvbnN0IFBob3RvYWxidW1zID0gcmVxdWlyZSgnLi9fcGhvdG9hbGJ1bXMnKTtcclxuLy8gICBjb25zdCBpc1Bob3RvYWxidW1zRnVuYyA9IG5ldyBQaG90b2FsYnVtcygpO1xyXG4vL1xyXG4vLyAgIGlzUGhvdG9hbGJ1bXNGdW5jLmluaXQoKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gYWxsU2NyaXB0cygpIHtcclxuICBpbml0U2Nyb2xsVG9Ub3AoKTtcclxuICBpbml0VGFibGVQZXJzb25zKCk7XHJcbiAgaW5pdFRhYmxlRmFtaWxpZXMoKTtcclxuICBpbml0VGFibGVFdmVudHMoKTtcclxuICBpbml0VGFibGVGYWN0cygpO1xyXG4gIGluaXRUYWJsZUV2ZW50c1BlcnMoKTtcclxuICBpbml0VGFibGVDaGlsZHJlbigpO1xyXG4gIGluaXRDYXJvdXNlbHMoKTtcclxuICBpbml0TGlnaHRib3hlcygpO1xyXG4gIC8vIGluaXRQaG90b2FsYnVtcygpO1xyXG59XHJcblxyXG5hbGxTY3JpcHRzKCk7XHJcblxyXG4iXX0=
