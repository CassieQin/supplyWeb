$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-120;
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
    		field: 'time',
    		title: '时间',
    		valign:'middle'
    	},{
    		field: 'name',
    		title: '用水量',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'note',
    		title: '用水户',
    		valign:'middle'
    	},{
    		field: 'money',
    		title: '售水金额',
    		align: 'right',
    		valign:'middle'
    	}],
	    data:[{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	},{
    		code:'612105454555',
    		name:'充值方式',
    		note:'充值的方式'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-120
		});
	})
	$('#searchCondition').focus();
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$saleTale.bootstrapTable('refresh');
		$saleTale2.bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('#searchCondition').val('');
		$saleTale.bootstrapTable('refresh');
		$saleTale2.bootstrapTable('refresh');
	});
	//时间选择
	laydate.render({
    	elem: '#chooseMonth',
    	type: 'month',
    	trigger: 'click'
    });
})