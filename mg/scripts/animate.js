var colRegister = new Object(); // Holds collision events
var disableAnimation = false;
var explosionImg = new Image();
var timestamp = new Date().getTime();
explosionImg.src = 'images/explosion1.gif?'+timestamp;
explosionImg.id = 'explosionAnimation';

// Takes two HTML objects, and executes a function when they overlap
function register_collision(object1id, object2id, colFunction){
    var ob1 = document.getElementById(object1id);
    var ob2 = document.getElementById(object2id);
    
    // Check if object1 already has events tied to it. If not, create an object
    if(typeof colRegister[object1id] == 'undefined'){
        colRegister[object1id] = new Object();
    }
    
    colRegister[object1id][object2id] = colFunction;
}


// Performs the collision detection. Returns true if collision occures, false otherwise.
function check_collision(object1id, object2id, padding){
    var ob1 = document.getElementById(object1id);
    var ob2 = document.getElementById(object2id);
    var ob1Coord = ob1.getBoundingClientRect();
    var ob2Coord = ob2.getBoundingClientRect();

    // Return true if there is a collision.
    // It is a simple proof using set theory/DeMorgan's law to to determine if an overlap exists.
    return ((ob1Coord.left < ob2Coord.right-padding) && (ob1Coord.right > ob2Coord.left+padding) &&
            (ob1Coord.top < ob2Coord.bottom-padding) && (ob1Coord.bottom > ob2Coord.top+padding));
}


// Takes the id of an HTML object and the amount by which to increase/decrease the top or left position of the object
//
// Example usage: 
// animate('rocket', {top: -7});   // Moves the object with id 'rocket' up 7 pixels:
// Returns true when the object is moved, returns false on collision

function animate(id, properties){
    if(disableAnimation == true) return false;
    var obj = document.getElementById(id);
    
    objCoord = obj.getBoundingClientRect(); // Get coordinates of object
    
    if(properties.left != undefined){
        
        // Left or right pressed
        obj.style.left = objCoord.left + properties.left + 'px';
        
    }else if(properties.top != undefined){
        
        // Up or down pressed
        obj.style.top = objCoord.top + properties.top + 'px';
    }
    
    
    
    // Check for collision
    if(typeof colRegister[id] != 'undefined'){
        // This object has collision events tied to it
        
        for(var obj2id in colRegister[id]){
            if (Object.prototype.hasOwnProperty.call(colRegister[id], obj2id)) {
            // Iterate through the various collisions registered for this object, skipping non-properties (such as functions)
            
            if(check_collision(id, obj2id, 25)){
                // A collision has occurred, so execute the associated function
                colRegister[id][obj2id]();
                return false;
            }
            
            }
        }
    }
    
    return true;
}

function disable_movement(disable){
    disableAnimation = disable;
}

function explode_rocket(){
        disable_movement(true); // Prevents the player from moving the explosion
        
	// Position the explosion to be centered on ship (this will need to be adjusted if the ship or explosion image is changed)
	rocketCoord = document.getElementById('rocket').getBoundingClientRect();
        explosionImg.style.position = 'absolute';
	explosionImg.style.left = rocketCoord.left - 60 + 'px';
	explosionImg.style.top = rocketCoord.top - 60 + 'px';
        explosionImg.style.zIndex = '-1';
        
        
        // Hide the rocket and display the explosion
        document.getElementById('rocket').style.visibility = 'hidden';
        document.getElementById('pageContainer').appendChild(explosionImg);
        //document.getElementById('explosionAnimation').src = 'images/explosion1.gif?'+timestamp;
        
        // Hide the explosion after 2.5 seconds
	setTimeout(function(){ document.getElementById('explosionAnimation').style.visibility = 'hidden'; }, 2500);
        
        // Display the game over prompt .5 seconds after the explosion ends
        setTimeout(function(){ if(confirm("Your ship and its cargo were destroyed. Fortunately, the crew was able to escape at the last minute!\n\nTry again?")){location.reload();}else{alert("Thanks for playing!\n\n-Team Skynet\n\n\n(Hint: try clicking around.)")} }, 3000)
}