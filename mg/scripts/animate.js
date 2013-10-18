// Takes the id of an HTML object and the amount by which to increase/decrease the top or left position of the object
//
// Example usage: 
// animate('rocket', {top: -7});   // Moves the object with id 'rocket' up 7 pixels:

function animate(id, properties){
    
    var obj = document.getElementById(id);
    
    objCoord = obj.getBoundingClientRect(); // Get coordinates of object
    
    if(properties.left != undefined){
        
        // Left or right pressed
        obj.style.left = objCoord.left + properties.left + 'px';
        
    }else if(properties.top != undefined){
        
        // Up or down pressed
        obj.style.top = objCoord.top + properties.top + 'px';
    }
}