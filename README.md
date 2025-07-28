# modular_orchestrated_core

Arquitectura modular orientada a plugins y orquestadores por cliente (tenant), diseñada para escalar aplicaciones multi-cliente sin duplicar código ni sacrificar personalización.

## Contexto

El modelo actual de desarrollo genera 30 aplicaciones diferentes (6 apps × 5 clientes), cada una con sus propias variaciones, niveles de actualización y mantenimiento. Con la llegada de un nuevo cliente que requerirá todas las aplicaciones, y el desarrollo de una nueva app, este número se incrementará a 42 instancias distintas.

Esto genera un **Problema de escalabilidad**:

- Lógica duplicada entre múltiples bases de código
- Mantenimiento fragmentado e ineficiente
- Integración de nuevos clientes lenta y costosa
- Alta complejidad para pruebas, QA y despliegue

## Objetivo

Centralizar el desarrollo sobre una única base de código reutilizable, mediante una arquitectura compuesta por:

- Un **núcleo funcional común** (`core`)
- **Plugins generales reutilizables** (lógica compartida)
- **Orchestrators por cliente** (personalización aislada por tenant)

Esto permite mantener la lógica compartida y personalizar comportamientos por cliente sin ramificar el sistema.

## Componentes principales

```
📁 src
├── 📁 core
├── 📁 plugins
│   └── 📁 shared
├── 📁 tenants
│   ├── 📁 ClienteA
│   │   └── 📄 Orchestrator.cs
│   └── 📁 ClienteB
│       └── 📄 Orchestrator.cs
```

- **Plugins compartidos**: encapsulan funcionalidades generales que se usan en distintas aplicaciones (por ejemplo: pagos, notificaciones).
- **Orchestrators por cliente**: definen qué plugins usar y cómo configurarlos según los requerimientos del cliente.
- **Loader**: módulo que, al iniciar el sistema, selecciona el orchestrator correcto basándose en una variable de entorno `TENANT_ID`.

## Cómo funciona

1. Se define `TENANT_ID` como variable de entorno en cada despliegue.
2. Al iniciar, el sistema carga el `orchestrator` correspondiente.
3. El orchestrator configura los plugins y comportamientos del microservicio.
4. El core opera con esos módulos como si fueran parte del sistema.

> Esto elimina condicionales en tiempo de ejecución y permite personalización por cliente sin duplicar código.

## Ventajas

- **Código centralizado** y mantenible
- **Plugins reusables**, desacoplados y testeables
- **Personalización controlada** por cliente
- **Fácil escalado** horizontal a nuevos tenants
- **Despliegues consistentes y predecibles**

## Consideraciones

- Requiere un diseño modular disciplinado
- Los contratos entre core y plugins deben estar bien definidos
- Es fundamental tener una estrategia clara de versionado y pruebas por plugin y orchestrator

## Ideal para equipos que:

- Mantienen múltiples aplicaciones similares por cliente
- Quieren reducir la deuda técnica y el mantenimiento cruzado
- Necesitan escalar a nuevos clientes sin ramificar el sistema
- Buscan una base sólida para crecer horizontalmente

## 📚 Más información

* [Documentación técnica detallada]()
* [Guía para crear un plugin compartido]()
* [Cómo definir un orchestrator por cliente]()
