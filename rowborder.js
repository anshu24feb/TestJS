
unlayer.registerTool({
	name: "rowborder",
	label: "Row Border",
	icon: "fa-square-o",
	supportedDisplayModes: ["web", "email"],
	options: {
		border: {
			title: "Row Border",
			position: 1,
			options: {
				borderWidth: {
					label: "Border Width (px)",
					defaultValue: "1",
					widget: "counter"
				},
				borderColor: {
					label: "Border Color",
					defaultValue: "#CCCCCC",
					widget: "color_picker",
				}
			},
		},
	},
	renderer: {
		Viewer: unlayer.createViewer({
			render(values) {
				return getRowBorderHtml(values);
			},
		}),
		exporters: {
			web: function (values) {
				return getRowBorderHtml(values);
			},
			email: function (values) {
				return getRowBorderHtml(values);
			},
		},
	}
});

var getRowBorderHtml = function(values) {
	var borderWidth = values.borderWidth || "1";
	var borderColor = (values.borderColor || "#CCCCCC").replace("#", "");
	return `<div id="rowBorder_${borderWidth}_${borderColor}" style="display:none; border: ${borderWidth}px solid #${borderColor}; min-height: 20px;"></div>`;
}
