/**
 * Get and return the path for homebrew
 */
export default () => {
  switch (os.platform()) {
    case "darwin":
      return "/usr/local/bin/brew";

    case "linux":
      return "/home/linuxbrew/.linuxbrew/bin/brew";

    default:
      throw new Error(`unsupported platform: ${os.platform()}`);
  }
};
