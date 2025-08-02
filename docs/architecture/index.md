# Arquitectura MOC

## Analogía
:::info[Resumen]
MOC es como vivir en un edificio con apartamentos : compartes la estructura, pero cada espacio se adapta a tus gustos, gracias a un diseñador que conoce las reglas del juego.
:::
Imagina que estás construyendo un **edificio de apartamentos**, y quieres que cada cliente (tenant) tenga su propio espacio **totalmente personalizado**, sin necesidad de reconstruir el edificio cada vez.

### El Edificio 

El **Core** es el edificio en sí: una estructura sólida que contiene los **recursos públicos compartidos**, como:

* Agua potable
* Energía eléctrica
* Red de gas
* Recolección de basura
* Parqueaderos
* Ascensores y escaleras
  
:::note
Ningún cliente puede cambiar esta estructura: es **común, estable y mantenida por la administración central**. Esto garantiza orden, eficiencia y bajo mantenimiento.
:::

### Los Departamentos

Cada cliente recibe su propio **apartamento** dentro del edificio. Todos tienen:

* Paredes, techo y piso
* Baños y cocina habilitados
* Conexiones listas para usar agua, gas y electricidad

Pero cada cliente quiere **personalizar su espacio a su gusto**.

### Muebles, Decoraciones y Servicios

Los **módulos del sistema** son como los elementos personalizables dentro del apartamento:

* 🎨 Color de las paredes
* 💡 Tipo de lámparas
* 🖼️ Cuadros decorativos
* 🛋️ Juego de sala
* 📺 TV o consola de videojuegos
* 🍽️ Comedor, tipo de cocina
* 🔐 Cerraduras inteligentes, cámaras, etc.

Cada módulo se puede **elegir, combinar o desactivar** según las necesidades del cliente. Son elementos **plug-and-play** que se instalan en cada apartamento, usando las conexiones del edificio (core).

### El Instalador

Cada cliente contrata a un **instalador** (el **Orquestador**) que:

* Escucha los requerimientos del cliente
* Elige qué módulos se van a usar (muebles, decoración)
* Sigue las **reglas del edificio** (ej: no puede tirar paredes estructurales)
* Instala y configura todo según las instrucciones del cliente

:::note
El instalador no inventa el edificio, **trabaja con lo que ya existe**, pero tiene la libertad de adaptarlo hasta cierto punto.
:::

### Qué no se puede cambiar?

Hay límites para garantizar estabilidad:

* ❌ No se pueden mover columnas ni modificar la estructura del edificio.
* ❌ No se puede cambiar la red eléctrica central.
* ❌ No se pueden poner muebles que violen normas de seguridad.
* ❌ No se puede agregar un piso nuevo al apartamento.

Así mismo, en MOC:

* No se puede modificar el core desde el orquestador.
* No se puede romper el contrato de los módulos.
* No se pueden introducir cambios que afecten a otros tenants.


## Por qué esta arquitectura funciona?

* Cada cliente tiene una **experiencia personalizada** sin que tengas que construir edificios nuevos.
* Puedes **actualizar el edificio** (core) y todos se benefician: mejor seguridad, mejores servicios.
* Puedes añadir **nuevos módulos (decoraciones, servicios)** y los orquestadores pueden decidir si usarlos o no.
* Si un cliente se va, simplemente se libera el apartamento.
