var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var hikes = Observable();

// Index of operator
const indexOf = ((selectedId) => {
	for (var foundId = 0; foundId < hikes.length; foundId++) {
		var hike = hikes.getAt(foundId);
		if (hike.id != selectedId) continue;
		break;
	}
	return foundId;	
})

/*
 * Load list of hikes at startup
 */
Backend.loadHikes()
	.then((hikesData) => {
		hikes.replaceAll(hikesData);
	})
	.catch((error) => {
		console.log("Couldn't get hikes: " + error);
	});

/*
 * Delete the hike from hikes list
 */
function deleteHike(id) {
	const index = indexOf(id);
	hikes.removeAt(index);
};

/*
 *  Update hikes list on device
 */
function updateHike(id, name, location, distance, rating, comments) {
	const index = indexOf(id);
	const hike = hikes.getAt(index);	
	
	hike.name = name;
	hike.location = location;
	hike.distance = distance;
	hike.rating = rating;
	hike.comments = comments;
	hikes.replaceAt(i, hike);

	/*
	 * If this was a real database it would update it there
	 */
	Backend.updateHike(id, name, location, distance, rating, comments)
		.catch(function(error) {
			console.log("Couldn't update hike: " + id);
		});
}

module.exports = {
	hikes: hikes,
	
	updateHike: updateHike,
	deleteHike: deleteHike,
};