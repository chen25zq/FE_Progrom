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