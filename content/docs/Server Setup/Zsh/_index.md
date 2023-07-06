---
title: Install Zsh
linkTitleIcon: <i class="fas fa-fw fa-globe"></i> # The icon of the link title, optional.
navWeight: 990 # Upper weight gets higher precedence, optional.
---

# Before Starting

## Links

- [Official site of Zsh](https://www.zsh.org)
- [Official site of Oh My Zsh](https://ohmyz.sh)
- [Official repository of Powerlevel10k](https://github.com/romkatv/powerlevel10k)
- [Unofficial installation guide](https://holychung.medium.com/%E5%88%86%E4%BA%AB-oh-my-zsh-powerlevel10k-%E5%BF%AB%E9%80%9F%E6%89%93%E9%80%A0%E5%A5%BD%E7%9C%8B%E5%A5%BD%E7%94%A8%E7%9A%84-command-line-%E7%92%B0%E5%A2%83-f66846117921)

## Supported Installation

| Operating System | Tool |
|:-|-:|
| Ubuntu Server `22.04.2 LTS` | zsh `5.8.1` |

## Note
Each command is separate with a blank line, please execute them separately.

# Installation

## Install dependencies
```zsh
sudo apt install vim curl git
```
It's recommended to install Nerd Font in this step to avoid display problems.  
If Nerd Font isn't properly installed, you will not be able to experience the full functionality of Powerlevel10k.  

1. Install dependencies:
   - `sudo apt install fontconfig`
2. Download and install these four ttf files:
   - [MesloLGS NF Regular](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
   - [MesloLGS NF Bold](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
   - [MesloLGS NF Italic](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
   - [MesloLGS NF Bold Italic](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)
3. Install fonts:
   - Move all fonts to `/usr/local/share/fonts/TTF`
   - If the directory doesn't exist, create one
   - Rebuild the font cache with `fc-cache -f -v`

## Install Zsh
```zsh
sudo apt install zsh

sudo chsh -s $(which zsh)
```

## Install On My Zsh
```zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Install Powerlevel10k
```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
Switch the theme to Powerlevel10k by editing the config file which located in `/home/$USER/.zshrc` (`~/.zshrc`).  
Change the line `ZSH_THEME="robbyrussell"` to `ZSH_THEME="powerlevel10k/powerlevel10k"`.

Apply the changes by executing `source /home/$USER/.zshrc` (`source ~/.zshrc`).

The Powerlevel10k configuration wizard should be started automatically.  
If it doesn't, execute `p10k configure` to start the configuration wizard.  
Choose your favorites configuration!

## Install plugins (Optional)
***[Zsh-Completions](https://github.com/zsh-users/zsh-completions)***  
Additional completion definitions for Zsh.  
```zsh
git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions
```

***[Zsh-Autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)***  
It suggests commands as you type based on history and completions.  
```zsh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

***[Zsh-Syntax-Highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)***  
It enables highlighting of commands whilst they are typed at a zsh prompt into an interactive terminal.  
```zsh
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Finally, add the following configuration to `.zshrc`:
```zsh
plugins=(
  git
  zsh-completions 
  zsh-autosuggestions 
  zsh-syntax-highlighting
)
```
Apply the changes by executing `source /home/$USER/.zshrc` (`source ~/.zshrc`).

# Finishing
Enjoy your perfect terminal with fantastic looking, autosuggestions and syntax-highlighting~

![](https://i.ibb.co/rQPxfnD/image.png)

# Little tip
Add the following lines to the end of `.zshrc` file to anchor the prompt to the bottom of the terminal window.
```zsh
# Fix prompt at the bottom of the terminal window
alias clear="clear && printf '\n%.0s' {1..100}"
printf '\n%.0s' {1..100}
```