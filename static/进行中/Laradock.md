# Laradock

步骤

1. git clone 项目根目录同级

2. cp env-example .env

3. 修改.env 
   
   - 修改源码路径,nginx端口,mysql端口,避免本地环境冲突

4. ```shell
   docker-compose up -d nginx mysql
   ```


