(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

function Carousels() {
  const self = this;

  self.init = function () {
    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    // Documents in pages
    $(".projects-carousel").owlCarousel({
      nav: true,
      dots: false,
      loop: true,
      autoplayHoverPause: true,
      autoplay: true,
      autoplayTimeout: 3000,
      items: 4,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });

    // Person avatar
    $('.touch-slider').each(function () {
      const owl = $(this);
      owl.owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1
      });
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
      caption: function () {
        let caption = $(this).parent('.portfolio-thumb').next('.portfolio-details') || '';

        return caption.length ? caption : '';
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL19jYXJvdXNlbHMuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL19saWdodGJveGVzLmpzIiwiYXBwL1RFTVBMQVRFUy90ZW1wbGF0ZV9zaW1wbGVfUlUvc2NyaXB0cy9fc2Nyb2xsVG9Ub3AuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL190YWJsZUNoaWxkcmVuLmpzIiwiYXBwL1RFTVBMQVRFUy90ZW1wbGF0ZV9zaW1wbGVfUlUvc2NyaXB0cy9fdGFibGVFdmVudHMuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL190YWJsZUV2ZW50c1BlcnMuanMiLCJhcHAvVEVNUExBVEVTL3RlbXBsYXRlX3NpbXBsZV9SVS9zY3JpcHRzL190YWJsZUZhY3RzLmpzIiwiYXBwL1RFTVBMQVRFUy90ZW1wbGF0ZV9zaW1wbGVfUlUvc2NyaXB0cy9fdGFibGVGYW1pbGllcy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfc2ltcGxlX1JVL3NjcmlwdHMvX3RhYmxlUGVyc29ucy5qcyIsImFwcC9URU1QTEFURVMvdGVtcGxhdGVfc2ltcGxlX1JVL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTs7QUFFQSxTQUFTLFNBQVQsR0FBcUI7QUFDakIsUUFBTSxPQUFPLElBQWI7O0FBRUEsT0FBSyxJQUFMLEdBQVksWUFBVztBQUNyQixVQUFNLElBQUksUUFBUSxRQUFSLENBQVY7O0FBRUE7QUFDQSxNQUFFLG9CQUFGLEVBQXdCLFdBQXhCLENBQW9DO0FBQ2xDLFdBQU0sSUFENEI7QUFFbEMsWUFBTSxLQUY0QjtBQUdsQyxZQUFNLElBSDRCO0FBSWxDLDBCQUFvQixJQUpjO0FBS2xDLGdCQUFVLElBTHdCO0FBTWxDLHVCQUFpQixJQU5pQjtBQU9sQyxhQUFRLENBUDBCO0FBUWxDLGtCQUFXO0FBQ1QsV0FBRTtBQUNBLGlCQUFPO0FBRFAsU0FETztBQUlULGFBQUk7QUFDRixpQkFBTztBQURMLFNBSks7QUFPVCxhQUFJO0FBQ0YsaUJBQU87QUFETDtBQVBLO0FBUnVCLEtBQXBDOztBQXFCQTtBQUNBLE1BQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixZQUFVO0FBQ2hDLFlBQU0sTUFBTSxFQUFFLElBQUYsQ0FBWjtBQUNBLFVBQUksV0FBSixDQUFnQjtBQUNkLGFBQU0sSUFEUTtBQUVkLGNBQU0sS0FGUTtBQUdkLGNBQU0sSUFIUTtBQUlkLDRCQUFvQixJQUpOO0FBS2Qsa0JBQVUsSUFMSTtBQU1kLHlCQUFpQixJQU5IO0FBT2QsZUFBUTtBQVBNLE9BQWhCO0FBU0QsS0FYRDtBQVlELEdBdENEO0FBdUNIOztBQUVELE9BQU8sT0FBUCxHQUFpQixTQUFqQjs7Ozs7O0FDOUNBOztBQUVBLFNBQVMsVUFBVCxHQUFzQjtBQUNsQixRQUFNLE9BQU8sSUFBYjs7QUFFQSxPQUFLLElBQUwsR0FBWSxZQUFXO0FBQ3JCLFVBQU0sSUFBSSxRQUFRLFFBQVIsQ0FBVjs7QUFFQSxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLGVBQVUsWUFBVztBQUNuQixZQUFJLFVBQVUsRUFBRSxJQUFGLEVBQVEsTUFBUixDQUFlLGtCQUFmLEVBQW1DLElBQW5DLENBQXdDLG9CQUF4QyxLQUFpRSxFQUEvRTs7QUFFQSxlQUFPLFFBQVEsTUFBUixHQUFpQixPQUFqQixHQUEyQixFQUFsQztBQUNEO0FBTHFCLEtBQXhCO0FBT0QsR0FWRDtBQVdIOztBQUVELE9BQU8sT0FBUCxHQUFpQixVQUFqQjs7Ozs7O0FDbEJBOztBQUVBLFNBQVMsV0FBVCxHQUF1QjtBQUNuQixRQUFNLE9BQU8sSUFBYjs7QUFFQSxPQUFLLElBQUwsR0FBWSxZQUFXO0FBQ3JCLFVBQU0sSUFBSSxRQUFRLFFBQVIsQ0FBVjtBQUNBLFVBQU0sU0FBUyxHQUFmO0FBQ0EsVUFBTSxXQUFXLEdBQWpCOztBQUVBLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMxQixVQUFJLEVBQUUsSUFBRixFQUFRLFNBQVIsS0FBc0IsTUFBMUIsRUFBa0M7QUFDaEMsVUFBRSxjQUFGLEVBQWtCLE1BQWxCLENBQXlCLEdBQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsVUFBRSxjQUFGLEVBQWtCLE9BQWxCLENBQTBCLEdBQTFCO0FBQ0Q7QUFDRixLQU5EO0FBT0EsTUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFVBQVMsS0FBVCxFQUFnQjtBQUN0QyxZQUFNLGNBQU47QUFDQSxRQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0IsRUFBQyxXQUFXLENBQVosRUFBeEIsRUFBd0MsUUFBeEM7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUpEO0FBS0QsR0FqQkQ7QUFtQkg7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7Ozs7QUMxQkE7O0FBRUEsU0FBUyxhQUFULEdBQXlCO0FBQ3JCLFFBQU0sT0FBTyxJQUFiOztBQUVBLE9BQUssSUFBTCxHQUFZLFlBQVc7QUFDckIsVUFBTSxJQUFJLFFBQVEsUUFBUixDQUFWOztBQUVBLE1BQUUsV0FBRixFQUFlLFNBQWYsQ0FBeUI7QUFDdkIsa0JBQVksSUFEVztBQUV2QixpQkFBVyxLQUZZO0FBR3ZCLGNBQVEsS0FIZTtBQUl2QixZQUFNLEtBSmlCO0FBS3ZCLGdCQUFVO0FBQ1IsaUJBQVMsR0FERDtBQUVSLGdCQUFRLFNBRkE7QUFHUixvQkFBWSxjQUhKO0FBSVIsb0JBQVksNEJBSko7QUFLUixjQUFNLDhDQUxFO0FBTVIsbUJBQVcsV0FOSDtBQU9SLHNCQUFjLHFCQVBOO0FBUVIscUJBQWEsRUFSTDtBQVNSLHdCQUFnQixxR0FUUjtBQVVSLHFCQUFhLG1CQVZMO0FBV1Isb0JBQVksbUJBWEo7QUFZUixrQkFBVTtBQUNSLGlCQUFPLFFBREM7QUFFUixvQkFBVSxPQUZGO0FBR1IsZ0JBQU0sT0FIRTtBQUlSLGdCQUFNO0FBSkUsU0FaRjtBQWtCUixjQUFNO0FBQ0oseUJBQWUsc0RBRFg7QUFFSiwwQkFBZ0I7QUFGWjtBQWxCRTtBQUxhLEtBQXpCO0FBNkJELEdBaENEO0FBaUNIOztBQUVELE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7Ozs7O0FDeENBOztBQUVBLFNBQVMsV0FBVCxHQUF1QjtBQUNuQixRQUFNLE9BQU8sSUFBYjs7QUFFQSxPQUFLLElBQUwsR0FBWSxZQUFXO0FBQ3JCLFVBQU0sSUFBSSxRQUFRLFFBQVIsQ0FBVjs7QUFFQSxNQUFFLFNBQUYsRUFBYSxTQUFiLENBQXVCO0FBQ3JCLGtCQUFZLElBRFM7QUFFckIsa0JBQVksSUFGUztBQUdyQixjQUFRLElBSGE7QUFJckIsV0FBSyxtREFDSCxpQ0FERyxHQUVILHVCQUZHLEdBR0gsbUNBUG1CO0FBUXJCLGVBQVM7QUFDUDtBQURPLE9BUlk7QUFXckIsZ0JBQVU7QUFDUixpQkFBUyxHQUREO0FBRVIsZ0JBQVEsU0FGQTtBQUdSLG9CQUFZLGNBSEo7QUFJUixvQkFBWSw4QkFKSjtBQUtSLGNBQU0sZ0RBTEU7QUFNUixtQkFBVyxhQU5IO0FBT1Isc0JBQWMsdUJBUE47QUFRUixxQkFBYSxFQVJMO0FBU1Isd0JBQWdCLHFHQVRSO0FBVVIscUJBQWEsbUJBVkw7QUFXUixvQkFBWSxtQkFYSjtBQVlSLGtCQUFVO0FBQ1IsaUJBQU8sUUFEQztBQUVSLG9CQUFVLE9BRkY7QUFHUixnQkFBTSxPQUhFO0FBSVIsZ0JBQU07QUFKRSxTQVpGO0FBa0JSLGNBQU07QUFDSix5QkFBZSxzREFEWDtBQUVKLDBCQUFnQjtBQUZaO0FBbEJFO0FBWFcsS0FBdkI7QUFtQ0QsR0F0Q0Q7QUF1Q0g7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7Ozs7QUM5Q0E7O0FBRUEsU0FBUyxlQUFULEdBQTJCO0FBQ3ZCLFFBQU0sT0FBTyxJQUFiOztBQUVBLE9BQUssSUFBTCxHQUFZLFlBQVc7QUFDckIsVUFBTSxJQUFJLFFBQVEsUUFBUixDQUFWOztBQUVBLE1BQUUsYUFBRixFQUFpQixTQUFqQixDQUEyQjtBQUN6QixrQkFBWSxJQURhO0FBRXpCLGlCQUFXLEtBRmM7QUFHekIsY0FBUSxLQUhpQjtBQUl6QixZQUFNLEtBSm1CO0FBS3pCLGdCQUFVO0FBQ1IsaUJBQVMsR0FERDtBQUVSLGdCQUFRLFNBRkE7QUFHUixvQkFBWSxjQUhKO0FBSVIsb0JBQVksOEJBSko7QUFLUixjQUFNLGdEQUxFO0FBTVIsbUJBQVcsYUFOSDtBQU9SLHNCQUFjLHVCQVBOO0FBUVIscUJBQWEsRUFSTDtBQVNSLHdCQUFnQixxR0FUUjtBQVVSLHFCQUFhLG1CQVZMO0FBV1Isb0JBQVksbUJBWEo7QUFZUixrQkFBVTtBQUNSLGlCQUFPLFFBREM7QUFFUixvQkFBVSxPQUZGO0FBR1IsZ0JBQU0sT0FIRTtBQUlSLGdCQUFNO0FBSkUsU0FaRjtBQWtCUixjQUFNO0FBQ0oseUJBQWUsc0RBRFg7QUFFSiwwQkFBZ0I7QUFGWjtBQWxCRTtBQUxlLEtBQTNCO0FBNkJELEdBaENEO0FBaUNIOztBQUVELE9BQU8sT0FBUCxHQUFpQixlQUFqQjs7Ozs7O0FDeENBOztBQUVBLFNBQVMsVUFBVCxHQUFzQjtBQUNsQixRQUFNLE9BQU8sSUFBYjs7QUFFQSxPQUFLLElBQUwsR0FBWSxZQUFXO0FBQ3JCLFVBQU0sSUFBSSxRQUFRLFFBQVIsQ0FBVjs7QUFFQSxNQUFFLFFBQUYsRUFBWSxTQUFaLENBQXNCO0FBQ3BCLGNBQVEsS0FEWTtBQUVwQixZQUFNLEtBRmM7QUFHcEIsa0JBQVksSUFIUTtBQUlwQixrQkFBWSxJQUpRO0FBS3BCLGFBQU8sQ0FBQyxDQUFDLENBQUQsRUFBSSxLQUFKLENBQUQsQ0FMYTtBQU1wQixnQkFBVTtBQUNSLGlCQUFTO0FBREQsT0FOVTtBQVNwQixnQkFBVTtBQUNSLGlCQUFTLEdBREQ7QUFFUixnQkFBUSxTQUZBO0FBR1Isb0JBQVksY0FISjtBQUlSLG9CQUFZLDZCQUpKO0FBS1IsY0FBTSwrQ0FMRTtBQU1SLG1CQUFXLFlBTkg7QUFPUixzQkFBYyxzQkFQTjtBQVFSLHFCQUFhLEVBUkw7QUFTUix3QkFBZ0IscUdBVFI7QUFVUixxQkFBYSxtQkFWTDtBQVdSLG9CQUFZLG1CQVhKO0FBWVIsa0JBQVU7QUFDUixpQkFBTyxRQURDO0FBRVIsb0JBQVUsT0FGRjtBQUdSLGdCQUFNLE9BSEU7QUFJUixnQkFBTTtBQUpFLFNBWkY7QUFrQlIsY0FBTTtBQUNKLHlCQUFlLHNEQURYO0FBRUosMEJBQWdCO0FBRlo7QUFsQkU7QUFUVSxLQUF0QjtBQWlDRCxHQXBDRDtBQXFDSDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsVUFBakI7Ozs7OztBQzVDQTs7QUFFQSxTQUFTLGFBQVQsR0FBeUI7QUFDckIsUUFBTSxPQUFPLElBQWI7O0FBRUEsT0FBSyxJQUFMLEdBQVksWUFBVztBQUNyQixVQUFNLElBQUksUUFBUSxRQUFSLENBQVY7O0FBRUEsTUFBRSxXQUFGLEVBQWUsU0FBZixDQUF5QjtBQUN2QixrQkFBWSxJQURXO0FBRXZCLGtCQUFZLElBRlc7QUFHdkIsY0FBUSxJQUhlO0FBSXZCLFdBQUssbURBQ0gsaUNBREcsR0FFSCx1QkFGRyxHQUdILG1DQVBxQjtBQVF2QixlQUFTO0FBQ1A7QUFETyxPQVJjO0FBV3ZCLGdCQUFVO0FBQ1IsaUJBQVMsR0FERDtBQUVSLGdCQUFRLFNBRkE7QUFHUixvQkFBWSxjQUhKO0FBSVIsb0JBQVksNEJBSko7QUFLUixjQUFNLDhDQUxFO0FBTVIsbUJBQVcsV0FOSDtBQU9SLHNCQUFjLHFCQVBOO0FBUVIscUJBQWEsRUFSTDtBQVNSLHdCQUFnQixxR0FUUjtBQVVSLHFCQUFhLG1CQVZMO0FBV1Isb0JBQVksbUJBWEo7QUFZUixrQkFBVTtBQUNSLGlCQUFPLFFBREM7QUFFUixvQkFBVSxPQUZGO0FBR1IsZ0JBQU0sT0FIRTtBQUlSLGdCQUFNO0FBSkUsU0FaRjtBQWtCUixjQUFNO0FBQ0oseUJBQWUsc0RBRFg7QUFFSiwwQkFBZ0I7QUFGWjtBQWxCRTtBQVhhLEtBQXpCO0FBbUNELEdBdENEO0FBdUNIOztBQUVELE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7Ozs7O0FDOUNBOztBQUVBLFNBQVMsWUFBVCxHQUF3QjtBQUNwQixRQUFNLE9BQU8sSUFBYjs7QUFFQSxPQUFLLElBQUwsR0FBWSxZQUFXO0FBQ3JCLFVBQU0sSUFBSSxRQUFRLFFBQVIsQ0FBVjs7QUFFQTtBQUNBOztBQUVBLE1BQUUsVUFBRixFQUFjLFNBQWQsQ0FBd0I7QUFDdEIsa0JBQVksSUFEVTtBQUV0QixrQkFBWSxJQUZVO0FBR3RCLGNBQVEsSUFIYztBQUl0QixXQUFLLG1EQUNILGlDQURHLEdBRUgsdUJBRkcsR0FHSCxtQ0FQb0I7QUFRdEIsZUFBUztBQUNQO0FBRE8sT0FSYTtBQVd0QixlQUFTLENBQ1AsRUFBRSxTQUFTLElBQVgsRUFBaUIsUUFBUSxJQUF6QixFQURPLEVBRVAsRUFBRSxTQUFTLEtBQVgsRUFBa0IsUUFBUSxLQUExQixFQUZPLEVBR1AsRUFBRSxTQUFTLFNBQVgsRUFBc0IsUUFBUSxTQUE5QixFQUhPLEVBSVAsRUFBRSxTQUFTLEtBQVgsRUFBa0IsUUFBUSxLQUExQixFQUpPLEVBS1AsRUFBRSxTQUFTLFVBQVgsRUFBdUIsUUFBUSxVQUEvQixFQUxPLEVBTVAsRUFBRSxTQUFTLGVBQVgsRUFBNEIsUUFBUSxlQUFwQyxFQU5PLEVBT1AsRUFBRSxTQUFTLGdCQUFYLEVBQTZCLFFBQVEsZ0JBQXJDLEVBUE8sRUFRUCxFQUFFLFNBQVMsU0FBWCxFQUFzQixRQUFRLFNBQTlCLEVBUk8sRUFTUCxFQUFFLFNBQVMsYUFBWCxFQUEwQixRQUFRLGFBQWxDLEVBVE8sRUFVUCxFQUFFLFNBQVMsVUFBWCxFQUF1QixRQUFRLFVBQS9CLEVBQTJDLGFBQWEsS0FBeEQ7QUFDRSxrQkFBVSxVQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDekMsaUJBQU8sK0JBQ0wsdUtBREssR0FFTCwwQkFGSyxHQUdMLGVBSEssR0FJTCxzREFKSyxHQUtMLGtDQUxLLEdBS2dDLElBQUksRUFMcEMsR0FLeUMsc0NBTHpDLEdBTUwsa0NBTkssR0FNZ0MsSUFBSSxFQU5wQyxHQU15QyxzQ0FOekMsR0FPTCxrQ0FQSyxHQU9nQyxJQUFJLEVBUHBDLEdBT3lDLHVDQVB6QyxHQVFMLGtDQVJLLEdBUWdDLElBQUksRUFScEMsR0FReUMsdUNBUnpDLEdBU0wsV0FUSyxHQVVMLFFBVkY7QUFXQTtBQUNEO0FBZEgsT0FWTyxDQVhhO0FBc0N0QixnQkFBVTtBQUNSLGlCQUFTLEdBREQ7QUFFUixnQkFBUSxTQUZBO0FBR1Isb0JBQVksY0FISjtBQUlSLG9CQUFZLDZCQUpKO0FBS1IsY0FBTSwrQ0FMRTtBQU1SLG1CQUFXLFlBTkg7QUFPUixzQkFBYyxzQkFQTjtBQVFSLHFCQUFhLEVBUkw7QUFTUix3QkFBZ0IscUdBVFI7QUFVUixxQkFBYSxtQkFWTDtBQVdSLG9CQUFZLG1CQVhKO0FBWVIsa0JBQVU7QUFDUixpQkFBTyxRQURDO0FBRVIsb0JBQVUsT0FGRjtBQUdSLGdCQUFNLE9BSEU7QUFJUixnQkFBTTtBQUpFLFNBWkY7QUFrQlIsY0FBTTtBQUNKLHlCQUFlLHNEQURYO0FBRUosMEJBQWdCO0FBRlo7QUFsQkU7QUF0Q1ksS0FBeEI7QUE4REQsR0FwRUQ7QUFzRUg7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLFlBQWpCOzs7Ozs7QUM3RUE7O0FBRUEsTUFBTSxJQUFJLFFBQVEsUUFBUixDQUFWOztBQUVBOzs7QUFHQSxTQUFTLGVBQVQsR0FBMkI7QUFDekIsUUFBTSxjQUFjLFFBQVEsZ0JBQVIsQ0FBcEI7QUFDQSxRQUFNLG9CQUFvQixJQUFJLFdBQUosRUFBMUI7O0FBRUEsb0JBQWtCLElBQWxCO0FBQ0Q7O0FBRUQ7OztBQUdBLFNBQVMsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBTSxlQUFlLFFBQVEsaUJBQVIsQ0FBckI7QUFDQSxRQUFNLHFCQUFxQixJQUFJLFlBQUosRUFBM0I7O0FBRUEscUJBQW1CLElBQW5CO0FBQ0Q7O0FBRUQ7OztBQUdBLFNBQVMsaUJBQVQsR0FBNkI7QUFDM0IsUUFBTSxnQkFBZ0IsUUFBUSxrQkFBUixDQUF0QjtBQUNBLFFBQU0sc0JBQXNCLElBQUksYUFBSixFQUE1Qjs7QUFFQSxzQkFBb0IsSUFBcEI7QUFDRDs7QUFFRDs7O0FBR0EsU0FBUyxlQUFULEdBQTJCO0FBQ3pCLFFBQU0sY0FBYyxRQUFRLGdCQUFSLENBQXBCO0FBQ0EsUUFBTSxvQkFBb0IsSUFBSSxXQUFKLEVBQTFCOztBQUVBLG9CQUFrQixJQUFsQjtBQUNEOztBQUVEOzs7QUFHQSxTQUFTLGNBQVQsR0FBMEI7QUFDeEIsUUFBTSxhQUFhLFFBQVEsZUFBUixDQUFuQjtBQUNBLFFBQU0sbUJBQW1CLElBQUksVUFBSixFQUF6Qjs7QUFFQSxtQkFBaUIsSUFBakI7QUFDRDs7QUFFRDs7O0FBR0EsU0FBUyxtQkFBVCxHQUErQjtBQUM3QixRQUFNLGtCQUFrQixRQUFRLG9CQUFSLENBQXhCO0FBQ0EsUUFBTSx3QkFBd0IsSUFBSSxlQUFKLEVBQTlCOztBQUVBLHdCQUFzQixJQUF0QjtBQUNEOztBQUVEOzs7QUFHQSxTQUFTLGlCQUFULEdBQTZCO0FBQzNCLFFBQU0sZ0JBQWdCLFFBQVEsa0JBQVIsQ0FBdEI7QUFDQSxRQUFNLHNCQUFzQixJQUFJLGFBQUosRUFBNUI7O0FBRUEsc0JBQW9CLElBQXBCO0FBQ0Q7O0FBRUQ7OztBQUdBLFNBQVMsYUFBVCxHQUF5QjtBQUN2QixRQUFNLFlBQVksUUFBUSxjQUFSLENBQWxCO0FBQ0EsUUFBTSxrQkFBa0IsSUFBSSxTQUFKLEVBQXhCOztBQUVBLGtCQUFnQixJQUFoQjtBQUNEOztBQUVEOzs7QUFHQSxTQUFTLGNBQVQsR0FBMEI7QUFDeEIsUUFBTSxhQUFhLFFBQVEsZUFBUixDQUFuQjtBQUNBLFFBQU0sbUJBQW1CLElBQUksVUFBSixFQUF6Qjs7QUFFQSxtQkFBaUIsSUFBakI7QUFDRDs7QUFFRDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFVBQVQsR0FBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIENhcm91c2VscygpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4gICAgICAvLyBEb2N1bWVudHMgaW4gcGFnZXNcclxuICAgICAgJChcIi5wcm9qZWN0cy1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbmF2IDogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDMwMDAsXHJcbiAgICAgICAgaXRlbXMgOiA0LFxyXG4gICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDYwMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDk5Mjp7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBQZXJzb24gYXZhdGFyXHJcbiAgICAgICQoJy50b3VjaC1zbGlkZXInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3Qgb3dsID0gJCh0aGlzKTtcclxuICAgICAgICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgbmF2IDogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiAzMDAwLFxyXG4gICAgICAgICAgaXRlbXMgOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDYXJvdXNlbHM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIExpZ2h0Ym94ZXMoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuICAgICAgJCgnLmxpZ2h0Ym94JykuZmFuY3lib3goe1xyXG4gICAgICAgIGNhcHRpb24gOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGxldCBjYXB0aW9uID0gJCh0aGlzKS5wYXJlbnQoJy5wb3J0Zm9saW8tdGh1bWInKS5uZXh0KCcucG9ydGZvbGlvLWRldGFpbHMnKSB8fCAnJztcclxuXHJcbiAgICAgICAgICByZXR1cm4gY2FwdGlvbi5sZW5ndGggPyBjYXB0aW9uIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGlnaHRib3hlcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gU2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSAyMDA7XHJcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gNTAwO1xyXG5cclxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IG9mZnNldCkge1xyXG4gICAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZUluKDQwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKCcuYmFjay10by10b3AnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIGR1cmF0aW9uKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxUb1RvcDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVGFibGVDaGlsZHJlbigpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4gICAgICAkKCcjY2hpbGRyZW4nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIGluZm86IGZhbHNlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBkZWNpbWFsOiBcIixcIixcclxuICAgICAgICAgIHNlYXJjaDogXCLQpNC40LvRjNGC0YA6XCIsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogXCLQntGC0L7QsdGA0LDQttCw0YLRjCDQv9C+IF9NRU5VXyDQtNC10YLQtdC5XCIsXHJcbiAgICAgICAgICBpbmZvOiBcItCf0L7QutCw0LfQsNC90L4g0YEgX1NUQVJUXyDQv9C+IF9FTkRfINC40LcgX1RPVEFMXyDQtNC10YLQtdC5XCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINC00LXRgtC10LlcIixcclxuICAgICAgICAgIGluZm9GaWx0ZXJlZDogXCIo0LLRgdC10LPQviBfTUFYXyDQtNC10YLQtdC5KVwiLFxyXG4gICAgICAgICAgaW5mb1Bvc3RGaXg6IFwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nUmVjb3JkczogXCI8ZGl2IGFsaWduPSdjZW50ZXInPjxpbWcgc3JjPScvb3Blbi1hY2NvdW50L2ltYWdlcy9sb2FkaW5nLmdpZicgYWx0PSfQl9Cw0LPRgNGD0LfQutCwJyBoZWlnaHQ9JzgwJyAvPjwvZGl2PlwiLFxyXG4gICAgICAgICAgemVyb1JlY29yZHM6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIGVtcHR5VGFibGU6IFwi0JTQsNC90L3Ri9C1INC90LUg0L3QsNC50LTQtdC90YtcIixcclxuICAgICAgICAgIHBhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiBcItCf0LXRgNCy0YvQuVwiLFxyXG4gICAgICAgICAgICBwcmV2aW91czogXCLQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIG5leHQ6IFwi0JTQsNC70LXQtVwiLFxyXG4gICAgICAgICAgICBsYXN0OiBcItCf0L7RgdC70LXQtNC90LjQuVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXJpYToge1xyXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y5cIixcclxuICAgICAgICAgICAgc29ydERlc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INCyINC/0L7RgNGP0LTQutC1INGD0LHRi9Cy0LDQvdC40Y9cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlQ2hpbGRyZW47XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIFRhYmxlRXZlbnRzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNldmVudHMnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgZG9tOiBcIjwncm93JzwnY29sLW1kLTQnQj48J2NvbC1tZC00J2w+PCdjb2wtbWQtNCdmPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTYnPjwnY29sLW1kLTYnPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTEyJ3Q+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNidpPjwnY29sLW1kLTYncD4+XCIsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgLy8gJ2NvbHZpcydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBkZWNpbWFsOiBcIixcIixcclxuICAgICAgICAgIHNlYXJjaDogXCLQpNC40LvRjNGC0YA6XCIsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogXCLQntGC0L7QsdGA0LDQttCw0YLRjCDQv9C+IF9NRU5VXyDRgdC+0LHRi9GC0LjQuVwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm9GaWx0ZXJlZDogXCIo0LLRgdC10LPQviBfTUFYXyDRgdC+0LHRi9GC0LjQuSlcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZUV2ZW50cztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVGFibGVFdmVudHNQZXJzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNwZXJzX2V2ZW50JykuRGF0YVRhYmxlKHtcclxuICAgICAgICBjb2xSZW9yZGVyOiB0cnVlLFxyXG4gICAgICAgIHNlYXJjaGluZzogZmFsc2UsXHJcbiAgICAgICAgcGFnaW5nOiBmYWxzZSxcclxuICAgICAgICBpbmZvOiBmYWxzZSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgZGVjaW1hbDogXCIsXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IFwi0KTQuNC70YzRgtGAOlwiLFxyXG4gICAgICAgICAgcHJvY2Vzc2luZzogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFwi0J7RgtC+0LHRgNCw0LbQsNGC0Ywg0L/QviBfTUVOVV8g0YHQvtCx0YvRgtC40LlcIixcclxuICAgICAgICAgIGluZm86IFwi0J/QvtC60LDQt9Cw0L3QviDRgSBfU1RBUlRfINC/0L4gX0VORF8g0LjQtyBfVE9UQUxfINGB0L7QsdGL0YLQuNC5XCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINGB0L7QsdGL0YLQuNC5XCIsXHJcbiAgICAgICAgICBpbmZvRmlsdGVyZWQ6IFwiKNCy0YHQtdCz0L4gX01BWF8g0YHQvtCx0YvRgtC40LkpXCIsXHJcbiAgICAgICAgICBpbmZvUG9zdEZpeDogXCJcIixcclxuICAgICAgICAgIGxvYWRpbmdSZWNvcmRzOiBcIjxkaXYgYWxpZ249J2NlbnRlcic+PGltZyBzcmM9Jy9vcGVuLWFjY291bnQvaW1hZ2VzL2xvYWRpbmcuZ2lmJyBhbHQ9J9CX0LDQs9GA0YPQt9C60LAnIGhlaWdodD0nODAnIC8+PC9kaXY+XCIsXHJcbiAgICAgICAgICB6ZXJvUmVjb3JkczogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgZW1wdHlUYWJsZTogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgcGFnaW5hdGU6IHtcclxuICAgICAgICAgICAgZmlyc3Q6IFwi0J/QtdGA0LLRi9C5XCIsXHJcbiAgICAgICAgICAgIHByZXZpb3VzOiBcItCd0LDQt9Cw0LRcIixcclxuICAgICAgICAgICAgbmV4dDogXCLQlNCw0LvQtdC1XCIsXHJcbiAgICAgICAgICAgIGxhc3Q6IFwi0J/QvtGB0LvQtdC00L3QuNC5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhcmlhOiB7XHJcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjlwiLFxyXG4gICAgICAgICAgICBzb3J0RGVzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0LIg0L/QvtGA0Y/QtNC60LUg0YPQsdGL0LLQsNC90LjRj1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFibGVFdmVudHNQZXJzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBUYWJsZUZhY3RzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNmYWN0cycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgcGFnaW5nOiBmYWxzZSxcclxuICAgICAgICBpbmZvOiBmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgb3JkZXI6IFtbNCwgJ2FzYyddXSxcclxuICAgICAgICByb3dHcm91cDoge1xyXG4gICAgICAgICAgZGF0YVNyYzogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINGE0LDQutGC0L7QslwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0YTQsNC60YLQvtCyXCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINGE0LDQutGC0L7QslwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINGE0LDQutGC0L7QsilcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZUZhY3RzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBUYWJsZUZhbWlsaWVzKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgICQoJyNmYW1pbGllcycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgY29sUmVvcmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdDogdHJ1ZSxcclxuICAgICAgICBkb206IFwiPCdyb3cnPCdjb2wtbWQtNCdCPjwnY29sLW1kLTQnbD48J2NvbC1tZC00J2Y+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNic+PCdjb2wtbWQtNic+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtMTIndD4+XCIgK1xyXG4gICAgICAgICAgXCI8J3Jvdyc8J2NvbC1tZC02J2k+PCdjb2wtbWQtNidwPj5cIixcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAvLyAnY29sdmlzJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINGB0LXQvNC10LlcIixcclxuICAgICAgICAgIGluZm86IFwi0J/QvtC60LDQt9Cw0L3QviDRgSBfU1RBUlRfINC/0L4gX0VORF8g0LjQtyBfVE9UQUxfINGB0LXQvNGM0LhcIixcclxuICAgICAgICAgIGluZm9FbXB0eTogXCLQndC10YIg0YHQtdC80LXQuVwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINGB0LXQvNC10LkpXCIsXHJcbiAgICAgICAgICBpbmZvUG9zdEZpeDogXCJcIixcclxuICAgICAgICAgIGxvYWRpbmdSZWNvcmRzOiBcIjxkaXYgYWxpZ249J2NlbnRlcic+PGltZyBzcmM9Jy9vcGVuLWFjY291bnQvaW1hZ2VzL2xvYWRpbmcuZ2lmJyBhbHQ9J9CX0LDQs9GA0YPQt9C60LAnIGhlaWdodD0nODAnIC8+PC9kaXY+XCIsXHJcbiAgICAgICAgICB6ZXJvUmVjb3JkczogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgZW1wdHlUYWJsZTogXCLQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3Ri1wiLFxyXG4gICAgICAgICAgcGFnaW5hdGU6IHtcclxuICAgICAgICAgICAgZmlyc3Q6IFwi0J/QtdGA0LLRi9C5XCIsXHJcbiAgICAgICAgICAgIHByZXZpb3VzOiBcItCd0LDQt9Cw0LRcIixcclxuICAgICAgICAgICAgbmV4dDogXCLQlNCw0LvQtdC1XCIsXHJcbiAgICAgICAgICAgIGxhc3Q6IFwi0J/QvtGB0LvQtdC00L3QuNC5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhcmlhOiB7XHJcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IFwiOiDQsNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YYg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjlwiLFxyXG4gICAgICAgICAgICBzb3J0RGVzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0LIg0L/QvtGA0Y/QtNC60LUg0YPQsdGL0LLQsNC90LjRj1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFibGVGYW1pbGllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVGFibGVQZXJzb25zKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgLyogUGVyc29ucyBEYXRhVGFibGVcdFx0ZG9tOiAnQmxmcnRpcCcsXHJcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgJCgnI3BlcnNvbnMnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgZG9tOiBcIjwncm93JzwnY29sLW1kLTQnQj48J2NvbC1tZC00J2w+PCdjb2wtbWQtNCdmPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTYnPjwnY29sLW1kLTYnPj5cIiArXHJcbiAgICAgICAgICBcIjwncm93JzwnY29sLW1kLTEyJ3Q+PlwiICtcclxuICAgICAgICAgIFwiPCdyb3cnPCdjb2wtbWQtNidpPjwnY29sLW1kLTYncD4+XCIsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgLy8gJ2NvbHZpcydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcIklkXCIsIFwiZGF0YVwiOiBcIklkXCIgfSxcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcItCf0L7Qu1wiLCBcImRhdGFcIjogXCLQn9C+0LtcIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0KTQsNC80LjQu9C40Y9cIiwgXCJkYXRhXCI6IFwi0KTQsNC80LjQu9C40Y9cIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JjQvNGPXCIsIFwiZGF0YVwiOiBcItCY0LzRj1wiIH0sXHJcbiAgICAgICAgICB7IFwidGl0bGVcIjogXCLQntGC0YfQtdGB0YLQstC+XCIsIFwiZGF0YVwiOiBcItCe0YLRh9C10YHRgtCy0L5cIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRj1wiLCBcImRhdGFcIjogXCLQlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPXCIgfSxcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcItCc0LXRgdGC0L4g0YDQvtC20LTQtdC90LjRj1wiLCBcImRhdGFcIjogXCLQnNC10YHRgtC+INGA0L7QttC00LXQvdC40Y9cIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JIg0LbQuNCy0YvRhVwiLCBcImRhdGFcIjogXCLQkiDQttC40LLRi9GFXCIgfSxcclxuICAgICAgICAgIHsgXCJ0aXRsZVwiOiBcItCU0LDRgtCwINGB0LzQtdGA0YLQuFwiLCBcImRhdGFcIjogXCLQlNCw0YLQsCDRgdC80LXRgNGC0LhcIiB9LFxyXG4gICAgICAgICAgeyBcInRpdGxlXCI6IFwi0JTQtdC50YHRgtCy0LjRj1wiLCBcImRhdGFcIjogXCLQlNC10LnRgdGC0LLQuNGPXCIsIFwib3JkZXJhYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcInJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93LCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgdGl0bGU9XFxcItCS0YvQsdC+0YAg0LrQvtC80LDQvdC00YtcXFwiPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICAgICZidWxsOyZidWxsOyZidWxsO1xcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICA8L2J1dHRvbj5cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcIiAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcXFwiPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICAgIDxsaSA+PGEgaHJlZj1cXFwidHJlZS90cmVlX3QxX1wiICsgcm93LklkICsgXCIuaHRtbFxcXCI+0JLQvtGB0YXQvtC00Y/RidC10LUg0LTQtdGA0LXQstC+PC9hPjwvbGk+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgICAgPGxpID48YSBocmVmPVxcXCJ0cmVlL3RyZWVfdDJfXCIgKyByb3cuSWQgKyBcIi5odG1sXFxcIj7QndC40YHRhdC+0LTRj9GJ0LXQtSDQtNC10YDQtdCy0L48L2E+PC9saT5cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcIiAgICA8bGkgPjxhIGhyZWY9XFxcInRyZWUvdHJlZV90M19cIiArIHJvdy5JZCArIFwiLmh0bWxcXFwiPtCU0LXRgNC10LLQviBcXFwi0JHQsNCx0L7Rh9C60LBcXFwiPC9hPjwvbGk+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCIgICAgPGxpID48YSBocmVmPVxcXCJ0cmVlL3RyZWVfdDRfXCIgKyByb3cuSWQgKyBcIi5odG1sXFxcIj7QmtGA0YPQs9C+0LLQsNGPINC00LjQsNCz0YDQsNC80LzQsDwvYT48L2xpPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiICA8L3VsPlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGRlY2ltYWw6IFwiLFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBcItCk0LjQu9GM0YLRgDpcIixcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBcItCe0YLQvtCx0YDQsNC20LDRgtGMINC/0L4gX01FTlVfINC/0LXRgNGB0L7QvVwiLFxyXG4gICAgICAgICAgaW5mbzogXCLQn9C+0LrQsNC30LDQvdC+INGBIF9TVEFSVF8g0L/QviBfRU5EXyDQuNC3IF9UT1RBTF8g0L/QtdGA0YHQvtC9XCIsXHJcbiAgICAgICAgICBpbmZvRW1wdHk6IFwi0J3QtdGCINC/0LXRgNGB0L7QvVwiLFxyXG4gICAgICAgICAgaW5mb0ZpbHRlcmVkOiBcIijQstGB0LXQs9C+IF9NQVhfINC/0LXRgNGB0L7QvSlcIixcclxuICAgICAgICAgIGluZm9Qb3N0Rml4OiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZ1JlY29yZHM6IFwiPGRpdiBhbGlnbj0nY2VudGVyJz48aW1nIHNyYz0nL29wZW4tYWNjb3VudC9pbWFnZXMvbG9hZGluZy5naWYnIGFsdD0n0JfQsNCz0YDRg9C30LrQsCcgaGVpZ2h0PSc4MCcgLz48L2Rpdj5cIixcclxuICAgICAgICAgIHplcm9SZWNvcmRzOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBlbXB0eVRhYmxlOiBcItCU0LDQvdC90YvQtSDQvdC1INC90LDQudC00LXQvdGLXCIsXHJcbiAgICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgICBmaXJzdDogXCLQn9C10YDQstGL0LlcIixcclxuICAgICAgICAgICAgcHJldmlvdXM6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBuZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgICAgICAgICAgbGFzdDogXCLQn9C+0YHQu9C10LTQvdC40LlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogXCI6INCw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhiDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOXCIsXHJcbiAgICAgICAgICAgIHNvcnREZXNjZW5kaW5nOiBcIjog0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGINC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuCDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFibGVQZXJzb25zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4vKipcclxuICogU2Nyb2xsVG9Ub3BcclxuICovXHJcbmZ1bmN0aW9uIGluaXRTY3JvbGxUb1RvcCgpIHtcclxuICBjb25zdCBTY3JvbGxUb1RvcCA9IHJlcXVpcmUoJy4vX3Njcm9sbFRvVG9wJyk7XHJcbiAgY29uc3QgaXNTY3JvbGxUb1RvcEZ1bmMgPSBuZXcgU2Nyb2xsVG9Ub3AoKTtcclxuXHJcbiAgaXNTY3JvbGxUb1RvcEZ1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogUGVyc29ucyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlUGVyc29ucygpIHtcclxuICBjb25zdCBUYWJsZVBlcnNvbnMgPSByZXF1aXJlKCcuL190YWJsZVBlcnNvbnMnKTtcclxuICBjb25zdCBpc1RhYmxlUGVyc29uc0Z1bmMgPSBuZXcgVGFibGVQZXJzb25zKCk7XHJcblxyXG4gIGlzVGFibGVQZXJzb25zRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGYW1pbGllcyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlRmFtaWxpZXMoKSB7XHJcbiAgY29uc3QgVGFibGVGYW1pbGllcyA9IHJlcXVpcmUoJy4vX3RhYmxlRmFtaWxpZXMnKTtcclxuICBjb25zdCBpc1RhYmxlRmFtaWxpZXNGdW5jID0gbmV3IFRhYmxlRmFtaWxpZXMoKTtcclxuXHJcbiAgaXNUYWJsZUZhbWlsaWVzRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVudHMgdGFibGVcclxuICovXHJcbmZ1bmN0aW9uIGluaXRUYWJsZUV2ZW50cygpIHtcclxuICBjb25zdCBUYWJsZUV2ZW50cyA9IHJlcXVpcmUoJy4vX3RhYmxlRXZlbnRzJyk7XHJcbiAgY29uc3QgaXNUYWJsZUV2ZW50c0Z1bmMgPSBuZXcgVGFibGVFdmVudHMoKTtcclxuXHJcbiAgaXNUYWJsZUV2ZW50c0Z1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogRmFjdHMgdGFibGVcclxuICovXHJcbmZ1bmN0aW9uIGluaXRUYWJsZUZhY3RzKCkge1xyXG4gIGNvbnN0IFRhYmxlRmFjdHMgPSByZXF1aXJlKCcuL190YWJsZUZhY3RzJyk7XHJcbiAgY29uc3QgaXNUYWJsZUZhY3RzRnVuYyA9IG5ldyBUYWJsZUZhY3RzKCk7XHJcblxyXG4gIGlzVGFibGVGYWN0c0Z1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogUGVyc29uYWwgRXZlbnRzIHRhYmxlXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0VGFibGVFdmVudHNQZXJzKCkge1xyXG4gIGNvbnN0IFRhYmxlRXZlbnRzUGVycyA9IHJlcXVpcmUoJy4vX3RhYmxlRXZlbnRzUGVycycpO1xyXG4gIGNvbnN0IGlzVGFibGVFdmVudHNQZXJzRnVuYyA9IG5ldyBUYWJsZUV2ZW50c1BlcnMoKTtcclxuXHJcbiAgaXNUYWJsZUV2ZW50c1BlcnNGdW5jLmluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBlcnNvbmFsIEV2ZW50cyB0YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFRhYmxlQ2hpbGRyZW4oKSB7XHJcbiAgY29uc3QgVGFibGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vX3RhYmxlQ2hpbGRyZW4nKTtcclxuICBjb25zdCBpc1RhYmxlQ2hpbGRyZW5GdW5jID0gbmV3IFRhYmxlQ2hpbGRyZW4oKTtcclxuXHJcbiAgaXNUYWJsZUNoaWxkcmVuRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYXJvdXNlbHNcclxuICovXHJcbmZ1bmN0aW9uIGluaXRDYXJvdXNlbHMoKSB7XHJcbiAgY29uc3QgQ2Fyb3VzZWxzID0gcmVxdWlyZSgnLi9fY2Fyb3VzZWxzJyk7XHJcbiAgY29uc3QgaXNDYXJvdXNlbHNGdW5jID0gbmV3IENhcm91c2VscygpO1xyXG5cclxuICBpc0Nhcm91c2Vsc0Z1bmMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogTGlnaHRib3hlc1xyXG4gKi9cclxuZnVuY3Rpb24gaW5pdExpZ2h0Ym94ZXMoKSB7XHJcbiAgY29uc3QgTGlnaHRib3hlcyA9IHJlcXVpcmUoJy4vX2xpZ2h0Ym94ZXMnKTtcclxuICBjb25zdCBpc0xpZ2h0Ym94ZXNGdW5jID0gbmV3IExpZ2h0Ym94ZXMoKTtcclxuXHJcbiAgaXNMaWdodGJveGVzRnVuYy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQaG90b2FsYnVtcyAvIEZpbGUgdHJlZVxyXG4gKiBXb24ndCB3b3JrIGJlY2F1c2Ugb2YgQC4uQCBwbGFjZWhvbGRlcnMgZm9yIEdlbmVyYXRyZWVcclxuICovXHJcbi8vIGZ1bmN0aW9uIGluaXRQaG90b2FsYnVtcygpIHtcclxuLy8gICBjb25zdCBQaG90b2FsYnVtcyA9IHJlcXVpcmUoJy4vX3Bob3RvYWxidW1zJyk7XHJcbi8vICAgY29uc3QgaXNQaG90b2FsYnVtc0Z1bmMgPSBuZXcgUGhvdG9hbGJ1bXMoKTtcclxuLy9cclxuLy8gICBpc1Bob3RvYWxidW1zRnVuYy5pbml0KCk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGFsbFNjcmlwdHMoKSB7XHJcbiAgaW5pdFNjcm9sbFRvVG9wKCk7XHJcbiAgaW5pdFRhYmxlUGVyc29ucygpO1xyXG4gIGluaXRUYWJsZUZhbWlsaWVzKCk7XHJcbiAgaW5pdFRhYmxlRXZlbnRzKCk7XHJcbiAgaW5pdFRhYmxlRmFjdHMoKTtcclxuICBpbml0VGFibGVFdmVudHNQZXJzKCk7XHJcbiAgaW5pdFRhYmxlQ2hpbGRyZW4oKTtcclxuICBpbml0Q2Fyb3VzZWxzKCk7XHJcbiAgaW5pdExpZ2h0Ym94ZXMoKTtcclxuICAvLyBpbml0UGhvdG9hbGJ1bXMoKTtcclxufVxyXG5cclxuYWxsU2NyaXB0cygpO1xyXG5cclxuIl19
