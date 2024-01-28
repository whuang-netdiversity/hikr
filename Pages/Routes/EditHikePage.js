var Context = require("Modules/Context");

var hike = this.Parameter;

var name = hike.map(current => current.name);
var location = hike.map(current => current.location);
var distance = hike.map(current => current.distance);
var rating = hike.map(current => current.rating);
var comments = hike.map(current => current.comments);

/*
 * Cancel action
 */
function cancel() {
	// Refresh hike value to reset dependent Observables' values
	hike.value = hike.value;
	Context.showLog();
	router.goBack();
}

/*
 * Save action
 */
function save() {
	Context.updateHike(hike.value.id, name.value, location.value, distance.value, rating.value, comments.value);
	Context.showLog();
	router.goBack();
}

module.exports = {
	name: name,
	location: location,
	distance: distance,
	rating: rating,
	comments: comments,

	cancel: cancel,
	save: save
};