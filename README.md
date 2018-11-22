# **soa**
<hr/>
#### sorting object array with keys  
####  **soa** is a small simple js library for sorting object array with it's key names
<hr/>


#### **usage**

> #### 1. include soa.js in your site
```<script src="soa.js"></script>```

> #### 2. call soa function with arguments
```
<script>
  soa(arr, key, isDesc(optional));
</script>
```

##### **arg1(arr) : array with object inside**
##### object array type;
###### e.g.
```[{num:1, name:'a'}, {num:2, name:'b'}, {num:3, name:'c'}]```

##### **arg2(keys) : a key or keys that you want to sort by; applied in order from left to right**
##### string or array type;
###### e.g.
```
'myKey'
// sorting with a single key

['key1', 'key2', 'key3']
// sorting with multiple keys

[['key1', isDesc1(customized sorting order for key1], 'key2', ['key3']]
// adjusting isDesc1 for sorting with key1
// & sorting with key2, key3 with default(or as you specify(arg3)) sorting order
// you can write keys inside the array in two ways like 'key2' or ['key3']
```

##### **arg3(isDesc) : default sorting order. (optional; default(false):asc, true:desc)**
##### boolean type
###### e.g.
```
true
false // you don't have to specify
```

> #### 3. samples
```
<script>
var users = [
    {num: 34, projectNum: 1, job:'dev', grade:'C'},
    {num: 21, projectNum: 2, job:'pl',  grade:'A'},
    {num: 15, projectNum: 1, job:'dsg', grade:'C'},
    {num: 28, projectNum: 1, job:'mkt', grade:'A'},
    {num: 9,  projectNum: 1, job:'dev', grade:'B'},
    {num: 24, projectNum: 2, job:'pl',  grade:'B'},
    {num: 12, projectNum: 1, job:'dsg', grade:'C'},
    {num: 6,  projectNum: 1, job:'dev', grade:'A'},
    {num: 3,  projectNum: 1, job:'mkt', grade:'C'},
    {num: 18, projectNum: 1, job:'dsg', grade:'B'},
    {num: 7,  projectNum: 4, job:'pm',  grade:'A'}
]
```
```
soa(users, 'grade')
// sort users by key 'grade' asc

soa(users, 'grade', true)
// sort users by key 'grade' desc

soa(users, ['projectNum', 'grade'])
// sort users by keys 'projectNum', 'grade' asc (sort by 'projectNum' first)

soa(users, ['projectNum', 'grade', 'num'], true)
// sort users by keys 'projectNum', 'grade', 'num' desc

soa(users, [['projectNum', true], ['grade'], ['job', false]])
// sort users by keys 'projectNum' desc, 'grade' asc, 'job' asc

soa(users, [['projectNum', true], ['grade'], ['job', false]], true)
// sort users by keys 'projectNum' desc, 'grade' desc, 'job' asc

</script>
```
