# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="shades-of-purple"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time
zstyle ':omz:update' mode auto # update automatically without asking

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# if type brew &>/dev/null; then
#   FPATH=$(brew --prefix)/share/zsh-completions:$FPATH

#   autoload -Uz compinit
#   compinit
# fi

# Use another custom folder than $ZSH/custom?
ZSH_CUSTOM="~/.oh-my-zsh-custom"

# Volta configuration
export VOLTA_HOME="$HOME/.volta"

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  zsh-syntax-highlighting
  volta
  dotenv
  brew
  asdf
  git
  github
  z
)

source $ZSH/oh-my-zsh.sh

# set up custom aliases
source $HOME/.aliases

# set up custom functions
source $HOME/.functions

# Load 1Password Plugins
source "$HOME/.config/op/plugins.sh"

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vi'
else
  export EDITOR="code --wait"
fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Github's `hub` alias wrapper for adding
#
# eval "$(hub alias -s)"

# DirEnv Environment Loader
# https://direnv.net/
# eval "$(asdf exec direnv hook zsh)"

# A shortcut for asdf managed direnv.
# direnv() { asdf exec direnv "$@"; }

# asdf-direnv
# source "${XDG_CONFIG_HOME:-$HOME/.config}/asdf-direnv/zshrc"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

paths=(
  # Includes local scripts in $PATH when available.
  # Placed at the highest order to ensure that they
  # override any global packages as the local package
  # should almost always take precedence.
  "./bin"
  "./scripts"
  "/usr/local/sbin"
  $VOLTA_HOME/bin
  "/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
)

# Export paths from the provided `paths` array
export PATH="$(join : ${paths[@]}):$PATH"
