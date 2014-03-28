if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
         for (var i = (start || 0), len = this.length; i < len; i++) {
             if (this[i] === obj) { 
             	return i; 
             }
         }
         return -1;
    }
}