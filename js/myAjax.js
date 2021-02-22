function ajax(option) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", option.url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function (ev2) {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304) {
        option.success(xmlhttp);
      } else {
        option.error(xmlhttp);
      }
    }
  }
}