import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import shiki from "lume_shiki/mod.ts";
import { bundledLanguages } from "lume_shiki/deps.ts";
import shikiCopy from "lume_shiki/plugins/copy/mod.ts";
import shikiAttr from "lume_shiki/plugins/attribute/mod.ts";

export default lume({
  src: "./src",
  location: new URL("https://gist.hooreique.com"),
}, { vento: { options: { autoescape: true } } })
  .use(favicon())
  .use(shiki({
    highlighter: {
      langs: Object.keys(bundledLanguages),
      themes: ["one-dark-pro", "one-light"],
    },
    themes: { dark: "one-dark-pro", light: "one-light" },
    defaultColor: "dark",
    useColorScheme: true,
  }))
  .use(shikiCopy({ content: () => "📋" }))
  .use(shikiAttr())
  .copy("index.html")
  .copy("all.html", "all/index.html")
  .data(
    "wrapBsc",
    (bsc: string): string =>
      `navigator.clipboard.writeText(\`${bsc}\`.trim()+'\\n').catch(()=>{})`,
  )
  .data(
    "wrapUrl",
    (path: string): string =>
      `navigator.clipboard.writeText('https://gist.hooreique.com${path}').catch(()=>{})`,
  );
