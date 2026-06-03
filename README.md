# 你的交警工作风格是哪一种？

这是一个面向公安交警工作场景的网页互动测试项目。项目包含 25 道单选题、10 种正向平等的工作风格结果，不采集姓名、单位、地区、警号、联系方式等个人信息。网页可以通过 GitHub Pages 免费发布，其他人可以用公开链接在手机或电脑浏览器中打开测试。

## 本地运行

先进入项目文件夹：

```bash
cd traffic-police-style-test
```

安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

看到终端里的本地网址后，用浏览器打开即可预览。

如果你不熟悉命令行，也可以直接双击项目里的 `本地预览.bat`。它会自动打开正确的本地预览网址：

```text
http://127.0.0.1:4173/traffic-police-style-test/
```

不要直接双击 `index.html`，这样通常会出现空白页面。

## 本地构建检查

```bash
npm run build
```

这条命令会检查 TypeScript，并生成上线用的 `dist` 文件夹。成功时终端不会出现红色报错。

预览构建结果：

```bash
npm run preview
```

## 评分模拟检查

```bash
npm run simulate
```

这条命令会随机模拟 1000 组答题，显示 10 种结果的出现次数和比例，用于检查结果分布是否明显失衡。

## 新建 GitHub 仓库

1. 登录 GitHub。
2. 点击右上角 `+`。
3. 点击 `New repository`。
4. 仓库名称填写 `traffic-police-style-test`。
5. 选择公开仓库 `Public`。
6. 点击创建仓库。

## 推送代码到 GitHub

```bash
git init
git add .
git commit -m "初始化交警工作风格测试"
git branch -M main
git remote add origin https://github.com/我的GitHub用户名/traffic-police-style-test.git
git push -u origin main
```

这些命令会把本地项目保存为 Git 版本，并推送到你的 GitHub 仓库。请把 `我的GitHub用户名` 换成真实用户名。

## 启用 GitHub Pages

1. 打开 GitHub 仓库页面。
2. 点击 `Settings`。
3. 点击左侧 `Pages`。
4. 找到 `Build and deployment`。
5. 在 `Source` 中选择 `GitHub Actions`。
6. 点击仓库顶部 `Actions`。
7. 等待部署流程显示绿色成功标记。
8. 回到 `Settings` -> `Pages`，查看公开访问网址。

预计网址格式：

```text
https://我的GitHub用户名.github.io/traffic-police-style-test/
```

## 后续如何更新网页

修改题目、结果文案或样式后，执行：

```bash
git add .
git commit -m "更新测试内容"
git push
```

代码推送到 `main` 分支后，GitHub Actions 会自动重新构建并更新网页。

## 常用修改位置

25 道题和选项：`src/config/questions.ts`

10 种结果文案：`src/config/results.ts`

评分规则和关键题：`src/config/scoring.ts`

网页名称、公开网址和二维码地址：`src/config/site.ts`

GitHub Pages 路径：`vite.config.ts`

自动部署流程：`.github/workflows/deploy.yml`

## 常见问题排查

发布后白屏：检查 `vite.config.ts` 中的 `base` 是否为 `/traffic-police-style-test/`。

仓库名称改了：同步修改 `vite.config.ts` 里的 `base`。

二维码网址不正确：修改 `src/config/site.ts` 里的 `qrCodeUrl`。

Actions 构建失败：先在本地运行 `npm run build`，根据报错修改。

静态资源丢失：检查资源路径是否使用 Vite 支持的引用方式。

刷新页面后 404：本项目使用单页状态切换，不依赖服务器路由，通常不会出现该问题。
