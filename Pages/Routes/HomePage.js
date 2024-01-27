var Context = require("Modules/Context");

var hikes = Context.hikes;

/* 
 * Add page route
 */
function goToAddHike() {
	router.push("addHike", { name: null, location: null, distance: null, rating: null, comments: null });
}

/*
 * Edit page route
 */
function goToHike(arg) {
	var hike = arg.data;
	router.push("editHike", hike);
}

/*
 * Remove action
 */
function remove(arg) {
	var hike = arg.data;
	Context.deleteHike(hike.id);
	router.push("home");
}

module.exports = {
	hikes: hikes,

	remove: remove,
	goToHike: goToHike,
	goToAddHike: goToAddHike
};