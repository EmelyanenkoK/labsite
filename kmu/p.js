
function getCookieP() {
  return Cookies.get('p');
}

function getP() {
  if(getCookieP()) {
    return getCookieP();
  }
  var queryDict = {};
  location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]});
  if(queryDict.p) {
    Cookies.set('p', queryDict.p, { expires: 365 })
    return queryDict.p;
  }
  return false;
}
function ensureP() {
  var queryDict = {};
  location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]});
  if(!queryDict.p && getP())
    document.location.search="p="+getP();
}

ensureP();
let p = getP();
if(p) {
  var links = document.getElementsByClassName("link");
  for(l of links)
    l.href +="?p="+p;
}
