var foo = 'foo';

(function () {

    // Lower level scope will always overwrite a higher level scope.  
    var foo = 'bar';
    console.log(foo); // 'bar'
    // Global Variables can still be accessed through window object 
    console.log(window.foo); // 'foo'
    var mockDatabase = [
        [
            {
                //Product 1
                id: 1,
                price: "$143 USD",
                image: "../assets/Kendrick.jpg",
                style: "Nike React Element 55 Kendrick Lamar SE",
                sizes: [7, 8, 9, 10, 11, 12, 13]
            },
            {
                //Product 2
                id: 2,
                price: "$229 USD",
                image: "../assets/adidasYeezyBoost.jpg",
                style: "Adidas Yeezy Boost 350-V2 Clay",
                sizes: [7, 8, 9, 10, 11, 12, 13]
            },
            {
                //Product 3
                id: 3,
                price: "$162 USD",
                image: "../assets/Air-Jordan-9-Retro-Racer-Blue-Product.jpg",
                style: "Air Jordan 9 Retro Racer Blue",
                sizes: [7, 8, 9, 10, 11, 12, 13]
            },
            {
                //product 4
                id: 4,
                price: "$440 USD",
                image: "../assets/Nike-SB-Dunk-Low-StrangeLove-Skateboards-Product.jpg",
                style: "Nike SB Dunk Low StrangeLove Skateboards",
                sizes: []
            },
            {
                //product 5
                id: 5,
                price: "$485 USD",
                image: "../assets/Nike-Lebron-7-Christ-The-King-Product.jpg",
                style: "Nike Lebron 7 Christ The King",
                sizes: [7, 8, 9, 10, 11, 12, 13]
            },
            {
                //product 6
                id: 6,
                price: "$1650 USD",
                image: "../assets/Nike-Kobe-6-Grinch-Christmas-Product.jpg",
                style: "Nike Kobe 6 Grinch Christmas",
                sizes: [7, 8, 9, 10, 11, 12, 13]
            },
            {//product 7
                id: 7,
                price: "$210 USD",
                image: "../assets/Nike-Kobe-4-Protro-Undefeated-Milwaukee-Bucks-Product.jpg",
                style: "Nike Kobe 4 Protro Undefeated Milwaukee Bucks",
                sizes: []
            }
        ]
    ];

    function renderList(results) {

        var cardBody = document.querySelector('#card-result');

        // clear out inner HTML to get rid of any older results
        cardBody.innerHTML = '';

        // Map each database record to a string containing the HTML for it's row
        console.log(results)
        var cards = [];
        results.forEach(result => {
            
            result.forEach(test => {
                
                if(test.sizes.length == 0) {
                    cards.push('<div class="card" style="width: 18rem;"> <img src="' + test.image + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + test.style + '</h5><p class="card-text">' + test.price + '</p><a href="#" class="btn btn-danger">Sold out</a></div></div>')
                }
                else {
                    cards.push('<div class="card" style="width: 18rem;"> <img src="' + test.image + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + test.style + '</h5><p class="card-text">' + test.price + '</p><a href="#" class="btn btn-primary">Purchase</a></div></div>')
                }
               
                })
            })

   
    // Set the contents of the table body to the new set of rendered HTML rows
    cards.forEach(function (card) {
        // cardBody.innerHTML += card; // += adds to HTML instead of overwriting it entirely.
        cardBody.innerHTML += card;
    });

    // Lower level scope once again overwrites what's above it.
    var foo = 'renderList';
    console.log(foo); // 'renderList'
}
    renderList(mockDatabase);

    // function orderBy(sortValue) {
    //     // Sort method varies based on what type of value we're sorting 
        
    //     if(sortValue === 'style') {
    //         console.log('test');
    //         var sortedResults = [];
    //         mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
	// 			var nameA = a.style.toUpperCase(); // ignore upper and lowercase
    //             var nameB = b.style.toUpperCase(); // ignore upper and lowercase

	// 			// Sorts alphabetically.  -1 puts it before. 1 puts it after
	// 			if (nameA < nameB) {
	// 			    return -1;
	// 			}
	// 			if (nameA > nameB) {
	// 			    return 1;
	// 			}
	// 		})
    //     console.log(mockDatabase)
	// 	renderList(mockDatabase);
    //     }
	// 	// var sortedResults = (sortValue === 'style') ? 
    //     //     mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
	// 	// 		var nameA = a.style.toUpperCase(); // ignore upper and lowercase
    //     //         var nameB = b.style.toUpperCase(); // ignore upper and lowercase
    //     //         console.log('test');
	// 	// 		// Sorts alphabetically.  -1 puts it before. 1 puts it after
	// 	// 		if (nameA < nameB) {
	// 	// 		    return -1;
	// 	// 		}
	// 	// 		if (nameA > nameB) {
	// 	// 		    return 1;
	// 	// 		}
	// 	// 	}) : 
	// 	// 	mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler. 
	// 	// 										// Just need postive or negative number 
    //     //         // Object properties can be accessed through a string representing their name
	// 	// 		return a[sortValue] - b[sortValue];
    //     //     });
    //     // console.log(sortedResults)
	// 	// renderList(sortedResults);
    // }

    // document.querySelector('#orderBy').addEventListener('change', function(event){
	// 	// Event is the JavaScript event that transpired, in our change a CHANGE event.
	// 	// Target is the element it was performed on, useful for when the event targets 
	// 	// multiple elements.
    //     // Value has the name implies is the current value of the input element, if there is one
    //     console.log("Sorted by name")
	// 	orderBy(event.target.value);
    // });

    // function togglePublished(showPublished) {
	// 	// If showPublished is TRUE, only display published results
	// 	// Filter will only inclue objects that return TRUE from it's query
	// 	var filteredResults = mockDatabase.filter(function (result) {
	// 		// If showPublished is TRUE, always show.
	// 		// Otherweise only show if published is TRUE
	// 		return showPublished || result.published;
	// 	});
	// 	renderList(filteredResults);
	// }
	// // Change events trigger after the value of a form input changes
	// document.querySelector('#published').addEventListener('change', function(event){
	// 	// in this case value is a string that we need to convert to a boolean 
	// 	var value = event.target.value === 'true';
	// 	togglePublished(value);
	// });
}) ();