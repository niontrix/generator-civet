import Generator from "yeoman-generator";
import chalk from "chalk";
import yosay from "yosay";

export default class CivetAppGenerator extends Generator {
  /**
   Copies files from the template to the destination
   @param {string} tmplSourceDir - The source directory of the template
   @param {Array} filesAndDirs - An array of pairs of files or directories and where to copy them
                                { src: "somefile", dest: "/path/to/somefile" }
   */
  #copyFiles(tmplSourceDir, filesAndDirs) {
    for (const { src, dest } of filesAndDirs) {
      this.fs.copy(
        this.templatePath(`${tmplSourceDir}/${src}`),
        this.destinationPath(dest)
      );
    }
  }

  #scaffoldAstroProject(appName, tmplSourceDir) {
    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    const itemsToCopy = [
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "astro.config.mjs", dest: "astro.config.mjs" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "README.md", dest: "README.md" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "bunfig.toml", dest: "bunfig.toml" },
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "esbuild.js", dest: "esbuild.js" },
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "README.md", dest: "README.md" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "next.config.ts", dest: "next.config.ts" },
      { src: "components", dest: "components" },
      { src: "public", dest: "public" },
      { src: "app", dest: "app" },
      { src: "vscode", dest: ".vscode" },
      { src: "patches", dest: "patches" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "rolldown.config.js", dest: "rolldown.config.js" },
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "rollup.config.js", dest: "rollup.config.js" },
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "README.md", dest: "README.md" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "app.config.ts", dest: "app.config.ts" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemToCopy = [
      { src: "gitignore", dest: ".gitignore" },
      { src: "farm.config.js", dest: "farm.config.js" },
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "index.html", dest: "index.html" },
      { src: "public", dest: "public" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemToCopy);

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

    const itemsToCopy = [
      { src: "vite.config.js", dest: "vite.config.js" },
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "index.html", dest: "index.html" },
      { src: "src", dest: "src" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "vite.config.js", dest: "vite.config.js" },
      { src: "tsconfig.json", dest: "tsconfig.json" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "index.html", dest: "index.html" },
      { src: "src", dest: "src" },
      { src: "scripts", dest: "scripts" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

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

    const itemsToCopy = [
      { src: "webpack.config.js", dest: "webpack.config.js" },
      { src: "gitignore", dest: ".gitignore" },
      { src: "main.civet", dest: "main.civet" },
      { src: "message.civet", dest: "message.civet" },
      { src: "vscode", dest: ".vscode" }
    ];

    this.#copyFiles(tmplSourceDir, itemsToCopy);

    this.addDevDependencies({
      webpack: "^5.109.0",
      "webpack-cli": "^7.2.0"
    });
  }

  #addEslint() {
    this.addDevDependencies({
      eslint: "^9.17.0",
      "@eslint/js": "^9.39.5",
      "eslint-plugin-civet": "^0.1.0",
      "typescript-eslint": "^8.19.0"
    });

    const itemsToCopy = [
      { src: "eslint.config.civet", dest: "eslint.config.civet" }
    ];

    this.#copyFiles("eslint", itemsToCopy);
  }

  #addGulp() {
    this.addDevDependencies({
      gulp: "^4.0.2",
      "gulp-civet": "^0.0.1"
    });

    const itemsToCopy = [
      { src: "gulpfile.js", dest: "gulpfile.js" }
    ];

    this.#copyFiles("gulp", itemsToCopy);
  }

  async initializing() {
    this.log(yosay(`Welcome to the wonderful ${chalk.red("generator-civet")} generator!`));
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
      },
      {
        type: "confirm",
        name: "eslint",
        message: "Do you want to use eslint?",
        default: true
      },
      {
        type: "confirm",
        name: "gulp",
        message: "Do you want to use gulp?",
        default: false
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

    if (this.answers.eslint) {
      this.#addEslint();
    }

    if (this.answers.gulp) {
      this.#addGulp();
    }
  }
}
