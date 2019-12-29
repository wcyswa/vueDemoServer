vue项目的后端

搭建过程
1.npm i express //首先安装express

express 4.0版本以上，express-generator需要另外安装
2.npm i express-generator

3.创建项目
express vueDemoServer

4.进去项目，安装依赖
cd vueDemoServer
npm i

5.启动项目
npm start

6.本地访问http://localhost:3000

上传本地代码到github
1.git init 
初始化git, 如果Initialized empty Git repository ，安装git(npm i git),
如果Reinitialized existing Git repository in。。。说明本地已经有git,无需初始化

2.git add .

3.git commit -m '提交注释'

4.去github上创建自己的Repository，获取到Repository连接
eg:https://github.com/wcyswa/vueDemoServer

5.git remote add origin https://github.com/wcyswa/vueDemoServer
将本地仓库关联到github上

6.git pull origin master
上传github之前先pull下代码

7.git push -u origin master
上传代码到仓库

git push origin 与git push -u origin master的区别
1。将当前分支推送到origin主机的对应分支，如果当前分支只有一个追踪分支，主机名可以省略
2。git push 如果当前分支与多个主机存在追踪关系，那么这个时候-u选项会指定一个默认主机，这样后面就可以不加任何参数使用git push。
3。git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。
不带任何参数的git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。
