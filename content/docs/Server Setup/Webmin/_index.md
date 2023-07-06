---
title: Install Webmin
linkTitleIcon: <i class="fas fa-fw fa-globe"></i> # The icon of the link title, optional.
navWeight: 990 # Upper weight gets higher precedence, optional.
---

# Before Starting

## Links

- [Official site of Webmin](https://webmin.com)
- [Official installation guide](http://doxfer.webmin.com/Webmin/Installation)

## Supported Installation

| Operating System | Tool |
|:-|-:|
| Ubuntu Server `22.04.2 LTS` | Webmin `2.021` |

## Note
Each command is separate with a blank line, please execute them separately.

# Installation

## Install dependencies
```zsh
sudo apt install wget
```

## Set up web interface
```zsh
sh -c "$(curl -fSL https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh)"

sudo apt install webmin
```

# Finishing
You may now open `https://ip-address:10000` in the browser to access Roxy-WI.

Use root user's username as username and root user's password as password to login.