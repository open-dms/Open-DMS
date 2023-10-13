import { Layout } from "lucide-react";
import { PlopTypes } from "@turbo/gen";
import { pascalToSentence } from "./targets";

/** @note Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation */

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setHelper("appPath", () => "/Users/seb/.ods/open-DMS/apps/odms-app/");
  plop.setHelper("upperCase", (txt) => txt.toUpperCase());
  plop.setHelper("nowDate", () => new Date().toISOString());
  plop.setHelper("lowerCase", (txt) => txt.toLowerCase().replaceAll(" ", "-"));
  plop.setHelper("spaceCase", (txt: string): string => {
    return txt.split(/(?=[A-Z])/).join(" ");
  });

  plop.setGenerator("APIHandler", {
    description: "NextJS API Endpoint ~/$path/route.tsx",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "Path to route handler? (without ~/app/api)",
        default: "",
      },
    ],
    actions: function (data) {
      var actions: any[] = [];
      const checkIfPathContainsDynamicElements = (input: string) => {
        const regexp = /\[(.*?)\]/g;
        const matcher = input.match(regexp);
        if (matcher) {
          const props: string[] = Array.from(matcher).map((match) =>
            match.replace("]", "").replace("[", "")
          );
          return props;
        }
        return [];
      };

      const segments = checkIfPathContainsDynamicElements((data as any)?.path);
      if (segments.length) {
        actions.push({
          type: "add",
          path: "{{appPath}}/app/api/{{lowerCase path}}/route.tsx",
          templateFile: "templates/dynamic_route.hbs",
          data: { segments: segments },
        });
      } else {
        actions.push({
          type: "add",
          path: "{{appPath}}/app/api/{{lowerCase path}}/route.tsx",
          templateFile: "templates/route.hbs",
          data: { segments: ["{{lowerCase path}}"] },
        });
      }

      return actions;
    },
    //  actions: [
    //    {
    //      type: "createPropsFromPath",
    //    },
    //    {
    //      type: "add",
    //      path: "app/api/{{lowerCase path}}/route.tsx",
    //      templateFile: "templates/route.hbs",
    //      data: { segments: ["foo"] },
    //    },
    //  ],
  });
  // plop.setActionType("createPropsFromPath", (answers, config, plop) => {
  //   const success = true;
  //   /** @todo implement MDX creation */
  //   const basePath = (answers as any)?.turbo?.paths?.root ?? "../../../..";

  //   return new Promise(async (resolve, reject) => {
  //     if (success) {
  //       resolve(JSON.stringify({ msg: `${basePath}/apps/odms-app/app/api/${answers?.path ?? ""}` }));
  //     } else {
  //       reject(JSON.stringify({ msg: "Error message" }));
  //     }
  //   });
  // });

  // plop.setActionType("appendLayoutToPage", (answers, config, plop) => {
  //   const success = true;
  //   /** @todo implement MDX creation */
  //   return new Promise((resolve, reject) => {
  //     if (success) {
  //       resolve(JSON.stringify({ msg: "Success status message", answers, config }));
  //     } else {
  //       reject(JSON.stringify({ msg: "Error message" }));
  //     }
  //   });
  // });

  //  plop.setGenerator("test", {
  //    prompts: [
  //      {
  //        type: "confirm",
  //        name: "wantTacos",
  //        message: "Do you want tacos?",
  //      },
  //    ],
  //    actions: function (data) {
  //      var actions = [];

  //      if (data.wantTacos) {
  //        actions.push({
  //          type: "add",
  //          path: "folder/{{dashCase name}}.txt",
  //          templateFile: "templates/tacos.txt",
  //        });
  //      } else {
  //        actions.push({
  //          type: "add",
  //          path: "folder/{{dashCase name}}.txt",
  //          templateFile: "templates/burritos.txt",
  //        });
  //      }

  //      return actions;
  //    },
  //    description: ""
  //  });

  /** @note Create JSX.Element */
  plop.setGenerator("Component", {
    description: "JSX Element",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "NAME of the component?",
      },
      {
        type: "input",
        name: "note",
        message: "ONE-LINE code docs / commit msg",
        default: "",
      },
      {
        type: "input",
        name: "path",
        message: "What is your desired output PATH in '~/src/components'?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        force: true,
        pattern: /(\/\/ component exports)/g,
        path: "src/components/{{path}}/README.md",
        templateFile: "templates/README.hbs",
      },
      {
        type: "append",
        force: true,
        path: "src/components/{{path}}/index.tsx",
        pattern: /(\/\/ component exports)/g,
        template: 'export * from "@components/{{path}}/{{pascalCase name}}";',
      },
    ],
  });

  plop.setGenerator("PageRoute", {
    description: "NextJS page ~/$_path/page.tsx",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the page?",
      },
      {
        type: "input",
        name: "path",
        message: "What is your desired path to your page",
        default: "app",
      },
      {
        type: "input",
        name: "note",
        message: "ONE-LINE code docs / commit msg",
        default: "",
      },
      {
        type: "confirm",
        name: "layout",
        message: "Include accesorry files `layout`,`loading` for this route ?",
        default: false,
      },
    ],
    actions: function (data) {
      const pageActions = [
        {
          type: "add",
          path: "app/{{lowerCase path}}/page.tsx",
          templateFile: "templates/page.hbs",
        },
      ];

      if (Boolean((data as any).layout) === true) {
        pageActions.push({
          type: "add",
          path: "app/{{lowerCase path}}/layout.tsx",
          templateFile: "templates/layout.hbs",
        });
        pageActions.push({
          type: "add",
          path: "app/{{lowerCase path}}/loading.tsx",
          templateFile: "templates/loading.hbs",
        });
      }
      return pageActions;
    },
  });
}
