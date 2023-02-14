import "zx/globals";

export default async () => {
  const { exitCode } = await nothrow(
    $`eval "$(${getHomebrewPath()} shellenv)" && brew help >> /dev/null`
  );

  if (exitCode !== 0) {
    console.log("🙃 without brew, skipping brewfile");
    return;
  }

  console.log("🏋️‍♀️ installing from brewfile...");
  await $`eval "$(${getHomebrewPath()} shellenv)" && brew bundle`;
  console.log("✅ brewfile installed!");

  if (!(await isConfigured('eval "$(mcfly init zsh)"'))) {
    console.log("📝 adding mcfly to .zshrc");
    await $`echo 'eval "$(mcfly init zsh)"' >> ~/.zshrc`;
  }

  if (!(await isConfigured('eval "$(starship init zsh)"'))) {
    console.log("📝 adding starship to .zshrc");
    await $`echo 'eval "$(starship init zsh)"' >> ~/.zshrc`;
  }
};
