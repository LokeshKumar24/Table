sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("AB.Table.controller.View1", {
		onInit: function () {

		},
		onRowSelect:function(event){
			var path=event.getParameter("rowContext").getPath();
			
			var form=this.getView().byId("form");
			
			form.bindElement(path);
		}
	});
});