'use strict';

// Variables:
let fotomia = 'mifoto.jpg';
let bannermio = 'mibanner.gif'
// Json con la metadata de los atributos de las personas:
const persona = {
	// No modificar ni foto, ni banner:
	foto: '<img src="assets/img/'+fotomia+'" class="rounded mx-auto d-block img-fluid" alt="">',
	banner: '<img src="assets/img/'+bannermio+'" class="mx-auto d-block img-fluid" alt="banner Personal">',
	// Modificar a partir de este paso:
	nombre: "Emmanuel Yepes Conde",
	profesion: "Desarrollador en proceso",
	correo: "emmanuelyc20@gmail.com",
	telefono: "+57 301 6281840",
	perfil: "Programador, alegre, puntual, responsable, enfocado en el desarrollo web",
	habilidades: {
		comunicativas:['Asertivo','Actitud Positiva','Tolerante','Respetuoso','Ordenado','Trabajo en Equipo'],
		gestion: ['Liderazgo','Analisis de contexto','Responsabilidad','Puntual','Exigente','Proactivo'],
		tecnicas: ['HTML','CSS','Java Script','suite de google','lengueje PHP','Office',]
	},
	hobbies: ['Jugar Lol','Pasar tiempo con los panas','escuchar música','Hacer ejercicio','Tomar café']
}

// const banner = "https://previews.123rf.com/images/tul/tul1706/tul170600011/79563965-concepto-de-dise%C3%B1o-de-banner-de-moda-vector-m%C3%BAsica-estilo-moderno-con-iconos-de-arte-de-l%C3%ADnea-fina-sobre-fond.jpg";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#fotome').html(persona.foto);
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#perfil').html(persona.perfil);
	$('#bannerme').html(persona.banner);
	// Habilidades:
	let hcomunicativas = persona.habilidades.comunicativas.map(function(hc){
		return '<li class="list-group-item">'+hc+'</li>';
	});
	$('#comunicativas').html(hcomunicativas);

	let hgestion = persona.habilidades.gestion.map(function(hg){
		return '<li class="list-group-item">'+hg+'</li>';
	});
	$('#gestion').html(hgestion);
	let htecnicas = persona.habilidades.tecnicas.map(function(ht){
		return '<li class="list-group-item">'+ht+'</li>';
	});
	$('#tecnicas').html(htecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	let aficiones = persona.hobbies.map(function(bar){
		return '<li class="ml-3 list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}