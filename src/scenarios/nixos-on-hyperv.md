---
layout: scenario.vto
title: NixOS on Hyper-V
date: 2025-01-21T10:00:00+0900
---

```nix{gist label=/etc/nixos/configuration.nix}
# Edit this configuration file to define what should be installed on
# your system. Help is available in the configuration.nix(5) man page, on
# https://search.nixos.org/options and in the NixOS manual (`nixos-help`).

{ config, lib, pkgs, ... }:
let
  home-manager = builtins.fetchTarball "https://github.com/nix-community/home-manager/archive/release-24.11.tar.gz";
in
{
  imports = [
    # Include the results of the hardware scan.
    ./hardware-configuration.nix
    (import "${home-manager}/nixos")
  ];

  # Use the GRUB 2 boot loader.
  boot.loader.grub.enable = true;
  # boot.loader.grub.efiSupport = true;
  # boot.loader.grub.efiInstallAsRemovable = true;
  # boot.loader.efi.efiSysMountPoint = "/boot/efi";
  # Define on which hard drive you want to install Grub.
  boot.loader.grub.device = "/dev/sda"; # or "nodev" for efi only

  # networking.hostName = "nixos"; # Define your hostname.
  # Pick only one of the below networking options.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.
  # networking.networkmanager.enable = true;  # Easiest to use and most distros use this by default.

  # Set your time zone.
  # time.timeZone = "Europe/Amsterdam";

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Select internationalisation properties.
  # i18n.defaultLocale = "en_US.UTF-8";
  # console = {
  #   font = "Lat2-Terminus16";
  #   keyMap = "us";
  #   useXkbConfig = true; # use xkb.options in tty.
  # };

  # Enable the X11 windowing system.
  # services.xserver.enable = true;


  

  # Configure keymap in X11
  # services.xserver.xkb.layout = "us";
  # services.xserver.xkb.options = "eurosign:e,caps:escape";

  # Enable CUPS to print documents.
  # services.printing.enable = true;

  # Enable sound.
  # hardware.pulseaudio.enable = true;
  # OR
  # services.pipewire = {
  #   enable = true;
  #   pulse.enable = true;
  # };

  # Enable touchpad support (enabled default in most desktopManager).
  # services.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  # users.users.alice = {
  #   isNormalUser = true;
  #   extraGroups = [ "wheel" ]; # Enable ‘sudo’ for the user.
  #   packages = with pkgs; [
  #     tree
  #   ];
  # };

  # programs.firefox.enable = true;

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  # environment.systemPackages = with pkgs; [
  #   vim # Do not forget to add an editor to edit configuration.nix! The Nano editor is also installed by default.
  #   wget
  # ];

  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  # programs.mtr.enable = true;
  # programs.gnupg.agent = {
  #   enable = true;
  #   enableSSHSupport = true;
  # };

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  networking.firewall.enable = false;

  # Copy the NixOS configuration file and link it from the resulting system
  # (/run/current-system/configuration.nix). This is useful in case you
  # accidentally delete configuration.nix.
  # system.copySystemConfiguration = true;

  # This option defines the first version of NixOS you have installed on this particular machine,
  # and is used to maintain compatibility with application data (e.g. databases) created on older NixOS versions.
  #
  # Most users should NEVER change this value after the initial install, for any reason,
  # even if you've upgraded your system to a new NixOS release.
  #
  # This value does NOT affect the Nixpkgs version your packages and OS are pulled from,
  # so changing it will NOT upgrade your system - see https://nixos.org/manual/nixos/stable/#sec-upgrading for how
  # to actually do that.
  #
  # This value being lower than the current NixOS release does NOT mean your system is
  # out of date, out of support, or vulnerable.
  #
  # Do NOT change this value unless you have manually inspected all the changes it would make to your configuration,
  # and migrated your data accordingly.
  #
  # For more information, see `man configuration.nix` or https://nixos.org/manual/nixos/stable/options#opt-system.stateVersion .
  system.stateVersion = "24.11"; # Did you read the comment?



  # Hyper-V Stuff
  boot.initrd.kernelModules = [ "hv_vmbus" "hv_storvsc" ];
  boot.kernelParams = [ "video=hyperv_fb:800x600" ];
  boot.kernel.sysctl."vm.overcommit_memory" = "1";
  boot.initrd.checkJournalingFS = false;

  nix.settings.experimental-features = [ "nix-command" "flakes" ];

  environment.systemPackages = [
    pkgs.nix-ld
    pkgs.home-manager
    pkgs.openssh
    pkgs.zsh
    pkgs.git
    pkgs.gh
    pkgs.vim
  ];

  # https://github.com/nix-community/nix-ld
  programs.nix-ld.enable = true;

  home-manager.users.song = {
    home.stateVersion = "24.11";
    home.packages = [ pkgs.home-manager ];
  };

  users.users.song = {
    isNormalUser = true;
    home = "/home/song";
    extraGroups = [ "wheel" "networkmanager" ];
    openssh.authorizedKeys.keys = [
      "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAA********************************************* foo"
    ];
    shell = pkgs.zsh;
  };

  services.openssh = {
    enable = true;
    ports  = [ 30022 ];
    settings = {
      PermitRootLogin              = "no";
      PasswordAuthentication       = false;
      KbdInteractiveAuthentication = false;
    };
  };

  programs.ssh = {
    extraConfig = ''
      Host *
        ServerAliveInterval 60
        ServerAliveCountMax 3
    '';
  };

  programs.zsh.enable = true;
}
```

