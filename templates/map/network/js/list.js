$(function(){
	//计算元素高度
	var iHeight=$('#content-main',parent.document).height();
	$('#mapBox').height(iHeight);
	$('.history-con').height(iHeight/2+100);
	//表格初始化
	var $saleTale=$('#saleTable');
	$saleTale.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		pageSize:20,
		pageList:'[20]',
		classes: 'table saleTable table-hover',
		height: $('#content-main',parent.document).height()/2-130,
		columns:[{
    		field: 'title',
    		title: '行政区划',
    		valign:'middle'
    	}],
	    data:[{
	    	title: '调整阶梯价公告',
    	},{
    		title: '调整阶梯价公告',
    	},{
    		title: '调整阶梯价公告',
    	},{
    		title: '调整阶梯价公告',
    	},{
    		title: '调整阶梯价公告',
    	}]
	});
	//显示隐藏内容框
	$('.hidden-btn').on('click',function(){
		$('.hidden-box').toggle();
	});
	//显示隐藏搜索提示
	$('#searchMapBtn').on('click',function(){
		$('#searchNote').show();
	})
	function closeDetail() {
	    $('#searchNote').hide();
	}
	//点击其他区域，关闭
    $(document).click(function(e){
        var _con = $(".map-search-box"),
        	_con1 = $("#searchNote");
        if(!_con.is(e.target) && _con.has(e.target).length === 0 && !_con1.is(e.target) && _con1.has(e.target).length === 0){
            closeDetail();
        }
        e.stopPropagation();
    });
	//改变窗口大小计算高度
	$(window).on('resize',function(){
		var iHeight=$('#content-main',parent.document).height();
		$('#mapBox').height(iHeight);
		$('.history-con').height(iHeight/2+100);
		$saleTale.bootstrapTable('resetView',{
			height: ($('#content-main',parent.document).height())/2-130
		});
	});
	//按钮选中
	$('#cdcl , #mjcl ').on('click',function(){
		if ($(this).hasClass('ce-active')) {
			$(this).removeClass('ce-active');
		} else{
			$(this).addClass('ce-active');
		}
	})
})