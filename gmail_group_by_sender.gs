function myFunction() {
  var startThread = 0;
  var stepSize = 50;
  var endThread = 2000;

  var docName = "Email stats [" + startThread + "-" + endThread + "]";
  var text = DocumentApp.create(docName).getBody().editAsText();

  var senderCount = {};

  while(startThread <= endThread) {
    var threads = GmailApp.getInboxThreads(startThread, Math.min(stepSize, endThread - startThread + 1));
    if (threads.length == 0) {
      break;
    }
    for (var j = 0; j < threads.length; j++) {
      var sender = threads[j].getMessages()[0].getFrom();
      if (senderCount[sender] === undefined) {
        senderCount[sender] = 0;
      }
      senderCount[sender]++;
    }
    startThread += threads.length;
    Logger.log("Done until " + startThread);
  }

  var sortedSenders = Object.keys(senderCount).sort(function(a, b) {
    return senderCount[b] - senderCount[a];
  });

  for (var i = 0; i < sortedSenders.length; i++) {
    var sender = sortedSenders[i];
    text.appendText('\n' + sender + ': ' + senderCount[sender]);
  }

  Logger.log("Finished!");
}
