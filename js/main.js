$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#1BBC9B', '#F09609', '#6F5499'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['公共库CDN服务', '前端工具', '前端知识库'],
		responsive: 400
	});
});

var cachetimeset_popup = false;
function showcachetimeset(type){
	if(type=='ct1'){
		mtitle = '如何使用代理访问Google前端公共库'; 	
	}
	if(type=='ct2'){
		mtitle = '如何使用代理访问Google免费字体库'; 	
	}
	if(cachetimeset_popup == false){
		$('#cachetimesetModal .modal-dialog').css({
	        'margin-top': 	function () {
	            		return (($(window).height() - 490) / 2);
	        		}
	    });
	}
	$('#cachetimesetModal .modal-title').html(mtitle);
	$('#cachetimesetModal .modal-body').html($('#cachedialog_'+type).html()); 
	$('#cachetimesetModal').modal('show');
};

$('#cachetimesetModal').on('hidden.bs.modal', function () {
  cachetimeset_popup = false;
})