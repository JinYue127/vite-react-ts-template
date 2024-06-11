# React + TypeScript + Vite

This is a repository for cda:
[React](https://react.dev/),
[Vite](https://vitejs.cn/vite3-cn/),
[Tailwind](https://tailwindcss.com/),
[Scss](https://sass-lang.com/),
[ant-design](https://ant-design.antgroup.com/components/overview-cn) | 2024

Key Features:

- 待续 🔗
- 待续 📝
- 待续 🌓
- 待续 🌲
- 待续 🗑️
- 待续 🔐
- 待续 🌠
- 待续 ➡️🔀⬅️
- 待续 📱
- 待续 🌐
- 待续 ↕️
- 待续 🛬
- 待续 🖼️
- 待续 🔄📄

## node版本

**Node version 18.x.x 及以上**

## 仓库地址

```shell
git clone git@github.com:JinYue127/vite-react-ts-template.git
```

## 提交规范

```shell
# 添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件
npx husky add .husky/pre-commit "npx --no-install lint-staged"

# 添加 commit-msg
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# tip 可手动在相应文件里添加脚本
```

### 提交格式：

```text
git commit - m < type > [optional scope]:<description>//注意冒号后面有空格
  - type：提交的类型（如新增、修改、更新等）
  - optional scope：涉及的模块，可选
  - description：任务描述
```

type类型：

| 类别       | 含义                      |
|----------|-------------------------|
| feat     | 新功能                     |
| fix      | 修复 bug                  |
| style    | 样式修改（UI校验）              |
| docs     | 文档更新                    |
| refactor | 重构代码(既没有新增功能，也没有修复 bug) |
| perf     | 优化相关，比如提升性能、体验          |
| test     | 增加测试，包括单元测试、集成测试等       |
| build    | 构建系统或外部依赖项的更改           |
| ci       | 自动化流程配置或脚本修改            |
| revert   | 回退某个commit提交            |

### 提交示范（非规范提交，将commit提交失败）

```git
git commit - m 'feat: 增加 xxx 功能'
git commit - m 'bug: 修复 xxx 功能'
```

## Setup .env file

```js
// 接口公共前缀
VITE_BASE_URL=/api 
// ...
```

### Start the app

```shell
npm run dev
```
