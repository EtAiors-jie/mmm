 // 首页菜单栏api
 $.ajax({
    url:"http://192.168.105.254/api/getindexmenu",
    type:"get",
    dataType:"jsonp",
    success:function(res){
        console.log(res);
    }
});
// 首页的折扣列表中的数据api
$.ajax({
    url:"http://192.168.105.254/api/getmoneyctrl",
    type:"get",
    dataType:"jsonp",
    success:function(res){
        console.log(res);
    }
});
// 分类标题api
$.ajax({
    url:"http://192.168.105.254/api/getcategorytitle",
    type:"get",
    dataType:"jsonp",
    success:function(res){
        console.log(res);
    }
});
// 分类列表api
$.ajax({
    url:"http://192.168.105.254/api/getcategory",
    type:"get",
    data:{titleid:1},
    dataType:"jsonp",
    success:function(res){
        console.log(res);
    }
});
// 根据分类id获取分类名称api
$.ajax({
    url:"http://192.168.105.254/api/getcategorybyid",
    type:"get",
    data:{categoryid:1},
    dataType:"jsonp",
    success:function(res){
        console.log(res);
    }
});
//商品列表api
$.ajax({
    url:"http://192.168.105.254/api/getproductlist",
    type:"get",
    data:{categoryid:1,pageid:3},
    dataType:"jsonp",
    success:function(res){
        console.log(res);
    }
});