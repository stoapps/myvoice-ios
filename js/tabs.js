 var myApp = new Framework7();
 
var $$ = Dom7;



$$('.show-tab-1').on('click', function () {
    myApp.showTab('#tab1');
});
$$('.show-tab-2').on('click', function () {
    myApp.showTab('#tab2');
    alert('hello');
});     
