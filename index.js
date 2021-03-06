function _Location(t, p, b, west, east, north, south, items) {
    this.t = t;
    this.p = p;
    this.b = b;
    this.east = east;
    this.west = west;
    this.north = north;
    this.south = south;
    this.items = items
}

function _Items(id, Aname, move, name) {
    this.id = id
    this.Aname = Aname
    this.move = move
    this.name = name
}


document.addEventListener("DOMContentLoaded", function (event) {
    game = {
        board: [
            [new _Location("You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", false, true, false, false, []), new _Location("You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", true, true, false, false, []), new _Location("A hill", "13.gif", "rgb(117,237,243)", true, true, false, true, [new _Items(31, "a STONE ", true, "STONE")]), new _Location("Some bushes", "14.gif", "rgb(202,230,51)", true, true, false, false, []), new _Location("An old deserted hut", "15.gif", "rgb(220,204,61)", true, true, false, false, [new _Items(27, "a BUCKET ", true, "BUCKET")]), new _Location("The edge of a forest", "16.gif", "rgb(167,245,63)", true, true, false, false, []), new _Location("A dark forest", "17.gif", "rgb(140,253,99)", true, false, false, true, [new _Items(14, "MUSHROOMS ", true, "MUSHROOMS")])],
            [new _Location("A man nearby making tar", "21.gif", "rgb(255,190,99)", false, true, false, true, []), new _Location("A timber yard", "22.gif", "rgb(255,190,99)", true, true, false, true, []), new _Location("You are by a roadside shrine", "23.gif", "rgb(167,245,63)", true, true, true, true, [new _Items(10, "a KEY ", true, "KEY")]), new _Location("You are by a small chapel", "24.gif", "rgb(212,229,36)", true, true, false, false, []), new _Location("You are on a road leading to a wood", "25.gif", "rgb(167,245,63)", true, true, false, true, []), new _Location("You are in a forest", "26 i 65.gif", "rgb(167,245,63)", true, true, false, false, []), new _Location("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", true, false, true, false, [new _Items(18, "BERRIES ", true, "BERRIES")])],
            [new _Location("You are by the Vistula River", "31.gif", "rgb(122,232,252)", false, true, true, false, []), new _Location("You are by the Vistula River", "32.gif", "rgb(140,214,255)", true, false, true, false, [new _Items(32, "a FISH ", true, "FISH")]), new _Location("You are on a bridge over river", "33.gif", "rgb(108,181,242)", false, false, true, true, []), new _Location("You are by the old tavern", "34.gif", "rgb(255,189,117)", false, true, false, false, []), new _Location("You are at the town's end", "35.gif", "rgb(255,190,99)", true, false, true, true, []), new _Location("You are in a butcher's shop", "36.gif", "rgb(255,188,102)", false, false, false, true, []), new _Location("You are in a cooper's house", "37.gif", "rgb(255,188,102)", false, false, false, true, [])],
            [new _Location("You are in the Wawel Castle", "41.gif", "rgb(255,176,141)", false, false, false, false, []), new _Location("You are inside a dragon's cave", "42.gif", "rgb(198,205,193)", false, true, false, false, []), new _Location("A perfect place to set a trap", "43.gif", "rgb(255,176,141)", true, false, true, false, []), new _Location("You are by the water mill", "44.gif", "rgb(255,190,99)", false, true, false, false, [new _Items(21, "a BAG ", true, "BAG")]), new _Location("You are at a main crossroad", "45.gif", "rgb(255,190,99)", true, true, true, true, []), new _Location("You are on a town street", "46.gif", "rgb(255,190,99)", true, true, true, false, []), new _Location("You are in a frontyard of your house", "47.gif", "rgb(255,190,99)", true, false, true, true, [])],
            [new _Location("You are by a swift stream", "54.gif", "rgb(108,181,242)", false, true, false, false, []), new _Location("You are on a street leading forest", "55.gif", "rgb(255,190,99)", true, false, true, true, [new _Items(33, "a KNIFE ", true, "KNIFE")]), new _Location("You are in a woodcutter's backyard", "56.gif", "rgb(255,190,99)", false, false, false, true, []), new _Location("You are in a shoemaker's house", "57.gif", "rgb(254,194,97)", false, false, true, false, [])],
            [new _Location("You are in a bleak funeral house", "64.gif", "rgb(254,194,97)", false, true, false, false, [new _Items(24, "a SPADE ", true, "SPADE")]), new _Location("You are on a path leading to the wood", "26 i 65.gif", "rgb(167,245,63)", true, true, true, false, []), new _Location("You are at the edge of a forest", "66.gif", "rgb(167,245,63)", true, true, true, false, []), new _Location("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", true, false, false, false, [])]
        ],
        complete: 0,
        player: {
            work: false,
            carrying: [],
            vertical: 3,
            horizontal: 6,
            start: function () {
                var before = document.body.innerHTML
                console.log(before)
                document.body.innerHTML = ""
                var audio = document.createElement("audio")
                audio.setAttribute("autoplay", "allowed")
                audio.setAttribute("autostart", true)
                var src = document.createElement("source")
                src.setAttribute("src", "mp3/hejnal.mp3")
                src.setAttribute("type", "audio/mpeg")
                audio.appendChild(src)
                audio.currentTime = 69
                audio.play()
                document.body.appendChild(audio)
                var img = document.createElement("img")
                img.setAttribute("src", "img/czolowka.jpg")
                document.body.appendChild(img)
                setTimeout(function () {
                    var edit = document.getElementsByTagName("img")
                    edit = edit[0]
                    edit.setAttribute("src", "img/A.jpg")
                    setTimeout(function () {
                        var edit2 = document.getElementsByTagName("img")
                        edit2 = edit2[0]
                        edit2.setAttribute("src", "img/B.jpg")
                        setTimeout(function () {
                            document.body.innerHTML = before
                            game.player.show()
                            game.f()
                        }, 5000)
                    }, 5000)
                }, 5000)
            },
            show: function () {
                var hideToDelete = document.getElementsByClassName("hiding")
                console.log("----")
                if (hideToDelete.length > 0) {
                    while (hideToDelete[0]) {
                        hideToDelete[0].parentNode.removeChild(hideToDelete[0]);
                    }
                }
                var nameOfPlace = game.board[game.player.vertical][game.player.horizontal].t
                var pictureToShow = game.board[game.player.vertical][game.player.horizontal].p
                fixedpathOfHTML = ("img/" + pictureToShow)
                var image = document.getElementById("picture")
                image.setAttribute("src", fixedpathOfHTML)
                image.style.backgroundColor = game.board[game.player.vertical][game.player.horizontal].b
                var text = document.getElementById("place")
                text.innerText = nameOfPlace
                now = game.board[game.player.vertical][game.player.horizontal]
                var text = "You can go"
                if (now.west === true) {
                    text += " WEST"
                }
                else {
                    var hide = document.createElement("DIV")
                    hide.style.position = "absolute"
                    hide.style.width = "10px"
                    hide.style.height = "10px"
                    hide.setAttribute("class", "hiding")
                    var toHide = document.getElementById("allPictures")
                    toHide.appendChild(hide)
                    hide.style.left = "148px"
                    hide.style.top = "25px"
                    hide.style.backgroundColor = "black"
                }
                if (now.east == true) {
                    if (text != "You can go") {
                        text += ", EAST"
                    }
                    else {
                        text += " EAST"
                    }
                }
                else {
                    var hide = document.createElement("DIV")
                    hide.style.position = "absolute"
                    hide.style.width = "10px"
                    hide.style.height = "10px"
                    hide.setAttribute("class", "hiding")
                    var toHide = document.getElementById("allPictures")
                    toHide.appendChild(hide)
                    hide.style.left = "257px"
                    hide.style.top = "25px"
                    hide.style.backgroundColor = "black"
                }
                if (now.north == true) {
                    if (text != "You can go") {
                        text += ", NORTH"
                    }
                    else {
                        text += " NORTH"
                    }
                }
                else {
                    var hide = document.createElement("DIV")
                    hide.style.position = "absolute"
                    hide.style.width = "10px"
                    hide.style.height = "9px"
                    hide.setAttribute("class", "hiding")
                    var toHide = document.getElementById("allPictures")
                    toHide.appendChild(hide)
                    hide.style.left = "200px"
                    hide.style.top = "10px"
                    hide.style.backgroundColor = "black"
                }
                if (now.south == true) {
                    if (text != "You can go") {
                        text += ", SOUTH"
                    }
                    else {
                        text += " SOUTH"
                    }
                }
                else {
                    var hide = document.createElement("DIV")
                    hide.style.position = "absolute"
                    hide.style.width = "10px"
                    hide.style.height = "10px"
                    hide.setAttribute("class", "hiding")
                    var toHide = document.getElementById("allPictures")
                    toHide.appendChild(hide)
                    hide.style.left = "200px"
                    hide.style.top = "60px"
                    hide.style.backgroundColor = "black"
                }
                importantText = text
                var it = game.board[game.player.vertical][game.player.horizontal].items
                var its = []
                for (let i = 0; i < it.length; i++) {
                    its.push(it[i].Aname)
                }
                console.log("**********")
                console.log(its)
                console.log("*************")
                if (its.length > 0) {
                    text += "<br> You see " + its
                }
                else {
                    text += "<br> You see nothing"
                }
                if (game.player.carrying.length > 0) {
                    text += "<br> You carry " + game.player.carrying[0].Aname
                }
                else {
                    text += "<br> You carry nothing"
                }
                var ex = document.getElementById("explanation")
                ex.innerHTML = text
            },
            refuse: function () {
                var rem = document.getElementById("info")
                if (rem) {
                    rem.parentNode.removeChild(rem)
                }
                setTimeout(function () {
                    var info = document.createElement("div")
                    info.setAttribute("id", "info")
                    info.innerText = "You can't go that way"
                    info.style.width = "600px"
                    info.style.display = "block"
                    info.style.clear = "both"
                    document.body.appendChild(info)
                    setTimeout(function () {
                        var rem = document.getElementById("info")
                        rem.parentNode.removeChild(rem)
                    }, 1000)
                }, 500)
            },
            accept: function (direction) {
                var rem = document.getElementById("info")
                if (rem) {
                    rem.parentNode.removeChild(rem)
                }
                setTimeout(function () {
                    var info = document.createElement("div")
                    info.setAttribute("id", "info")
                    info.innerText = "You are going " + direction
                    info.style.width = "600px"
                    info.style.display = "block"
                    info.style.clear = "both"
                    document.body.appendChild(info)
                    setTimeout(function () {
                        var rem = document.getElementById("info")
                        rem.parentNode.removeChild(rem)
                    }, 1000)
                }, 500)
            },
            taking: function (inform) {
                var rem = document.getElementById("info")
                if (rem) {
                    rem.parentNode.removeChild(rem)
                }
                setTimeout(function () {
                    var info = document.createElement("div")
                    info.setAttribute("id", "info")
                    info.innerText = inform
                    info.style.width = "600px"
                    info.style.display = "block"
                    info.style.clear = "both"
                    document.body.appendChild(info)
                    setTimeout(function () {
                        var rem = document.getElementById("info")
                        rem.parentNode.removeChild(rem)
                    }, 1000)
                }, 500)
            },
            droping: function (inform) {
                var rem = document.getElementById("info")
                if (rem) {
                    rem.parentNode.removeChild(rem)
                }
                setTimeout(function () {
                    var info = document.createElement("div")
                    info.setAttribute("id", "info")
                    info.innerText = inform
                    info.style.width = "600px"
                    info.style.display = "block"
                    info.style.clear = "both"
                    document.body.appendChild(info)
                    setTimeout(function () {
                        var rem = document.getElementById("info")
                        rem.parentNode.removeChild(rem)
                    }, 1000)
                }, 500)
            },
            no: function (inform) {
                var rem = document.getElementById("info")
                if (rem) {
                    rem.parentNode.removeChild(rem)
                }
                setTimeout(function () {
                    var info = document.createElement("div")
                    info.setAttribute("id", "info")
                    info.innerText = inform
                    info.style.width = "600px"
                    info.style.display = "block"
                    info.style.clear = "both"
                    document.body.appendChild(info)
                    setTimeout(function () {
                        var rem = document.getElementById("info")
                        rem.parentNode.removeChild(rem)
                    }, 1000)
                }, 500)
            },
            use: function (inform) {
                var rem = document.getElementById("info")
                if (rem) {
                    rem.parentNode.removeChild(rem)
                }
                setTimeout(function () {
                    var info = document.createElement("div")
                    info.setAttribute("id", "info")
                    info.innerText = inform
                    info.style.width = "600px"
                    info.style.display = "block"
                    info.style.clear = "both"
                    document.body.appendChild(info)
                    setTimeout(function () {
                        var rem = document.getElementById("info")
                        rem.parentNode.removeChild(rem)
                    }, 1000)
                }, 500)
            },
            canDoAnything: true,
            move: function (where) {
                if (where == "EAST" || where == "E") {
                    if (now.east == true) {
                        game.player.horizontal += 1
                        game.player.accept("east")
                        setTimeout(function () {
                            game.player.show()
                        }, 1500)
                    }
                    else {
                        game.player.refuse()
                    }
                }
                else if (where == "WEST" || where == "W") {
                    if (now.west == true) {
                        game.player.horizontal += -1
                        game.player.accept("west")
                        setTimeout(function () {
                            game.player.show()
                        }, 1500)
                    }
                    else {
                        if (now.p != "42.gif") {
                            game.player.refuse()
                        }
                        else {
                            var rem = document.getElementById("info")
                            if (rem) {
                                rem.parentNode.removeChild(rem)
                            }
                            setTimeout(function () {
                                var info = document.createElement("div")
                                info.setAttribute("id", "info")
                                info.innerText = "You can't go that way..."
                                info.style.width = "600px"
                                info.style.display = "block"
                                info.style.clear = "both"
                                document.body.appendChild(info)
                                setTimeout(function () {
                                    var rem = document.getElementById("info")
                                    rem.parentNode.removeChild(rem)
                                }, 1000)
                            }, 500)

                            setTimeout(function () {
                                var rem = document.getElementById("info")
                                if (rem) {
                                    rem.parentNode.removeChild(rem)
                                }
                                setTimeout(function () {
                                    var info = document.createElement("div")
                                    info.setAttribute("id", "info")
                                    info.innerText = "The dragon sleeps in a cave"
                                    info.style.width = "600px"
                                    info.style.display = "block"
                                    info.style.clear = "both"
                                    document.body.appendChild(info)
                                    setTimeout(function () {
                                        var rem = document.getElementById("info")
                                        rem.parentNode.removeChild(rem)
                                    }, 1000)
                                }, 500)
                            }, 3000)
                        }
                    }
                }
                else if (where == "NORTH" || where == "N") {
                    if (now.north == true) {
                        game.player.vertical -= 1
                        if (game.player.vertical == 3) {
                            game.player.horizontal += 3
                        }
                        game.player.accept("north")
                        setTimeout(function () {
                            game.player.show()
                        }, 1500)
                    }
                    else {
                        game.player.refuse()
                    }
                }
                else if (where == "SOUTH" || where == "S") {
                    if (now.south == true) {
                        game.player.vertical += 1
                        if (game.player.vertical == 4) {
                            game.player.horizontal -= 3
                        }
                        game.player.accept("south")
                        setTimeout(function () {
                            game.player.show()
                        }, 1500)
                    }
                    else {
                        game.player.refuse()
                    }
                }
                else {
                    var action = where.split(" ")
                    if (action[0] == "TAKE" || action[0] == "T") {
                        var s = true
                        if (now.items.length > 0) {
                            var names = []
                            for (let i = 0; i < now.items.length; i++) {
                                names.push(now.items[i].name)
                            }
                            var match = ""
                            for (let i = 0; i < names.length; i++) {
                                if (action[1] == names[i]) {
                                    match = names[i]
                                    s = false
                                }
                            }
                            if (s == true) {
                                console.log("Alarm")
                                inf = "There is anything like this here"
                                game.player.taking(inf)
                            }
                            var match2
                            for (let i = 0; i < now.items.length; i++) {
                                if (now.items[i].name == match) {
                                    match2 = now.items[i]
                                    if (game.player.carrying.length < 1) {
                                        if (match2.move == true) {
                                            console.log("???")
                                            now.items.splice(i, 1)
                                            game.player.carrying.push(match2)
                                            var inf = "You are taking " + match2.Aname
                                            game.player.taking(inf)
                                            var t = []
                                            for (let i = 0; i < now.items.length; i++) {
                                                t.push(now.items[i].Aname)
                                            }
                                            if (t.length > 0) {
                                                var t2 = "You see " + t
                                            }
                                            else {
                                                var t2 = "You see nothing"
                                            }
                                            if (game.player.carrying.length > 0) {
                                                var t3 = "You carry " + game.player.carrying[0].Aname
                                            }
                                            else {
                                                var t3 = "You carry nothing"
                                            }
                                            setTimeout(function () {
                                                var help = importantText + "<br>" + t2 + "<br>" + t3 + "<br>"
                                                document.getElementById("explanation").innerHTML = help
                                            }, 1500)
                                        }
                                        else {
                                            var inf = "You can't carry it"
                                            game.player.taking(inf)
                                        }
                                    }
                                    else {
                                        var inf = "You are carrying " + game.player.carrying[0].Aname + " already"
                                        game.player.taking(inf)
                                    }
                                }
                            }
                        }
                        else {
                            inf = "There is anything like this here"
                            game.player.taking(inf)
                        }
                    }
                    else if (action[0] == "DROP" || action[0] == "D") {
                        console.log(game.player.carrying.length)
                        if (game.player.carrying.length > 0) {
                            var s = true
                            var namesOfCarry = []
                            for (let i = 0; i < game.player.carrying.length; i++) {
                                namesOfCarry.push(game.player.carrying[i].name)
                            }
                            var matching = ""
                            for (let i = 0; i < namesOfCarry.length; i++) {
                                if (action[1] == namesOfCarry[i]) {
                                    matching = namesOfCarry[i]
                                    s = false
                                }
                            }
                            if (s == true) {
                                inf = "You are not carrying it"
                                game.player.taking(inf)
                            }
                            var matching2
                            for (let i = 0; i < game.player.carrying.length; i++) {
                                if (game.player.carrying[i].name == matching) {
                                    matching2 = game.player.carrying[i]
                                    if (now.items.length < 3) {
                                        game.player.carrying.splice(i, 1)
                                        now.items.push(matching2)
                                        var inf = "You are about to drop " + matching2.Aname
                                        game.player.droping(inf)
                                        var t = []
                                        for (let i = 0; i < now.items.length; i++) {
                                            t.push(now.items[i].Aname)
                                        }
                                        console.log(now.items)
                                        if (t.length > 0) {
                                            var t2 = "You see " + t
                                        }
                                        else {
                                            var t2 = "You see nothing"
                                        }
                                        if (game.player.carrying.length > 0) {
                                            var t3 = "You carry " + game.player.carrying[0].Aname
                                        }
                                        else {
                                            var t3 = "You carry nothing"
                                        }
                                        setTimeout(function () {
                                            var help = importantText + "<br>" + t2 + "<br>" + t3 + "<br>"
                                            document.getElementById("explanation").innerHTML = help
                                        }, 1500)
                                    }

                                    else if (now.p == "43.gif") {
                                        if (now.items.length < 9) {
                                            var control = 0
                                            for (let i = 0; i < now.items.length; i++) {
                                                if (now.items[i].move == true) {
                                                    control += 1
                                                }
                                            }
                                            console.log(control)
                                            if (control < 3) {
                                                game.player.carrying.splice(i, 1)
                                                now.items.push(matching2)
                                                var inf = "You are about to drop " + matching2.Aname
                                                game.player.droping(inf)
                                                var t = []
                                                for (let i = 0; i < now.items.length; i++) {
                                                    t.push(now.items[i].Aname)
                                                }
                                                console.log(now.items)
                                                if (t.length > 0) {
                                                    var t2 = "You see " + t
                                                }
                                                else {
                                                    var t2 = "You see nothing"
                                                }
                                                if (game.player.carrying.length > 0) {
                                                    var t3 = "You carry " + game.player.carrying[0].Aname
                                                }
                                                else {
                                                    var t3 = "You carry nothing"
                                                }
                                                setTimeout(function () {
                                                    var help = importantText + "<br>" + t2 + "<br>" + t3 + "<br>"
                                                    document.getElementById("explanation").innerHTML = help
                                                }, 1500)
                                            }
                                            else {
                                                var inf = "You can't store anymore here"
                                                game.player.droping(inf)
                                            }
                                        }
                                    }
                                    else {
                                        var inf = "You can't store anymore here"
                                        game.player.droping(inf)
                                    }
                                }
                            }
                        }
                        else {
                            inf = "You are not carrying anything"
                            game.player.droping(inf)
                        }
                    }
                    else if (action[0] == "VOCABULARY" || action[0] == "V" || action[0] == "GOSSIPS" || action[0] == "G") {
                        var rescueDIV = document.getElementById("boxForExplanation")
                        var rescueP = document.getElementById("who")
                        var rescueINPUT = document.getElementById("command")
                        rescueDIV2 = rescueDIV
                        rescueP2 = rescueP
                        rescueINPUT2 = rescueINPUT
                        rescueDIV.parentNode.removeChild(rescueDIV)
                        rescueP.parentNode.removeChild(rescueP)
                        rescueINPUT.parentNode.removeChild(rescueINPUT)
                        var infor = document.createElement("div")
                        infor.style.marginTop = "10px"
                        infor.style.lineHeight = "24px"
                        infor.setAttribute("id", "infor")
                        if (action[0] == "VACOBULARY" || action[0] == "V") {
                            infor.innerHTML = "NORTH or N, SOUTH or S <br>  WEST or W, EAST or E <br> TAKE (object) or T (object) <br> DROP (object) or D (object) <br> USE(object) or U(object) <br>  GOSSIPS or G, VOCABULARY or V <br> Press any key"
                        }
                        else {
                            infor.innerHTML = "The  woodcutter lost  his home key... <br> The butcher likes fruit... The cooper <br> is greedy... Dratewka plans to make a <br>  poisoned  bait for the dragon...  The <br> tavern owner is buying food  from the <br> pickers... Making a rag from a bag... <br> Press any key"
                        }
                        document.body.appendChild(infor)
                        inforToDel = document.getElementById("infor")
                        game.player.work = true
                    }
                    else if (action[0] == "USE" || action[0] == "U") {
                        var namesOfOurItems = []
                        if (game.player.carrying.length > 0) {
                            for (let i = 0; i < game.player.carrying.length; i++) {
                                namesOfOurItems.push(game.player.carrying[i].name)
                            }
                            var matching3 = ""
                            for (let i = 0; i < namesOfOurItems.length; i++) {
                                if (action[1] == namesOfOurItems[i]) {
                                    matching3 = namesOfOurItems[i]
                                }
                                else {
                                    console.log("w tym miejscu")
                                    inf = "You aren't carrying anything like that"
                                    game.player.use(inf)
                                }
                            }
                            if (matching3 != "") {
                                if (game.player.vertical > 3) {
                                    console.log("tu")
                                    var whereAmI = game.player.vertical.toString() + game.player.horizontal.toString()
                                    whereAmI = parseInt(whereAmI) + 14
                                }
                                else {
                                    console.log("tam")
                                    var whereAmI = game.player.vertical.toString() + game.player.horizontal.toString()
                                    whereAmI = parseInt(whereAmI) + 11
                                }
                                console.log(whereAmI)
                                var idOfMyItem = game.player.carrying[0].id
                                console.log(idOfMyItem)
                                var properPlaces = [56, 67, 43, 34, 37, 43, 36, 43, 57, 43, 11, 43, 21, 43, 43, 43, 57, 41, 41]
                                var properItems = [10, 11, 12, 14, 15, 16, 18, 19, 21, 22, 24, 25, 27, 28, 37, 33, 34, 35, 36]
                                for (let i = 0; i < properItems.length; i++) {
                                    console.log("zzz")
                                    if (properItems[i] == idOfMyItem && properPlaces[i] == whereAmI) {
                                        console.log("wpadło")
                                        console.log(i)
                                        if (i == 0) {
                                            game.player.carrying = [new _Items(11, "an AXE", true, "AXE")]
                                            inf = "You opened a tool shed and took an axe"
                                            game.player.use(inf)
                                        }
                                        else if (i == 1) {
                                            game.player.carrying = [new _Items(12, "STICKS", true, "STICKS")]
                                            inf = "You cut sticks for sheeplegs"
                                            game.player.use(inf)
                                        }
                                        else if (i == 2) {
                                            game.player.carrying = []
                                            now.items.push(new _Items(13, "sheeplegs", false, "sheeplegs"))
                                            game.complete += 1
                                            inf = "You prepared legs for your fake sheep"
                                            game.player.use(inf)
                                            if (game.complete == 6) {
                                                inf = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                                game.player.use(inf)
                                                now.items = []
                                                game.player.carrying = [new _Items(37, " a SHEEP", true, "SHEEP")]
                                            }
                                        }
                                        else if (i == 3) {
                                            game.player.carrying = [new _Items(15, "MONEY", true, "MONEY")]
                                            inf = "The tavern owner paid you money"
                                            game.player.use(inf)
                                        }
                                        else if (i == 4) {
                                            game.player.carrying = [new _Items(16, "a BARREL", true, "BARREL")]
                                            inf = "The cooper sold you a new barrel"
                                            game.player.use(inf)
                                        }
                                        else if (i == 5) {
                                            game.player.carrying = []
                                            now.items.push(new _Items(17, "a sheeptrunk", false, "sheeptrunk"))
                                            game.complete += 1
                                            inf = "You made a nice sheeptrunk"
                                            game.player.use(inf)
                                            if (game.complete == 6) {
                                                inf = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                                game.player.use(inf)
                                                now.items = []
                                                game.player.carrying = [new _Items(37, " a SHEEP", true, "SHEEP")]
                                            }
                                        }
                                        else if (i == 6) {
                                            game.player.carrying = [new _Items(19, "WOOL", true, "WOOL")]
                                            inf = "The butcher gave you wool"
                                            game.player.use(inf)
                                        }
                                        else if (i == 7) {
                                            game.player.carrying = []
                                            now.items.push(new _Items(20, "a sheepskin", false, "sheepskin"))
                                            game.complete += 1
                                            inf = "You prepared skin for your fake sheep"
                                            game.player.use(inf)
                                            if (game.complete == 6) {
                                                inf = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                                game.player.use(inf)
                                                now.items = []
                                                game.player.carrying = [new _Items(37, " a SHEEP", true, "SHEEP")]
                                            }
                                        }
                                        else if (i == 8) {
                                            game.player.carrying = [new _Items(22, "a RAG", true, "RAG")]
                                            inf = "You used your tools to make a rag"
                                            game.player.use(inf)
                                        }
                                        else if (i == 9) {
                                            game.player.carrying = []
                                            now.items.push(new _Items(23, "a sheephead", false, "sheephead"))
                                            game.complete += 1
                                            inf = "You made a fake sheephead"
                                            game.player.use(inf)
                                            if (game.complete == 6) {
                                                inf = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                                game.player.use(inf)
                                                now.items = []
                                                game.player.carrying = [new _Items(37, " a SHEEP", true, "SHEEP")]
                                            }
                                        }
                                        else if (i == 10) {
                                            console.log("dzieje sie")
                                            game.player.carrying = [new _Items(25, "SULPHUR", true, "SULPHUR")]
                                            inf = "You are digging..."
                                            game.player.use(inf)
                                            setTimeout(function () {
                                                inf = "and digging..."
                                                game.player.use(inf)
                                            }, 1500)
                                            setTimeout(function () {
                                                inf = "That's enough sulphur for you"
                                                game.player.use(inf)
                                            }, 3000)

                                        }
                                        else if (i == 11) {
                                            game.player.carrying = []
                                            now.items.push(new _Items(26, "a solid poison", false, "solid poison"))
                                            game.complete += 1
                                            inf = "You prepared a solid poison"
                                            game.player.use(inf)
                                            if (game.complete == 6) {
                                                inf = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                                game.player.use(inf)
                                                now.items = []
                                                game.player.carrying = [new _Items(37, " a SHEEP", true, "SHEEP")]
                                            }
                                        }
                                        else if (i == 12) {
                                            game.player.carrying = [new _Items(28, "TAR", true, "TAR")]
                                            inf = "You got a bucket full of tar"
                                            game.player.use(inf)
                                        }
                                        else if (i == 13) {
                                            game.player.carrying = []
                                            now.items.push(new _Items(37, "a liquid poison", true, "liquid poison"))
                                            inf = "You prepared a liquid poison"
                                            game.player.use(inf)
                                            game.complete += 1
                                            if (game.complete == 6) {
                                                inf = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                                game.player.use(inf)
                                                now.items = []
                                                game.player.carrying = [new _Items(37, " a SHEEP", true, "SHEEP")]
                                            }
                                        }
                                        else if (i == 14) {
                                            game.player.carrying = []
                                            now.items.push(new _Items(30, "a dead dragon", false, "dead dragon"))
                                            inf = "The dragon noticed your gift... "
                                            game.player.use(inf)
                                            setTimeout(function () {
                                                inf = "The dragon ate your sheep and died!"
                                                game.player.use(inf)
                                            }, 1500)
                                            game.board[3][1].west = true
                                            game.board[3][0].east = true
                                            game.board[3][2].p = "DS68.bmp"
                                        }
                                        else if (i == 15) {
                                            game.player.carrying = [new _Items(34, "a DRAGONSKIN", true, "DRAGONSKIN")]
                                            inf = "You cut a piece of dragon's skin"
                                            game.player.use(inf)
                                        }
                                        else if (i == 16) {
                                            game.player.carrying = [new _Items(35, "a dragonskin SHOES", true, "SHOES")]
                                            inf = "You used your tools to make shoes"
                                            game.player.use(inf)
                                        }
                                        else if (i == 17) {
                                            game.player.carrying = [new _Items(36, "a PRIZE", true, "PRIZE")]
                                            inf = "The King is impressed by your shoes"
                                            game.player.use(inf)
                                        }
                                        else if (i == 18) {
                                            document.body.innerHTML = ""
                                            var img = document.createElement("img")
                                            img.setAttribute("src", "img/reward.png")
                                            document.body.appendChild(img)
                                        }
                                        var t = []
                                        for (let i = 0; i < now.items.length; i++) {
                                            t.push(now.items[i].Aname)
                                        }
                                        console.log(now.items)
                                        if (t.length > 0) {
                                            var t2 = "You see " + t
                                            console.log(t)
                                        }
                                        else {
                                            var t2 = "You see nothing"
                                        }
                                        if (game.player.carrying.length > 0) {
                                            var t3 = "You carry " + game.player.carrying[0].Aname
                                        }
                                        else {
                                            var t3 = "You carry nothing"
                                        }
                                        setTimeout(function () {
                                            var help = importantText + "<br>" + t2 + "<br>" + t3 + "<br>"
                                            document.getElementById("explanation").innerHTML = help
                                        }, 1500)
                                        break
                                    }
                                    else {
                                        if (i == properItems.length - 1) {
                                            inf = "Nothing happend"
                                            game.player.use(inf)
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            inf = "You aren't carrying anything like that"
                            game.player.use(inf)
                        }
                    }
                    else {
                        var infor = "Try another word or V for vocabulary"
                        game.player.no(infor)
                    }
                }
            }
        },
        f: function () {
            var i = document.getElementById("command")
            i.focus()
        },
        check: function myFunction(event) {

            var x = event.which;
            if (game.player.work != true) {
                if (x == 13) {
                    if (game.player.canDoAnything == true) {
                        game.player.canDoAnything = false
                        setTimeout(function () {
                            game.player.canDoAnything = true
                        }, 1550)
                        if (document.getElementById("command") != undefined) {
                            if (document.getElementById("command").value != "V" && document.getElementById("command").value != "VOCABULARY") {
                                var v = document.getElementById("command").value
                                game.player.move(v)
                                var del = document.getElementById("command")
                                del.parentNode.removeChild(del)
                                del = document.createElement("input")
                                del.setAttribute("id", "command")
                                del.setAttribute("type", "text")
                                del.setAttribute("onblur", "game.f()")
                                del.setAttribute("onkeydown", "game.check(event)")
                                document.body.appendChild(del)
                                game.f()
                            }
                            else {
                                var v = document.getElementById("command").value
                                game.player.move(v)
                            }
                        }
                    }
                }
            }
            else {
                game.check2(rescueDIV2, rescueP2, rescueINPUT2, inforToDel)
                game.player.work = false
            }
        },
        check2: function myFunction2(one, two, three, four) {
            four.parentNode.removeChild(four)
            document.body.appendChild(one)
            document.body.appendChild(two)
            document.body.appendChild(three)
            setTimeout(function () {
                var del = document.getElementById("command")
                del.parentNode.removeChild(del)
                del = document.createElement("input")
                del.setAttribute("id", "command")
                del.setAttribute("type", "text")
                del.setAttribute("onblur", "game.f()")
                del.setAttribute("onkeydown", "game.check(event)")
                document.body.appendChild(del)
                game.f()
            })
        }
    }

    var before = document.body.innerHTML
    console.log("!!!!!!!!")
    document.body.innerHTML = ""
    function x() {
        document.body.innerHTML = before
        game.player.start()
        game.f()
        document.removeEventListener("keypress", x())
    }
    document.addEventListener("keypress", x())
});
