$(function(){
	var zTree;
	var setting = {
		view: {
			dblClickExpand: false,
			showLine: true,
			showIcon:true,
			selectedMulti: false
		},
		data: {
			simpleData: {
				enable:true,
				idKey: "id",
				pIdKey: "pId",
				rootPId: ""
			}
		},
		callback: {
			beforeClick: function(treeId, treeNode) {
				var zTree = $.fn.zTree.getZTreeObj("leftBar");
				if (treeNode.isParent) {
					zTree.expandNode(treeNode);
					return false;
				} else {
					demoIframe.attr("src",treeNode.file + ".html");
					return true;
				}
			},
			onClick: function onClick(e,treeId, treeNode) {
				var zTree = $.fn.zTree.getZTreeObj("leftBar");
				zTree.expandNode(treeNode);
			}
		}
	};

	var zNodes =[
		{id:1, pId:0, name:"西安市", open:true},
		{id:101, pId:1, name:"莲湖区"},
		{id:102, pId:1, name:"莲湖区"},
		{id:103, pId:1, name:"高新区高新一中"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:104, pId:1, name:"莲湖区"},
		{id:2, pId:0, name:"北京市"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
		{id:201, pId:2, name:"朝阳区"},
	];

	var t = $("#leftBar");
	t = $.fn.zTree.init(t, setting, zNodes);
	$("#leftBar").height($('#content-main',parent.document).height());
})