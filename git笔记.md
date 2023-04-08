### git基本操作

1.打开项目文件

  初始化仓库 git init 

2.关联远程仓库

  git remote add <简称>  <远程仓库地址>

3.将项目添加到仓库

  git add .

4.提交到仓库

  git commit -m  "注释"

5.push到仓库

  git push -u origin "main"

一些在碰到报错可以执行的命令

  1.git branch -v  查看是否有分支，查看本地分支与远程分支断开了连接

  2.git remote –v 若什么都没有，则和上游已断联系，拉不了代码也推不了代码

  3.git branch -m master main 分支改名master改为main
