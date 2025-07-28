# MOC

Arquitectura **modular orientada a plugins y orquestadores por cliente (tenant)**, diseñada para escalar aplicaciones multi-cliente sin duplicar código ni sacrificar personalización.

---

## Contexto

Actualmente se mantienen **30 aplicaciones distintas** (6 apps × 5 clientes), cada una con sus propias variaciones, niveles de actualización y mantenimiento.

Con la incorporación de un nuevo cliente (que requerirá todas las apps) y el desarrollo de una nueva aplicación, el sistema escalará a **42 instancias diferentes**.

### Problemas detectados

- Lógica duplicada entre múltiples bases de código
- Mantenimiento fragmentado e ineficiente
- Integración de nuevos clientes lenta y costosa
- Alta complejidad en pruebas, QA y despliegue

---

## Objetivo

**Centralizar el desarrollo** sobre una única base de código reutilizable, mediante una arquitectura compuesta por:

- Un **núcleo funcional común** (`core`)
- **Plugins generales reutilizables** (lógica compartida)
- **Orchestrators por cliente** (personalización aislada por tenant)

> Esto permite mantener la lógica compartida y personalizar comportamientos sin ramificar el sistema.

---

## Componentes principales

```plaintext
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

* **Plugins compartidos**: funcionalidades generales como pagos, notificaciones, etc.
* **Orchestrators por cliente**: definen qué plugins usar y cómo configurarlos según el tenant.
* **Loader**: selecciona el orchestrator correcto al iniciar, usando `TENANT_ID`.

---

## Cómo funciona

1. Se define la variable de entorno `TENANT_ID` al desplegar.
2. Al arrancar, el sistema carga el orchestrator correspondiente.
3. El orchestrator configura plugins y comportamientos del microservicio.
4. El core ejecuta usando esa configuración, de forma transparente.

> Esto elimina condicionales en tiempo de ejecución y permite una personalización sólida sin duplicación.

---

## Ventajas

* **Código centralizado** y mantenible
* **Plugins reusables**, desacoplados y testeables
* **Personalización controlada** por tenant
* **Escalado fácil** a nuevos clientes
* **Despliegues consistentes y predecibles**

---

## Consideraciones

* Requiere un diseño modular disciplinado
* Los contratos entre core y plugins deben estar bien definidos
* Es fundamental tener una estrategia clara de:

  * Versionado por plugin
  * Pruebas por orchestrator

---

## Ideal para equipos que:

* Mantienen múltiples aplicaciones similares por cliente
* Quieren reducir deuda técnica y mantenimiento cruzado
* Necesitan escalar a nuevos clientes sin ramificar
* Buscan una base sólida para crecimiento horizontal

---

## Más información

* [Documentación técnica detallada](#)
* [Guía para crear un plugin compartido](#)
* [Cómo definir un orchestrator por cliente](#)
