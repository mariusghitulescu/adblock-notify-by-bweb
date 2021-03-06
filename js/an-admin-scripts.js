/*
	an_admin_scripts.js
	AdBlock Notify
	Copyright: (c) 2016 Themeisle, themeisle.com
*/
jQuery(document).ready(function($) {
	
	if ($('.an-stats-table').length > 0){

		//Widget
		var DataTotal = [
				{
					value: anWidgetOptions.totalNoBlocker,
					color:"#34495e",
 					highlight: "#36526F"
				},
				{
					value : anWidgetOptions.anCountBlocked,
					color : "#e74c3c",
					highlight: "#F44938"
				}			
			];
		var DataToday = [
				{
					value: anWidgetOptions.totalNoBlockerToday,
					color:"#34495e",
					highlight: "#36526F"
				},
				{
					value : anWidgetOptions.anCountBlockedHistory,
					color : "#e74c3c",
					highlight: "#F44938"
				}			
			];
		
		var lineChartData = {
			labels : ["Today","Day -1","Day -2","Day -3","Day -4","Day -5","Day -6"],
			datasets : [
				{
					fillColor : "rgba(50, 82, 110,0.2)",
					strokeColor : "rgba(50, 82, 110,0.8)",
					pointColor : "rgba(50, 82, 110,1)",
					pointStrokeColor : "rgba(50, 82, 110,1)",
					pointHighlightFill: "rgba(250,250,250,1)",
					pointHighlightStroke: "rgba(50, 82, 110,1)",
					data : anWidgetOptions.anDataHistotyTotal
				},
				{
					fillColor : "rgba(231, 76, 60,0.2)",
					strokeColor : "rgba(173, 52, 40,0.8)",
					pointColor : "rgba(231, 76, 60, 1)",
					pointStrokeColor : "rgba(231, 76, 60, 1)",
					pointHighlightFill: "rgba(250,250,250,0.8)",
					pointHighlightStroke: "rgba(173, 52, 40,0.8)",
					data : anWidgetOptions.anDataHistotyBlocked
				}
			]			
		}
		//Load the charts
		new Chart(document.getElementById("an-canvas-donut").getContext("2d")).Doughnut(DataTotal, {
 			segmentStrokeColor : '#fafafa',
			tooltipFontSize: 12,
			responsive: true
		});
		new Chart(document.getElementById("an-canvas-donut-today").getContext("2d")).Doughnut(DataToday, {
 			segmentStrokeColor : '#fafafa',
			tooltipFontSize: 12,
			responsive: true
		});
		new Chart(document.getElementById("an-canvas-line").getContext("2d")).Line(lineChartData, {
			tooltipFontSize: 12,
			tooltipTitleFontSize: 12,
			scaleFontSize: 10,
			responsive: true,
		});
		
		//Admin page
		resetButton = $('p.submit button.button-secondary[value!="save"]');
		resetButtonVal = resetButton.attr('onclick');
		resetButton.attr('onclick', 'javascript:if(!confirm(\'Are you sure ? Your custom settings will be lost.\')) return false; ' + resetButtonVal);  
	
	}
	
});