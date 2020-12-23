# Docker Command

列出正在运行的容器

```docker
docker ps
```

只看当前项目的容器

```docker
docker-compose ps
```

关闭所有正在运行的容器

```docker
docker-compose stop
```

停止单个容器

```docker
docker-compose stop {container-name}
```

删除所有现有容器

```docker
docker-compose down
```

# 通过命令进入容器

```docker
docker ps # 列出当前正在运行的容器
docker-compose exec {container-name} bash
docker-compose exec mysql bash # 进入mysql容器
exit # 退出容器
```

进入workspace,安装xdebug

```bash
docker-compose exec workspace bash
```
