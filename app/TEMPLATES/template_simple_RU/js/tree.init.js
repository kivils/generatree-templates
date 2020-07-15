$(document).ready(function ($) {

  function getTree() {
    // Some logic to retrieve, or generate tree structure
    var tree = [
      @ALBUM_TREE@
      /*  {
        text: "Мой Альбом",
        href: '#node1',
        tags: ['56'],
        state: {selected: true},
        nodes: [
          {
          text: "Child 1",
          href: '#node2',
          tags: ['10'],
          nodes: [
            {
            text: "Grandchild 1",
            href: '#node3',
            tags: ['5']
            },
            {
            text: "Grandchild 2",
            href: '#node4',
            tags: ['12']
            }
          ]
          },
          {
          text: "Child 2",
          href: '#node5',
          tags: ['2']
          }
        ]
      }*/
    ];
    return tree;
  }

  $('#tree').treeview({
    data: getTree(),
    showTags: true,
    onNodeSelected: function (event, node) {
      var items = $('#portfolio-list>li');
      var myarr = ["doc1", "doc3", "doc5"];
      switch (node.href) {
        @CLICK_DATA@
          /*case '#node1':
            myarr = ["doc1", "doc3", "doc5", "doc6", "doc7", "doc8", "doc9"];
            break;
          case '#node2':
            myarr = ["doc1", "doc3", "doc5", "doc12"];
            break;*/
          default:
            myarr = ["doc1"];
        }

        $.each(items,function(index, nde){
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

});
