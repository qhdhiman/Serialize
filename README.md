# Serialize
## javascirpt 序列化、反序列化类
## 只做两件事情：
* 1, 序列化javascript对象 Serialize.serialize(obj, options)
* 2, 反序列化为javascript对象 Serialize.deserialize(str)

**如果觉得不好用，请转到原版地址：[serialize-javascript](https://www.npmjs.com/package/serialize-javascript)**

## 使用说明

``` node
npm install @stj/serialize --save
```

``` javascript
import Serialize from '@stj/serialize'

const obj = {
    str  : 'string',
    num  : 0,
    obj  : {foo: 'foo'},
    arr  : [1, 2, 3],
    bool : true,
    nil  : null,
    undef: undefined,
    date: new Date("Thu, 28 Apr 2016 22:02:17 GMT"),
    map: new Map([['hello', 'world']]),
    set: new Set([123, 456]),
 
    fn: function echo(arg) { return arg; },
    re: /([^\s]+)/g
}

let objStr = Serialize.serialize(obj) // 序列化
Serialize.serialize(obj, {space: 2}) // 序列化并带有格式化

Serialize.deserialize(objStr) // 返序列化


```
