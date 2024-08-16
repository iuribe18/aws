# AWS S3 - Simple Storage Service
What is Amazon S3?
Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides management features so that you can optimize, organize, and configure access to your data to meet your specific business, organizational, and compliance requirements.

# S3 Restrictions
S3 bucket names must be unique globally across all AWS accounts.
S3 can handle unlimited number of objects
Maximun size of a single file is 5TB
An AWS account supports 100 buckets by default, but can be increased to 1000 by requesting a service limit increase

# S3 Use Cases
1. Log Files
2. Media (Audio, Video, Images)
3. CI/CD Artifacts

# Objects
Objects are files that are uploaded to S3
An object has:
key: The file name
value: File Data
VersionID, metadata, other information

## Storage Clases
# S3 Standard
Ofrece almacenamiento de objetos de alta durabilidad, disponibilidad y rendimiento para datos a los que se accede con frecuencia. Dada su baja latencia y alto nivel de rendimiento, S3 Estándar es apropiado para una amplia variedad de casos de uso, como aplicaciones en la nube, sitios web dinámicos, distribución de contenido, aplicaciones para dispositivos móviles y videojuegos, y el análisis de macrodatos. 

Características clave:
3 az
Almacenamiento de uso general para datos a los que se accede con frecuencia
Baja latencia y alto nivel de rendimiento
Diseñado para ofrecer una disponibilidad del 99,99 % con un SLA de disponibilidad del 99,9 %

# S3 Standard-IA
Se utiliza con datos a los que se obtiene acceso con menos frecuencia, pero que requieren un acceso rápido cuando es necesario. Ofrece el nivel de alta durabilidad, alto procesamiento y baja latencia de S3 Standard, con un pequeño cargo de almacenamiento por GB y de recuperación por GB. La combinación de alto rendimiento y bajos costos convierten al tipo Estándar - Acceso poco frecuente de S3 en la opción ideal para el almacenamiento a largo plazo, las copias de seguridad y como almacén de datos para los archivos de recuperación de desastres. Puede configurar las clases de almacenamiento de S3 en el nivel de objeto y un solo bucket puede contener objetos almacenados en S3 Standard, S3 Intelligent-Tiering, Estándar - Acceso poco frecuente de S3 y Única zona - Acceso poco frecuente de S3. También puede usar las políticas de ciclo de vida de S3 para trasladar automáticamente objetos entre tipos de almacenamiento sin realizar cambios en las aplicaciones.

Características clave:
3 az
Cheaper than s3 standard
Has retrival fee
Minimun duration charge of 30 days
Minimun size charge of 128 Kb per object
Datos a los que se accede con poca frecuencia y que necesitan acceso en milisegundos
El mismo nivel de baja latencia y alto rendimiento de procesamiento que S3 Estándar
Diseñado para ofrecer una disponibilidad del 99,9 % con un SLA de disponibilidad del 99 %

S3 One Zone-IA
Se usa con datos a los que se obtiene acceso con menos frecuencia, pero que requieren un acceso rápido cuando es necesario. A diferencia de las demás clases de almacenamiento de S3, S3 One Zone-IA lo hace en una sola zona y cuesta un 20% menos que S3 Estándar - Acceso poco frecuente. Es ideal para aquellos clientes que desean una opción de menor costo para los datos a los que se obtiene acceso con poca frecuencia, pero que no necesitan el nivel de disponibilidad ni la resiliencia de S3 Estándar o S3 Estándar – Acceso poco frecuente. Es una buena opción para almacenar copias de seguridad secundarias de datos locales o datos que se pueden volver a crear fácilmente. También puede utilizarlo como almacenamiento económico para datos que se replican desde otra región de AWS con la replicación entre regiones de S3.

El tipo Única zona - Acceso poco frecuente de S3 ofrece el mismo nivel de alto nivel de procesamiento y baja latencia de S3 Standard, con un pequeño cargo de almacenamiento y recuperación por GB. Con diseños de ingeniería similares a los de las clases de almacenamiento regional de S3, Única zona - Acceso poco frecuente de S3 también ofrece 11 nueves de durabilidad, pero puede ser susceptible a la pérdida de datos en el improbable caso de que se pierda o se dañe la totalidad o parte de una zona de disponibilidad de AWS. Puede configurar las clases de almacenamiento de S3 en el nivel de objeto y un solo bucket puede contener objetos almacenados en S3 Standard, S3 Intelligent-Tiering, Estándar - Acceso poco frecuente de S3 y Única zona - Acceso poco frecuente de S3. También puede usar las políticas de ciclo de vida de S3 para trasladar automáticamente objetos entre tipos de almacenamiento sin realizar cambios en las aplicaciones.

Características clave:
Cheaper than s3 standard and s3 standard-IA
Has retrival fee
Minimun duration charge of 30 days
Minimun size charge of 128 Kb per object
Datos recreables a los que se accede con poca frecuencia
El mismo nivel de baja latencia y alto rendimiento de procesamiento que S3 Estándar
Diseñado para ofrecer una disponibilidad del 99,5 % con un SLA de disponibilidad del 99 %

