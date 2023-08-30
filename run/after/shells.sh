#!/usr/bin/env bash
set -o errexit -o nounset

# Copyright (c) 2023, David Arel, All rights reserved.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

###############################################################################
# Configure Shells                                                            #
###############################################################################

sudo -s

echo "whitelisting newer zsh and bash shells"
echo /usr/local/bin/bash >>/etc/shells
echo /usr/local/bin/zsh >>/etc/shells

echo "Setting new zsh as default..."
chsh -s /usr/local/bin/zsh

echo "Sourcing .zshrc..."
source ~/.zshrc
