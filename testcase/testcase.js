// sortObjArr(3)
// sortObjArr('')
// sortObjArr({a:1})
// sortObjArr([])
// sortObjArr([3])
// sortObjArr([[2]])
// sortObjArr([{}])
// sortObjArr([{name:'a', num:1},{name:'b', num:2}], 'addr')

// sortObjArr([{name:'a', num:1},{name:'b', num:2}], {num:1})
// sortObjArr([{name:'a', num:1},{name:'b', num:2}], 4)
// sortObjArr([{name:'a', num:1},{name:'b', num:2}], ['num',''])
// sortObjArr([{name:'a', num:5},{name:'b', num:10},{name:'c', num:7}], 'num')
// var result0 = sortObjArr([{name:'a'},
//                         {name:'b', num:38},
//                         {name:'c', num:15},
//                         {name:'d', num:10},
//                         {name:'e', num:21}], 'num')
// var result1 = sortObjArr([{name:'d'},
//                         {name:'a', num:38},
//                         {name:'f', num:15},
//                         {name:'c', num:10},
//                         {name:'e', num:21}], 'name')
// var result1_2 = sortObjArr([{name:'d'},
//                         {name:'a', num:38},
//                         {name:'f', num:15},
//                         {name:'c', num:10},
//                         {name:'e', num:21}], ['name', true])

// var arg = [{name:'d', num:38},
//                         {name:'a', num:38},
//                         {name:'f', num:15},
//                         {name:'f', num:10},
//                         {name:'e', num:21}] // ����
// console.log(arg)
// var result1_3 = sortObjArr(arg, [['name', true],['num']])
// console.log(arg)

// var result2 = sortObjArr([{name:'a'},{name:'b', num:21},{name:'c', num:10}], ['num'])
// sortObjArr([{name:'a', num:'abc'},{name:'b', num:10},{name:'c', num:21}], 'num')
// sortObjArr([{name:'a', num:1},{name:'b', num:2}], ['num'])
// sortObjArr([
//     {id:'cheese', level:'57', grade:'S+'},
//     {id:'panini', level:'',   grade:''},
//     {id:'ellabo', level:'99', grade:'C-'},
//     {id:'chantra',level:'91', grade:'A+'},
//     {id:'cws1340',level:'80', grade:'B'}
// ], 'level')

// var result3 = sortObjArr([
//     {id:'cheese', level:'57', grade:'S+'},
//     {id:'panini', level:'',   grade:''},
//     {id:'ellabo', level:'99', grade:'C-'},
//     {id:'chantra',level:'91', grade:'A+'},
//     {id:'cws1340',level:'80', grade:'B'}
// ], ['level', 'id'])
// console.log(result3)

// var result4 = sortObjArr([
//     {id:'cheese', level:'57', grade:'S+'},
//     {id:'panini', level:'80', grade:''},
//     {id:'ellabo', level:'99', grade:'C-'},
//     {id:'chantra',level:'91', grade:'A+'},
//     {id:'cws1340',level:'80', grade:'B'}
// ], [['level', true], 'id'])
// console.log(result4)

