var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var hikes = Observable();

/* 
 * Index of operator
 */
const indexOf = ((selectedId) => {
	/* TODO deprecate
	for (var index = 0; index < hikes.length; index++) {
		var hike = hikes.getAt(index);
		if (hike.id != selectedId) continue;
		break;
	}
	*/

	/*
	const index = hikes.map((hike) => {
		return hike.id;
	}).indexOf(selectedId);
	*/
	
	const index = hikes.toArray().findIndex(hike => hike.id == selectedId);
	return index;
})

/*
 * Next id operator
 */
const nextId = (() => {
	/* TODO deprecate
	var sequence = -1;
	for (var index = 0; index < hikes.length; index++) {
		var hike = hikes.getAt(index);
		if (sequence <= hike.id) sequence = hike.id + 1;
	}
	*/

	const sequence = Math.max(...hikes.toArray().map(hike => hike.id)) + 1;
	return sequence;
})

/*
 * Log the output to the console
 */
function showLog() {
	console.log(JSON.stringify(hikes.toArray()));
}

/*
 * Load list of hikes at startup (observable list)
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
 * Save hike to the hikes list
 */
function addHike(name, location, distance, rating, comments) {
	const id = nextId();	
	const hike = {
		id: id,
		name: name,
		location: location,
		distance: distance,
		rating: rating,
		comments: comments
	};
	
	hikes.add(hike);

	/*
	 * Not a real database
	 */
	Backend.addHike(id, name, location, distance, rating, comments)
		.catch((error) => {
			console.log("Couldn't add hike: " + error);
		});
 }

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
	hikes.replaceAt(index, hike);

	/*
	 * If this was a real database it would update it there
	 */
	Backend.updateHike(id, name, location, distance, rating, comments)
		.catch(error => {
			console.log("Couldn't update hike: " + id);
		});
}

module.exports = {
	hikes: hikes,
	
	showLog: showLog,
	updateHike: updateHike,
	deleteHike: deleteHike,
	addHike: addHike
};