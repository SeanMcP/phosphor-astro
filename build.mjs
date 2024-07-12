import fs from "fs";
import pascalcase from "pascalcase";

const weightDirs = fs.readdirSync("phosphor-icons/SVGs Flat");

const heading = `---
import type { HTMLAttributes } from "astro/types";
export type Props = HTMLAttributes<'svg'>
---
`;

weightDirs.forEach((weighDir) => {
  const files = fs.readdirSync(`./phosphor-icons/SVGs Flat/${weighDir}`);
  console.log(files.length);

  files.forEach((file) => {
    const content = fs.readFileSync(`./phosphor-icons/SVGs Flat/${weighDir}/${file}`, "utf-8");
    const next = content
      .replace("<svg ", "<svg {...Astro.props} ")
      .replace("#000", "currentColor");
    const [name] = file.split(".");

    fs.writeFileSync(`./${pascalcase(name)}.astro`, heading + next);
  });
});

const phosphorLicense = fs.readFileSync("./phosphor-icons/LICENSE", "utf-8");
const libraryLicense = fs.readFileSync("./LIBRARY_LICENSE", "utf-8");
fs.writeFileSync("./LICENSE", phosphorLicense + "\n---\n\n" + libraryLicense);
