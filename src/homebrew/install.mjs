import "zx/globals";

import getHomebrewPath from "./getPath.mjs";
import isConfigured from "./isConfigured.mjs";
import { log } from "../utils.mjs";

export default async () => {
  const { exitCode } = await nothrow(
    $`eval "$(${getHomebrewPath()} shellenv)" && brew help >> /dev/null`
  );

  if (exitCode === 0) {
    log("✅ Homebrew is already installed!");
    return;
  }

  log("🏋️‍♀️ installing homebrew...");

  await $`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;

  if (!(await checkConfiguration())) {
    log("📝 adding brew to .zshrc");
    await $`echo 'eval "$(${getHomebrewPath()} shellenv)"' >> ~/.zshrc`;

    log("📝 adding brew to .profile");
    await $`echo 'eval "$(${getHomebrewPath()} shellenv)"' >> ~/.profile`;
  }

  log("✅ homebrew installed!");
};

async function checkConfiguration() {
  return await isConfigured('eval "$(${getHomebrewPath()} shellenv)"');
}
