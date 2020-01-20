# 頁籤功能+AngularJS抓json顯示

### Script語法
$(select)).tabs({key:value});
<pre>
<code>$('.menu').tabs({
    tabsToShow:2,
    tabsDefault:1,
    tabstype:1
});</code>
</pre>

### 圖片檔名設定
按鈕圖預設檔名路徑：images/btn0

按鈕初始圖:檔名 + {num}

按鈕hover圖:檔名 + {num} + _2

按鈕禁能圖:檔名 + {num} + _n
<pre>
<code>&lt;img src="images/btn01.png" /&gt;</code>
<code>&lt;img src="images/btn01_2.png" /&gt;</code>
<code>&lt;img src="images/btn01_n.png" /&gt;</code>
</pre>


### HTML加入頁籤對應ID
#### 單一頁籤時
id="Tab_Content + {num}"
<pre><code>&lt;div id="Tab_Content1"&gt;
    code...
&lt;/div&gt;</code></pre>

#### 多組頁籤時
id="Tab + {tabsName} + _Content + {num}"
<pre><code>&lt;div id="TabFirst_Content1"&gt;
    code...
&lt;/div&gt;</code></pre>


### 參數
<table>
    <tr>
        <td>屬性</td>
        <td>默認值</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>tabsName</td>
        <td>""</td>
        <td>多組頁籤時使用，單一時不需設定</td>
    </tr>
    <tr>
        <td>tabsToShow</td>
        <td>2</td>
        <td>頁籤數量設定</td>
    </tr>
    <tr>
        <td>tabsDefault</td>
        <td>1</td>
        <td>頁籤預設顯示設定</td>
    </tr>
    <tr>
        <td>tabsImgUrl</td>
        <td>images/btn0</td>
        <td>頁籤圖片路徑檔名。</td>
    </tr>
    <tr>
        <td>tabsImgType</td>
        <td>png</td>
        <td>頁籤按鈕圖副檔名</td>
    </tr>
    <tr>
        <td>tabstype</td>
        <td>1</td>
        <td>頁籤類型。1:圖片類型頁籤，點擊即顯示。</td>
    </tr>
    <tr>
        <td>tabparameter</td>
        <td>tabNum</td>
        <td>URL連結導到指定頁籤參數。</td>
    </tr>
    <tr>
        <td>tabsPageSize</td>
        <td>720</td>
        <td>手機畫面的最大尺寸。</td>
    </tr>
    <tr>
        <td>tabsIsAppImg</td>
        <td>false</td>
        <td>是否平台按鈕圖不一樣。</td>
    </tr>
    <tr>
        <td>tabsAppImgUrl</td>
        <td>images/app_btn0</td>
        <td>手機按鈕路徑檔名</td>
    </tr>
    <tr>
        <td>tabNonShow</td>
        <td>[ ]</td>
        <td>頁籤禁能設定</td>
    </tr>
</table>
