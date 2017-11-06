sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.QuickViewNavOrigin.Component", {

		metadata : {
			rootView : {
				"viewName": "sap.m.sample.QuickViewNavOrigin.QuickView",
				"type": "XML",
				"async": true
			},
			dependencies : {
				libs : [
					"sap.m",
					"sap.ui.layout"
				]
			},
			config : {
				sample : {
					stretch: true,
					files : [
						"QuickView.view.xml", "QuickView.controller.js", "QuickView.fragment.xml"
					]
				}
			}
		}
	});

	return Component;

});
