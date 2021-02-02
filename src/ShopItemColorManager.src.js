'use strict';
var name = "ShopItemColorManager";
var window;
var isEnabled = true;
var actionSubscription;
var COLORS = [28,28,28,7];
var DEFAULT_COLOR = 28;
var HAT_RANDOM = true;
var TSHIRT_RANDOM = true;
var UMBRELLA_RANDOM = true;
var BALLOON_RANDOM = true;

/**
Generates a random number between 0 and 31
*/
function getRandomColor() {
	return Math.floor(Math.random() * 32);
}

/**
Determines which of the items ID is the one that is used for the main color scheme
If the secondary item ID is 255, it means the stall sells only one item
If a stall sells 2 items, the one used for coloring is the secondary item
**/
function getColoredItemId(item1Id, item2Id) {
	var id = item1Id;
	//If the stall sells 2 items we check if the secondary item is a hat, tshirt, balloon or umbrella
	if(item2Id == 0 || item2Id == 4 || item2Id == 18 || item2Id == 20) {
		id = item2Id;
	}
	return id;
}

/**
Generates arguments for the ridesetappearance function. 
A new color is chosen depending on the type of shop items sold by the stall
and whether the randomize setting is activated or not for that item
*/
function getNewColorSettings(rideId, item1Id, item2Id) {
	var color = DEFAULT_COLOR;
	var id = getColoredItemId(item1Id, item2Id);
	if(id === 18) {
		//hat
		if(HAT_RANDOM) {
			COLORS[0] = getRandomColor();
		}
		color = COLORS[0];
	}
	else if(id === 20) {
		//tshirt
		if(TSHIRT_RANDOM) {
			COLORS[1] = getRandomColor();
		}
		color = COLORS[1];
	}
	else if(id === 4) {
		//umbrella
		if(UMBRELLA_RANDOM) {
			COLORS[2] = getRandomColor();
		}
		color = COLORS[2];
	}
	else if(id === 0) {
		//balloon
		if(BALLOON_RANDOM) {
			COLORS[3] = getRandomColor();
		}
		color = COLORS[3];
	}
	
	return {
		ride: rideId, 
		type: 0, 
		value: color, 
		index: 0
	};
}

/**
Redraws the main window after a setting has been changed
*/
function updateWindow() {
	
	if(typeof window != 'undefined' && window.title != '') {
		window.findWidget("hat_picker").colour = COLORS[0];
		window.findWidget("ts_picker").colour = COLORS[1];
		window.findWidget("umb_picker").colour = COLORS[2];
		window.findWidget("bal_picker").colour = COLORS[3];
		
		window.findWidget("hat_random").isChecked = HAT_RANDOM;
		window.findWidget("ts_random").isChecked = TSHIRT_RANDOM;
		window.findWidget("umb_random").isChecked = UMBRELLA_RANDOM;
		window.findWidget("bal_random").isChecked = BALLOON_RANDOM;
	}
}

/**
Enables or disables per stall randomization for all items
*/
function setRandomization(enabled) {
	HAT_RANDOM = isEnabled;
	TSHIRT_RANDOM = isEnabled;
	UMBRELLA_RANDOM = isEnabled;
	BALLOON_RANDOM = isEnabled;	
}

/**
Callback for the "Manage" checkbox.
Enables or disables the plugin. 
*/
function enablePlugin(enabled) {
	isEnabled = enabled;
	if(isEnabled) {
		if (typeof actionSubscription === 'undefined') {
			initialize();
		}
	}
	else {		
		destroy();
	}
}

