Contains Google Apps Script to load JSON response from an API
and convert it into GoogleSheets data.

First Approach:
This script can be invoked by adding it as a function in the cell
=IMPORTJSON("https://test.com")

Second Approach:
The url parameter can be removed and the commented code can be hardcoded with the url that is required.
//var url="https://test.com"

The code should look like this:
function IMPORTJSON() {
  var url="https://test.com"
  ....