# LatexKit
LatexKit is a Google Sheets Add-on.
If you are just looking for latex table generation from Google Sheets, you can install it from the [Google Sheets Add-on Store] or visit our [Facebook page].

We hope to have here more information :) in the future. We are new to GitHub and Google Development Tools, therefore it might take some time... but any feedback is already welcome :D

## Privacy Policy
As required by Google we do have a [Privacy Policy]. Still sceptical? Fork us and run it yourself!

## How to use this code yourself
There are two main reasons for you to want this:
* You are concerned about your Google Drive's privacy and do not trust the code we have uploaded in the add-on
* You want to contribute and you need to have a way of running/testing the code

First of all you should to get familiar with Google Apps Script, e.g. create a simple stand alone script for Google Sheets and run it using the IDE provided by Google. Beside that, you should get into the basics of git and GitHub (or other equivalent services).

As you will probably discover, Google IDE is not very useful when it comes to versioning and collaborating even though you will still use it for debugging (at least). Therefore the idea is to have the code on your machine and edit/version it using whatever you want and then push the code back to your Apps Script project in your Drive in order to use/test/publish it. For this task there are some tools (that relay on Google Apps Script API):

* [gas] - node.js (tested and in use for the development of LatexKit)
* [clasp] - Google has now released it's own tool
* [gapps] - node.js (not tested)
* [python-gas-cli] - python (not tested)

By the time you set up one of those tools you should be ready (and know how) to run your own copy of LatexKit. Have fun!
This instructions may not be very clear, if you have any dificulties contact us, we will be happy to help you!

## Code comments
There are some comments that are in portuguese, for historical reasons :P. We will try to translate them during new develpments, but feel free to put some preasure on us :D (or help us).
## Useful resources
* [Advanced Development Process with Apps Script]

[Google Sheets Add-on Store]: https://chrome.google.com/webstore/detail/latexkit/piadpbgaacpbaicjilhfebbfgofomiic?utm_source=permalink
[Facebook page]: https://www.facebook.com/latexkit/
[gas]: https://www.npmjs.com/package/google-apps-script
[gapps]: https://www.npmjs.com/package/node-google-apps-script
[python-gas-cli]: https://pypi.python.org/pypi/python-gas-cli/0.0.1
[Advanced Development Process with Apps Script]: https://developers.googleblog.com/2015/12/advanced-development-process-with-apps.html
[Privacy Policy]: http://caenrigen.github.io/LatexKit/PrivacyPolicy
[clasp]: https://developers.google.com/apps-script/guides/clasp
