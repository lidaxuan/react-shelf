# React


## 环境信息

```
测试环境域名:  http://devliveadmin.myrtb.net

本地环境域名:  http://devlivemanage.myrtb.net:8080
本地环境需要配置 hosts  127.0.0.1 devlivemanage.myrtb.net
```


## Nginx 配置

```
server {
  location / {
    try_files $uri /index.html
  }
}
```

### antd

国内镜像: https://ant-design.gitee.io/index-cn

### antd ui(theme)

```
参考 https://git.quclouds.com:8443/qsj.quyun/qlivemanagetheme
```

### react-router

5.2 文档: https://blog.csdn.net/weixin_30872499/article/details/101076819?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control

## IconFont 

```
import IconFont from 'src/components/icon/index';
// type 是 icon 的名称
<IconFont type="iconmenu"></IconFont>
// 需要调整大小
<IconFont className="font-16" type="iconmenu"></IconFont>
```


module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "globals": {
    "async_com": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true.valueOf,
      "jsx": true
    },
    "sourceType": "module"
  },
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "settings": {
    // 根据 react 版本进行代码规范
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "rules": {
    "jsx-quotes": ["error", "prefer-double"],
    "no-console": "off",
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "space-infix-ops": [
      "error"
    ],
    "multiline-ternary": [
      "error",
      "never"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-shadow": [
      "error"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-var-requires": ["off"],
    "@typescript-eslint/no-empty-interface": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/explicit-member-accessibility": ['error', { accessibility: 'no-public' }],
  }
};