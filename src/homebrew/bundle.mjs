import "zx/globals";
import { log } from "../utils.mjs";

export default async () => {
  const { exitCode } = await nothrow(
    $`eval "$(${getHomebrewPath()} shellenv)" && brew help >> /dev/null`
  );

  if (exitCode !== 0) {
    log("🙃 without brew, skipping brewfile");
    return;
  }

  log("🏋️‍♀️ installing from brewfile...");
  await $`eval "$(${getHomebrewPath()} shellenv)" && brew bundle`;
  log("✅ brewfile installed!");

  if (!(await isConfigured('eval "$(mcfly init zsh)"'))) {
    log("📝 adding mcfly to .zshrc");
    await $`echo 'eval "$(mcfly init zsh)"' >> ~/.zshrc`;
  }

  if (!(await isConfigured('eval "$(starship init zsh)"'))) {
    log("📝 adding starship to .zshrc");
    await $`echo 'eval "$(starship init zsh)"' >> ~/.zshrc`;
  }
};
