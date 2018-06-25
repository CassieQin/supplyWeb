$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-74;
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
		height:iHeight,
		columns:[{
    		field: 'person',
    		title: '操作人',
    		valign:'middle'
    	},{
    		field: 'module',
    		title: '操作模块',
    		valign:'middle'
    	},{
    		field: 'content',
    		title: '操作内容',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '操作时间',
    		align:'center',
    		valign:'middle'
    	}],
	    data:[{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	},{
    		person:'张三',
    		module:'修改控制器',
    		time:'2017-05-06 22:30:44',
    		content: '修改控制器'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-74
		});
	})
	$('#searchCondition').focus();
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$saleTale.bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('.search-box input').val('');
		$saleTale.bootstrapTable('refresh');
	});
	//时间选择
	lay('.date').each(function(){
		laydate.render({
	    	elem: this,
	    	type: 'date',
	    	trigger: 'click'
	  	});
	});
})