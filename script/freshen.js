//上下滑动刷新
$(document).ready(function(){
    $(window).scroll(function(){
　        var scrollTop = $(this).scrollTop();               //滚动条距离顶部的高度
　　   var scrollHeight = $(document).height();                   //当前页面的总高度
　　   var windowHeight = $(this).height();                   //当前可视的页面高度
　        if(scrollTop + windowHeight >= scrollHeight){        //距离顶部+当前高度 >=文档总高度 即代表滑动到底部
//          alert("上拉加载，要在这调用啥方法？");
         }else if(scrollTop<=0){         //滚动条距离顶部的高度小于等于0
//          alert("下拉刷新，要在这调用啥方法？");
         }
    });
});