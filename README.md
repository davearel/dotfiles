# Dotfiles

:doughnut: Personal Dotfiles

> Used in conjunction with :computer: [zero][zero]
> for macOS setup.

---

## Install

```sh
# Clone the configuration:
git clone --recursive <https://github.com/davearel/dotfiles.git> ~/code/dotfiles
$ caffeinate ~/code/dotfiles/zero/setup
```

## How it works

- Uses `Brewfile` for installing packages, apps, drives, and fonts
- Symlinks files in `symlinks/[group]/**/*` to `~/`
- Runs scripts in `run/before`
- Configures macOS defaults in `defaults.yaml`
- Runs scripts in `run/after`

## Defaults.yaml

A great resource for finding default commands and their purpose is
[macos-defaults.com][macos-defaults]

You can also run the following commands to see specific plist

```sh
# Print the help
defaults help

# List all domains
defaults domains

# List all entries containing word
defaults find ${word}

# Show the type for the given domain, key
defaults read-type ${domain} ${key}

# Rename old_key to new_key
defaults rename ${domain} ${old_key} ${new_key}
```

Another useful resource by `mathiasbynens`: [.macos]

---

:doughnut: My Personal Dotfiles

[zero]: https://github.com/zero-sh/zero-sh/
[macos-defaults]: https://macos-defaults.com/
[.macos]: https://github.com/mathiasbynens/dotfiles/blob/main/.macos