// var result5 = sortObjArr([
//     {id:'cheese', level:24, grade:'S+'},
//     {id:'panini', level:7,  grade:'A'},
//     {id:'ellabo', level:99, grade:'C-'},
//     {id:'chantra',level:91, grade:'A+'},
//     {id:'dobi',   level:30, grade:'B'},
//     {id:'gpw',    level:7,  grade:'SSS+'},
//     {id:'cws1340',level:30, grade:'C+'},
//     {id:'cori',   level:15, grade:'B-'}
// ], [['level', true], 'id'])
// console.log(result5)
// var students = [
//     {grade:1, classroom:'b', name:'adios', midScore:10, finalScore:40},
//     {grade:1, classroom:'c', name:'tyler', midScore:50, finalScore:60},
//     {grade:2, classroom:'c', name:'harry', midScore:80, finalScore:80},
//     {grade:3, classroom:'a', name:'henry', midScore:34, finalScore:21},
//     {grade:1, classroom:'a', name:'ollaf', midScore:50, finalScore:50},
//     {grade:3, classroom:'b', name:'mulan', midScore:55, finalScore:99},
//     {grade:2, classroom:'b', name:'jenny', midScore:10, finalScore:40},
//     {grade:1, classroom:'b', name:'tommy', midScore:30, finalScore:30},
//     {grade:3, classroom:'c', name:'five5', midScore:75, finalScore:95},
//     {grade:3, classroom:'a', name:'jsonb', midScore:55, finalScore:57},
//     {grade:1, classroom:'c', name:'going', midScore:10, finalScore:40},
//     {grade:2, classroom:'a', name:'wanna', midScore:70, finalScore:60},
//     {grade:2, classroom:'c', name:'shean', midScore:70, finalScore:80},
//     {grade:1, classroom:'a', name:'score', midScore:50, finalScore:70},
//     {grade:1, classroom:'b', name:'tommy', midScore:90, finalScore:90},
//     {grade:2, classroom:'b', name:'jenny', midScore:20, finalScore:30},
//     {grade:2, classroom:'a', name:'emily', midScore:60, finalScore:60},
//     {grade:1, classroom:'c', name:'peter', midScore:0,  finalScore:100},
//     {grade:2, classroom:'c', name:'teddy', midScore:10, finalScore:40},
//     {grade:1, classroom:'a', name:'hello', midScore:60, finalScore:50},
//     {grade:3, classroom:'b', name:'acorn', midScore:80, finalScore:55},
//     {grade:4, classroom:'c', name:'24601', midScore:0,  finalScore:0}
// ]
// var result6 = sortObjArr(students, [['grade'],['classroom'],['name'],['midScore',true]])
// console.log(result6)
// console.log(students) // result6 ���� �� �迭�� �߷�����???
// students = sortObjArr(students, [['grade',true],['finalScore',true],['midScore',true],['name'],['classroom']])
// console.log(sortObjArr(students, [['grade',true],['finalScore',true],['midScore',true],['name'],['classroom']]))
// var users = [
//     {num: 34, id:'', projectNum: 1, job:'dev', grade:'C'},
//     {num: 21, id:'', projectNum: 2, job:'pl',  grade:'A'},
//     {num: 15, id:'', projectNum: 1, job:'dsg', grade:'C'},
//     {num: 28, id:'', projectNum: 1, job:'mkt', grade:'A'},
//     {num: 9,  id:'', projectNum: 1, job:'dev', grade:'B'},
//     {num: 24, id:'', projectNum: 2, job:'pl',  grade:'B'},
//     {num: 12, id:'', projectNum: 1, job:'dsg', grade:'C'},
//     {num: 6,  id:'', projectNum: 1, job:'dev', grade:'A'},
//     {num: 3,  id:'', projectNum: 1, job:'mkt', grade:'C'},
//     {num: 18, id:'', projectNum: 1, job:'dsg', grade:'B'},
//     {num: 7,  id:'', projectNum: 4, job:'pm',  grade:'A'}
// ]
// console.log(sortObjArr(users, 'projectNum')) // ok
// console.log(sortObjArr(users, 'projectNum', true)) // ok
// console.log(sortObjArr(users, [['projectNum', true]])) // ok
// console.log(sortObjArr(users, 'projectNum', 'grade', 'job')) // error ok
// console.log(sortObjArr(users, ['projectNum', 'grade', 'job'])) // ok
// console.log(sortObjArr(users, [['projectNum', true], 'grade', 'job'])) // ok
// console.log(sortObjArr(users, [['projectNum', true], 'grade', ['job',true]])) // ok
// console.log(sortObjArr(users, [['projectNum', true], ['grade'], ['job',true]])) // ok

// console.log(sortObjArr(users, 'grade'))
// console.log(sortObjArr(users, 'grade', true))
// console.log(sortObjArr(users, ['projectNum', 'grade']))
// console.log(sortObjArr(users, ['projectNum', 'grade', 'num'], true))
// console.log(sortObjArr(users, [['projectNum', true], ['grade'], ['job', false]]))
// console.log(sortObjArr(users, [['projectNum', true], ['grade'], ['job', false]], true))
