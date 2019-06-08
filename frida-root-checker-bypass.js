/*
* Android root detection bypass for root_checker plugin
* https://pub.dev/packages/root_checker
* Tested on version 0.1.3 
*/
console.log("Loading root_checker bypass...");
setImmediate(function() {
Java.perform(function () {
    var root = Java.use("com.neki.rootchecker.RootCheckerPlugin");
    root.isPathExist.overload('java.lang.String').implementation = function(x) {
        return false;
    }
    root.isSUExist.overload().implementation = function() {
        return false;
    }
    root.isTestBuildKey.overload().implementation = function() {
        return false;
    }
    root.isHaveDangerousApps.overload().implementation = function() {
        return false;
    }
    root.isHaveRootManagementApps.overload().implementation = function() {
        return false;
    }
    root.isHaveDangerousProperties.overload().implementation = function() {
        return false;
    }
    root.isHaveReadWritePermission.overload().implementation = function() {
        return false;
    }
});
});


