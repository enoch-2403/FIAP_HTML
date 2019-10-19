/*MOSTRA OU ESCONDE O MENU HAMBURGER*/
function cliqueMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*CONFORME O CLIQUE DA TAB, AJUSTA A CLASSE DO OBJETO PARA VISUALIZAR O TEXTO CORRETO*/
function cliqueTab(pTab) {

	for (var iCont = 0 ; iCont< 5; iCont++)
	{
		let x = document.getElementById("tab-item-text_" + iCont);

		/*indica que as demais nao foram clicadas, entao o texto delas nao deve aparecer*/
		if (iCont !== parseInt(pTab))
		{
			x.className = "tab-item_text disabled";
			console.log("Desabilitei tab " + iCont);
		}
		
		/*indica que a tab foi clicada, mudando o class name dela*/
		
		else
		{
			x.className = "tab-item_text enabled";			
			console.log("Habilitei tab " + iCont);
		}		
		
	}
}

