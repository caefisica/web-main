#!/usr/bin/env bash
set -euo pipefail

main() {
  if ! command -v mise >/dev/null; then
    curl -fsSL https://mise.run | sh
    export PATH="${HOME}/.local/bin:${PATH}"
  fi

  # The deploy only needs Hugo. Skip developer-only tools.
  export MISE_DISABLE_TOOLS="wrangler,go,go:github.com/gohugoio/gotmplfmt"
  mise trust
  mise install

  git config core.quotepath false
  if [ "$(git rev-parse --is-shallow-repository)" = "true" ]; then
    git fetch --unshallow
  fi

  mise run install
  mise run build -- "$@"
}

main "$@"
