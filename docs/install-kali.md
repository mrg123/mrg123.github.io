---
id: 安装kali桌面

title: 安装kali桌面

---

基于window10 20H2 WSL2 

在微软商店安装kali 

```base
# apt 更新
sudo apt update && sudo apt upgrade -y 


# 安装 桌面 xfce
sudo apt install kali-desktop-xfce -y


# 安装 远程
sudo apt install xrdp -y
sudo service xrdp start
```

出现报错处理

```
# failed to execute child process dbus-launch (no such file or directory)
sudo apt-get install dbus-x11


# cannot access 'thinclient_drives': Transport endpoint is not connected
sudo umount -f thinclient_drives
```

安装win-key

```
sudo apt upgrade && sudo apt install kali-win-kex -y
```

install zsh

```
sudo apt install zsh zsh-syntax-highlighting zsh-autosuggestions
```

BASH to ZSH

```
cp /etc/skel/.zshrc ~/
```

win-key常用命令

```base
# 启动kex 客户端
kex start
# 在windows 命令行中输入 kex, F8 可以切换会话
kex
# 重新连接会话
kex --win --start-client
# 关闭退出kex
kex --win --stop
```
