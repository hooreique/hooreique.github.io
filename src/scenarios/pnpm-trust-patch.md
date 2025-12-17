---
layout: scenario.vto
title: Pnpm Trust Patch
date: 2025-12-17T18:08:00+0900
---

```diff{gist}
diff --git a/flake.nix b/flake.nix
index 0cbead6..d12e845 100644
--- a/flake.nix
+++ b/flake.nix
@@ -8,7 +8,16 @@
 
   outputs = { self, nixpkgs, flake-utils }: flake-utils.lib.eachDefaultSystem (
     system: let
-      pkgs = nixpkgs.legacyPackages.${system};
+      pkgs = import nixpkgs {
+        inherit system;
+        overlays = [
+          (final: prev: {
+            cacert = prev.runCommand "cacert-custom" {} ''
+              install -Dm444 ${./cacert.pem} $out/etc/ssl/certs/ca-bundle.crt
+            '';
+          })
+        ];
+      };
       pname = "unocss-language-server";
       version = "0.1.8";
       nodejs = pkgs.nodejs_22;
@@ -20,6 +29,11 @@
         nativeBuildInputs = [ nodejs pnpm.configHook pkgs.makeWrapper ];
         pnpmDeps = pnpm.fetchDeps {
           inherit (final) pname version src;
+          env.NODE_EXTRA_CA_CERTS = "${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt";
+          prePnpmInstall = ''
+            pnpm config set proxy http://127.0.0.1:8080
+            pnpm config set https-proxy http://127.0.0.1:8080
+          '';
           fetcherVersion = 2;
           hash = "sha256-kg8JQvxpVMQ7gudtND/3xWIzEljQAGxC336eGrEJ+w0=";
         };
```