```nix{label=~/.config/home-manager/home.nix}
{ pkgs, lib, ... }:

{
  home.username = "song";
  home.homeDirectory = "/home/song";
  home.stateVersion = "24.11";

  home.packages = [
    pkgs.home-manager
    pkgs.openssh
    pkgs.zsh
    pkgs.zoxide
    pkgs.fzf
    pkgs.lemonade
    pkgs.git
    pkgs.lazygit
    pkgs.gh
    pkgs.vim
    pkgs.neovim

    # nix language server
    pkgs.nil

    # for neovim
    pkgs.gcc
    pkgs.ripgrep
    pkgs.lua-language-server

    # for nvim-treesitter
    pkgs.tree-sitter
    pkgs.nodejs_22

    # for telescope
    pkgs.gnumake
    pkgs.fd

    # for mason.nvim (<- nvim-java)
    pkgs.wget
    pkgs.unzip

    pkgs.vscode-langservers-extracted
    pkgs.vscode-js-debug
  ];

  programs.zsh = {
    enable = true;
    autosuggestion.enable = true;
    sessionVariables = {
      SHELL = "$(which zsh)";
      EDITOR = "nvim";
      VISUAL = "nvim";
    };
    oh-my-zsh = {
      enable = true;
      theme = "hoobira";
      plugins = [ "git" ];
      custom = "$HOME/omz-custom";
    };
  };

  programs.zoxide = {
    enable = true;
    enableZshIntegration = true;
  };

  programs.fzf = {
    enable = true;
    enableZshIntegration = true;
  };

  programs.git = {
    enable = true;
    userName = "Foo";
    userEmail = "bar@baz.com";
    extraConfig = {
      user.signingKey = "~/.ssh/prikey";
      gpg.format = "ssh";
      commit.gpgSign = true;
    };
  };

  programs.lazygit = {
    enable = true;
    settings.gui = {
      scrollHeight = 3;
      nerdFontsVersion = 3;
      filterMode = "fuzzy";
    };
  };

  home.file.".hushlogin".text = "";

  home.file.".config/lemonade.toml".text = ''
    host = '127.0.0.1'
    allow = '127.0.0.1'
    port = 2489
    line-ending = 'lf'
  '';

  home.file."omz-custom/themes/hoobira.zsh-theme".text = ''
    local return_code_symbol="%(?.○.●)"
    local user_host="%(!.%{''$fg[red]%}.%{''$fg[green]%})%n@%m%{''$reset_color%}"
    local current_dir="%{''$fg[blue]%}%~%{''$reset_color%}"
    local user_symbol='%(!.#.''$)'
    local git_status=${"'\$"}(git_prompt_info)''$(git_prompt_status)''$(git_prompt_remote)'
    PROMPT="╭''${return_code_symbol} ''${user_host} ''${current_dir}''${git_status}
    ╰''${user_symbol} "
    ZSH_THEME_GIT_PROMPT_PREFIX=" %{''$fg[yellow]%}"
    ZSH_THEME_GIT_PROMPT_DIRTY="%{''$reset_color%} ±"
    ZSH_THEME_GIT_PROMPT_CLEAN="%{''$reset_color%}"
    ZSH_THEME_GIT_PROMPT_SUFFIX=""
    ZSH_THEME_GIT_PROMPT_AHEAD=" ↑"
    ZSH_THEME_GIT_PROMPT_BEHIND=" ↓"
    ZSH_THEME_GIT_PROMPT_REMOTE_EXISTS=""
    ZSH_THEME_GIT_PROMPT_REMOTE_MISSING=" ∅"
  '';

  home.activation = {
    ghAuthStatus = lib.hm.dag.entryAfter ["writeBoundary"] ''
      run ${pkgs.gh}/bin/gh auth status
    '';

    nvimConfig = lib.hm.dag.entryAfter ["writeBoundary"] ''
      if [ -d "$HOME/.config/nvim" ]; then
        run cd $HOME/.config/nvim
        run ${pkgs.git}/bin/git -c core.sshCommand="${pkgs.openssh}/bin/ssh" fetch --prune
      else
        run ${pkgs.git}/bin/git -c core.sshCommand="${pkgs.openssh}/bin/ssh" \
          clone git@github.com:hooreique/hoo-nvim-conf.git $HOME/.config/nvim
      fi
    '';
  };
}
```
