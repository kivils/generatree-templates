(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function IsJS() {
    const self = this;

    self.init = function () {
        const container = document.querySelector('html');

        container.classList.remove('no-js');
        container.classList.add('js');
    };
}

module.exports = IsJS;

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

function NavMobile() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    $('.wpb-mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'margo',
      allowParentLinks: true,
      duplicate: false,
      label: '',
      closedSymbol: '<i class="fa fa-angle-right"></i>',
      openedSymbol: '<i class="fa fa-angle-down"></i>'
    });
  };
}

module.exports = NavMobile;

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
 * Check if JS is enabled in browser
 * @see module:isJs
 */
function initIsJS() {
  const IsJS = require('./_isJS');
  const isJSFunc = new IsJS();

  isJSFunc.init();
}

/**
 * NavMobile
 */
function initNavMobile() {
  const NavMobile = require('./_navMobile');
  const isNavMobileFunc = new NavMobile();

  isNavMobileFunc.init();
}

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

function allScripts() {
  initIsJS();
  initNavMobile();
  initScrollToTop();
  initTablePersons();
  initTableFamilies();
  initTableEvents();
  initTableFacts();
  initTableEventsPers();
  initTableChildren();
}

allScripts();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./_isJS":1,"./_navMobile":2,"./_scrollToTop":3,"./_tableChildren":4,"./_tableEvents":5,"./_tableEventsPers":6,"./_tableFacts":7,"./_tableFamilies":8,"./_tablePersons":9}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlXzFfUlUvc2NyaXB0cy9faXNKUy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfMV9SVS9zY3JpcHRzL19uYXZNb2JpbGUuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlXzFfUlUvc2NyaXB0cy9fc2Nyb2xsVG9Ub3AuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlXzFfUlUvc2NyaXB0cy9fdGFibGVDaGlsZHJlbi5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfMV9SVS9zY3JpcHRzL190YWJsZUV2ZW50cy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfMV9SVS9zY3JpcHRzL190YWJsZUV2ZW50c1BlcnMuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlXzFfUlUvc2NyaXB0cy9fdGFibGVGYWN0cy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfMV9SVS9zY3JpcHRzL190YWJsZUZhbWlsaWVzLmpzIiwiYXBwL1RFTVBMQVRFUy90ZW1wbGF0ZV8xX1JVL3NjcmlwdHMvX3RhYmxlUGVyc29ucy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfMV9SVS9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxTQUFTLElBQVQsR0FBZ0I7QUFDWixVQUFNLE9BQU8sSUFBYjs7QUFFQSxTQUFLLElBQUwsR0FBWSxZQUFXO0FBQ25CLGNBQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7O0FBRUEsa0JBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixPQUEzQjtBQUNBLGtCQUFVLFNBQVYsQ0FBb0IsR0FBcEIsQ0FBd0IsSUFBeEI7QUFDSCxLQUxEO0FBT0g7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLElBQWpCOzs7O0FDZEE7O0FBRUEsU0FBUyxTQUFULEdBQXFCO0FBQ2pC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QVMsbUJBQVQsR0FBK0I7QUFDN0IsUUFBTSxrQkFBa0IsUUFBUSxvQkFBUixDQUF4QjtBQUNBLFFBQU0sd0JBQXdCLElBQUksZUFBSixFQUE5Qjs7QUFFQSx3QkFBc0IsSUFBdEI7QUFDRDs7QUFFRDs7O0FBR0EsU0FBUyxpQkFBVCxHQUE2QjtBQUMzQixRQUFNLGdCQUFnQixRQUFRLGtCQUFSLENBQXRCO0FBQ0EsUUFBTSxzQkFBc0IsSUFBSSxhQUFKLEVBQTVCOztBQUVBLHNCQUFvQixJQUFwQjtBQUNEOztBQUVELFNBQVMsVUFBVCxHQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIElzSlMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqcycpO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSXNKUztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gTmF2TW9iaWxlKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJy53cGItbW9iaWxlLW1lbnUnKS5zbGlja25hdih7XHJcbiAgICAgICAgcHJlcGVuZFRvOiAnLm5hdmJhci1oZWFkZXInLFxyXG4gICAgICAgIHBhcmVudFRhZzogJ21hcmdvJyxcclxuICAgICAgICBhbGxvd1BhcmVudExpbmtzOiB0cnVlLFxyXG4gICAgICAgIGR1cGxpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgIGNsb3NlZFN5bWJvbDogJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+JyxcclxuICAgICAgICBvcGVuZWRTeW1ib2w6ICc8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+JyxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5hdk1vYmlsZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gU2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSAyMDA7XHJcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gNTAwO1xyXG5cclxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IG9mZnNldCkge1xyXG4gICAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZUluKDQwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKCcuYmFjay10by10b3AnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIGR1cmF0aW9uKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxUb1RvcDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVGFibGVDaGlsZHJlbigpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4gICAgICAkKCcjY2hpbGRyZW4nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIGluZm86IGZhbHNlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBkZWNpbWFsOiBcIixcIixcclxuICAgICAgICAgIHNlYXJjaDogXCLQpNC40LvRjNGC0YA6XCIsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogXCLQntGC0L7QsdGA0LDQttCw0YLRjCDQv9C+IF9NRU5VXyDQtNC10YLQtdC5XCIsXHJcbiAgICAgICAgICBpbmZvOiBcItCf0L7QutCw0LfQsNC90L4g0YEgX1NUQVJUXyDQv9C+IF9FTkRfINC40LcgX1RPVEFMXyDQtNC10YLQtdC5XCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINC00LXRgtC10LlcIixcclxuICAgICAgICAgIGluZm9GaWx0ZXJlZDogXCIo0LLRgdC10LPQviBfTUFYXyDQtNC10YLQtdC5KVwiLFxyXG4gICAgICAgICAgaW5mb1Bvc3RGaXg6IFwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nUmVjb3JkczogXCI8ZGl2IGFsaWduPSdjZW50ZXInPjxpbWcgc3JjPScvb3Blbi1hY2NvdW50L2ltYWdlcy9sb2FkaW5nLmdpZicgYWx0PSfQl9Cw0LPRgNGD0LfQutCwJyBoZWlnaHQ9JzgwJyAvPjwvZGl2PlwiLFxyXG4gICAgICAgICAgemVyb1JlY29yZHM6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIGVtcHR5VGFibGU6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIHBhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiBcItCf0LXRgNCy0YvQuVwiLFxyXG4gICAgICAgICAgICBwcmV2aW91czogXCLQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIG5leHQ6IFwi0JTQsNC70LXQtVwiLFxyXG4gICAgICAgICAgICBsYXN0OiBcItCf0L7RgdC70LXQtNC90LjQuVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXJpYToge1xyXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y5cIixcclxuICAgICAgICAgICAgc29ydERlc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INCyINC/0L7RgNGP0LTQutC1INGD0LHRi9Cy0LDQvdC40Y9cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlQ2hpbGRyZW47XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIFRhYmxlRXZlbnRzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNldmVudHMnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgZG9tOiBcIjwncm93JzwnY29sLW1kLTQnQj48J2NvbC1tZC00J2w+PCdjb2wtbWQtNCdmPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTYnPjwnY29sLW1kLTYnPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTEyJ3Q+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNidpPjwnY29sLW1kLTYncD4+XCIsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgLy8gJ2NvbHZpcydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBkZWNpbWFsOiBcIixcIixcclxuICAgICAgICAgIHNlYXJjaDogXCLQpNC40LvRjNGC0YA6XCIsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogXCLQntGC0L7QsdGA0LDQttCw0YLRjCDQv9C+IF9NRU5VXyDRgdC+0LHRi9GC0LjQuVwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm9GaWx0ZXJlZDogXCIo0LLRgdC10LPQviBfTUFYXyDRgdC+0LHRi9GC0LjQuSlcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZUV2ZW50cztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVGFibGVFdmVudHNQZXJzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNwZXJzX2V2ZW50JykuRGF0YVRhYmxlKHtcclxuICAgICAgICBjb2xSZW9yZGVyOiB0cnVlLFxyXG4gICAgICAgIHNlYXJjaGluZzogZmFsc2UsXHJcbiAgICAgICAgcGFnaW5nOiBmYWxzZSxcclxuICAgICAgICBpbmZvOiBmYWxzZSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgZGVjaW1hbDogXCIsXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IFwi0KTQuNC70YzRgtGAOlwiLFxyXG4gICAgICAgICAgcHJvY2Vzc2luZzogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFwi0J7RgtC+0LHRgNCw0LbQsNGC0Ywg0L/QviBfTUVOVV8g0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm86IFwi0J/QvtC60LDQt9Cw0L3QviDRgSBfU1RBUlRfINC/0L4gX0VORF8g0LjQtyBfVE9UQUxfINGB0L7QsdGL0YLQuNC5XCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINGB0L7QsdGL0YLQuNC5XCIsXHJcbiAgICAgICAgICBpbmZvRmlsdGVyZWQ6IFwiKNCy0YHQtdCz0L4gX01BWF8g0YHQvtCx0YvRgtC40LkpXCIsXHJcbiAgICAgICAgICBpbmZvUG9zdEZpeDogXCJcIixcclxuICAgICAgICAgIGxvYWRpbmdSZWNvcmRzOiBcIjxkaXYgYWxpZ249J2NlbnRlcic+PGltZyBzcmM9Jy9vcGVuLWFjY291bnQvaW1hZ2VzL2xvYWRpbmcuZ2lmJyBhbHQ9J9CX0LDQs9GA0YPQt9C60LAnIGhlaWdodD0nODAnIC8+PC9kaXY+XCIsXHJcbiAgICAgICAgICB6ZXJvUmVjb3JkczogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgZW1wdHlUYWJsZTogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgcGFnaW5hdGU6IHtcclxuICAgICAgICAgICAgZmlyc3Q6IFwi0J/QtdGA0LLRi9C5XCIsXHJcbiAgICAgICAgICAgIHByZXZpb3VzOiBcItCd0LDQt9Cw0LRcIixcclxuICAgICAgICAgICAgbmV4dDogXCLQlNCw0LvQtdC1XCIsXHJcbiAgICAgICAgICAgIGxhc3Q6IFwi0J/QvtGB0LvQtdC00L3QuNC5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhcmlhOiB7XHJcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjlwiLFxyXG4gICAgICAgICAgICBzb3J0RGVzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0LIg0L/QvtGA0Y/QtNC60LUg0YPQsdGL0LLQsNC90LjRj1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFibGVFdmVudHNQZXJzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBUYWJsZUZhY3RzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNmYWN0cycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgcGFnaW5nOiBmYWxzZSxcclxuICAgICAgICBpbmZvOiBmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgb3JkZXI6IFtbNCwgJ2FzYyddXSxcclxuICAgICAgICByb3dHcm91cDoge1xyXG4gICAgICAgICAgZGF0YVNyYzogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINGE0LDQutGC0L7QslwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0YTQsNC60YLQvtCyXCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINGE0LDQutGC0L7QslwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINGE0LDQutGC0L7QsilcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZUZhY3RzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBUYWJsZUZhbWlsaWVzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNmYW1pbGllcycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgY29sUmVvcmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdDogdHJ1ZSxcclxuICAgICAgICBkb206IFwiPCdyb3cnPCdjb2wtbWQtNCdCPjwnY29sLW1kLTQnbD48J2NvbC1tZC00J2Y+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNic+PCdjb2wtbWQtNic+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtMTIndD4+XCIgK1xyXG4gICAgICAgICAgXCI8J3Jvdyc8J2NvbC1tZC02J2k+PCdjb2wtbWQtNidwPj5cIixcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAvLyAnY29sdmlzJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINGB0LXQvNC10LlcIixcclxuICAgICAgICAgIGluZm86IFwi0J/QvtC60LDQt9Cw0L3QviDRgSBfU1RBUlRfINC/0L4gX0VORF8g0LjQtyBfVE9UQUxfINGB0LXQvNGM0LhcIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0YHQtdC80LXQuVwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINGB0LXQvNC10LkpXCIsXHJcbiAgICAgICAgICBpbmZvUG9zdEZpeDogXCJcIixcclxuICAgICAgICAgIGxvYWRpbmdSZWNvcmRzOiBcIjxkaXYgYWxpZ249J2NlbnRlcic+PGltZyBzcmM9Jy9vcGVuLWFjY291bnQvaW1hZ2VzL2xvYWRpbmcuZ2lmJyBhbHQ9J9CX0LDQs9GA0YPQt9C60LAnIGhlaWdodD0nODAnIC8+PC9kaXY+XCIsXHJcbiAgICAgICAgICB6ZXJvUmVjb3JkczogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgZW1wdHlUYWJsZTogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgcGFnaW5hdGU6IHtcclxuICAgICAgICAgICAgZmlyc3Q6IFwi0J/QtdGA0LLRi9C5XCIsXHJcbiAgICAgICAgICAgIHByZXZpb3VzOiBcItCd0LDQt9Cw0LRcIixcclxuICAgICAgICAgICAgbmV4dDogXCLQlNCw0LvQtdC1XCIsXHJcbiAgICAgICAgICAgIGxhc3Q6IFwi0J/QvtGB0LvQtdC00L3QuNC5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhcmlhOiB7XHJcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjlwiLFxyXG4gICAgICAgICAgICBzb3J0RGVzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0LIg0L/QvtGA0Y/QtNC60LUg0YPQsdGL0LLQsNC90LjRj1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFibGVGYW1pbGllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVGFibGVQZXJzb25zKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgLyogUGVyc29ucyBEYXRhVGFibGVcdFx0ZG9tOiAnQmxmcnRpcCcsXHJcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgJCgnI3BlcnNvbnMnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgZG9tOiBcIjwncm93JzwnY29sLW1kLTQnQj48J2NvbC1tZC00J2w+PCdjb2wtbWQtNCdmPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTYnPjwnY29sLW1kLTYnPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTEyJ3Q+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNidpPjwnY29sLW1kLTYncD4+XCIsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgLy8gJ2NvbHZpcydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcIklkXCIsIFwiZGF0YVwiOiBcIklkXCIgfSxcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcItCf0L7Qu1wiLCBcImRhdGFcIjogXCLQn9C+0LtcIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0KTQsNC80LjQu9C40Y9cIiwgXCJkYXRhXCI6IFwi0KTQsNC80LjQu9C40Y9cIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JjQvNGPXCIsIFwiZGF0YVwiOiBcItCY0LzRj1wiIH0sXHJcbiAgICAgICAgICB7IFwidGl0bGVcIjogXCLQntGC0YfQtdGB0YLQstC+XCIsIFwiZGF0YVwiOiBcItCe0YLRh9C10YHRgtCy0L5cIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRj1wiLCBcImRhdGFcIjogXCLQlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPXCIgfSxcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcItCc0LXRgdGC0L4g0YDQvtC20LTQtdC90LjRj1wiLCBcImRhdGFcIjogXCLQnNC10YHRgtC+INGA0L7QttC00LXQvdC40Y9cIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JIg0LbQuNCy0YvRhVwiLCBcImRhdGFcIjogXCLQkiDQttC40LLRi9GFXCIgfSxcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcItCU0LDRgtCwINGB0LzQtdGA0YLQuFwiLCBcImRhdGFcIjogXCLQlNCw0YLQsCDRgdC80LXRgNGC0LhcIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JTQtdC50YHRgtCy0LjRj1wiLCBcImRhdGFcIjogXCLQlNC10LnRgdGC0LLQuNGPXCIsIFwib3JkZXJhYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcInJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93LCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgdGl0bGU9XFxcItCS0YvQsdC+0YAg0LrQvtC80LDQvdC00YtcXFwiPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICAgICZidWxsOyZidWxsOyZidWxsO1xcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICA8L2J1dHRvbj5cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcIiAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcXFwiPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICAgIDxsaSA+PGEgaHJlZj1cXFwidHJlZS90cmVlX3QxX1wiICsgcm93LklkICsgXCIuaHRtbFxcXCI+0JLQvtGB0YXQvtC00Y/RidC10LUg0LTQtdGA0LXQstC+PC9hPjwvbGk+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgICAgPGxpID48YSBocmVmPVxcXCJ0cmVlL3RyZWVfdDJfXCIgKyByb3cuSWQgKyBcIi5odG1sXFxcIj7QndC40YHRhdC+0LTRj9GJ0LXQtSDQtNC10YDQtdCy0L48L2E+PC9saT5cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcIiAgICA8bGkgPjxhIGhyZWY9XFxcInRyZWUvdHJlZV90M19cIiArIHJvdy5JZCArIFwiLmh0bWxcXFwiPtCU0LXRgNC10LLQviBcXFwi0JHQsNCx0L7Rh9C60LBcXFwiPC9hPjwvbGk+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgICAgPGxpID48YSBocmVmPVxcXCJ0cmVlL3RyZWVfdDRfXCIgKyByb3cuSWQgKyBcIi5odG1sXFxcIj7QmtGA0YPQs9C+0LLQsNGPINC00LjQsNCz0YDQsNC80LzQsDwvYT48L2xpPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICA8L3VsPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINC/0LXRgNGB0L7QvVwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0L/QtdGA0YHQvtC9XCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINC/0LXRgNGB0L7QvVwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINC/0LXRgNGB0L7QvSlcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFibGVQZXJzb25zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgSlMgaXMgZW5hYmxlZCBpbiBicm93c2VyXHJcbiAqIEBzZWUgbW9kdWxlOmlzSnNcclxuICovXHJcbmZ1bmN0aW9uIGluaXRJc0pTKCkge1xyXG4gIGNvbnN0IElzSlMgPSByZXF1aXJlKCcuL19pc0pTJyk7XHJcbiAgY29uc3QgaXNKU0Z1bmMgPSBuZXcgSXNKUygpO1xyXG5cclxuICBpc0pTRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOYXZNb2JpbGVcclxuICovXHJcbmZ1bmN0aW9uIGluaXROYXZNb2JpbGUoKSB7XHJcbiAgY29uc3QgTmF2TW9iaWxlID0gcmVxdWlyZSgnLi9fbmF2TW9iaWxlJyk7XHJcbiAgY29uc3QgaXNOYXZNb2JpbGVGdW5jID0gbmV3IE5hdk1vYmlsZSgpO1xyXG5cclxuICBpc05hdk1vYmlsZUZ1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogU2Nyb2xsVG9Ub3BcclxuICovXHJcbmZ1bmN0aW9uIGluaXRTY3JvbGxUb1RvcCgpIHtcclxuICBjb25zdCBTY3JvbGxUb1RvcCA9IHJlcXVpcmUoJy4vX3Njcm9sbFRvVG9wJyk7XHJcbiAgY29uc3QgaXNTY3JvbGxUb1RvcEZ1bmMgPSBuZXcgU2Nyb2xsVG9Ub3AoKTtcclxuXHJcbiAgaXNTY3JvbGxUb1RvcEZ1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogUGVyc29ucyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlUGVyc29ucygpIHtcclxuICBjb25zdCBUYWJsZVBlcnNvbnMgPSByZXF1aXJlKCcuL190YWJsZVBlcnNvbnMnKTtcclxuICBjb25zdCBpc1RhYmxlUGVyc29uc0Z1bmMgPSBuZXcgVGFibGVQZXJzb25zKCk7XHJcblxyXG4gIGlzVGFibGVQZXJzb25zRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGYW1pbGllcyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlRmFtaWxpZXMoKSB7XHJcbiAgY29uc3QgVGFibGVGYW1pbGllcyA9IHJlcXVpcmUoJy4vX3RhYmxlRmFtaWxpZXMnKTtcclxuICBjb25zdCBpc1RhYmxlRmFtaWxpZXNGdW5jID0gbmV3IFRhYmxlRmFtaWxpZXMoKTtcclxuXHJcbiAgaXNUYWJsZUZhbWlsaWVzRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVudHMgdGFibGVcclxuICovXHJcbmZ1bmN0aW9uIGluaXRUYWJsZUV2ZW50cygpIHtcclxuICBjb25zdCBUYWJsZUV2ZW50cyA9IHJlcXVpcmUoJy4vX3RhYmxlRXZlbnRzJyk7XHJcbiAgY29uc3QgaXNUYWJsZUV2ZW50c0Z1bmMgPSBuZXcgVGFibGVFdmVudHMoKTtcclxuXHJcbiAgaXNUYWJsZUV2ZW50c0Z1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogRmFjdHMgdGFibGVcclxuICovXHJcbmZ1bmN0aW9uIGluaXRUYWJsZUZhY3RzKCkge1xyXG4gIGNvbnN0IFRhYmxlRmFjdHMgPSByZXF1aXJlKCcuL190YWJsZUZhY3RzJyk7XHJcbiAgY29uc3QgaXNUYWJsZUZhY3RzRnVuYyA9IG5ldyBUYWJsZUZhY3RzKCk7XHJcblxyXG4gIGlzVGFibGVGYWN0c0Z1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogUGVyc29uYWwgRXZlbnRzIHRhYmxlXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0VGFibGVFdmVudHNQZXJzKCkge1xyXG4gIGNvbnN0IFRhYmxlRXZlbnRzUGVycyA9IHJlcXVpcmUoJy4vX3RhYmxlRXZlbnRzUGVycycpO1xyXG4gIGNvbnN0IGlzVGFibGVFdmVudHNQZXJzRnVuYyA9IG5ldyBUYWJsZUV2ZW50c1BlcnMoKTtcclxuXHJcbiAgaXNUYWJsZUV2ZW50c1BlcnNGdW5jLmluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBlcnNvbmFsIEV2ZW50cyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlQ2hpbGRyZW4oKSB7XHJcbiAgY29uc3QgVGFibGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vX3RhYmxlQ2hpbGRyZW4nKTtcclxuICBjb25zdCBpc1RhYmxlQ2hpbGRyZW5GdW5jID0gbmV3IFRhYmxlQ2hpbGRyZW4oKTtcclxuXHJcbiAgaXNUYWJsZUNoaWxkcmVuRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbFNjcmlwdHMoKSB7XHJcbiAgaW5pdElzSlMoKTtcclxuICBpbml0TmF2TW9iaWxlKCk7XHJcbiAgaW5pdFNjcm9sbFRvVG9wKCk7XHJcbiAgaW5pdFRhYmxlUGVyc29ucygpO1xyXG4gIGluaXRUYWJsZUZhbWlsaWVzKCk7XHJcbiAgaW5pdFRhYmxlRXZlbnRzKCk7XHJcbiAgaW5pdFRhYmxlRmFjdHMoKTtcclxuICBpbml0VGFibGVFdmVudHNQZXJzKCk7XHJcbiAgaW5pdFRhYmxlQ2hpbGRyZW4oKTtcclxufVxyXG5cclxuYWxsU2NyaXB0cygpO1xyXG5cclxuIl19
