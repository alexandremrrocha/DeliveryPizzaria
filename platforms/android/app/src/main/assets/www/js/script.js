/*//Inicialização firebase
	// Your web app's Firebase configuration
	  var firebaseConfig = {
		apiKey: "AIzaSyB_m95pi2aK6ErEb8HckTVQGty1mAdEWik",
		authDomain: "restaurante-pedidos.firebaseapp.com",
		databaseURL: "https://restaurante-pedidos.firebaseio.com",
		projectId: "restaurante-pedidos",
		storageBucket: "",
		messagingSenderId: "908279277433",
		appId: "1:908279277433:web:89199baa24e122048ab1a8"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);*/

//Navegação
function nav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var resultado;

//Função compra
function compra(){
	//pizzas	  
	var checkPizzaPI, checkPizzaPO, checkPizzaM, checkPizzaVE, checkPizzaBA, checkPizzaES, checkPizzaAGRI, checkPizzaPRE;
	checkPizzaPI = document.getElementById('pizzapi').checked;
	checkPizzaPO = document.getElementById('pizzapo').checked;
	checkPizzaM = document.getElementById('pizzam').checked;
	checkPizzaVE = document.getElementById('pizzave').checked;
	checkPizzaBA = document.getElementById('pizzaba').checked;
	checkPizzaES = document.getElementById('pizzaest').checked;
	checkPizzaAGRI = document.getElementById('pizzaagri').checked;
	checkPizzaPRE = document.getElementById('pizzapre').checked;
	
	if(checkPizzaPI){
		checkPizzaPI=45;
	}
	else{
		checkPizzaPI=0;
	}
	if(checkPizzaPO){
		checkPizzaPO=50;
	}
	else{
		checkPizzaPO=0;
	}
	if(checkPizzaM){
		checkPizzaM=45;
	}else{
		checkPizzaM=0;
	}
	if(checkPizzaVE){
		checkPizzaVE=48;
	}else{
		checkPizzaVE=0;
	}
	if(checkPizzaBA){
		checkPizzaBA=45;
	}else{
		checkPizzaBA=0;
	}
	if(checkPizzaES){
		checkPizzaES=60;
	}else{
		checkPizzaES=0;
	}
	if(checkPizzaAGRI){
		checkPizzaAGRI=43;
	}else{
		checkPizzaAGRI=0;
	}
	if(checkPizzaPRE){
		checkPizzaES=53;
	}else{
		checkPizzaPRE=0;
	}
	//refri
	var checkCoca, checkFantaL, checkFantaU;
	checkCoca = document.getElementById('coca').checked;
	checkFantaL = document.getElementById('fantal').checked;
	checkFantaU = document.getElementById('fantau').checked;
	if(checkCoca){
		checkCoca=9;
	}
	else{
		checkCoca=0;
	}
	if(checkFantaL){
		checkFantaL=8;
	}
	else{
		checkFantaL=0;
	}
	if(checkFantaU){
		checkFantaU=7;
	}else{
		checkFantaU=0;
	}
	//sucos
	var checkSucoU, checkSucoM, checkSucoG;
	checkSucoU = document.getElementById('sucou').checked;
	checkSucoM = document.getElementById('sucom').checked;
	checkSucoG = document.getElementById('sucog').checked;
	if(checkSucoU){
		checkSucoU=4;
	}
	else{
		checkSucoU=0;
	}
	if(checkSucoM){
		checkSucoM=4;
	}
	else{
		checkSucoM=0;
	}
	if(checkSucoG){
		checkSucoG=4;
	}else{
		checkFantaU=0;
	}
	//resultado do pedido
	resultado = parseInt(checkPizzaPI + checkPizzaPO + checkPizzaM + checkPizzaVE + checkPizzaBA + checkPizzaES + checkPizzaAGRI + checkPizzaPRE + checkCoca + checkFantaL + checkFantaU + checkSucoU + checkSucoM + checkSucoG);
	//Confirmar o pedido
	alert("O valor do pedido é de "+"R$ "+resultado+",00");	
	var resposta=confirm("Confirmar pedido?");
	if(resposta==true){
		window.location.href = "endereco.html";
	}else{
		window.location.href = "pedido.html";
	}		
}

//valor do frete
function frete(){
	//confirmando os dados e mostrando o resultado do frete
	var resp=confirm("Seus dados estão corretos?");
	if(resp==true){
		var frete=3;
		alert("O valor do frete é de "+"R$ "+frete+",00");
		//criando variaveis para salvar
		var nome, bairro, numero, rua;
		nome = document.getElementById('nome').value;
		bairro = document.getElementById('bairro').value;
		numero = document.getElementById('numero').value;
		rua = document.getElementById('rua').value;
		//Salvando no banco
		var db = firebase.database().ref('endereco');
        var push = db.push();
		var path = push.toString();

		push.set({
			nome: nome, bairro: bairro, numero: numero, rua: rua, frete: frete
		});
		
		//	Redirecionando para a pagina de agradecimento
		window.location.href = "agradecimento.html";
		
	}else{
		window.location.href = "endereco.html";
	}
}

function foto(){
	navigator.camera.getPicture(onSuccess, onFail, 
	{quality: 50, width: 70, height: 60,
	destinationType: Camera.DestinationType.FILE_URI }); 
	function onSuccess(imageURI) { 
	var image = document.getElementById('myImage');  
	image.src = imageURI;  
	document.getElementById('myImage').value(imageURI);
	
	}  
	function onFail(message) {  
	alert('Failed because: ' + message); }  
}


//Função para escanear codigo de barra
function codbar(){
	cordova.plugins.barcodeScanner.scan(
	function (result) {
		alert("Esta é a tabela nutricional da pizza:\n" +
		result.text + "\n" +
		"\nFormato: " + result.format);},
	function (error) {
		alert("Scanning failed: " + error);
		});
}



