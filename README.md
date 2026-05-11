# Enunciado Parcial

PROGRAMACION WEB 2 
Profesor: Pablo Aronna - 11 Mayo 2026 
1er PARCIAL 
Agencia de Turismo "GlobalTravel" 

Contexto: Una agencia de turismo necesita una SPA (Single Page Application) para que  sus clientes puedan autogestionar el presupuesto de sus próximas vacaciones.  El sistema debe mostrar un catálogo de destinos, y al seleccionar uno, desplegar las  diferentes categorías de viaje (Estándar, Confort, VIP) aplicando el incremento de precio  correspondiente sobre la tarifa base. 

1. Requerimientos de Estructura 
• Header: Un logo de la agencia y el título "Cotizador de Paquetes Turísticos". • Cuerpo (Main) - Flujo de 2 pasos: 
◦ Paso 1 (Catálogo): Una grilla con los destinos disponibles mostrando  imagen, título, descripción corta y el precio base. 
◦ Paso 2 (Detalle y Cotización): Al elegir un destino, la grilla se oculta. Se  debe mostrar a pantalla completa la información del viaje elegido  
(incluyendo el itinerario renderizado como lista) y las opciones de categoría  disponibles para ese paquete. 
• Footer: Texto centrado: "© 2026 GlobalTravel - Instituto Superior Santa Rosa de  Calamuchita". 
2. Interacción y Lógica de Negocio 
• Gestión de Estados: Para recordar la selección del cliente. 
• Cruce de Datos: Al seleccionar un viaje, se debe utilizar su id para filtrar o buscar  en el segundo JSON (opciones.json) el array de categorías correspondientes a ese  destino. 
• Lógica Matemática: Al seleccionar una categoría, el sistema debe calcular el  precio final. 
◦ Fórmula: Precio Final = Precio Base + (Precio Base * incremento / 100). 
◦ Ejemplo: Si el precio base es $100.000 y se elige la opción VIP (incremento  del 30%), el total a pagar a mostrar debe ser $130.000.
• Renderizado Condicional: 
◦ El panel de "Resumen de Compra" en la parte inferior solo debe aparecer si  el usuario ya seleccionó una categoría. 
◦ En el resumen debe decir: "Destino: [Nombre] - Categoría: [Nombre  Categoría]. Total a pagar: $[Precio Calculado]".
JSON de Datos 
1. viajes.json 
{ 
 "viajes": [ 
 { 
 "id": 1, 
 "destino": "Bariloche y Ruta de los 7 Lagos", 
 "descripcion": "Descubrí la magia de la Patagonia Argentina con sus lagos cristalinos y montañas  imponentes.", 
 "precioBase": 450000, 
 "imagen": "https://kimi-web-img.moonshot.cn/img/todobienmama.com/ 
14bd1b9797c9ed85bfcbb55761b831c08ac7c0ce.jpg", 
 "itinerario": [ 
 "Día 1: Llegada y check-in. Tarde libre en el Centro Cívico.", 
 "Día 2: Circuito Chico y ascenso al Cerro Campanario.", 
 "Día 3: Recorrido completo por la Ruta de los 7 Lagos hasta San Martín de los Andes."  ] 
 }, 
 { 
 "id": 2, 
 "destino": "Cataratas del Iguazú", 
 "descripcion": "Sumergite en la selva misionera y sentí el poder de una de las 7 Maravillas Naturales del  Mundo.", 
 "precioBase": 320000, 
 "imagen": "https://kimi-web-img.moonshot.cn/img/aborigen-tours.com/ 
ca9ddd96d2fb651d6bd083f3fad608532f360a41.jpg", 
 "itinerario": [ 
 "Día 1: Recepción y visita al Hito de las Tres Fronteras.", 
 "Día 2: Parque Nacional Iguazú (Lado Argentino) y Garganta del Diablo.", 
 "Día 3: Parque Nacional (Lado Brasileño) y Parque das Aves." 
 ] 
 }, 
 { 
 "id": 3, 
 "destino": "Norte Argentino (Salta y Jujuy)", 
 "descripcion": "Un viaje por los colores, la cultura y la gastronomía del norte de nuestro país.",  "precioBase": 380000, 
 "imagen": "https://kimi-web-img.moonshot.cn/img/turismo-en-argentina.com/ 335eaeafe7b689af536a7f382df6c61d2a5c823b.jpg", 
 "itinerario": [ 
 "Día 1: City tour por Salta Capital y ascenso al Cerro San Bernardo.", 
 "Día 2: Excursión a la Quebrada de Humahuaca y Purmamarca.", 
 "Día 3: Visita a las Salinas Grandes y regreso." 
 ] 
 } 
 ] 
} 
2. opciones.json 
 { 
 "categorias": [ 
 { 
 "viajeId": 1, 
 "opciones": [ 
 {
 "id": "op1", 
 "nombre": "Estándar", 
 "incremento": 0, 
 "incluye": [ 
 "Bus semicama", 
 "Hostel céntrico con desayuno", 
 "Excursiones regulares" 
 ] 
 }, 
 { 
 "id": "op2", 
 "nombre": "Confort", 
 "incremento": 20, 
 "incluye": [ 
 "Vuelo clase turista", 
 "Hotel 3 estrellas", 
 "Excursiones regulares", 
 "Cenas incluidas" 
 ] 
 }, 
 { 
 "id": "op3", 
 "nombre": "Premium", 
 "incremento": 45, 
 "incluye": [ 
 "Vuelo directo", 
 "Resort 5 estrellas frente al lago", 
 "Excursiones privadas", 
 "Pensión completa" 
 ] 
 } 
 ] 
 }, 
 { 
 "viajeId": 2, 
 "opciones": [ 
 { 
 "id": "op4", 
 "nombre": "Estándar", 
 "incremento": 0, 
 "incluye": [ 
 "Bus cama", 
 "Hotel 2 estrellas en Puerto Iguazú",  "Entradas a los parques" 
 ] 
 }, 
 { 
 "id": "op5", 
 "nombre": "Aventura", 
 "incremento": 15, 
 "incluye": [ 
 "Vuelo turista", 
 "Hotel 3 estrellas con piscina", 
 "Paseo en lancha 'Gran Aventura' bajo los saltos"  ] 
 }, 
 { 
 "id": "op6", 
 "nombre": "Eco-Lodge VIP", 
 "incremento": 50,
 "incluye": [ 
 "Vuelo directo", 
 "Alojamiento en Lodge dentro de la selva",  "Spa", 
 "Guía naturalista privado" 
 ] 
 } 
 ] 
 }, 
 { 
 "viajeId": 3, 
 "opciones": [ 
 { 
 "id": "op7", 
 "nombre": "Estándar Mochilero", 
 "incremento": 0, 
 "incluye": [ 
 "Bus desde origen", 
 "Hostales en Salta y Tilcara", 
 "Recorridos libres" 
 ] 
 }, 
 { 
 "id": "op8", 
 "nombre": "Confort", 
 "incremento": 25, 
 "incluye": [ 
 "Vuelo turista", 
 "Hoteles boutique 3 estrellas", 
 "Traslados en combi con aire acondicionado"  ] 
 }, 
 { 
 "id": "op9", 
 "nombre": "Ruta del Vino Premium",  "incremento": 60, 
 "incluye": [ 
 "Vuelo directo", 
 "Noches en finca bodeguera en Cafayate",  "Vehículo 4x4 privado", 
 "Degustaciones exclusivas" 
 ] 
 } 
 ] 
 } 
 ] 
}
