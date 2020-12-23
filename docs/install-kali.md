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
