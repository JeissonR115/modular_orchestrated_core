import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Arquitectura Modular",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        MOC permite construir aplicaciones como bloques independientes,
        reutilizables y personalizables para cada cliente, sin duplicar código
        base.
      </>
    ),
  },
  {
    title: "Orquestación Multi-Cliente",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Cada cliente tiene su propio entorno lógico aislado. MOC define qué
        módulos se activan, cómo se comportan y cómo se integran, todo desde un
        orquestador central.
      </>
    ),
  },
  {
    title: "Escalabilidad Sin Fricción",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Agregar nuevos clientes o funcionalidades no requiere reescribir nada.
        La arquitectura está diseñada para escalar horizontalmente sin perder
        control ni orden.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
