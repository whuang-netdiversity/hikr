var Context = require("Modules/Context");

function goToHike(arg) {
	var hike = arg.data;
	router.push("editHike", hike);
}

function remove(arg) {
	Context.deleteHike(arg.data.id);
	router.push("home");
}

module.exports = {
	hikes: Context.hikes,

	remove: remove,
	goToHike: goToHike
};