// ==UserScript==
// @name     Madokami link generator
// @author   Eliot Whalan
// @namespace madokami
// @license  MIT
// @version  1
// @include  https?://manga.madokami.al/user/notifications
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// @grant    GM_xmlhttpRequest
// @updateURL
// https://raw.githubusercontent.com/ewhal/Madokami-link-generator/master/madokami.user.js
// ==/UserScript==
var list = [];
var series = [];

$("tbody").find('a').each(
  function(k,v){
  var read = v.href.replace(/^https?:\/\/manga\.madokami\.com\/user\/notifications/, '');
  var page = v.href.replace(/^https?:\/\/manga\.madokami\.com\/user\/notifications/, '');
  page = decodeURIComponent(decodeURIComponent(page));

  read = decodeURIComponent(decodeURIComponent(read));

  if (/(cbr|zip|rar)/.test(page)) {
    page =  page.substring(0,page.lastIndexOf("/") + 1);
  }

  page = encodeURIComponent(page);
  read = encodeURIComponent(encodeURIComponent(read));

  read = 'https://manga.madokami.com/reader/' + read;

  list.push(read); 
  series.push(page); 
}
);
var i = 0;
$( "tbody tr" ).each( function( index, element ){
  $(this).append('<td class="padding"><a href="' + series[i] + '">Series</a></td>');
  $(this).append('<td><a href="' + list[i] + '">Read</a></td>');
  i++;
});
GM_addStyle (".padding {padding-right:20px;}");
