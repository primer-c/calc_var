# README

#### 1. Var()变量

- 语法： `--变量名`;

- 在body中或者任何想要使用的变量语法的层级中定义var()变量；

- 在任何标签使用；

- 案例

  ```css
  /*定义变量*/
  body {
    --fontSize: 18px;
    --color: #ff0000;
  }

  /*使用变量*/
  .container span {
    font-size: var(--fontSize);
    color: var(--color);
  }
  ``

#### 2. Calc()函数

- Calc()通常与Var()配合使用

- 案例: calc()函数

- HTML

  ```html
  <body>
    <div>Hello World</div>
    <div>Hello World</div>
    <div>Hello World</div>
  </body>
  ```

- CSS

- 盒子倒影效果

  ```css
   -webkit-box-reflect: below 0px linear-gradient(transparent, rgba(0, 0, 0, .5));
  ```

  ```css
  :root {
    --width : 200px;
    --height : 60px;
    --colorRed : red;
    --colorYellow: yellow;
    --colorGreen: green;
    --fontSize : 20px;
    --bgColor : #3c3c3c;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  body {
    min-height: 100vh;
    .center;
    div {
      width: var(--width);
      height: var(--height);
      background: var(--bgColor);
      text-align: center;
      line-height: var(--height);
      font-size: var(--fontSize);
      -webkit-box-reflect: below 0px linear-gradient(transparent, rgba(0, 0, 0, .5));
      &:nth-of-type(1){
        color: var(--colorRed);
      }
      &:nth-of-type(2){
        color: var(--colorYellow);
        font-size: calc(var(--fontSize) + 10px);
      }
      &:nth-of-type(3){
        color: var(--colorGreen);
        font-size: calc(var(--fontSize) + 30px);
      }
    }
  }
  ```
#### 3.总结

- 关于函数要的慎用，会影响SEO优化；
