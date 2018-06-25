$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-110;
	$saleTale.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		pageSize:20,
		clickToSelect: true,
		pageList:'[20]',
		classes: 'table saleTable table-hover',
		height:iHeight,
		columns:[{
			checkbox:true
		},{
    		field: 'code',
    		title: '控制器编号',
    		valign:'middle'
    	},{
    		field: 'type',
    		title: '控制器类型',
    		valign:'middle'
    	},{
    		field: 'hardware',
    		title: '硬件批次',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'software',
    		title: '软件批次',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'controller',
    		title: '控制器批次',
    		align: 'right',
    		valign:'middle'
    	}],
	    data:[{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	},{
    		code:'4545454',
    		type: '居民用水',
    		hardware: '10',
    		software: '15',
    		controller: '40'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-110
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
	//新增数据
	$('#addBtn').on('click',function(){
		addController();
	});
	//编辑数据
    $("#editBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            editController();
        }

    });
	//删除数据
    $("#delBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            parent.layer.confirm('确定要删除这条数据吗？',
                {icon: 3, title: '提示', area: '300px', btnAlign: 'c'}, function (index) {
                    parent.layer.close(index);
                });
        }

    });
})
//新增控制器
function addController() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '新增控制器',
        area: ['900px', '400px'],
        content: 'dataMgnt/controller/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//编辑控制器
function editController() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '编辑控制器',
        area: ['900px', '400px'],
        content: 'dataMgnt/controller/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}