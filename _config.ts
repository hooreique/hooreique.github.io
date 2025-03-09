import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import shiki from "lume_shiki/mod.ts";
import { bundledLanguages } from "lume_shiki/deps.ts";
import shikiCopy from "lume_shiki/plugins/copy/mod.ts";
import shikiAttr from "lume_shiki/plugins/attribute/mod.ts";

const baseUrl = "https://gist.hooreique.com";

export default lume({
  src: "./src",
  location: new URL(baseUrl),
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
  .preprocess([".md"], (pages) => {
    for (const page of pages) {
      const matched = (page.data.content as string)?.match(
        /```\S+?{ *?(?:\S+? +?)*?gist(?: +?\S+?)*? *?}\n([\S\s]*?)\n```/m,
      );

      page.data.gist = matched ? matched[1] : undefined;
    }
  })
  .data("baseUrl", Deno.env.has("DEV") ? "http://localhost:3000" : baseUrl);
