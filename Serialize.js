import serialize from 'serialize-javascript'

/**
 * 序列化和反序列化类
 * @stj
 */
export default class Serialize {
  /**
   * 序列化方法
   * 使用方法参见 https://www.npmjs.com/package/serialize-javascript
   */
  static serialize = serialize
  
  /**
   * 反序列化
   * @param {String} serializedJavascript 
   */
  static deserialize(serializedJavascript) {
    return eval('(' + serializedJavascript + ')')
  }


}