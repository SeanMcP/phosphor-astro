// curl -fsSL github.com/phosphor-icons/phosphor-home/releases/latest/download/phosphor-icons.zip -O
// unzip phosphor-icons.zip
// rm -rf Icon\ Font/ PNGs/ phosphor-icons.zip
import fs from "fs";
import pascalcase from "pascalcase";

const weightDirs = fs.readdirSync("SVGs");

const heading = `---
import type { HTMLAttributes } from "astro/types";
export type Props = HTMLAttributes<'svg'>
---
`;

weightDirs.forEach((weighDir) => {
  const files = fs.readdirSync(`./SVGs/${weighDir}`);
  console.log(files.length);

  files.forEach((file) => {
    const content = fs.readFileSync(`./SVGs/${weighDir}/${file}`, "utf-8");
    const next = content
      .replace("<svg ", "<svg {...Astro.props} ")
      .replace("#000", "currentColor");
    const [name] = file.split(".");

    fs.writeFileSync(`./${pascalcase(name)}.astro`, heading + next);
  });
});
