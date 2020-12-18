export const copyToClipboard = (id) => {
  var value = document.getElementById(id).innerHTML;
  var input_temp = document.createElement("input");
  input_temp.value = value;
  document.body.appendChild(input_temp);
  input_temp.select();
  document.execCommand("copy");
  document.body.removeChild(input_temp);
};
