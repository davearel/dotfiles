# Copyright (c) 2023, David B. Arel, All rights reserved.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
#
###############################################################################
# Homebrew Bundle                                                             #
###############################################################################
#
# Bundler for Homebrew, Homebrew Cask, Mac App Store and Whalebrew dependencies.
#
#  Examples:
#
# Mac App Store
# mas "1Password", id: 443987910
#
# 'brew tap'
# tap "homebrew/cask"
#
#'brew tap' with custom Git URL
# tap "user/tap-repo", "https://....git"
#
# set arguments for all 'brew install --cask' commands
# cask_args appdir: "~/Applications", require_sha: true
#
# 'brew install --with-rmtp', 'brew services restart' on version changes
# brew "denji/nginx/nginx-full", args: ["with-rmtp"], restart_service: :changed
#
# set arguments for all 'brew install --cask' commands
# cask_args appdir: "~/Applications", require_sha: true
#
# always 'brew services restart', 'brew link', 'brew unlink mysql' (if it is installed)
# brew "mysql@5.6", restart_service: true, link: true, conflicts_with: ["mysql"]
#
###############################################################################

# Tap the Kegs
tap "homebrew/bundle"
tap "homebrew/core"

# Brew the packages
brew "wget"
brew "curl"
brew "coreutils"
brew "git"
brew "gh"
brew "hub"
brew "asdf"
brew "gawk"
brew "gpg"
brew "bash"
brew "zsh"
brew "starship"