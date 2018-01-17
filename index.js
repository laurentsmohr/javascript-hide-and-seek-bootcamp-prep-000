
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}


var nodeList = document.querySelector('#grand-node');

function deepestChild() {
  var nodeList = document.querySelector('#grand-node');
  for (var i = 0; i < nodeList.length; i++) {
    if (i === nodeList.length - 1) {
      return nodeList[i];
    }
  }
}
