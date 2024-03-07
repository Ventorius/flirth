import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{kebabCase name}}/index.tsx",
        template: "export * from './{{kebabCase name}}'",
      },
      {
        type: "append",
        path: "src/index.tsx",
        template: "export * from './{{kebabCase name}}'",
      },
    ],
  });
}
