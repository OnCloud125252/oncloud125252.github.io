---
title: Install MCSManager
linkTitleIcon: <i class="fas fa-fw fa-globe"></i> # The icon of the link title, optional.
navWeight: 990 # Upper weight gets higher precedence, optional.
---

# Before Starting

## Links

- [Official site of MCSManager](https://mcsmanager.com)
- [Official installation guide](https://github.com/MCSManager/MCSManager/blob/master/README.md)

## Supported Installation

| Operating System | Tool |
|:-|-:|
| Ubuntu Server `22.04.2 LTS` | MCSManager `9.8.0` |

## Note
Each command is separate with a blank line, please execute them separately.

# Installation

## Install dependencies
```zsh
sudo apt install wget
```

## Set up web interface
```zsh
wget -qO- https://raw.githubusercontent.com/mcsmanager/Script/master/setup_en.sh | sudo bash
```

# Finishing
You may now open `https://ip-address:23333` in the browser to access Roxy-WI.

There will be a guide leading you to setup a new account.

# Commands

- Start UI panel  
  `systemctl start mcsm-{daemon,web}.service`  
- Stop UI panel  
  `systemctl stop mcsm-{daemon,web}.service`  
- Restart UI panel  
  `systemctl restart mcsm-{daemon,web}.service`  
- Only restart Web service  
  `systemctl restart mcsm-web.service`  
- Only restart Daemon service  
  `systemctl restart mcsm-daemon.service`