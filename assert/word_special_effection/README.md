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

- 本案例，在HTML文件的行内样式设置了变量`--i`;

- 在动画延时中用`时间值` x `变量--i`

- HTML文件

  ```html
  <div class="wave">
    <span style="--i:1">Welcome&nbsp;&nbsp;</span>
    <span style="--i:2">to&nbsp;&nbsp;</span>
    <span style="--i:3">Cascading&nbsp;&nbsp;</span>
    <span style="--i:4">style&nbsp;&nbsp;</span>
    <span style="--i:5">sheets&nbsp;&nbsp;</span>
    <span style="--i:6">World&nbsp;&nbsp;</span>
    <span style="--i:7">!&nbsp;&nbsp;</span>
    <span style="--i:8">......&nbsp;&nbsp;</span>
  </div>
  ```

- LESS文件

  ```css
  animation-delay: calc(.2s*var(--i));
  ```

- 案例2

- HTML

  ```html
  <body>
    <div class="div-1">div-1</div>
    <div class="div-2">div-2</div>
    <div class="div-3">div-3</div>
  </body>
  ```

- CSS

  ```css
  body{
    --width : 200px;
    --height : 200px;
    --color : red;
    --fontSize : 18px;
    --bgColor : #3c3c3c;
  }
  body{
      display: flex;
      justify-content: space-around
  }
  div{
      width: var(--width);
      height: var(--height);
      line-height: var(--height);
      background-color: var(--bgColor);
      text-align: center;

  }
  .div-1{
      color: var(--color);
      font-size: var(--fontSize);
  }
  .div-2{
      color: yellow;
      font-size: calc(var(--fontSize) + 4px);
  }
  .div-3{
      color: green;
      font-size: calc(var(--fontSize) + 8px);
  }
  ```
#### 3.总结

- 关于函数要的慎用，会影响SEO优化；

#### 4. 动画

- 本案例中对span元素，调用用动画；

- 执行变换： 在Y轴方向进行变换
