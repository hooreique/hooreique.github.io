---
layout: scenario.vto
title: flake.nix
date: 2024-12-01T01:01:01+0900
bsc: |
  {
    description = "Node.js dev env";

    inputs = {
      nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
      flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils }:
      flake-utils.lib.eachDefaultSystem (system:
        let pkgs = nixpkgs.legacyPackages.\${system};
        in {
          devShells.default = pkgs.mkShell {
            buildInputs = [
              pkgs.fnm
            ];

            shellHook = ''
              eval "\$(fnm env --use-on-cd --shell bash)"
            '';
          };
        });
  }
---

```nix{label=flake.nix}
{
  description = "Node.js dev env";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.fnm
          ];

          shellHook = ''
            eval "$(fnm env --use-on-cd --shell bash)"
          '';
        };
      });
}
```

```ini{label=~/.config/nix/nix.conf}
experimental-features = nix-command flakes
```
