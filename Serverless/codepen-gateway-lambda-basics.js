var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://d3xdfvwo98.execute-api.us-east-1.amazonaws.com/dev/compare-yourself');
xhr.onreadystatechange = function(event) {
  console.log(event.target);
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open(
  "POST",
  "https://d3xdfvwo98.execute-api.us-east-1.amazonaws.com/dev/compare-yourself"
);
xhr.onreadystatechange = function (event) {
  console.log(event.target);
};
xhr.send();