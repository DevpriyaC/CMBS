//function to display popup window
function openPopup() {
    var popup = window.open("", "", "width=500,height=400,resizeable,scrollbars"),
      table = document.getElementById("popup");

  popup.document.write(table.outerHTML);
  popup.document.close();
  if (window.focus) 
    popup.focus();
}

