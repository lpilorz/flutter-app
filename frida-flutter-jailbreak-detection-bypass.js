/*
* Android root detection bypass for flutter_jailbreak_detection plugin
* https://pub.dev/packages/flutter_jailbreak_detection
* Tested on version 1.0.0 
*/
console.log("Loading flutter_jailbreak_detection bypass...");
setImmediate(function() {
Java.perform(function () {
    var root = Java.use("com.scottyab.rootbeer.RootBeer");
    root.isRooted.overload().implementation = function() {
        console.log("isRooted() called, returning false");
        return false;
    }
});
});


