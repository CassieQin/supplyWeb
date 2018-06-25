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
			field: 'id',
  			title: '序号',
  			align: 'center',
  			valign:'middle',
  			width: '5%',
  			formatter:function(value, row, index){
  				return index + 1;
  			}
		},{
    		field: 'title',
    		title: '用水户名称',
    		valign:'middle'
    	},{
    		field: 'person',
    		title: '证件号',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '手机号',
    		valign:'middle'
    	},{
    		field: 'unit',
    		title: '剩余金额（元）',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '水表累计购买金额（元）',
    		align:'right',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '卡累计购买金额（元）',
    		align:'right',
    		valign:'middle'
    	},{
    		field: 'unit',
    		title: '累计消费金额（元）',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '累计用水量（m³）',
    		align:'right',
    		valign:'middle'
    	},{
    		field: 'unit',
    		title: '阶梯转换前控制器水价',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '阶梯转换后控制器水价',
    		align:'right',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '阶梯转化时间',
    		align:'center',
    		valign:'middle'
    	}],
	    data:[{
	    	title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-120
		});
	});
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