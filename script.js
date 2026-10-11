// ── 知识点内容 ──
const pages = {
    'home': `
        <h1>欢迎使用 JJWB</h1>
        <p>这里包含了制作网页要用的代码，包括 HTML、CSS、JS、Python Flask 和 3D 游戏（Three.js）。</p>
    `,
    'html': `
        <h1>HTML</h1>
        <p>HTML (HyperText Markup Language) 是一种标记语言，是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序等。可以理解成描述这个界面有什么东西。</p>

        <h2>创建HTML文件</h2>
        <p>首先要让系统能显示每个文件的文件扩展名，例如Windows 10系统，就把“此电脑”界面上面的“查看”中的“文件扩展名”选项勾选上。<strong>这很重要，否则创建出来实际是文本文件 (.txt)或其他类型。</strong></p>
        <p>然后在方便找到的地方，右键新建一个文本文件，然后重命名，把后面的“.txt”改成“.html”，文件会变成浏览器的图标，然后右键文件->打开方式->记事本 (或VS Code等)，就可以开始写代码了。双击文件可以查看效果。</p>
        <strong>修改扩展名时，系统可能会提示“如果改变文件扩展名，可能会导致文件不可用”，直接点“是”。</strong>

        <h2>基本代码结构</h2>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;标题&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    这里写界面内容
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code>：声明这是 HTML5</li>
            <li><code>&lt;head&gt;</code>：给浏览器看的，不显示</li>
            <li><code>&lt;body&gt;</code>：给用户看的，显示在页面上</li>
        </ul>

        <h2>常用标签</h2>
        <p>建议读者复制以下代码到HTML文件中查看效果。</p>

        <h3>标题</h3>
        <pre><code>&lt;h1&gt;一级标题&lt;/h1&gt;
&lt;h2&gt;二级标题&lt;/h2&gt;
&lt;h3&gt;三级标题&lt;/h3&gt;
&lt;h4&gt;四级标题&lt;/h4&gt;
&lt;h5&gt;五级标题&lt;/h5&gt;
&lt;h6&gt;六级标题&lt;/h6&gt;</code></pre>
        <p>数字越小，标题就越大，一共有六级，从h1到h6。</p>

        <h3>段落</h3>
        <p>段落能显示一段文字，网页内显示文字很常用。</p>
        <pre><code>&lt;p&gt;内容&lt;/p&gt;</code></pre>
        <p>注意：在HTML里直接按enter键换行在界面内不一定能真正换行，要用 <code>&lt;br&gt;</code> 或新的 <code>&lt;p&gt;</code>。</p>

        <h3>换行</h3>
        <pre><code>&lt;br&gt;</code></pre>
        <p>强制换行，不需要结束标签。</p>

        <h3>分割线</h3>
        <pre><code>&lt;hr&gt;</code></pre>
        <p>画一条水平线，不需要结束标签。</p>

        <h3>加粗和斜体</h3>
        <pre><code>&lt;strong&gt;加粗&lt;/strong&gt;
&lt;em&gt;斜体&lt;/em&gt;</code></pre>
        <p><code>&lt;strong&gt;</code> 加粗，<code>&lt;em&gt;</code> 斜体。</p>

        <h3>链接</h3>
        <p>点击后能跳转到另一个网页。</p>
        <pre><code>&lt;a href="网址"&gt;描述&lt;/a&gt;</code></pre>

        <h3>图片</h3>
        <p>在页面里显示一张图片</p>
        <pre><code>&lt;img src="图片路径" alt="图片描述"&gt;</code></pre>
        <p>常用属性：</p>
        <ul>
            <li><code>src</code>：图片路径</li>
            <li><code>alt</code>：加载失败时的文字</li>
            <li><code>width</code>：宽度</li>
            <li><code>height</code>：高度</li>
        </ul>

        <h3>列表</h3>
        <p>把内容排成一项一项。</p>
        <p><strong>无序列表</strong>，前面是小圆点：</p>
        <pre><code>&lt;ul&gt;
&lt;li&gt;第一项&lt;/li&gt;
&lt;li&gt;第二项&lt;/li&gt;
&lt;li&gt;第三项&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        <p><strong>有序列表</strong>，前面是数字：</p>
        <pre><code>&lt;ol&gt;
&lt;li&gt;第一项&lt;/li&gt;
&lt;li&gt;第二项&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        <p><code>&lt;ul&gt;</code> 是无序列表，<code>&lt;ol&gt;</code> 是有序列表，<code>&lt;li&gt;</code> 是列表项。</p>

        <h3>块和行内</h3>
        <p>HTML 的元素分两类：块级元素和行内元素。</p>
        <p><strong>块级元素</strong>：独占一行。界面制作卡片（如登录页面）时常用</p>
        <pre><code>&lt;div&gt;这是一个块&lt;/div&gt;
&lt;div&gt;这是另一个块&lt;/div&gt;</code></pre>
        <p>两个 <code>&lt;div&gt;</code> 会各占一行。</p>
        <p><strong>行内元素</strong>：不换行，跟文字排在一起。</p>
        <pre><code>&lt;span&gt;行内1&lt;/span&gt;
&lt;span&gt;行内2&lt;/span&gt;</code></pre>
        <p>两个 <code>&lt;span&gt;</code> 会挨在一起显示。</p>

        <h3>注释</h3>
        <p>注释不会显示在页面上，用来给自己或别人看。</p>
        <pre><code>&lt;!-- 这是一段注释 --&gt;</code></pre>
        <p>可以写在任何地方，浏览器会忽略。</p>

        <h3>表格</h3>
        <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;姓名&lt;/th&gt;
        &lt;th&gt;分数&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;A&lt;/td&gt;
        &lt;td&gt;90&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        <p><code>&lt;table&gt;</code> 是表格，<code>&lt;tr&gt;</code> 是一行，<code>&lt;th&gt;</code> 是表头，<code>&lt;td&gt;</code> 是单元格。</p>
        <p><code>&lt;th&gt;</code> 是表头，默认加粗居中；<code>&lt;td&gt;</code> 是普通单元格。</p>

        <h3>表单</h3>
        <p>表单用来让用户输入内容。</p>
        <pre><code>&lt;form&gt;
    &lt;input type="text" placeholder="用户名"&gt;
    &lt;input type="password" placeholder="密码"&gt;
    &lt;button&gt;登录&lt;/button&gt;
&lt;/form&gt;</code></pre>
        <p><code>&lt;form&gt;</code> 是表单，<code>&lt;input&gt;</code> 是输入框，<code>&lt;button&gt;</code> 是按钮。</p>
        <p><code>type</code> 决定输入框类型：<code>text</code> 是文本，<code>password</code> 是密码。</p>

        <h3>更多表单控件</h3>
        <p>下拉框：</p>
        <pre><code>&lt;select&gt;
   &lt;option&gt;选项1&lt;/option&gt;
   &lt;option&gt;选项2&lt;/option&gt;
&lt;/select&gt;</code></pre>
        <p>多行文本：</p>
        <pre><code>&lt;textarea rows="4" cols="30"&gt;&lt;/textarea&gt;</code></pre>
        <p>表单标签：</p>
        <pre><code>&lt;label&gt;用户名&lt;/label&gt;
&lt;input type="text"&gt;</code></pre>
        <p><code>&lt;label&gt;</code> 用来给输入框加说明。</p>

        <h3>更多表单属性</h3>
        <pre><code>&lt;input type="text" placeholder="请输入" value="默认值" disabled&gt;</code></pre>
        <ul>
            <li><code>placeholder</code>：输入框里的提示文字</li>
            <li><code>value</code>：默认值</li>
            <li><code>disabled</code>：禁用</li>
            <li><code>required</code>：必填</li>
        </ul>
        <p><code>&lt;button&gt;</code> 的 <code>type</code>：</p>
        <pre><code>&lt;button type="submit"&gt;提交&lt;/button&gt;
&lt;button type="button"&gt;普通按钮&lt;/button&gt;
&lt;button type="reset"&gt;重置&lt;/button&gt;</code></pre>

        <h3>标签属性</h3>
        <p>属性写在开始标签里，用来给标签补充信息。</p>
        <pre><code>&lt;a href="网址"&gt;链接&lt;/a&gt;
&lt;img src="图片" alt="描述"&gt;
&lt;div class="box" id="main"&gt;内容&lt;/div&gt;</code></pre>
        <p>两个最常用的属性：</p>
        <ul>
            <li><code>class</code>：类名，可以重复，用来给多个元素加同样的样式</li>
            <li><code>id</code>：唯一标识，一个页面里不能重复</li>
        </ul>
    `,
    'css': `
        <h1>CSS</h1>
        <p>CSS（Cascading Style Sheets，层叠样式表）用来控制网页长什么样。</p>

        <h2>如何使用CSS</h2>
        <p><strong>方式一：写在 HTML 里</strong></p>
        <pre><code>&lt;style&gt;
    p {
       color: red;
    }
&lt;/style&gt;</code></pre>
        <p><strong>方式二：单独一个 .css 文件</strong></p>
        <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
        <p>写在 <code>&lt;head&gt;</code> 里。</p>
        <p><strong>方式三：直接写在标签上</strong>（不推荐）</p>
        <pre><code>&lt;p style="color: red;"&gt;红色文字&lt;/p&gt;</code></pre>

        <h2>选择器</h2>
        <p>选择器决定“样式作用在谁身上”。</p>
        <pre><code>p { }           /* 所有 p 标签 */
.class { }      /* class="class" 的元素 */
#id { }         /* id="id" 的元素 */
div p { }       /* div 里面的所有 p */</code></pre>
        <p>最常用的是类选择器和标签选择器。</p>

        <h3>选择器的组合</h3>
        <pre><code>div p { }    /* div 里面的所有 p（包括孙子） */
div &gt; p { }  /* div 的直接子元素 p（只有儿子） */
p.a { }      /* class 是 a 的 p */
#id p { }    /* id 是 id 的元素里面的 p */</code></pre>
        <p>空格表示“里面所有”，<code>&gt;</code> 表示“直接子元素”。</p>

        <h2>常用属性</h2>
        <p>属性写在选择器里，决定“长什么样”。</p>

        <h3>文字</h3>
        <pre><code>color: red;              /* 文字颜色 */
font-size: 16px;         /* 字号 */
font-weight: bold;       /* 加粗 */
font-family: Arial;      /* 字体 */
text-align: center;      /* 对齐 */
line-height: 1.5;        /* 行高 (每行文字的高度)*/</code></pre>
        <p><code>text-align</code> 常用值：</p>
        <ul>
            <li><code>left</code>：左对齐（默认）</li>
            <li><code>center</code>：居中</li>
            <li><code>right</code>：右对齐</li>
        </ul>
        <p><code>font-weight</code> 常用值：</p>
        <ul>
            <li><code>normal</code>：正常</li>
            <li><code>bold</code>：加粗</li>
            <li><code>100</code>~<code>900</code>：数字越大越粗</li>
        </ul>

        <h4>颜色的写法</h4>
        <h5>1. 颜色名</h5>
        <pre><code>color: red;
color: blue;
color: green;
color: black;
color: white;</code></pre>
        <h5>2. 十六进制</h5>
        <pre><code>color: #ff0000;   /* 红 */
color: #00ff00;   /* 绿 */
color: #0000ff;   /* 蓝 */
color: #ffffff;   /* 白 */
color: #000000;   /* 黑 */
color: #f5f5f5;   /* 浅灰 */</code></pre>
        <h5>3. rgb</h5>
        <pre><code>color: rgb(255, 0, 0);      /* 红 */
color: rgb(0, 255, 0);      /* 绿 */
color: rgb(0, 0, 255);      /* 蓝 */
color: rgba(255, 0, 0, 0.5); /* 半透明红 */</code></pre>
        <p>三个数分别是红、绿、蓝，范围 <code>0</code> 到 <code>255</code>。</p>
        <p><code>rgba</code> 多一个值，是透明度，<code>0</code> 全透明，<code>1</code> 不透明。</p>
        <p><code>#</code> 后面跟 6 位，每两位表示红、绿、蓝，范围 <code>00</code> 到 <code>ff</code>。</p>
        <p>可以简写：<code>#ff0000</code> 写成 <code>#f00</code>。</p>

        <h3>背景</h3>
        <pre><code>background: #f5f5f5;         /* 背景色 */
background-image: url(...);  /* 背景图 */</code></pre>

        <h3>大小</h3>
        <pre><code>width: 200px;            /* 宽度 */
height: 100px;           /* 高度 */
max-width: 900px;        /* 最大宽度 */</code></pre>

        <h3>间距</h3>
        <pre><code>margin: 10px;            /* 外边距 (元素和其他元素之间的距离)*/
padding: 10px;           /* 内边距 (元素边框和内容之间的距离)*/</code></pre>
        <p><code>margin</code> 和 <code>padding</code> 可以分开写四个方向：</p>
        <pre><code>margin-top: 10px;      /* 上 */
margin-right: 10px;    /* 右 */
margin-bottom: 10px;   /* 下 */
margin-left: 10px;     /* 左 */

/* 或者简写 */
margin: 10px;           /* 四个方向都是 10px */
margin: 10px 20px;      /* 上下 10px，左右 20px */
margin: 10px 20px 30px 40px;  /* 上右下左 */</code></pre>
        <p><code>padding</code> 同理。</p>

        <h3>边框</h3>
        <pre><code>border: 1px solid black;     /* 边框 */
border-radius: 6px;          /* 圆角 */</code></pre>
        <p><code>border</code> 的样式：</p>
        <ul>
            <li><code>solid</code>：实线</li>
            <li><code>dashed</code>：虚线</li>
            <li><code>dotted</code>：点线</li>
            <li><code>none</code>：无边框</li>
        </ul>

        <h3>显示与布局</h3>
        <pre><code>display: flex;           /* Flex 布局 */
display: block;          /* 块 */
display: inline;         /* 行内 */
display: none;           /* 隐藏 */</code></pre>

        <h3>定位</h3>
        <pre><code>position: absolute;      /* 绝对定位 */
position: relative;      /* 相对定位 */
position: fixed;         /* 固定定位 */
top: 0;                  /* 上 */
left: 0;                 /* 左 */</code></pre>
        <p><code>position</code> 三种值的区别：</p>
        <ul>
            <li><code>absolute</code>：绝对定位，相对最近的定位祖先</li>
            <li><code>relative</code>：相对定位，相对自己原来的位置</li>
            <li><code>fixed</code>：固定定位，相对浏览器窗口，滚动时不动</li>
        </ul>
        <p>还有 <code>top</code>、<code>right</code>、<code>bottom</code>、<code>left</code> 四个方向。</p>

        <h3>其他</h3>
        <pre><code>opacity: 0.5;            /* 透明度 */
cursor: pointer;         /* 鼠标样式 */
overflow: hidden;        /* 溢出隐藏 */</code></pre>
    `,
    'js': `
        <h1>JS</h1>
        <p>HTML和CSS只能显示界面，但JavaScript (JS)能让网页真正能做事情。</p>

        <h2>如何使用JS</h2>
        <p><strong>方式一：写在 HTML 里</strong></p>
        <pre><code>&lt;script&gt;
    //代码
&lt;/script&gt;</code></pre>
        <p><strong>方式二：单独一个 .js 文件</strong></p>
        <pre><code>&lt;script src="script.js"&gt;&lt;/script&gt;</code></pre>
        <p>一般写在 <code>&lt;/body&gt;</code> 前面。</p>

        <h2>变量</h2>
        <p>变量用来存数据。</p>
        <pre><code>let x = 10;         // 数字
let s = "hello";    // 字符串
let b = true;       // 布尔
let arr = [1,2,3];  // 数组
let obj = {a:1};    // 对象
const PI=3.14; //常量</code></pre>
        <p><code>let</code> 声明变量，<code>const</code> 声明常量（不能改）。</p>
        <p>还有 <code>var</code>，是旧写法，现在一般不用，改用 <code>let</code> 和 <code>const</code>。</p>

        <h2>函数</h2>
        <p>函数把一段代码打包，可以重复用。</p>
        <pre><code>function add(a, b) {
    return a + b;
}
add(1, 2);  // 返回 3</code></pre>
        <p><code>function</code> 定义函数，<code>return</code> 返回结果。</p>

        <h2>条件判断</h2>
        <p>根据条件，执行不同的代码。</p>
        <pre><code>if (x &gt; 10) {
    console.log('大于 10');
} else if (x &gt; 5) {
    console.log('大于 5');
} else {
    console.log('小于等于 5');
}</code></pre>

        <h2>循环</h2>
        <p>重复执行一段代码。</p>
        <pre><code>//for循环
for (let i = 0; i &lt; 5; i++) {
    console.log(i);  // 0 1 2 3 4
}
//while循环
let i = 0;
while (i &lt; 5) {
    console.log(i);
    i++;
}
</code></pre>
        <p><code>for</code> 的三个部分：初始值、条件、每次执行后的操作。</p>

        <h2>DOM 操作</h2>
        <p>用 JS 改变页面内容。</p>
        <pre><code>document.getElementById('id');  //按ID找
document.querySelector('.class'); //按选择器找
element.textContent = '新内容'; //改文字
element.innerHTML = '&lt;b&gt;加粗&lt;/b&gt;'; //改HTML</code></pre>
        <p><code>document</code> 是整个页面，<code>getElementById</code> 按 id 找元素。</p>
        <p><code>querySelector</code> 和 <code>querySelectorAll</code>：</p>
        <ul>
            <li><code>querySelector</code>：返回第一个匹配的元素</li>
            <li><code>querySelectorAll</code>：返回所有匹配的元素（一个列表）</li>
        </ul>
        <p><code>textContent</code> 和 <code>innerHTML</code>：</p>
        <ul>
            <li><code>textContent</code>：只改文字，HTML 标签会当普通文字显示</li>
            <li><code>innerHTML</code>：改 HTML，标签会被解析</li>
        </ul>

        <h2>事件</h2>
        <p>用户做了什么，就触发什么。</p>
        <pre><code>element.addEventListener('click', () => {
    console.log('点击了');
});</code></pre>
        <p><code>addEventListener</code> 监听事件，<code>click</code> 是点击。</p>
        <p><code>addEventListener</code> 三个参数：</p>
        <pre><code>element.addEventListener('事件名', 函数, 是否捕获)</code></pre>
        <ul>
            <li>事件名：如 <code>click</code>、<code>keydown</code></li>
            <li>函数：触发时执行</li>
            <li>是否捕获：一般省略，默认 <code>false</code></li>
        </ul>

        <h2>提示框</h2>
        <p>JS 有三种自带的提示框。</p>
        <p><strong>1. alert</strong>：弹出提示，只有一个确定按钮。</p>
        <pre><code>alert('你好');</code></pre>
        <p><strong>2. confirm</strong>：弹出确认，有确定和取消。</p>
        <pre><code>confirm('确定吗？');  // 返回 true 或 false</code></pre>
        <p><strong>3. prompt</strong>：弹出输入框，让用户输入。</p>
        <pre><code>prompt('请输入名字');  // 返回输入的内容</code></pre>
    `,
    'flask': `
        <h1>Flask</h1>
        <p>如果写的网站没有注册、登录这些功能，可以忽略Flask这个部分。</p>
        <p>Flask是Python的Web框架，用来写网站的后端。</p>
        <p>比如要登录一个网站，前端把用户名和密码发给后端，后端验证告诉前端有没有登录成功。</p>
        <strong>安装Flask前要确保安装了Python，然后运行<code>pip install flask</code>。</strong>

        <h2>最小应用</h2>
        <pre><code>from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello'

if __name__ == '__main__':
    app.run()</code></pre>
        <p>运行后，浏览器打开 <code>http://127.0.0.1:5000</code>，就能看到 Hello。</p>
        <p>如果要想让别人在局域网内访问，要把代码改成<code>app.run(host='0.0.0.0',port=端口号)</code>，把程序运行时出现的除了<code>http://127.0.0.1:端口号</code>的另一个网址告诉别人，就能访问了。</p>

        <h2>路由</h2>
        <p>路由决定“访问哪个网址，执行哪个函数”。</p>
        <pre><code>@app.route('/')
def index():
    return '首页'

@app.route('/about')
def about():
    return '关于'</code></pre>
        <p>访问 <code>/</code> 执行 <code>index()</code>，访问 <code>/about</code> 执行 <code>about()</code>。</p>
        <p><code>methods</code> 可以限制请求方式：</p>
        <pre><code>@app.route('/login', methods=['POST'])
def login():
    ...</code></pre>
        <p>不写 <code>methods</code> 默认只允许 GET。</p>

        <h2>模板</h2>
        <p>返回 HTML 页面，用 <code>render_template</code>。</p>
        <pre><code>from flask import render_template

@app.route('/')
def index():
    return render_template('index.html', name='jj')</code></pre>
        <p>模板要放在项目文件夹下的 <code>templates/</code> 文件夹里，<strong>必须是这个名称</strong>。</p>
        <p>模板里用 <code>{{ }}</code> 显示变量：</p>
        <pre><code>&lt;h1&gt;欢迎，{{ name }}&lt;/h1&gt;</code></pre>

        <h2>表单</h2>
        <p>接收用户输入，用 <code>request</code>。</p>
        <pre><code>from flask import request

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        return f'欢迎，{name}'
    return render_template('login.html')</code></pre>
        <p><code>methods</code> 要写 <code>['GET', 'POST']</code>，才能接收表单。</p>
        <p><code>request.form</code> 是 POST 数据，<code>request.args</code> 是 GET 参数：</p>
        <pre><code>name = request.form['name']   # POST
page = request.args.get('page', '1')   # GET</code></pre>

        <h2>数据库</h2>
        <p>数据库用来长期保存数据。比如用户注册后，账号密码要存起来，下次登录时能查到。</p>
        <p>Python 自带 <code>sqlite3</code>，不用安装，直接导入就能用。</p>

        <h3>第一步：连接数据库</h3>
        <pre><code>import sqlite3

conn = sqlite3.connect('data.db')
cur = conn.cursor()</code></pre>
        <p><code>connect('data.db')</code>：打开一个叫 <code>data.db</code> 的数据库文件。如果文件不存在，会自动创建一个。</p>
        <p><code>conn.cursor()</code>：创建一个游标。<strong>游标是用来执行 SQL 语句的工具</strong>，你可以理解成“笔”，用它来写 SQL。</p>

        <h3>第二步：创建表</h3>
        <p>数据库里数据存在“表”里，表要先建好。</p>
        <pre><code>cur.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        score INTEGER
    )
''')
conn.commit()</code></pre>
        <p>逐句解释：</p>
        <ul>
            <li><code>CREATE TABLE</code>：创建表</li>
            <li><code>IF NOT EXISTS</code>：如果表已经存在，就不重复创建（避免报错）</li>
            <li><code>users</code>：表名，叫“users”</li>
            <li><code>id INTEGER PRIMARY KEY AUTOINCREMENT</code>：id 是整数，是主键，会自动增加（1、2、3……）</li>
            <li><code>name TEXT</code>：name 是文本（字符串）</li>
            <li><code>score INTEGER</code>：score 是整数</li>
            <li><code>conn.commit()</code>：<strong>保存改动</strong>。不写这句，改动不会生效</li>
        </ul>

        <h3>第三步：插入数据</h3>
        <pre><code>cur.execute('INSERT INTO users (name, score) VALUES (?, ?)', ('jj', 90))
conn.commit()</code></pre>
        <p>逐句解释：</p>
        <ul>
            <li><code>INSERT INTO users</code>：往 users 表里插入</li>
            <li><code>(name, score)</code>：要填的字段</li>
            <li><code>VALUES (?, ?)</code>：两个 <code>?</code> 是占位符，等会填</li>
            <li><code>('jj', 90)</code>：把 <code>?</code> 替换成这两个值</li>
            <li><code>conn.commit()</code>：保存</li>
        </ul>
        <p>用?是为了防止 SQL 注入。</p>

        <h3>第四步：查询数据</h3>
        <pre><code>cur.execute('SELECT * FROM users')
rows = cur.fetchall()
for row in rows:
    print(row)</code></pre>
        <p>逐句解释：</p>
        <ul>
            <li><code>SELECT * FROM users</code>：从 users 表里查出所有数据。<code>*</code> 表示“所有字段”</li>
            <li><code>cur.fetchall()</code>：把查到的所有结果取出来，存到 <code>rows</code> 里</li>
            <li><code>for row in rows</code>：一行一行打印</li>
        </ul>
        <p>查询还可以加条件：</p>
        <pre><code>cur.execute('SELECT * FROM users WHERE name = ?', ('jj',))
row = cur.fetchone()
print(row)</code></pre>
        <p><code>WHERE name = ?</code>：只查 name 是 jj 的那一行。<code>fetchone</code> 只取一条。</p>

        <h3>第五步：修改数据</h3>
        <pre><code>cur.execute('UPDATE users SET score = ? WHERE name = ?', (95, 'jj'))
conn.commit()</code></pre>
        <p>逐句解释：</p>
        <ul>
            <li><code>UPDATE users</code>：修改 users 表</li>
            <li><code>SET score = ?</code>：把 score 改成新值</li>
            <li><code>WHERE name = ?</code>：只改 name 是 jj 的那一行</li>
            <li><code>(95, 'jj')</code>：第一个 <code>?</code> 填 95，第二个 <code>?</code> 填 jj</li>
        </ul>

        <h3>第六步：删除数据</h3>
        <pre><code>cur.execute('DELETE FROM users WHERE name = ?', ('jj',))
conn.commit()</code></pre>
        <p>逐句解释：</p>
        <ul>
            <li><code>DELETE FROM users</code>：从 users 表里删除</li>
            <li><code>WHERE name = ?</code>：只删 name 是 jj 的那一行</li>
        </ul>
        <p><strong>注意</strong>：不写 <code>WHERE</code> 会删掉整张表的数据！</p>

        <h3>第七步：关闭连接</h3>
        <pre><code>conn.close()</code></pre>
        <p>用完数据库要关闭，释放资源。</p>
        <p>查询不用 <code>commit</code>，只有增、删、改才需要。</p>
    `,
    'three': `
        <h1>3D 游戏</h1>
        <p>用 Three.js 在网页里做 3D。</p>
        <p>Three.js 是一个 JavaScript 库，底层是 WebGL。</p>

        <h2>检查环境</h2>
        <p>使用Three.js前，要确保<a href="https://cdn.jsdelivr.net/">https://cdn.jsdelivr.net</a>能稳定访问，如果不能访问，可以尝试更换浏览器。</p>

        <h2>怎么引入</h2>
        <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"&gt;&lt;/script&gt;</code></pre>
        <p>写在 HTML 里，之后就能用 <code>THREE</code> 这个对象。</p>

        <h2>三步</h2>
        <p>任何 Three.js 程序都从这三步开始。</p>

        <h3>1. 场景</h3>
        <pre><code>const scene = new THREE.Scene();</code></pre>
        <p>场景是放东西的地方。</p>

        <h3>2. 相机</h3>
        <pre><code>const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);</code></pre>
        <p>相机决定“从哪里看”。四个参数：视野角度、宽高比、近裁剪面、远裁剪面。</p>
        <p><code>PerspectiveCamera</code> 四个参数：</p>
        <ul>
            <li>视野角度：常见 60~75</li>
            <li>宽高比：<code>window.innerWidth / window.innerHeight</code></li>
            <li>近裁剪面：比这个近的不显示，一般 0.1</li>
            <li>远裁剪面：比这个远的不显示，一般 1000</li>
        </ul>

        <h3>3. 渲染器</h3>
        <pre><code>const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);</code></pre>
        <p>渲染器把场景画到页面上。</p>

        <h2>渲染循环</h2>
        <p>每帧重画一次，画面才会动。</p>
        <pre><code>function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();</code></pre>
        <p><code>requestAnimationFrame</code> 让浏览器每秒调用约 60 次。</p>

        <h2>加一个方块</h2>
        <pre><code>const geo = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshLambertMaterial({ color: 0x44dd44 });
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);</code></pre>
        <h3>BoxGeometry 的参数</h3>
        <pre><code>new THREE.BoxGeometry(宽, 高, 深)</code></pre>
        <ul>
            <li><code>宽</code>：x 方向长度</li>
            <li><code>高</code>：y 方向长度</li>
            <li><code>深</code>：z 方向长度</li>
        </ul>
        <h3>MeshLambertMaterial 的参数</h3>
        <pre><code>new THREE.MeshLambertMaterial({ color: 0x44dd44 })</code></pre>
        <ul>
            <li><code>color</code>：颜色，用十六进制，<code>0x</code> 开头</li>
        </ul>
        <h3>其他常用材质</h3>
        <pre><code>new THREE.MeshBasicMaterial({ color: 0xff0000 })   // 不受光照
new THREE.MeshPhongMaterial({ color: 0x00ff00 })   // 有高光</code></pre>
        <ul>
            <li><code>MeshBasicMaterial</code>：不受光照影响，颜色固定</li>
            <li><code>MeshLambertMaterial</code>：受光照影响，有明暗</li>
            <li><code>MeshPhongMaterial</code>：受光照影响，还有高光</li>
        </ul>
        <h3>mesh 的位置和旋转</h3>
        <pre><code>mesh.position.set(x, y, z);   // 位置
mesh.rotation.x = 0.5;         // 绕 x 轴旋转
mesh.rotation.y = 0.5;         // 绕 y 轴旋转
mesh.scale.set(2, 2, 2);       // 缩放</code></pre>
        <p><code>mesh.scale.set(2,2,2)</code>：把方块放大 2 倍。</p>

        <h2>光照</h2>
        <p>没有光，方块是黑的。</p>
        <h3>环境光</h3>
        <pre><code>const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);</code></pre>
        <p><code>AmbientLight(颜色, 强度)</code>：环境光，照亮所有地方，没有方向。</p>
        <h3>方向光</h3>
        <pre><code>const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);</code></pre>
        <p><code>DirectionalLight(颜色, 强度)</code>：方向光，像太阳，从一个方向照过来。</p>
        <p>强度范围 <code>0</code> 到 <code>1</code>，<code>0</code> 全黑，<code>1</code> 最亮。</p>

        <h2>相机控制</h2>
        <p>让相机能移动、转视角。</p>
        <h3>键盘移动</h3>
        <pre><code>const keys = {};
document.addEventListener('keydown', e => keys[e.code] = true);
document.addEventListener('keyup', e => keys[e.code] = false);

function updateCamera() {
    if (keys['KeyW']) camera.position.z -= 0.1;
    if (keys['KeyS']) camera.position.z += 0.1;
    if (keys['KeyA']) camera.position.x -= 0.1;
    if (keys['KeyD']) camera.position.x += 0.1;
}</code></pre>
        <h3>鼠标转视角</h3>
        <pre><code>let yaw = 0, pitch = 0;

document.addEventListener('mousemove', e => {
    if (!isLocked) return;
    yaw -= e.movementX * 0.002;
    pitch -= e.movementY * 0.002;
    pitch = Math.max(-1.5, Math.min(1.5, pitch));
});</code></pre>
        <h3>指针锁定</h3>
        <pre><code>canvas.addEventListener('click', () => {
    canvas.requestPointerLock();
});

document.addEventListener('pointerlockchange', () => {
    isLocked = document.pointerLockElement === canvas;
});</code></pre>

        <h2>纹理</h2>
        <p>给方块贴图，让方块不是纯色。</p>
        <pre><code>const texture = new THREE.TextureLoader().load('texture.png');
const mat = new THREE.MeshLambertMaterial({ map: texture });</code></pre>
        <p><code>TextureLoader</code> 加载图片，<code>map</code> 把图片贴到材质上。</p>
        <p>图片可以自己画，也可以从网上下载，放在项目文件夹里。</p>

        <h2>文字的纹理</h2>
        <p>Three.js 不能直接显示文字，但可以用 Canvas 画好，再当纹理贴上去。</p>
        <pre><code>const canvas = document.createElement('canvas');
canvas.width = 256;
canvas.height = 128;
const ctx = canvas.getContext('2d');

// 背景
ctx.fillStyle = '#1a3a1a';
ctx.fillRect(0, 0, 256, 128);

// 文字
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 40px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('你好', 128, 75);

// 转成纹理
const texture = new THREE.CanvasTexture(canvas);

// 贴到材质上
const mat = new THREE.MeshBasicMaterial({ map: texture });
const geo = new THREE.PlaneGeometry(2, 1);
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);</code></pre>
        <h3>纹理重复</h3>
        <pre><code>texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2, 2);</code></pre>
        <p><code>repeat.set(2, 2)</code>：图片在横竖方向各重复 2 次。</p>

        <h2>碰撞</h2>
        <p>让玩家不能穿墙。</p>
        <pre><code>function canMoveTo(x, z) {
    // 检查目标位置有没有方块
    for (let box of boxes) {
        if (Math.abs(x - box.x) &lt; 1 && Math.abs(z - box.z) &lt; 1) {
            return false;
        }
    }
    return true;
}</code></pre>
        <p>移动前先判断，能走才走：</p>
        <pre><code>if (keys['KeyW'] &amp;&amp; canMoveTo(camera.position.x, camera.position.z - 0.1)) {
    camera.position.z -= 0.1;
}</code></pre>
        <p><code>boxes</code> 是你所有方块的数组，自己定义：</p>
        <pre><code>const boxes = [
    { x: 0, z: 0 },
    { x: 2, z: 0 }
];</code></pre>

        <h2>准星</h2>
        <p>屏幕中心画一个十字，用来瞄准。</p>
        <p>用 HTML + CSS 画就行，不用 Three.js。</p>
        <pre><code>&lt;div id="crosshair"&gt;&lt;/div&gt;</code></pre>
        <pre><code>#crosshair {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    pointer-events: none;
}</code></pre>
        <p><code>pointer-events: none</code>：让准星不挡鼠标点击。</p>

        <h2>代码怎么组织</h2>
        <p>所有代码写在一个 <code>&lt;script&gt;</code> 里，顺序是：</p>
        <ol>
            <li>场景</li>
            <li>相机</li>
            <li>渲染器</li>
            <li>光照</li>
            <li>方块</li>
            <li>键盘、鼠标事件</li>
            <li>渲染循环</li>
        </ol>
        <p>事件监听写在前面，渲染循环写在最后。</p>
    `,
    'qt': `
        <h2>Markdown + 公式</h2>
        <p>Markdown 是一种写文档的语法，比 HTML 简单。公式用 LaTeX。</p>
        <p>如果想在网页里显示 Markdown，可以用 <code>marked.js</code>：</p>
        <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
    document.getElementById('content').innerHTML = marked.parse('# 标题');
&lt;/script&gt;</code></pre>
        <p>公式用 <code>KaTeX</code> 或 <code>MathJax</code>。</p>

        <h2>页面切换</h2>
        <p>用 JS 控制显示哪个页面。</p>
        <p>先定义所有页面：</p>
        <pre><code>const pages = {
    'home': '&lt;h1&gt;主页&lt;/h1&gt;',
    'html': '&lt;h1&gt;HTML&lt;/h1&gt;',
    'css':  '&lt;h1&gt;CSS&lt;/h1&gt;'
};</code></pre>
        <p>然后写切换函数：</p>
        <pre><code>function showPage(id) {
    document.getElementById('content').innerHTML = pages[id];
}</code></pre>
        <p>最后绑定点击：</p>
        <pre><code>document.querySelectorAll('a[data-page]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        showPage(a.dataset.page);
    });
});</code></pre>

        <h2>部署到 GitHub Pages</h2>
        <p>把文件上传到 GitHub 仓库，然后在设置里开启 Pages。</p>
        <ol>
            <li>新建 GitHub 仓库</li>
            <li>把 HTML、CSS、JS 推上去</li>
            <li>仓库 Settings → Pages</li>
            <li>Source 选 <code>main</code> 分支，点 Save</li>
            <li>等几分钟，访问 <code>用户名.github.io/仓库名</code></li>
        </ol>
        <p>纯前端项目不需要后端，直接就能跑。</p>
    `
};

// ── 切换页面 ──
function showPage(pageId) {
    const content = document.getElementById('content');
    content.innerHTML = pages[pageId] || '<h1>404</h1><p>没有这个页面。</p>';

    document.querySelectorAll('#navbar nav a').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === pageId) {
            a.classList.add('active');
        }
    });
}

// ── 绑定点击 ──
document.querySelectorAll('#navbar nav a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(a.dataset.page);
    });
});

// ── 初始显示主页 ──
showPage('home');