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
