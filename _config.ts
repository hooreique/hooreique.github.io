import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import shiki from "lume_shiki/mod.ts";
import shikiCopy from "lume_shiki/plugins/copy/mod.ts";
import shikiAttr from "lume_shiki/plugins/attribute/mod.ts";

export default lume({
  src: "./src",
  location: new URL("https://gist.hooreique.com"),
})
  .use(favicon())
  .use(shiki({
    highlighter: {
      langs: ["javascript", "typescript"],
      themes: ["github-dark", "github-light"],
    },
    themes: { dark: "github-dark", light: "github-light" },
    defaultColor: "dark",
    useColorScheme: true,
  }))
  .use(shikiCopy())
  .use(shikiAttr());
