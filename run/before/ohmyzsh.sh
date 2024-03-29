#!/usr/bin/env bash
set -o errexit -o nounset

# Copyright (c) 2023, David Arel, All rights reserved.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

###############################################################################
# Oh-My-ZSH                                                                   #
###############################################################################

# Install Oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
