---
id: JupyterLab 

title: JupyterLab 基于web,强交互笔记

---

安装命令,基于conda

```
conda install -c conda-forge jupyterlab
```

pip 安装

```
pip install jupyterlab
```

启动

```
jupyter lab
```

查看安装目录

```
jupyter --config-dir
```

创建默认配置,以便于修改

```
jupyter notebook --generate-config
```

修改默认目录

```
c.NotebookApp.notebook_dir = 'd:\\learning'
```
