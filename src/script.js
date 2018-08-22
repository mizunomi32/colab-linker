
var imgURL = chrome.extension.getURL("images/notebook.svg");
$("td.content span a[title*='ipynb']").each(function(index, element){
   // console.log(element.attr('href'));
   var url = element.href.replace("https://github.com", "https://colab.research.google.com/github");
   console.log(url);
   $(this).parent().prepend('<a href="'+url+'" target="_blank"><img src="'+imgURL+'" width="18" height="18"/></a>');
 });
 if ($("strong.final-path")){
   var url = location.href
   if (/.ipynb$/.test(url)){
     url = url.replace("https://github.com", "https://colab.research.google.com/github");
     $("div.breadcrumb").parent().prepend('<a href="'+url+'" target="_blank"><img src="'+imgURL+'" width="18" height="18"/></a>');
     console.log(url);
   }

 }
