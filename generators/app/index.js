import Generator from "yeoman-generator";
import chalk from "chalk";
import yosay from "yosay";

export default class CivetAppGenerator extends Generator {
  #scaffoldAstroProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/astro.config.mjs`),
      this.destinationPath("astro.config.mjs")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/README.md`),
      this.destinationPath("README.md")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDependencies({
      astro: "^7.2.0",
      "@astrojs/solid-js": "^7.0.0",
      "solid-js": "^1.9.0"
    });
  }

  #scaffoldBunProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/bunfig.toml`),
      this.destinationPath("bunfig.toml")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      "@types/bun": "latest"
    });
  }

  #scaffoldEsbuildProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/esbuild.js`),
      this.destinationPath("esbuild.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      esbuild: "^0.27.0"
    });
  }

  #scaffoldNextjsProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/README.md`),
      this.destinationPath("README.md")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/next.config.ts`),
      this.destinationPath("next.config.ts")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/components`),
      this.destinationPath("components")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/public`),
      this.destinationPath("public")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/app`),
      this.destinationPath("app")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/patches`),
      this.destinationPath("patches")
    );

    this.addDependencies({
      next: "16.2.3",
      react: "^19.0.0",
      "react-dom": "^19.0.0"
    });

    this.addDevDependencies({
      "@types/node": "^20",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      "patch-package": "^8.0.1",
    });
  }

  #scaffoldRolldownProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/rolldown.config.js`),
      this.destinationPath("rolldown.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      rolldown: "^1.2.0"
    });
  }

  #scaffoldRollupProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/rollup.config.js`),
      this.destinationPath("rollup.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      rollup: "^4.62.0"
    });
  }

  #scaffoldSolidStartProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/README.md`),
      this.destinationPath("README.md")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/app.config.ts`),
      this.destinationPath("app.config.ts")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDependencies({
      "@solidjs/meta": "^0.29.4",
      "@solidjs/router": "^0.15.3",
      "@solidjs/start": "^1.3.2",
      "solid-js": "^1.9.13",
      vinxi: "^0.5.11"
    });
  }

  #scaffoldFarmProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/farm.config.js`),
      this.destinationPath("farm.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/index.html`),
      this.destinationPath("index.html")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/public`),
      this.destinationPath("public")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      "@farmfe/cli": "^1.0.0",
      "@farmfe/core": "^1.6.0"
    });
  }

  #scaffoldViteProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vite.config.js`),
      this.destinationPath("vite.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/index.html`),
      this.destinationPath("index.html")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      vite: "^8.2.0"
    });
  }

  #scaffoldViteLibProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vite.config.js`),
      this.destinationPath("vite.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/index.html`),
      this.destinationPath("index.html")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/scripts`),
      this.destinationPath("scripts")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      vite: "^8.2.0"
    });
  }

  #scaffoldWebpackProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/webpack.config.js`),
      this.destinationPath("webpack.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/main.civet`),
      this.destinationPath("main.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/message.civet`),
      this.destinationPath("message.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      webpack: "^5.109.0",
      "webpack-cli": "^7.2.0"
    });
  }

  async initializing() {
    this.log(yosay(`Welcome to the wonderful ${chalk.red("generator-civet-app")} generator!`));
  }

  async prompting() {
    // Have Yeoman greet the user.
    const prompts = [
      {
        type: "input",
        name: "appName",
        message: "What would you like to call your app?",
        default: this.appname
      },
      {
        type: "list",
        name: "template",
        message: "What kind of base would you like to use?",
        choices: ["astro+solid-js", "bun", "esbuild", "farm", "nextjs", "rolldown", "rollup", "solid-start", "vite", "vite-lib", "webpack"]
      }
    ];

    this.answers = await this.prompt(prompts);

    this.destinationRoot(this.destinationPath(this.answers.appName));
  }

  writing() {
    const { appName, template } = this.answers;

    switch (template) {
      case "astro+solid-js": {
        this.#scaffoldAstroProject(appName, template);
        break;
      }

      case "bun": {
        this.#scaffoldBunProject(appName, template);
        break;
      }

      case "esbuild": {
        this.#scaffoldEsbuildProject(appName, template);
        break;
      }

      case "farm": {
        this.#scaffoldFarmProject(appName, template);
        break;
      }

      case "nextjs": {
        this.#scaffoldNextjsProject(appName, template);
        break;
      }

      case "rolldown": {
        this.#scaffoldRolldownProject(appName, template);
        break;
      }

      case "rollup": {
        this.#scaffoldRollupProject(appName, template);
        break;
      }

      case "solid-start": {
        this.#scaffoldSolidStartProject(appName, template);
        break;
      }

      case "vite": {
        this.#scaffoldViteProject(appName, template);
        break;
      }

      case "vite-lib": {
        this.#scaffoldViteLibProject(appName, template);
        break;
      }

      case "webpack": {
        this.#scaffoldWebpackProject(appName, template);
        break;
      }

      default: {
        this.log("You must select a template");
        break;
      }
    }

    // Always include these dependencies
    this.addDevDependencies({
      "@danielx/civet": "^0.11.0",
      typescript: "<7.0.0"
    });
  }
}
