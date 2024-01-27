# hikr Tutorial
Pronounced "hiker" (/ˈhaɪkə(r)/), hikr is a basic hike-tracking app.

## Forked for Educational Purposes
Using the original hikr app as basis for my own tutorial.  For homework, I added the following assignments.
1. Add swipe gesture for a hike is selected for a delete action
2. Add delete action business logic to the swipe gesture
3. Create a new hike page to add a new hike

## Couple of things I learned from this exercise
1. When I cloned the editHike page it complained about TitleText already defined
   1. Moved TitleText into a component and reused that on editHike and addHike pages
2. I separated all [page].JS files into a separate Routes folder for better readability
3. The delete gesture was actually taken from the to-do example app
4. Knowing that observables and arrays behave differently in the app
   1. Observables respond to changes in data whereas arrays do not
   2. Observables have an API that is a subset of the array methods
   3. Arrays are easier to use and found it easier to convert to an array
5. Refactored some of the code to use EMCAScript 6 styling
## Some remarks
1. It appears that backend.js has stub functions and don't actually update any database
2. Var were replaced in functions to const since var has a global meaning
3. Some names of functions were renamed that were causing confusion

![Screen cap](https://github.com/fusetools/hikr/blob/master/hikr.gif)

## basic info
hikr is an example app case to accompany Fuse's [end-to-end Fuse app tutorial](https://www.fusetools.com/docs/tutorial/tutorial).

_Note: there have been some force-pushes on this repo, so if you've cloned it before the series went live, it's probably a good idea to delete it and clone again._

## license
This code is licensed under the MIT license (see LICENSE).

The provided video file (`Assets/nature.mp4`) is a modified version of [Graham Uhelski](https://vimeo.com/mankindfilms)'s ["The Valley"](http://mazwai.com/#/videos/220). It is licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
