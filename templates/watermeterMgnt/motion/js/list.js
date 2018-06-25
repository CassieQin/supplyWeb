$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-108;
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
			checkbox: true
		},{
    		field: 'title',
    		title: '水表安装位置',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '水表状态',
    		align: 'center',
    		valign:'middle',
    		formatter: function (value, row, index) {
                if(value == '正常'){
                    return [
                        '<span class="sys-type-bg pro-status-green">正常</span>'
                    ];
                }
                return [
                    '<span class="sys-type-bg pro-status-red">故障</span>'
                ];

            }
    	},{
    		field: 'person',
    		title: '水质浊度',
    		valign:'middle'
    	},{
    		field: 'unit',
    		title: '水质余氯',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '水质PH',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '供水压力',
    		valign:'middle'
    	}],
	    data:[{
	    	title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'正常',
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
			height: $('#content-main',parent.document).height()-108
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
})