# Relaciones

## [Patrones de Diseño](https://refactoring.guru/es/design-patterns)

MOC aplica varios patrones clave que permiten su flexibilidad y escalabilidad:



- [**Bridge:**](https://refactoring.guru/es/design-patterns/bridge) Separa la abstracción (core) de la implementación (módulos), permitiendo modificar ambas partes de forma independiente.

- [**Strategy:**](https://refactoring.guru/es/design-patterns/strategy) Cada *tenant* puede cambiar comportamientos específicos a través del orquestador, sin afectar la lógica base.

- [**Plugin (Object Composition):**](https://martinfowler.com/bliki/Plugin.html) Los módulos funcionan como plugins intercambiables, lo que permite agregar, reemplazar o quitar funcionalidades sin alterar el core.

## [Seguridad y Aislamiento por Tenant](https://platzi.com/blog/multi-tenant-que-es-y-por-que-es-importante/)

El diseño MOC asegura que múltiples clientes puedan compartir la misma infraestructura sin interferir entre sí:

- **Contexto multi-tenant seguro**: Cada cliente opera en un entorno virtualmente aislado.
- **Carga dinámica de configuraciones/modificaciones**: Las personalizaciones de cada tenant pueden activarse en tiempo de ejecución sin reiniciar servicios.
- **Políticas por cliente**: El sistema permite definir reglas, permisos y límites de manera granular por tenant.

## Principios SOLID

MOC se construye siguiendo los principios SOLID para garantizar mantenibilidad y extensibilidad:

- **S – Responsabilidad única**: Cada módulo tiene una función clara y aislada.
- **O – Abierto/Cerrado**: Es posible extender la funcionalidad sin modificar el código base.
- **L – Sustitución de Liskov**: Los módulos personalizados respetan las interfaces del sistema y no rompen su comportamiento esperado.
- **I – Segregación de interfaces**: Los orquestadores y módulos sólo exponen los contratos necesarios para cumplir su función.
- **D – Inversión de dependencias**: El core define interfaces y no depende de implementaciones concretas; los módulos las implementan.