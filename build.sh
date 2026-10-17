#!/usr/bin/env bash
set -euo pipefail

main() {
  # Netlify and Cloudflare images ship their own mise, often older, and may set
  # MISE_* variables. Build with a mise of our own and the repository's config.
  # shellcheck disable=SC2046
  unset $(compgen -v MISE_ || true)
  local mise_bin="${HOME}/.local/bin/mise"

  echo "==> Installing mise"
  curl -fsSL https://mise.run | MISE_INSTALL_PATH="${mise_bin}" sh
  "${mise_bin}" --version

  # The deploy only needs Hugo. Skip developer-only tools.
  export MISE_DISABLE_TOOLS="wrangler,go,go:github.com/gohugoio/gotmplfmt"

  echo "==> Installing tools"
  "${mise_bin}" trust
  "${mise_bin}" install

  git config core.quotepath false
  if [ "$(git rev-parse --is-shallow-repository)" = "true" ]; then
    echo "==> Fetching the full git history"
    git fetch --unshallow
  fi

  echo "==> Installing dependencies"
  "${mise_bin}" run install

  echo "==> Building"
  "${mise_bin}" run build -- "$@"
}

main "$@"
