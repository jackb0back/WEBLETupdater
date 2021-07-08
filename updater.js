const bc = new BroadcastChannel('update');
var NEWV = 'v1.1'
var installNew = null
bc.postMessage(NEWV);
bc.postMessage(installNew);
