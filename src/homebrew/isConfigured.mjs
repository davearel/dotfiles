import "zx/globals";

import { log } from "../utils.mjs";

/**
 * Check if Homebrew is configured
 */
export default async (config, file = ".zshrc") => {
  const filepath = `${os.homedir()}/${file}`;

  const content = await fs.readFile(filepath);
  const configured = content.toString().includes(config);

  log(
    `${
      configured ? "✅" : "❌"
    } checking if ${filepath} is configured: ${config}`
  );

  return configured;
};
