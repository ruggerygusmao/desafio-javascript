var jogo = "tesoura corta papel\npapel cobre veneno\npedra esmaga lagarto\nlagarto corta Spock\nSpock vaporiza tesoura\ntesoura decapita Spock\nlagarto come papel\nveneno refuta lagarto\nSpock vaporiza pedra\nveneno esmaga tesoura";

//a) Onde tem esmaga trocar por quebra.
jogo = jogo.replace(/esmaga/g,"quebra");

//b) Onde tem lagarto trocar por tesoura.
jogo = jogo.replace(/lagarto/g,"tesoura");

//c) Onde tem Spock trocar por papel.
jogo = jogo.replace(/Spock/g,"papel");

//d) Onde tem vaporiza trocar por embrulha.
jogo = jogo.replace(/vaporiza/g,"embrulha");

//e) Onde tem cobre trocar por embrulha.
jogo = jogo.replace(/cobre/g,"embrulha");

//f) Onde tem decapita trocar por corta.
jogo = jogo.replace(/decapita/g,"corta");

//g) Onde tem come trocar por corta.
jogo = jogo.replace(/come/g,"corta");

//h) Onde tem veneno trocar por pedra.
jogo = jogo.replace(/veneno/g,"pedra");

//i) Onde tem refuta trocar por quebra.
jogo = jogo.replace(/refuta/g,"quebra");

console.log(jogo);

