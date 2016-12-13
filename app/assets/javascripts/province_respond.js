(function($){
	$(".xls_info").click(function(){
            $(".suggest").css({display:"none"})
            $(".doc").css({display:"none"})
            $(".xls").css({display:""})
      })
	$(".doc_info").click(function(){
            $(".suggest").css({display:"none"})
            $(".doc").css({display:""})
            $(".xls").css({display:"none"})
      })

      $(".nopass").click(function(){
            $("#suggests").modal("toggle");
      })

      $("#tTrolleys").dblclick(function(){
            var tds=$(this).find("td");
            $.each(tds, function(i,val){
                  var jqob=$(val);
                  if(i < 1 || jqob.has('button').length ){return true;}//跳过第1项 序号,按钮
                  var txt=jqob.text();
                  var put=$("<input style='width:100px' type='text'>");
                  put.val(txt);
                  jqob.html(put);
            });
            $(".submit").css({display:"none"});
            $(".save").css({display:""});
      });

      $(".edit").click(function(){
            var tds=$("#tTrolleys").find("tbody").find("td");
            $.each(tds, function(i,val){
                  var jqob=$(val);
                  if(i < 1 || jqob.has('button').length ){return true;}//跳过第1项 序号,按钮
                  var txt=jqob.text();
                  var put=$("<input style='width:100px' type='text'>");
                  put.val(txt);
                  jqob.html(put);
            });
            $(".submit").css({display:"none"});
            $(".save").css({display:""});
      })

      $(".save-btn").click(function(){
           var tds=$("#tTrolleys").find("tbody").find("td");
           $.each(tds, function(i,val){
               var jqob=$(val);
               //把input变为字符串
               if(!jqob.has('button').length){
                   var txt=jqob.children("input").val();
                   jqob.html(txt);
                   //table.cell(jqob).data(txt);//修改DataTables对象的数据
               }
           });
           $(".submit").css({display:""});
           $(".save").css({display:"none"});
       });
})(jQuery)