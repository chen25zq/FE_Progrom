/**
 * 思路：
 * 1. 判断当前对象的类型，根据类型来做不同处理
 * 2. 如果 typeof 不为 object，则说明是基本数据类型
 * 3. 为 object 时得判断不同类型情况：
 * 4. 比如使用 Array.isArray 来判断是否为数组类型，且这是判断是否为数组的唯一方式
 * 5. 是数组则 result 设置成一个新数组，遍历数组，往新数组中添加遍历的当前项
 * 6. 是null设置为null，是Date或者是 RegExp 类型，则设置为要拷贝的对象
 * 7. 如果都不符合则说明是 object 类型，则设置成一个新对象，遍历旧对象，将旧对象中元素往新对象中拷贝
 */
const deepClone = target => {
    let result;
    if (typeof target === 'object') {
        if (Array.isArray(target)) {
            result = []; // 数组类型，遍历数组，往新数组中添加
            for(let i in target) {
                result.push(deepClone(target[i]));
            }
        } else if (target === null) {
            result = null; // 当前对象为null，则直接赋值 
        } else if (target.constructor === Date || target.constructor === RegExp) {
            result = target; // 日期或者正则对象，则直接赋值
        } else {
            // 对象时，遍历对象，往新对象中拷贝
            result = {};
            for(let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
    } else {
        result = target; // 基本数据类型
    }
    return result;
}


const obj = {
    name: 'Chen',
    detail: {
        age: '18',
        height: '180',
        bodyWeight: '68'
    },
    hobby: ['see a film',  'write the code',  'play basketball', 'tourism'],
    dd: function() {
        console.log(name);
    }
}
const obj1 = deepClone(obj);
obj.hobby = []
console.log('obj1=====>', obj1);