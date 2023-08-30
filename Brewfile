# Copyright (c) 2023, David Arel, All rights reserved.
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

###############################################################################
# System-wide Homebrew Bundler                                                #
###############################################################################
#
# Resources ::
#
# App Store Installer:
#   git: https://github.com/mas-cli/mas
#
###############################################################################

# Tap the kegs
tap "homebrew/bundle"
tap "homebrew/core"
tap "homebrew/services"
tap "homebrew/cask"
tap "homebrew/cask-drivers"
tap "homebrew/cask-fonts"
tap "buo/cask-upgrade"
tap "1password/tap"
tap "score-spec/tap"

# mac app store installer
brew "mas"

# common misc
brew "wget"
brew "curl"
brew "coreutils"
brew "openssl@3"
brew "make"

# Dotfile management
brew "chezmoi"

# dev
brew "bash"
brew "zsh"
brew "subversion"
brew "score"
brew "git"
brew "gh"
brew "hub"
brew "gpg"
brew "jq"

# yubikey
brew "ykman"

# node reqs
brew "gawk"

# terminal utils
brew "htop"               # https://htop.dev/
brew "task"               # https://taskwarrior.org/
brew "midnight-commander" # https://midnight-commander.org/
brew "gnupg"              # https://gnupg.org/

###############################################################################
# Homebrew Cask :: Applications                                               #
###############################################################################

# Where to install homebrew-cask applications
cask_args appdir: "/Applications"

# Browsers
cask "google-chrome"
cask "firefox"
cask "opera"
cask "arc"
cask "tor"

# Everyday use
cask "gpg-suite"
cask "dropbox"
cask "grammarly"
cask "1password"
cask "1password-cli"
cask "superhuman"
cask "hey"

# Entertainment
cask "spotify"

# Chat / Video Messaging
cask "discord"
cask "whatsapp"
cask "signal"
cask "slack"
cask "zoom"
cask "notion"

# Suites
cask "setapp"

# Design tools
cask "figma"

# Editors
cask "visual-studio-code"
cask "postman"
cask "github"

# Devtools
cask "ngrok"

# Terminals
cask "hyper"
cask "warp"

###############################################################################
# Homebrew Cask :: Fonts ######################################################
# https://github.com/Homebrew/homebrew-cask-fonts

# fonts
cask "font-hack-nerd-font" # https://github.com/ryanoasis/nerd-fonts
cask "font-fira-code"      # https://github.com/tonsky/FiraCode
cask "font-karla"          # https://fonts.google.com/specimen/Karla
cask "font-montserrat"     # https://fonts.google.com/specimen/Montserrat
cask "font-open-sans"      # https://fonts.google.com/specimen/Open+Sans
cask "font-cascadia-code"  # https://github.com/microsoft/cascadia-code
cask "font-cascadia-mono"  # see powerline versions below

# Powerline-enabled fonts
# https://github.com/powerline/fonts
cask "font-powerline-symbols"
cask "font-inconsolata-for-powerline"
cask "font-cascadia-code-pl"
cask "font-cascadia-mono-pl"

# https://ia.net/downloads#fonts
cask "font-ia-writer-duo"
cask "font-ia-writer-mono"
cask "font-ia-writer-quattro"
cask "font-ia-writer-duospace"

###############################################################################
# Homebrew Cask :: Mac AppStore ###############################################

mas "Xcode", id: 497799835
mas "Pages", id: 409201541
mas "Numbers", id: 409203825
mas "Notion Web Clipper", id: 1559269364
