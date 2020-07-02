# Introduction
`gmail-list` is a node.js command line utility that uses the Gmail API to list metadata for all the emails in your inbox. It’s useful for performing data science on your own email data set.

Currently, `gmail-list` outputs a list of senders for the top 300 emails in your inbox. It looks like this:

```
$ node index.js
The New York Times <nytdirect@nytimes.com>
Zapier <contact@zapier.io>
Firebase <firebase-no-reply@google.com>
Twitter <verify@twitter.com>
...
```

 You can modify `list.js` to output different kinds of information; see the [Gmail API Reference Documentation](https://developers.google.com/gmail/api/v1/reference).

## Why?
I recently began using [gmailctl](https://github.com/mbrt/gmailctl) to manage my Gmail filters. With `gmail-list` I can generate a count of each email address and how many times it has sent me email; from this list I can continuously configure my filters to capture more newsletters and other automated emails. 

## Installation
1. git clone this repository
2. `npm install`
	* The only dependency that needs to be installed is `googleapis@39`
3. Go to the [Google Developers Gmail Quickstart](https://developers.google.com/gmail/api/quickstart/nodejs) and click `Enable the Gmail API` to generate a `credentials.json`  file that you should put in this directory
4. Run `node index.js` and follow the instructions presented to obtain authorization tokens for your Google account (only needs to be done once, stored locally in `token.json`)
5. Run `node index.js` again to generate a newline-separated list of sender addresses from the last 300 emails in your inbox

## Usage
`gmail-list` can be combined with other bash utilities to gain insights. 

Save the sender addresses to a file:

` node index.js > out.txt`

Sort the file and provide a count of how many times each address appears:

` cat out.txt | sort | uniq -c | sort -r > out-sorted.txt`

End result:

```
16 The New York Times <nytdirect@nytimes.com>
11 Top Stonks <noreply@topstonks.io>
2 Firebase <firebase@google.com>
...
```

## Next Steps
* Add command line arguments to change the search query (currently “is:inbox” and max search results (currently 300)
* Add ability to pick which metadata to display (currently only sender address, but could be subject, date, or other headers available through the API)

## License
```
MIT License

Copyright (c) 2020 Andi Andreas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
