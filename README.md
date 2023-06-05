# g-scripts
A repository for a set of useful google scripts

## Installation:
1. Open https://script.google.com/ and create there new project
2. paste the script content to code.gs

## Scripts description
* gmail_group_by_sender.gs - Script that scans a Gmail inbox and generates a report with the number of emails per sender. It creates a new Google Document on root folder of Google Drive with the name “Email stats [startThread-endThread]” where startThread and endThread are the starting and ending indices of the threads to be processed. Code counts the number of threads for each sender, sorts the senders in descending order by count, and appends the sorted list to the document. The script logs its progress and prints “Finished!” when it has completed processing all threads.
