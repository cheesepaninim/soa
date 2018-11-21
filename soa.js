/* sorting functions */
// sort by value of object inside array

// e.g.
// 'key1'
// 'key1', true
// ['key1', 'key2', ...]
// ['key1', 'key2', ...], true
// [['key1', true], ['key2'], ['key3', false], ['key4', true]]
// [['key1', false], ['key2'], ['key3', false]] , true

var sortObjArr = function(a, k, d){
    if(typeof a !== 'object') return ERR('need array type [ ] for arg1')
    if(a.length == undefined) return ERR('need array type [ ] for arg1')
    if(a[0].length == 1)      return a
    if(!a[0])                 return ERR('need values for arg1')
    if(!k)                    return ERR('need key(string or array type) to sort for arg2')
    if(typeof a[0] !== 'object')       return ERR('need object type { } inside the array [ ] for arg1')
    if(typeof a[0].length == 'number') return ERR('need object type { } inside the array [ ] for arg1')
    if(typeof k !== 'string' && typeof k !== 'object' || typeof k.length !== 'number'){
        return ERR('need string or array type for key(arg2)')
    }
    if(d !== undefined && typeof d !== 'boolean') return ERR('need boolean type for arg3')

    var istArr = [] // 전달받은 인자가 splice 되어서 나가는거 방지
    for(var i=0; i<a.length; i++){
        istArr.push(a[i])
    }

    k = typeof k == 'string'
        ? [k]
        : k
    d = d || false

    for(var i=0; i<k.length; i++){
        if(typeof k[i] == 'string')   k[i] = [k[i], d]
        else if(k[i].length == 1) k[i][1] = d
    }

    // console.log('---istArr---')
    // console.log(inser tedArr)
    // console.log('---key---')
    // console.log(k)
    // console.log('---isDesc---')
    // console.log(d)



    var equals = []
    var numToNum = []

    for(var keyIdx=0; keyIdx<k.length; keyIdx++){
        if(typeof k[keyIdx][0] !== 'string') return ERR('need string type for key[i][0] to sort')
        if(keyIdx !== 0 && equals.length == 0) return istArr

        var direction = k[keyIdx][1] ? 'desc' : 'asc'

        // console.log('---direction---')
        // console.log(direction)

        var cType
        var arrIdx = 0
        var getValueType = function(){
            if(istArr[arrIdx][k[keyIdx][0]] == undefined){
                arrIdx++
                console.warn('undefined value for inserted key:'+k)
                return getValueType()
            }
            else{
                return (typeof istArr[arrIdx][k[keyIdx][0]])
            }
        }
        cType = getValueType()

        for(var i=0; i<istArr.length; i++){
            if(typeof istArr[i][k[keyIdx][0]] !== cType){
                console.warn('different types of values for inserted key:'+k)
                break
            }
        }


        // console.log('hiho!')
        if(cType == 'number'){
            if(!equals.length){ // 1st key
                direction == 'asc'
                    ? istArr.sort(function(a,b){return a[k[keyIdx][0]] - b[k[keyIdx][0]]})
                    : istArr.sort(function(b,a){return a[k[keyIdx][0]] - b[k[keyIdx][0]]})
            }
            else{ // 2nd, 3rd .. keys
                for(var ntnIndex=(numToNum.length-1); ntnIndex>=0; ntnIndex--){
                    var tmpArr = istArr.splice(numToNum[ntnIndex][0])
                    var saved = tmpArr.splice(numToNum[ntnIndex][1] - numToNum[ntnIndex][0] + 1)
                    direction == 'asc'
                        ? tmpArr.sort(function(a,b){return a[k[keyIdx][0]] - b[k[keyIdx][0]]})
                        : tmpArr.sort(function(b,a){return a[k[keyIdx][0]] - b[k[keyIdx][0]]})
                    istArr = istArr.concat(tmpArr, saved)
                }
            }
        }

        else if(cType == 'string'){
            if(!equals.length){ // 1st key
                direction == 'asc'
                    ? istArr.sort(function(a,b){
                        var x = a[k[keyIdx][0]].toLowerCase()
                        var y = b[k[keyIdx][0]].toLowerCase()
                        return x < y ? -1
                                     : x > y ? 1
                                             : 0
                    })
                    : istArr.sort(function(b,a){
                        var x = a[k[keyIdx][0]].toLowerCase()
                        var y = b[k[keyIdx][0]].toLowerCase()
                        return x < y ? -1
                                     : x > y ? 1
                                             : 0
                    })
            }
            else{ // 2nd, 3rd .. keys
                // console.log(keyIdx)
                // console.log(numToNum)
                for(var ntnIndex=(numToNum.length-1); ntnIndex>=0; ntnIndex--){
                    var tmpArr = istArr.splice(numToNum[ntnIndex][0])
                    var saved = tmpArr.splice(numToNum[ntnIndex][1] - numToNum[ntnIndex][0] + 1)
                    direction == 'asc'
                        ? tmpArr.sort(function(a,b){
                            var x = a[k[keyIdx][0]].toLowerCase()
                            var y = b[k[keyIdx][0]].toLowerCase()
                            return x < y ? -1
                                         : x > y ? 1
                                                 : 0
                        })
                        : tmpArr.sort(function(b,a){
                            var x = a[k[keyIdx][0]].toLowerCase()
                            var y = b[k[keyIdx][0]].toLowerCase()
                            return x < y ? -1
                                         : x > y ? 1
                                                 : 0
                        })
                    istArr = istArr.concat(tmpArr, saved)
                }
            }
        }
        else return ERR('Sorry, not supported yet')

        // console.log(JSON.stringify(istArr))


        if(keyIdx == k.length-1) break

        // 아래 equals numToNum 작업들 하나로 통합 필요.. (안될수도..) ;; 이외에도 아래는 전반적으로 수정 필요..
        var tmpEq = []
        var eqContinue = false
        for(var arrIdx=1; arrIdx<istArr.length; arrIdx++){
            if(istArr[arrIdx][k[keyIdx][0]] == istArr[arrIdx-1][k[keyIdx][0]]){
                if(keyIdx == 0){
                    equals.push(arrIdx-1)
                    eqContinue = true
                    if(arrIdx == istArr.length-1) equals.push(arrIdx)
                }
                else{
                    tmpEq.push(arrIdx-1)
                    eqContinue = true
                    if(arrIdx == istArr.length-1) tmpEq.push(arrIdx)
                }
            }
            else{
                if(keyIdx == 0 && eqContinue) equals.push(arrIdx-1, undefined)
                else if(eqContinue)           tmpEq.push(arrIdx-1, undefined)
                eqContinue = false
            }
        }

        if(keyIdx !== 0){
            var tmpNtn = []
            var tmpStartNum,
                tmpEndNum,
                tmpIsContinue = false
            for(var tmpEqIndex=1; tmpEqIndex<tmpEq.length; tmpEqIndex++){
                if(tmpEq[tmpEqIndex] === tmpEq[tmpEqIndex-1] + 1){
                    if(!tmpIsContinue){
                        tmpStartNum = tmpEq[tmpEqIndex-1]
                        tmpIsContinue = true
                    }
                    if(tmpEqIndex == tmpEq.length-1){
                        tmpEndNum = tmpEq[tmpEqIndex]
                        tmpIsContinue = false
                        tmpNtn.push([tmpStartNum, tmpEndNum])
                    }
                }
                else{
                    if(tmpIsContinue){
                        tmpEndNum = tmpEq[tmpEqIndex-1]
                        tmpIsContinue = false
                        tmpNtn.push([tmpStartNum, tmpEndNum])
                    }
                }
            }
            // console.log('---tmpNtn---')
            // console.log(tmpNtn)
            // console.log('---numToNum---')
            // console.log(JSON.stringify(numToNum))

            var saveTmpIndex = []
            for(var tIndex=0; tIndex<tmpNtn.length; tIndex++){
                for(var ntnIndex=0; ntnIndex<numToNum.length; ntnIndex++){
                    if(tmpNtn[tIndex][0] >= numToNum[ntnIndex][0] && tmpNtn[tIndex][0] <= numToNum[ntnIndex][1] && tmpNtn[tIndex][1] <= numToNum[ntnIndex][1]){
                        saveTmpIndex.push(tIndex)
                    }
                }
            }
            // console.log('---saveTmpIndex---')
            // console.log(saveTmpIndex)
            numToNum = []
            for(var i=0; i<saveTmpIndex.length; i++){
                numToNum.push(tmpNtn[saveTmpIndex[i]])
            }
            // console.log('---numToNum---')
            // console.log(numToNum)
        }

        if(keyIdx == 0){
            var startNum,
                endNum,
                isContinue = false
            for(var eqIndex=1; eqIndex<equals.length; eqIndex++){
                if(equals[eqIndex] === equals[eqIndex-1] + 1){
                    if(!isContinue){
                        startNum = equals[eqIndex-1]
                        isContinue = true
                    }
                    if(eqIndex == equals.length-1){
                        endNum = equals[eqIndex]
                        isContinue = false
                        numToNum.push([startNum, endNum])
                    }
                }
                else{
                    if(isContinue){
                        endNum = equals[eqIndex-1]
                        isContinue = false
                        numToNum.push([startNum, endNum])
                    }
                }
            }
            // console.log('---numToNum---')
            // console.log(numToNum)
        }

    } // end of for-keyIdx



    return istArr // key[i] 에 따른 정렬 필요
}