/**
Opens the plugin window
*/
function openMainWindow() {
	if(typeof window != 'undefined') {
		window.close();
	}	
	window = ui.openWindow({
		classification: name,
		title: name,
		width: 300,
		height: 190,
		widgets: [
		{
			type: "checkbox",
			name: "manage",
			x: 10,
			y: 20,
			width: 300,
			height: 20,
			isChecked: isEnabled,
			text: "Manage item colors for all new stalls",
			onChange: function(checked) {enablePlugin(checked);}
		},
		{
			type: "label",
			name: "hat_label",
			x: 15,
			y: 53,
			width: 80,
			height: 20,
			text: "HATS:"
		},
		{
			type: "colourpicker",
			name: "hat_picker",
			x: 100,
			y: 53,		
			width: 20,
			height: 20,
			colour: COLORS[0],
			isChecked: isEnabled,
			onChange: function(cn) {COLORS[0] = cn;}
		},
		{
			type: "checkbox",
			name: "hat_random",
			x: 130,
			y: 50,
			width: 170,
			height: 20,	
			isChecked: HAT_RANDOM,
			text: "Random for every stall",
			onChange: function(checked) {HAT_RANDOM = checked;}
		},
		{
			type: "label",
			name: "ts_label",
			x: 15,
			y: 73,
			width: 80,
			height: 20,
			text: "T-SHIRTS:"
		},
		{
			type: "colourpicker",
			name: "ts_picker",
			x: 100,
			y: 73,		
			width: 20,
			height: 20,
			colour: COLORS[1],
			isChecked: isEnabled,
			onChange: function(cn) {COLORS[1] = cn;}
		},
		{
			type: "checkbox",
			name: "ts_random",
			x: 130,
			y: 70,
			width: 170,
			height: 20,	
			isChecked: TSHIRT_RANDOM,
			text: "Random for every stall",
			onChange: function(checked) {TSHIRT_RANDOM = checked;}
		},
		{
			type: "label",
			name: "umb_label",
			x: 15,
			y: 93,
			width: 80,
			height: 20,
			text: "UMBRELLAS:"
		},
		{
			type: "colourpicker",
			name: "umb_picker",
			x: 100,
			y: 93,		
			width: 20,
			height: 20,
			colour: COLORS[2],
			isChecked: isEnabled,
			onChange: function(cn) {COLORS[2] = cn;}
		},
		{
			type: "checkbox",
			name: "umb_random",
			x: 130,
			y: 90,
			width: 170,
			height: 20,	
			isChecked: UMBRELLA_RANDOM,
			text: "Random for every stall",
			onChange: function(checked) {UMBRELLA_RANDOM = checked;}
		},
		{
			type: "label",
			name: "bal_label",
			x: 15,
			y: 113,
			width: 80,
			height: 20,
			text: "BALLOONS:"
		},
		{
			type: "colourpicker",
			name: "bal_picker",
			x: 100,
			y: 113,		
			width: 20,
			height: 20,
			colour: COLORS[3],
			isChecked: isEnabled,
			onChange: function(cn) {COLORS[3] = cn;}
		},
		{
			type: "checkbox",
			name: "bal_random",
			x: 130,
			y: 110,
			width: 170,
			height: 20,	
			isChecked: BALLOON_RANDOM,
			text: "Random for every stall",
			onChange: function(checked) {BALLOON_RANDOM = checked;}
		},		
		{
			type: "button",
			name: "apply_all",
			x: 50,
			y: 150,
			width: 200,
			height: 20,	
			text: "Apply to all existing stalls",
			onClick: function() {applyToAll();}
		}
		]
	});
}

function applyToAll() {
	var allRides = map.rides;
	for (var i = 0; i < allRides.length; i++) {
        var ride = allRides[i];		
		var rideType = ride.type;
		var rideId = ride.id;		
		//check it is the right type of stall
		if (rideType == 35 || rideType == 32) {
			var itemId = ride.object.shopItem;
			var itemId2 = ride.object.shopItemSecondary;
			//change the color by calling 'ridesetappearance'
			var ar = getNewColorSettings(rideId, itemId, itemId2);			
			context.executeAction('ridesetappearance', ar, function(r){});		
		}
	}
}

/**
Initializes the plugin. 
Subscribes to the action.execute API event
*/
function initialize() {
	actionSubscription = context.subscribe('action.execute', function(actionArguments) {
		var action = actionArguments.action;		
		var args = actionArguments.args;
		//action 'ridesetsetting' is triggered when placing a stall
		if(action == 'ridesetsetting') {
			var rideId = args.ride;
			var ride = map.getRide(rideId);
			var rideType = ride.type;
			//check it is the right type of stall
			if (rideType == 35 || rideType == 32) {
				var itemId = ride.object.shopItem;
				var itemId2 = ride.object.shopItemSecondary;				
				//change the color by calling 'ridesetappearance'
				var ar = getNewColorSettings(rideId, itemId, itemId2);
				context.executeAction('ridesetappearance', ar, function(r){});
				updateWindow();
			}
		}
	});
	setRandomization(true);
}
/**
Stops the plugin and removes the API subscription.
Sets stalls preset colors back to default
*/
function destroy() {
	if (typeof actionSubscription != 'undefined') {
		actionSubscription.dispose();
		actionSubscription = undefined;
	}
	var COLORS = [28,28,28,7];
	setRandomization(false);
	if(typeof window != 'undefined') {
		updateWindow();
		window.close();
	}
}

/**
Main function & plugin registration
*/
var main = function() {
	if (typeof ui === 'undefined') {
        return;
    }
    ui.registerMenuItem(name, function () {
        openMainWindow();
    });
	if(isEnabled) {
		initialize();
	}
};
registerPlugin({ 
	name: name,
	version: "1.0",
	licence: "MIT",
	authors: ["gamerlenny"],
	type: "local",
	main: main
});