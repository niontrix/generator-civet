import path from "node:path";
import fs from "node:fs";
import helpers from "yeoman-test";
import {
  describe,
  expect,
  it,
  beforeAll
} from "vitest";

const __dirname = import.meta.dirname;
const appName = "civet-test-app";

describe("generator-civet-app:esbuild", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "esbuild" }));

  it("creates esbuild project files", () => {
    expect(fs.existsSync(`${appName}/esbuild.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds esbuild dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("esbuild");
  });
});

describe("generator-civet-app:farm", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "farm" }));

  it("creates farm project files", () => {
    expect(fs.existsSync(`${appName}/farm.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/style.css`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds farm dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("farm");
  });
});

describe("generator-civet-app:rollup", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "rollup" }));

  it("creates rollup project files", () => {
    expect(fs.existsSync(`${appName}/rollup.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds rollup dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("rollup");
  });
});

describe("generator-civet-app:rolldown", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "rolldown" }));

  it("creates rolldown project files", () => {
    expect(fs.existsSync(`${appName}/rolldown.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds rolldown dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("rolldown");
  });
});

describe("generator-civet-app:webpack", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "webpack" }));

  it("creates webpack project files", () => {
    expect(fs.existsSync(`${appName}/webpack.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds webpack dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("webpack");
  });
});

describe("generator-civet-app:vite", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "vite" }));

  it("creates vite project files", () => {
    expect(fs.existsSync(`${appName}/vite.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/index.html`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/worker.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds vite dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("vite");
  });

  it("adds full app debug configuration", () => {
    expect(fs.readFileSync(`${appName}/.vscode/launch.json`, "utf8")).toContain("Debug full app");
  });
});

describe("generator-civet-app:vite-lib", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "vite-lib" }));

  it("creates vite-lib project files", () => {
    expect(fs.existsSync(`${appName}/vite.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/index.html`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/scripts/dev-with-debug.mjs`)).toBe(true);
    expect(fs.existsSync(`${appName}/scripts/launch-chrome-debug.mjs`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds vite dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("vite");
  });

  it("adds a full app debug configuration", () => {
    expect(fs.readFileSync(`${appName}/.vscode/launch.json`, "utf8")).toContain("Debug full app");
  });
});

describe("generator-civet-app:bun", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "bun" }));

  it("creates bun project files", () => {
    expect(fs.existsSync(`${appName}/bunfig.toml`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds bun dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@types/bun");
  });
});

describe("generator-civet-app:astro+solid-js", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "astro+solid-js" }));

  it("creates astro+solid-js project files", () => {
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/astro.config.mjs`)).toBe(true);
    expect(fs.existsSync(`${appName}/README.md`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/component.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/env.d.ts`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/pages/index.astro`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds astro and solid-js dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("astro");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("solid-js");
  });
});

describe("generator-civet-app:nextjs", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "nextjs" }));

  it("creates nextjs project files", () => {
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/README.md`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/next.config.ts`)).toBe(true);
    expect(fs.existsSync(`${appName}/components/button.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/public/file.svg`)).toBe(true);
    expect(fs.existsSync(`${appName}/public/globe.svg`)).toBe(true);
    expect(fs.existsSync(`${appName}/public/next.svg`)).toBe(true);
    expect(fs.existsSync(`${appName}/public/vercel.svg`)).toBe(true);
    expect(fs.existsSync(`${appName}/public/window.svg`)).toBe(true);
    expect(fs.existsSync(`${appName}/app/page.tsx`)).toBe(true);
    expect(fs.existsSync(`${appName}/app/layout.tsx`)).toBe(true);
    expect(fs.existsSync(`${appName}/app/globals.css`)).toBe(true);
    expect(fs.existsSync(`${appName}/app/page.module.css`)).toBe(true);
    expect(fs.existsSync(`${appName}/app/favicon.ico`)).toBe(true);
    expect(fs.existsSync(`${appName}/app/about/page.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/patches/@danielx+civet+0.11.15.patch`)).toBe(true);
  });

  it("adds nextjs dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("next");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("react");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("react-dom");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@types/node");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@types/react");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@types/react-dom");
  });
});

describe("generator-civet-app:solid-start", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, template: "solid-start" }));

  it("creates solid-start project files", () => {
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/README.md`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/app.config.ts`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/app.tsx`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/entry-server.tsx`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/entry-client.tsx`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/routes/index.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/routes/api/answer.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds solid-start dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@solidjs/meta");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@solidjs/router");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@solidjs/start");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("solid-js");
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("vinxi");
  });
});
