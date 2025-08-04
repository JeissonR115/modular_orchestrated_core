# Contexto

:::info[Resumen]
La personalización sin control crea versiones duplicadas difíciles de mantener y escalar, haciendo el modelo insostenible.
:::

## Modelo actual
Una organización desarrolla 6 aplicaciones principales (APP1 a APP6) para atender las necesidades de 5 clientes distintos (Cliente A, B, C, D y E).

Con el tiempo, para cumplir con los requerimientos particulares de cada cliente, el equipo ha optado por copiar y adaptar las aplicaciones individualmente. Así, se generan **30 variantes (6 aplicaciones × 5 clientes)**, con diferencias específicas en lógica de negocio, integraciones y comportamiento.

Con el tiempo, se incorpora un nuevo cliente (Cliente F) y se crean dos nuevas aplicaciones: APP7 y APP8, pensadas como parte de la suite general, no exclusivas para Cliente F.
El equipo termina desarrollando una versión distinta de APP7 y APP8 para cada cliente, incluyendo los cinco anteriores. 


![Imagen del problema](/img/problem_diagram.png)

### Resultados

El ecosistema de aplicaciones **pasa de 30 a 42 versiones distintas**, lo que multiplica los problemas:

- Las integraciones entre APP7/APP8 y las apps existentes deben personalizarse una y otra vez para cada cliente.

- Cada vez que se actualiza APP7 o APP8, el equipo debe revisar múltiples versiones adaptadas.


## Problemas 
Cada aplicación ha sido replicada y modificada para atender necesidades específicas de cada cliente. Aunque en su esencia comparten una funcionalidad base, estas versiones han evolucionado de forma independiente, lo que ha generado una serie de problemas estructurales:

### Duplicación de lógica y esfuerzo
Cada mejora, nueva funcionalidad o corrección debe replicarse manualmente en múltiples versiones de la misma aplicación, lo que incrementa el trabajo del equipo de desarrollo y QA.
### Falta de compatibilidad entre versiones
Los cambios implementados en una instancia no pueden integrarse fácilmente en las demás, ya que las bases de código divergen con el tiempo.
### Complejidad operativa y técnica 
con cada nuevo cliente, se incrementa el número de aplicaciones a mantener, desplegar y monitorear, elevando exponencialmente el esfuerzo requerido.
### Riesgos de mantenimiento
La existencia de múltiples ramas aisladas dificulta el control de versiones, la trazabilidad de errores y la aplicación de actualizaciones de seguridad.
### Pérdida de escalabilidad
La incorporación de nuevos clientes o funcionalidades deja de ser un proceso ágil y controlado, convirtiéndose en una tarea costosa y lenta.

:::note
Este tipo de arquitectura basada en la duplicación y modificación a la larga se vuelve insostenible, tanto en términos de costos como de calidad del software.
:::


