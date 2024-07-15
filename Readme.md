# Test Calendarios

## Bryntum

### Ventajas
- Fácil de instalar y configurar
-  Se navega bien es intuitivo de usar y tiene las opciones que esperarias de una aplicación tipo google calendar
- La forma que estructura los datos para renderizar es bastante clara y sencilla, en el .json ejemplo únicamente hay dos entidades que son resources(lo que al parecer son los calendarios de la izquierda cada uno con su color) y events, y van relacionados por un resourceId. 
- Ofrece una interfaz "CrudManager" para controlar el data binding tanto para escritura  como para lectura.
- Localizacion disponible en varios idiomas (no he podido probarlo)
- La documentación es la mejor de las de las versiones de pago que he visto
### Desventajas
- El precio es bastante elevado y es por desarrollador, la version gratuita en principio solamente son 45 dias.
- Si se quiere personalizar la apariencia os podéis preparar para un clásico infierno de css porque lo único que he conseguido ver que ofrecen de base son cambios de colores de algunos componentes.
- En el caso de usar el CrudManager(que parece lo que quieren que usemos) parece que el backend tiene que tener una arquitectura que se adapte a este componente para funcionar correctamente. 
 
### Documentación 
https://bryntum.com/products/scheduler/docs/api/Scheduler/

## Alternativas de pago: DHTMLX, Syncfusion, Kendoreact

De las otras alternativas que he encontrado solamente Kendoreact tiene mas funcionalidades y resuelve problemas de Bryntum (tiene mas flexibilidad en los estilos y como mínimo hay algo de documentación al respecto), pero la documentación como mínimo para el setup es muy deficiente el precio es el mas alto que he visto en todas estas (aunque en el caso de Bryntum el precio que tienen es solamente para el calendario mientras que en kendoreact hay muchísimos mas componentes)

Syncfusion y DHTMLX parecen bastante más limitados sobretodo de cara a opciones tipicas de google calendar (repetir tarea ciertos dias...)

## Alternativas gratuitas: schedule-x , Full Calendar

La alternativa gratuita que más me ha gustado es schedule-x,  de base ofrece el renderizado del calendario y sus eventos. En caso de querer añadir eventos y querer tener acceso a mas funcionalidades ofrece una serie de plugins (tambien puedes hacer los tuyos propios) como el servicio o api de eventos del calendario. Si bien es cierto que hace falta mas configuración en Bryntum que simplemente es copiar 4 lineas de codigo y ya tienes un calendar funcionando el hecho de que schedule-x sea gratuito es releavante. Añadir custom styles parece que es igual de engorroso que en Bryntum.

La última alternativa que he visto que podria ser interesante aunque esta no he llegado a probarla es Full Calendar, que también es gratuita, tiene un sistema de plugins similar a schedule-x. El principal motivo por el que consideraria esta libreria es que almenos ofrece algo mas de ayuda de cara a tener estilos propios en el calendario pero por el resto aparenta  que schedule-x es mejor.