S3 Intelligent-Tiering
Es el primer almacenamiento en la nube que reduce automáticamente los costos de almacenamiento a nivel pormenorizado de objeto al mover de manera automática los datos al nivel de acceso más rentable según la frecuencia de acceso, sin afectar el rendimiento, las tarifas de recuperación ni los gastos operativos generales. S3 Intelligent-Tiering ofrece una latencia en milisegundos y un alto rendimiento para los datos a los que se accede de manera frecuente, poco frecuente y de forma inusual en los nuevos niveles de acceso instantáneo, frecuente y poco frecuente a archivos. Puede utilizar S3 Intelligent-Tiering como la clase de almacenamiento predeterminada para prácticamente cualquier carga de trabajo, en especial lagos de datos, análisis de datos, aplicaciones nuevas y contenido generado por el usuario.

Por un pequeño cargo mensual de monitoreo y automatización de objetos, S3 Intelligent-Tiering monitorea los patrones de acceso y traslada de forma automática los objetos a los que no se accedió a los niveles de acceso de menor costo. S3 Intelligent-Tiering almacena objetos automáticamente en tres niveles de acceso: un nivel optimizado para el acceso frecuente, un nivel con un costo 40 % menor optimizado para el acceso poco frecuente y otro nivel con un costo 68 % menor optimizado para los datos a los que se accede en pocas ocasiones. S3 Intelligent-Tiering monitorea los patrones de acceso y traslada los objetos a los que no se accedió durante 30 días consecutivos al nivel de acceso Poco frecuente y, después de 90 días sin acceso, al nuevo nivel de acceso Instantáneo al archivo. Para los datos que no requieren recuperación inmediata, puede configurar S3 Intelligent-Tiering de manera que monitoree y traslade de forma automática los objetos a los que no se ha accedido durante 180 días o más al nivel de acceso a archivo profundo para conseguir un ahorro en los costos de almacenamiento de hasta el 95 %.

No hay cargos de recuperación en S3 Intelligent-Tiering. Si después se accede a un objeto en el nivel de acceso Poco frecuente o Instantáneo al archivo, se devuelve automáticamente al nivel de acceso Frecuente. Si el objeto que está recuperando se encuentra almacenado en los niveles opcionales de Archivo profundo, antes de poder recuperar el objeto, debe restaurar primero una copia mediante RestoreObject.  Para obtener más información sobre la restauración de objetos archivados, consulte Restauración de objetos archivados. No se aplican cargos adicionales a los niveles cuando los objetos se desplazan entre los niveles de acceso dentro de la clase de almacenamiento S3 Intelligent-Tiering.

Características clave:
Ahorros de costos automáticos para datos con patrones de acceso desconocidos o que cambian constantemente
Los niveles de acceso Frecuente, Poco frecuente e Instantáneo al archivo tienen la misma baja latencia y alto nivel de rendimiento de S3 Standard
El nivel de acceso Poco frecuente ahorra hasta un 40 % en costos de almacenamiento
El nivel de acceso instantáneo al archivo ahorra hasta un 68 % en costos de almacenamiento
Incluye capacidades opcionales de archivo asíncrono para objetos a los que se accede de forma inusual
El nivel de acceso Archivo profundo tiene el mismo rendimiento que Glacier Deep Archive y ahorra hasta un 95 % para los objetos a los que se accede de forma inusual
Diseñado para ofrecer una disponibilidad del 99,9 % con un SLA de disponibilidad del 99 %
Bajo cargo mensual por monitoreo y automatización
No tiene gastos operativos generales, cargos de ciclo de vida, cargos de recuperación ni duración mínima del almacenamiento
Estos objetos de tamaño inferior a 128KB se pueden almacenar en S3 Intelligent-Tiering, pero siempre se cobran de acuerdo con las tarifas de nivel de acceso Frecuente, sin cargos de monitoreo y automatización.

S3 Glacier Instant Retrieval
Es una nueva clase de almacenamiento de archivos que ofrece el almacenamiento de menor costo para los datos de larga duración a los que rara vez se accede y que requieren una recuperación de tan solo milisegundos. Con S3 Glacier Instant Retrieval, puede ahorrar hasta un 68 % en costos de almacenamiento en comparación con la clase de almacenamiento S3 Standard-Infrequent Access (S3 Standard-IA), cuando se accede a los datos una vez por trimestre. S3 Glacier Instant Retrieval ofrece el acceso más rápido al almacenamiento de archivos, con el mismo rendimiento y acceso en milisegundos que las clases de almacenamiento S3 Standard y S3 Standard-IA. S3 Glacier Instant Retrieval es ideal para los datos de archivo que requieren acceso inmediato, como imágenes médicas, recursos de medios de comunicación o archivos con contenido generado por el usuario. Puede cargar los objetos directamente a S3 Glacier Instant Retrieval o utilizar las políticas de ciclo de vida de S3 para transferir datos desde las clases de almacenamiento de S3. Para obtener más información, visite la página de Amazon S3 Glacier Instant Retrieval »

