# GiantIsopod_Front
大学三年级第三学期小组实训项目的前端。项目包括Vue源码以及docker部署相关文件。

## 项目结构

```
./
├── docker-compose.yaml
├── Dockerfile
├── nginx/
│   └── default.conf
├── README.md
└── web/
    ├── babel.config.js
    ├── docker-compose.yaml
    ├── Dockerfile
    ├── jsconfig.json
    ├── package.json
    ├── package-lock.json
    ├── public/
    ├── README.md
    ├── src/
    │   ├── apis/
    │   ├── App.vue
    │   ├── assets/
    │   ├── components/
    │   ├── main.js
    │   └── views/
    └── vue.config.js


```
nginx文件夹存放nginx的Docker部署相关配置，web界面的Vue源码以及配置在web文件夹下存放。</br>

<br>



## 项目要求

本项目是基于 Nodejs v18.16.0 和 Vue 3.2 版本的 web 前端应用，使用前请确保 Nodejs 版本符合项目要求。

运行以下命令对项目进行 clone：

```bash
git clone https://git.gaokeyun.cn/Mloser/GiantIsopod-Front.git
```

Nodejs 官网：https://nodejs.org

项目部署是基于 docker 和 docker-compose 进行，若有部署需求，请先安装 docker 以及 docker-compose，确保能正常运行。

docker 官网：https://www.docker.com

<br>

## 项目运行

1. 进入到 web 目录下，运行

```bash
npm install
```

2. 此时，web 文件夹下开始下载依赖文件到node_modules文件夹；
3. 项目运行：

```bash
npm run serve
```

<br>

## 项目部署

1. 在确保项目已经能按照上步骤运行的条件下，进入到 web 目录下，运行命令：

``` bash
npm run build
```

2. 此时，web 文件夹下存在项目的构建文件夹 dist ;
3. 在项目的根目录下运行命令来构建docker镜像：

```bash
docker-compose build
```

4. 在项目根目录下运行命令来构建docker容器并启动容器：

```bash
docker-compose up
```

<br>

除下载源码部署外，还可从 docker hub 下载镜像并构建容器运行：

```bash
docker pull mloser/giantisopod_front:v1.0.1
docker run -d -p 8080:80 -t mloser/giantisopod_front:v1.0.1
```

其中，8080端口可自行修改为主机空闲端口，截止到 README 文档完成时，最新镜像版本为 v1.0.1，最新版本可移步 docker 仓库进行查看。

docker 仓库地址：https://hub.docker.com/repository/docker/mloser/giantisopod_front/general
