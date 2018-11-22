// soa(3)
// soa('')
// soa({a:1})
// soa([])
// soa([3])
// soa([[2]])
// soa([{}])
// soa([{name:'a', num:1},{name:'b', num:2}], 'addr')

// soa([{name:'a', num:1},{name:'b', num:2}], {num:1})
// soa([{name:'a', num:1},{name:'b', num:2}], 4)
// soa([{name:'a', num:1},{name:'b', num:2}], ['num',''])
// soa([{name:'a', num:5},{name:'b', num:10},{name:'c', num:7}], 'num')
// var result0 = soa([{name:'a'},
//                         {name:'b', num:38},
//                         {name:'c', num:15},
//                         {name:'d', num:10},
//                         {name:'e', num:21}], 'num')
// var result1 = soa([{name:'d'},
//                         {name:'a', num:38},
//                         {name:'f', num:15},
//                         {name:'c', num:10},
//                         {name:'e', num:21}], 'name')
// var result1_2 = soa([{name:'d'},
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
// var result1_3 = soa(arg, [['name', true],['num']])
// console.log(arg)

// var result2 = soa([{name:'a'},{name:'b', num:21},{name:'c', num:10}], ['num'])
// soa([{name:'a', num:'abc'},{name:'b', num:10},{name:'c', num:21}], 'num')
// soa([{name:'a', num:1},{name:'b', num:2}], ['num'])
// soa([
//     {id:'cheese', level:'57', grade:'S+'},
//     {id:'panini', level:'',   grade:''},
//     {id:'ellabo', level:'99', grade:'C-'},
//     {id:'chantra',level:'91', grade:'A+'},
//     {id:'cws1340',level:'80', grade:'B'}
// ], 'level')

// var result3 = soa([
//     {id:'cheese', level:'57', grade:'S+'},
//     {id:'panini', level:'',   grade:''},
//     {id:'ellabo', level:'99', grade:'C-'},
//     {id:'chantra',level:'91', grade:'A+'},
//     {id:'cws1340',level:'80', grade:'B'}
// ], ['level', 'id'])
// console.log(result3)

// var result4 = soa([
//     {id:'cheese', level:'57', grade:'S+'},
//     {id:'panini', level:'80', grade:''},
//     {id:'ellabo', level:'99', grade:'C-'},
//     {id:'chantra',level:'91', grade:'A+'},
//     {id:'cws1340',level:'80', grade:'B'}
// ], [['level', true], 'id'])
// console.log(result4)

// var result5 = soa([
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
// var result6 = soa(students, [['grade'],['classroom'],['name'],['midScore',true]])
// console.log(result6)
// console.log(students) // result6 ���� �� �迭�� �߷�����???
// students = soa(students, [['grade',true],['finalScore',true],['midScore',true],['name'],['classroom']])
// console.log(soa(students, [['grade',true],['finalScore',true],['midScore',true],['name'],['classroom']]))
// var users = [
//     {num: 34, projectNum: 1, job:'dev', grade:'C'},
//     {num: 21, projectNum: 2, job:'pl',  grade:'A'},
//     {num: 15, projectNum: 1, job:'dsg', grade:'C'},
//     {num: 28, projectNum: 1, job:'mkt', grade:'A'},
//     {num: 9,  projectNum: 1, job:'dev', grade:'B'},
//     {num: 24, projectNum: 2, job:'pl',  grade:'B'},
//     {num: 12, projectNum: 1, job:'dsg', grade:'C'},
//     {num: 6,  projectNum: 1, job:'dev', grade:'A'},
//     {num: 3,  projectNum: 1, job:'mkt', grade:'C'},
//     {num: 18, projectNum: 1, job:'dsg', grade:'B'},
//     {num: 7,  projectNum: 4, job:'pm',  grade:'A'}
// ]
// console.log(soa(users, 'projectNum')) // ok
// console.log(soa(users, 'projectNum', true)) // ok
// console.log(soa(users, [['projectNum', true]])) // ok
// console.log(soa(users, 'projectNum', 'grade', 'job')) // error ok
// console.log(soa(users, ['projectNum', 'grade', 'job'])) // ok
// console.log(soa(users, [['projectNum', true], 'grade', 'job'])) // ok
// console.log(soa(users, [['projectNum', true], 'grade', ['job',true]])) // ok
// console.log(soa(users, [['projectNum', true], ['grade'], ['job',true]])) // ok

// console.log(soa(users, 'grade'))
// console.log(soa(users, 'grade', true))
// console.log(soa(users, ['projectNum', 'grade']))
// console.log(soa(users, ['projectNum', 'grade', 'num'], true))
// console.log(soa(users, [['projectNum', true], ['grade'], ['job', false]]))
// console.log(soa(users, [['projectNum', true], ['grade'], ['job', false]], true))

// var users = [
//     {num: 34, projectNum: 1, job:'dev', grade:'C'},
//     {num: 21, projectNum: 2, job:'pl',  grade:'A'},
//     {num: 15, projectNum: 1, job:'dsg', grade:'C'},
//     {num: 28, projectNum: 1, job:'mkt', grade:'A'},
//     {num: 9,  projectNum: 1, job:'dev', grade:'B'},
//     {num: 24, projectNum: 2, job:'pl',  grade:'B'},
//     {num: 12, projectNum: 1, job:'dsg', grade:'C'},
//     {num: 6,  projectNum: 1, job:'dev', grade:'A'},
//     {num: 3,  projectNum: 1, job:'mkt', grade:'C'},
//     {num: 18, projectNum: 1, job:'dsg', grade:'B'},
//     {num: 7,  projectNum: 4, job:'pm',  grade:'A'}
// ]
//
// soa(users, 'grade')
// soa(users, 'grade', true)
// soa(users, ['projectNum', 'grade'])
// soa(users, ['projectNum', 'grade', 'num'], true)
// soa(users, [['projectNum', true], ['grade'], ['job', false]])
// soa(users, [['projectNum', true], ['grade'], ['job', false]], true)
