function range_to_string(spec){

  var range = spec.range;
  var settingArray = spec.settingsArray;
  
  // Create array of colFeat obj. 
  // and configure column features: 
  // is_pmError
  
  var tabFeats = create_tableFeats(spec);
  var colFeats = tabFeats.colFeats;
  var rowFeats = tabFeats.rowFeats;
  
  //Create a 2D array of Cell obj.
  //each Cell obj. contains properties:
  // string   dvalue:   displayed value on the sheet
  // number   value:    value stored in obj.
  // number   rowSpan:  num. of rows spanned
  // number   colSpan:  num. of columns spanned
  var matrix=create_matrix(range);
  
  // adds a property to the Cell objs. (string errValue)
  // errValue holds the uncertainty of a given value as displayed in the sheet
  // deletes the uncertainty columns and the column features obj. associated
  err_handler({matrix: matrix, colFeats: colFeats});
  
  // adds a property to the Cell objs. (string pvalue)
  // pvalue is the string to be printed on the LateX table
  // e.g. \multirow{2}{*}{7.5 $\pm$ 0.4}
  // using default error notation given by function def_err_printer
  set_forPrint({matrix: matrix, colFeats: colFeats},def_err_printer);
  
  // adds & to the end of pvalue
  // adds white spaces to pvalue
  // to match the sizes of pvalue's on the same columns
  add_columnSeparator({matrix: matrix, colFeats: colFeats});
  
  
  if(tabFeats.manual)
    return create_manual_string({range: range, matrix: matrix, colFeats: colFeats});
  
  // create the printable string 
  // according to column features and row features of the table
  return create_string({matrix: matrix, colFeats: colFeats, rowFeats: rowFeats});
   
}