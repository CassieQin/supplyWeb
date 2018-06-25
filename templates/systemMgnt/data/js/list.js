$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		$saleTale2=$('#saleTable2'),
		iHeight=($('#content-main',parent.document).height()-160)/2;
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
		clickToSelect: true,
		height:iHeight,
		selectItemName: 'radio',
		columns:[{
  			radio: true,
  			width:'5%'
    	},{
    		field: 'code',
    		title: '编码',
    		valign:'middle'
    	},{
    		field: 'name',
    		title: '名称项',
    		valign:'middle'
    	},{
    		field: 'note',
    		title: '说明',
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
	$saleTale2.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		pageSize:20,
		pageList:'[20]',
		classes: 'table saleTable table-hover',
		clickToSelect: true,
		height:iHeight,
		selectItemName: 'checkbox',
		columns:[{
  			checkbox: true,
  			width:'5%'
    	},{
    		field: 'code',
    		title: '子项编码',
    		valign:'middle'
    	},{
    		field: 'name',
    		title: '子项名称项',
    		valign:'middle'
    	}],
	    data:[{
    		code:'612105454555',
    		name:'充值方式'
    	},{
    		code:'612105454555',
    		name:'充值方式'
    	},{
    		code:'612105454555',
    		name:'充值方式'
    	},{
    		code:'612105454555',
    		name:'充值方式'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: ($('#content-main',parent.document).height()-160)/2
		});
		$saleTale2.bootstrapTable('resetView',{
			height: ($('#content-main',parent.document).height()-160)/2
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
	//新增字典
	$('#addBtn').on('click',function(){
		addName();
	})
	//编辑字典
    $("#editBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            editName();
        }

    });
    //删除字典
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
    //新增子项字典
	$('#addBtnChild').on('click',function(){
		addChildName();
	})
	//编辑子项字典
    $("#editBtnChild").click(function(){
        var len = $("#saleTable2 input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            editChildName();
        }

    });
    //删除子项字典
    $("#delBtnChild").click(function(){
        var len = $("#saleTable2 input:checked").length;
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
//新增字典
function addName() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '新增字典',
        area: ['450px', '300px'],
        content: 'systemMgnt/data/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//编辑字典
function editName() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '编辑字典',
        area: ['450px', '300px'],
        content: 'systemMgnt/data/edit.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//新增子项字典
function addChildName() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '新增字典',
        area: ['450px', '200px'],
        content: 'systemMgnt/data/addChild.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//编辑子项字典
function editChildName() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '编辑字典',
        area: ['450px', '300px'],
        content: 'systemMgnt/data/editChild.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}