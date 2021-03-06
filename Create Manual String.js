function create_manual_string(spec) {
  // Get the arguments from object spec
  var range    = spec.range;
  var matrix   = spec.matrix;
  var colFeats = spec.colFeats;
  var new_range = range.offset(-1, range.getNumColumns() , range.getNumRows()+1 , 1)
  var new_range_value = new_range.getValues();
  var manualColSpec = spec.manualColSpec;

  var output = '';
  var colAlign = '';

  if(manualColSpec !== ''){
    // Use users specification in case the cell above the table corner is
    // not empty
    colAlign = manualColSpec;
  } else {
    colAlign = columns_align(colFeats);
  }

  output += "\\begin{tabular}";
  output += "{" + colAlign + "}\r\n" + new_range_value[0][0] + '\r\n';


  var i,j;
  for(i=0;i<matrix.length;i++)
  {
    for(j=0;j<matrix[i].length;j++)
    {
     output+=matrix[i][j].pvalue;
    }
    output+='\\\\' + new_range_value[i+1][0] + '\r\n';
  }

  output+= "\\end{tabular}\r\n";

  return output;

}