Características clave:
Has retrival fee
Minimun duration charge of 90 days
Minimun size charge of 128 Kb per object
Datos de larga duración a los que se accede algunas veces al año con recuperaciones instantáneas
Recuperación de datos en milisegundos con el mismo rendimiento que S3 Standard
Diseñado para ofrecer una disponibilidad del 99,9 % con un SLA de disponibilidad del 99 %
API PUT de S3 para cargas directas a S3 Glacier Instant Retrieval y la administración del ciclo de vida de S3 para la migración automática de objetos

S3 Glacier Flexible Retrieval
Ofrece almacenamiento de bajo costo, hasta un 10 % menor (que S3 Glacier Instant Retrieval), para los datos de archivo a los que se accede 1 o 2 veces al año y se recuperan de manera asíncrona. Para los datos de archivo que no requieren acceso inmediato, pero necesitan la flexibilidad de recuperar grandes conjuntos de datos sin costo alguno, como los casos de uso de copias de seguridad o recuperación de desastres, S3 Glacier Flexible Retrieval (antes S3 Glacier), es la clase de almacenamiento ideal. S3 Glacier Flexible Retrieval ofrece las opciones de recuperación más flexibles que equilibran el costo con los tiempos de acceso que varían de minutos a horas, con recuperaciones masivas gratuitas. Esto es una solución ideal para las necesidades de copia de seguridad, recuperación de desastres, almacenamiento de datos fuera del sitio y para cuando algunos datos deban recuperarse ocasionalmente en minutos y no desee preocuparse por los costos. S3 Glacier Flexible Retrieval está diseñado para brindar una durabilidad de los datos del 99,999999999 % (11 nueves) y una disponibilidad del 99,99 % mediante el almacenamiento redundante de los datos en varias zonas de disponibilidad de AWS separadas físicamente en un año determinado. Para obtener más información, visite la página de clases de almacenamiento de Amazon S3 Glacier »

Características clave:
Has retrival fee
Minimun duration charge of 90 days
Minimun size charge of 40 Kb per object
Crear copias de seguridad y archivado de datos a los que se accede con poca frecuencia y a bajo costo
Diseñado para ofrecer una disponibilidad del 99,99 % con un SLA de disponibilidad del 99,9 %
Admite SSL para los datos en tránsito y cifrado de datos en reposo
Es ideal para casos de uso de copia de seguridad y recuperación de desastres cuando, ocasionalmente, se deban recuperar grandes conjuntos de datos en minutos sin preocuparse por los costos
Los tiempos de recuperación se pueden configurar de minutos a horas con recuperaciones masivas gratuitas.
Expedited: 1-5 Minutes
Standard: 3-5 Hours
Bulk: 5-12 Hours
Tiene la API PUT de S3 para cargas directas a S3 Glacier Flexible Retrieval y la administración del ciclo de vida de S3 para la migración automática de objetos

S3 Glacier Deep Archive
Es la clase de almacenamiento más económica de Amazon S3, y admite la retención a largo plazo y la conservación digital de datos a los que se accede una o dos veces al año. Se diseñó para clientes, en concreto para aquellos que pertenecen a sectores con niveles de regulación muy estrictos, como los de servicios financieros, sanidad y sectores públicos, que retienen los conjuntos de datos durante un periodo de 7 a 10 años o más para cumplir los requisitos de conformidad normativa. S3 Glacier Deep Archive también se puede utilizar para casos de uso de copias de seguridad y recuperación de desastres, y constituye una alternativa económica y fácil de administrar a los sistemas de cintas magnéticas, ya sean bibliotecas locales o servicios fuera de las instalaciones. S3 Glacier Deep Archive complementa a Amazon S3 Glacier, que es ideal para archivos donde los datos se recuperan con frecuencia y algunos de ellos se necesitan en pocos minutos. Todos los objetos almacenados en S3 Glacier Deep Archive se replican y almacenan en al menos tres zonas de disponibilidad geográficamente dispersas, protegidas por un 99,999999999 % de durabilidad, y se pueden restaurar en 12 horas. Para obtener más información, visite la página de clases de almacenamiento de Amazon S3 Glacier »

Key Features:
Has retrival fee
Minimun duration charge of 180 days
Minimun size charge of 40 Kb per object
Archivar datos a los que se accede con muy poca frecuencia y a un costo muy bajo
Diseñado para ofrecer una disponibilidad del 99,99 % con un SLA de disponibilidad del 99,9 %
Alternativa ideal a las bibliotecas de cintas magnéticas
Tiempo de recuperación inferior a 12 horas.
Standard: 12 Hours
Bulk: 48 Hours
API de S3 PUT para cargas directas a S3 Glacier Deep Archive y administración del ciclo de vida de S3 para la migración automática de objetos