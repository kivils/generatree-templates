'use strict';

function Photoalbums() {
  const self = this;

  // Some logic to retrieve, or generate tree structure
  self.tree = [
    @ALBUM_TREE@
    /*{
      text: "Основной альбом",
      state: {selected: true},
      href: '#node1'
      ,
      nodes: [{
        text: "Свадьбы",
        href: '#node2'
        , tags: ['29']
      },
        {
          text: "Детские",
          href: '#node3'
          , tags: ['59']
        },
        {
          text: "Семьи",
          href: '#node4'
          , tags: ['23']
        },
        {
          text: "Встречи",
          href: '#node5'
          , tags: ['37']
        },
        {
          text: "Персоны",
          href: '#node6'
          , tags: ['2']
        }]
    } */
  ];

  self.init = function () {
    const $ = require('jquery');

    $('#tree').treeview({
      data: self.tree,
      showTags: true,
      onNodeSelected: function (event, node) {
        var items = $('#portfolio-list>li');
        var myarr = ["doc1", "doc3", "doc5"];
        switch (node.href) {
          @CLICK_DATA@
          /*case '#node2':
            myarr = ["doc3", "doc4", "doc5", "doc6", "doc7", "doc8", "doc9", "doc10", "doc11", "doc12", "doc13", "doc14", "doc15", "doc16", "doc17", "doc18", "doc19", "doc20", "doc21", "doc22", "doc23", "doc24", "doc25", "doc26", "doc27", "doc28", "doc29", "doc107", "doc152"];
            break;
          case '#node3':
            myarr = ["doc2", "doc66", "doc67", "doc68", "doc70", "doc71", "doc72", "doc73", "doc74", "doc75", "doc76", "doc77", "doc78", "doc79", "doc80", "doc81", "doc82", "doc83", "doc38", "doc39", "doc40", "doc41", "doc42", "doc43", "doc44", "doc45", "doc48", "doc49", "doc50", "doc30", "doc31", "doc51", "doc53", "doc64", "doc65", "doc84", "doc85", "doc86", "doc87", "doc88", "doc89", "doc90", "doc91", "doc92", "doc93", "doc94", "doc95", "doc96", "doc97", "doc98", "doc99", "doc100", "doc101", "doc102", "doc141", "doc143", "doc147", "doc148", "doc155"];
            break;
          case '#node4':
            myarr = ["doc1", "doc32", "doc33", "doc36", "doc37", "doc47", "doc52", "doc59", "doc61", "doc63", "doc105", "doc106", "doc114", "doc122", "doc123", "doc130", "doc134", "doc135", "doc136", "doc139", "doc140", "doc151", "doc153"];
            break;
          case '#node5':
            myarr = ["doc69", "doc35", "doc54", "doc55", "doc56", "doc57", "doc60", "doc62", "doc108", "doc110", "doc112", "doc113", "doc115", "doc116", "doc117", "doc118", "doc119", "doc120", "doc121", "doc124", "doc125", "doc126", "doc127", "doc128", "doc129", "doc131", "doc132", "doc133", "doc137", "doc138", "doc142", "doc144", "doc145", "doc146", "doc149", "doc150", "doc156"];
            break;
          case '#node6':
            myarr = ["doc109", "doc154"];
            break;*/
          default:
            myarr = ["doc1"];
        }

        $.each(items, function (index, nde) {
          var docId = nde.getAttribute('id');
          if (myarr.indexOf(docId) > -1) {
            $('#' + docId).removeClass('hidden');
          } else {
            $('#' + docId).addClass('hidden');
          }
          /*var pos = index * 150;
          alert(node.getAttribute('id'));
          if(index === 0)
            $(this).css("left", pos);
          else
            $(this).css("left", pos + index * item_margin);
          console.log(pos);*/
        })
        //$('#selectable-output').prepend('<p>' + node.href + ' was selected</p>');
        /*if (node.href == '#node9') {
         $('#doc1').addClass('hidden');
        } else {
         $('#doc1').removeClass('hidden');
        }*/

        /*$('#portfolio-list').each(function(i, items_list){
          var myText = "";

          $(items_list).find('li').each(function(j, li){
            alert(li.text());
          })

        alert(myText);
        });*/
      },
      onNodeUnselected: function (event, node) {
        //$('#selectable-output').prepend('<p>' + node.text + ' was unselected</p>');
      }
    });
  };
}

module.exports = Photoalbums;
