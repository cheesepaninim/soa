/* sorting functions */
// sort by value of object inside array
var soa = function(a, k, d){
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

    var istArr = []
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



    var equals = []
    var ntn = []

    for(var keyIdx=0; keyIdx<k.length; keyIdx++){
        if(typeof k[keyIdx][0] !== 'string') return ERR('need string type for key[i][0] to sort')
        if(keyIdx !== 0 && equals.length == 0) return istArr

        var direction = k[keyIdx][1] ? 'desc' : 'asc'

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



        if(cType == 'number'){
            if(!equals.length){ // 1st key
                direction == 'asc'
                    ? istArr.sort(function(a,b){return a[k[keyIdx][0]] - b[k[keyIdx][0]]})
                    : istArr.sort(function(b,a){return a[k[keyIdx][0]] - b[k[keyIdx][0]]})
            }
            else{ // 2nd, 3rd .. keys
                for(var ntnIndex=(ntn.length-1); ntnIndex>=0; ntnIndex--){
                    var tmpArr = istArr.splice(ntn[ntnIndex][0])
                    var saved = tmpArr.splice(ntn[ntnIndex][1] - ntn[ntnIndex][0] + 1)
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
                for(var ntnIndex=(ntn.length-1); ntnIndex>=0; ntnIndex--){
                    var tmpArr = istArr.splice(ntn[ntnIndex][0])
                    var saved = tmpArr.splice(ntn[ntnIndex][1] - ntn[ntnIndex][0] + 1)
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



        if(keyIdx == k.length-1) break

        // 아래 equals ntn 작업들 하나로 통합 필요.. (안될수도..) ;; 이외에도 아래는 전반적으로 수정 필요..
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
            var tmpSnum,
                tmpEnum,
                tmpIsContinue = false
            for(var tmpEqIndex=1; tmpEqIndex<tmpEq.length; tmpEqIndex++){
                if(tmpEq[tmpEqIndex] === tmpEq[tmpEqIndex-1] + 1){
                    if(!tmpIsContinue){
                        tmpSnum = tmpEq[tmpEqIndex-1]
                        tmpIsContinue = true
                    }
                    if(tmpEqIndex == tmpEq.length-1){
                        tmpEnum = tmpEq[tmpEqIndex]
                        tmpIsContinue = false
                        tmpNtn.push([tmpSnum, tmpEnum])
                    }
                }
                else{
                    if(tmpIsContinue){
                        tmpEnum = tmpEq[tmpEqIndex-1]
                        tmpIsContinue = false
                        tmpNtn.push([tmpSnum, tmpEnum])
                    }
                }
            }

            var saveTmpIndex = []
            for(var tIndex=0; tIndex<tmpNtn.length; tIndex++){
                for(var ntnIndex=0; ntnIndex<ntn.length; ntnIndex++){
                    if(tmpNtn[tIndex][0] >= ntn[ntnIndex][0] && tmpNtn[tIndex][0] <= ntn[ntnIndex][1] && tmpNtn[tIndex][1] <= ntn[ntnIndex][1]){
                        saveTmpIndex.push(tIndex)
                    }
                }
            }
            ntn = []
            for(var i=0; i<saveTmpIndex.length; i++){
                ntn.push(tmpNtn[saveTmpIndex[i]])
            }
        }

        if(keyIdx == 0){
            var snum,
                enum,
                isContinue = false
            for(var eqIndex=1; eqIndex<equals.length; eqIndex++){
                if(equals[eqIndex] === equals[eqIndex-1] + 1){
                    if(!isContinue){
                        snum = equals[eqIndex-1]
                        isContinue = true
                    }
                    if(eqIndex == equals.length-1){
                        enum = equals[eqIndex]
                        isContinue = false
                        ntn.push([snum, enum])
                    }
                }
                else{
                    if(isContinue){
                        enum = equals[eqIndex-1]
                        isContinue = false
                        ntn.push([snum, enum])
                    }
                }
            }
        }

    } // end of for-keyIdx



    return istArr
}
