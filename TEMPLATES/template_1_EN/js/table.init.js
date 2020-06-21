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
			{ "title": "Id", "data": "Id" },
			{ "title": "Sex", "data": "Sex" },
			{ "title": "Last Name", "data": "Last Name" },
			{ "title": "Name", "data": "Name" },
			{ "title": "Middle Name", "data": "Middle Name" },
			{ "title": "Date of birth", "data": "Date of birth" },
			{ "title": "Place of birth", "data": "Place of birth" },
			{ "title": "Alive", "data": "Alive" },
			{ "title": "Date of death", "data": "Date of death" },
			{ "title": "Diagrams", "data": "Diagrams", "orderable": false,
                "render": function (data, type, row, meta) {
                    var result = "<div class=\"dropdown\">\n" +
                        "  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" title=\"Select command\">\n" +
                        "    &bull;&bull;&bull;\n" +
                        "  </button>\n" +
                        "  <ul class=\"dropdown-menu dropdown-menu-right\">\n" +
                        "    <li @SHOW_TREE_1@><a href=\"tree/tree_t1_" + row.Id + ".html\">Ascendant Tree</a></li>\n" +
                        "    <li @SHOW_TREE_2@><a href=\"tree/tree_t2_" + row.Id + ".html\">Descending Tree</a></li>\n" +
                        "    <li @SHOW_TREE_3@><a href=\"tree/tree_t3_" + row.Id + ".html\">Graphic \"Butterfly\"</a></li>\n" +
                        "    <li @SHOW_TREE_4@><a href=\"tree/tree_t4_" + row.Id + ".html\">Pie Chart</a></li>\n" +
                        "  </ul>\n" +
						"</div>";
                    return result;
                }
			}
		],
        language: {
            decimal: ",",
            search: "Filter:",
            processing: "Processing...",
            lengthMenu: "Display by _MENU_ persons",
            info: "Showing _START_ to _END_ of _TOTAL_ persons",
            infoEmpty: "No person",
            infoFiltered: "(total _MAX_ people)",
            infoPostFix: "",
            loadingRecords: "<div align='center'><img src='/open-account/images/loading.gif' alt='Load' height='80' /></div>",
            zeroRecords: "Data not found",
            emptyTable: "Data not found",
            paginate: {
                first: "First",
                previous: "Back",
                next: "Next",
                last: "Last"
            },
            aria: {
                sortAscending: ": activate ascending sorting column",
                sortDescending: ": activate sorting column in descending order"
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
            search: "Filter:",
            processing: "Processing...",
            lengthMenu: "Display by _MENU_ families",
            info: "Showing _START_ to _END_ of _TOTAL_ families",
            infoEmpty: "Not families",
            infoFiltered: "(total _MAX_ families)",
            infoPostFix: "",
            loadingRecords: "<div align='center'><img src='/open-account/images/loading.gif' alt='Loading' height='80' /></div>",
            zeroRecords: "Data not found",
            emptyTable: "Data not found",
            paginate: {
                first: "First",
                previous: "Back",
                next: "Next",
                last: "Last"
            },
            aria: {
                sortAscending: ": activate ascending sorting column",
                sortDescending: ": activate sorting column in descending order"
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
            search: "Filter:",
            processing: "Processing...",
            lengthMenu: "Display by _MENU_ events",
            info: "Showing _START_ to _END_ of _TOTAL_ events",
            infoEmpty: "Not events",
            infoFiltered: "(total _MAX_ events)",
            infoPostFix: "",
            loadingRecords: "<div align='center'><img src='/open-account/images/loading.gif' alt='Loading' height='80' /></div>",
            zeroRecords: "Data not found",
            emptyTable: "Data not found",
            paginate: {
                first: "First",
                previous: "Back",
                next: "Next",
                last: "Last"
            },
            aria: {
                sortAscending: ": activate ascending sorting column",
                sortDescending: ": activate sorting column in descending order"
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
            search: "Filter:",
            processing: "Processing...",
            lengthMenu: "Display by _MENU_ facts",
            info: "Showing _START_ to _END_ of _TOTAL_ facts",
            infoEmpty: "No facts",
            infoFiltered: "(total _MAX_ facts)",
            infoPostFix: "",
            loadingRecords: "<div align='center'><img src='/open-account/images/loading.gif' alt='Loading' height='80' /></div>",
            zeroRecords: "Data not found",
            emptyTable: "Data not found",
            paginate: {
                first: "First",
                previous: "Back",
                next: "Next",
                last: "Last"
            },
            aria: {
                sortAscending: ": activate ascending sorting column",
                sortDescending: ": activate sorting column in descending order"
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
            search: "Filter:",
            processing: "Processing...",
            lengthMenu: "Display by _MENU_ events",
            info: "Showing _START_ to _END_ of _TOTAL_ events",
            infoEmpty: "No events",
            infoFiltered: "(total _MAX_ events)",
            infoPostFix: "",
            loadingRecords: "<div align='center'><img src='/open-account/images/loading.gif' alt='Loading' height='80' /></div>",
            zeroRecords: "Data not found",
            emptyTable: "Data not found",
            paginate: {
                first: "First",
                previous: "Back",
                next: "Next",
                last: "Last"
            },
            aria: {
                sortAscending: ": activate ascending sorting column",
                sortDescending: ": activate sorting column in descending order"
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
            search: "Filter:",
            processing: "Processing...",
            lengthMenu: "Display by _MENU_ childs",
            info: "Showing _START_ to _END_ of _TOTAL_ childs",
            infoEmpty: "No childs",
            infoFiltered: "(total _MAX_ childs)",
            infoPostFix: "",
            loadingRecords: "<div align='center'><img src='/open-account/images/loading.gif' alt='Loading' height='80' /></div>",
            zeroRecords: "Data not found",
            emptyTable: "Data not found",
            paginate: {
                first: "First",
                previous: "Back",
                next: "Next",
                last: "Last"
            },
            aria: {
                sortAscending: ": activate ascending sorting column",
                sortDescending: ": activate sorting column in descending order"
            }
        }    
		});

});