//  This function runs when a spreadsheet file is opened
//  Adds options to menu, if the code is inside an add-on it will add the options in a submenu  in Add-ons

function onOpen(e){
  var ui = SpreadsheetApp.getUi();
  var menuLabels = getDevSettings().getMenuLabels();
  ui.createMenu('LatexKit')
  .addItem(menuLabels['singleTabular'], 'menuMakeTabular')
  .addItem(menuLabels['donateFunny'], 'showPayPalDonations')
  .addItem(menuLabels['allTabular'], 'menuExportAllTabs')
  .addSeparator()
  .addItem(menuLabels['showSettings'], 'menuShowSettingsSheet')
  .addItem(menuLabels['updateSettings'], 'updateSettingsSheet')
  .addSeparator()
  .addItem(menuLabels['singleData'], 'menuExportData')
  .addItem(menuLabels['allData'], 'menuExportAllData')
  .addSeparator()
  .addItem(menuLabels['feedbackForm'], 'showFeedbackDialog')
  .addItem(menuLabels['donate'], 'showPayPalDonations')
  .addToUi();
}

function onInstall(e){
  onOpen(e);
  // Perform additional setup as needed.
}
