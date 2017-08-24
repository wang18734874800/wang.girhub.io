window.onload=function() {
    //头部开始
    {
        const wenzi = document.querySelectorAll(".canglou");
        const cang = document.querySelector(".menu-bd");
        const cang1 = document.querySelector(".shouchangjia");
        const erweima = document.querySelector(".erweima")
        const shangjia = document.querySelector(".shangjia")
        const wangzhan = document.querySelector(".wangzhandaohang")
        const fangru = document.querySelectorAll(".toukuang-you ul")

        function canglou(dian, chu) {
            dian.onmouseover = function () {
                chu.style.display = "block";
            }
            dian.onmouseout = function () {
                chu.style.display = "";
            }
        }

        canglou(wenzi[0], cang);
        canglou(wenzi[1], cang1);
        canglou(fangru[4], erweima);
        canglou(fangru[5], shangjia);
        canglou(fangru[8], wangzhan);
    }
    //头部结束
    // 导航开始
    {
        const daohangs = document.querySelectorAll(".dhd-you li");
        const dhdmatou = document.querySelectorAll(".dhd-maotou");
        daohangs.forEach(function (ele, index) {
            ele.onmouseover = function () {
                dhdmatou[index].style.opacity = "1";
                dhdmatou[index].style.transition = "all 0.8s";
                dhdmatou[index].style.marginTop = -14 + "px";

            }
            ele.onmouseout = function () {
                dhdmatou[index].style.transition = "none";
                dhdmatou[index].style.marginTop = 0 + "px";
                dhdmatou[index].style.opacity = "0";
            }
        })
    }
    // 导航结束
    // 商品分类开始
    {
        const fenlei = document.querySelectorAll(".blbhang")
        const xuangxiang = document.querySelectorAll(".xuanxianka")
        const banner = document.querySelector(".banner");
        fenlei.forEach(function (ele, index) {
            // ele.onmouseover = function () {
            //     xuangxiang[index].style.display = "block";
            //     ele.style.background = "#fafafa";
            // }
            // ele.onmouseout = function () {
            //     xuangxiang[index].style.display = "none"
            //     ele.style.background = "";
            // }
            hover(ele, function () {
                xuangxiang[index].style.display = "block";
                ele.style.background = "#fafafa";
            }, function () {
                xuangxiang[index].style.display = "none"
                ele.style.background = "";
            })
        })
    }
    // 商品分类结束
    // benner开始
    {
        const imgs = document.querySelectorAll(".benner-tu div")
        const lunbos = document.querySelectorAll(".blunb0")
        const benners = document.querySelector(".benner");
        const colorarr = ["#e8e8e8", "#2191EF", "#FDDFE0", "#930AF6", "#e8e8e8", "#2191EF"];
        lunbos.forEach(function (ele, index) {

            ele.onmouseover = function () {
                imgs.forEach(function (ele, index) {
                    ele.classList.remove("active");
                    lunbos[index].classList.remove("active1")
                })
                imgs[index].classList.add("active");
                lunbos[index].classList.add("active1");
                benners.style.background = colorarr[index];
                num = index;
            }
        });
        let num = 0;
        var move = function () {
            num++;
            if (num == imgs.length) {
                num = 0;
            }
            imgs.forEach(function (ele, index) {
                ele.classList.remove("active");
                lunbos[index].classList.remove("active1")
            })
            imgs[num].classList.add("active");
            lunbos[num].classList.add("active1");
            benners.style.background = colorarr[num];
        }
        var st = setInterval(move, 3000);
        benners.onmouseover = function () {
            clearInterval(st);
        }
        benners.onmouseout = function () {
            st = setInterval(move, 3000);
        }
    }
    // benner结束
    // 直播开始
    {
        const pinpais = document.querySelectorAll(".tu-kuang");
        const zhezhaos = document.querySelectorAll(".zhezhao");
        const zhetus = document.querySelectorAll(".zhetu");
        const zhezis = document.querySelectorAll(".zhezi");

        pinpais.forEach(function (ele, index) {
            ele.onmouseover = function () {
                zhezhaos[index].style.opacity = "1";
                zhezhaos[index].style.zIndex = "999";

            }
            ele.onmouseout = function () {
                zhezhaos[index].style.opacity = "0";
                zhezhaos[index].style.zIndex = "0";

            }
        })
    }
    {
        const zhibo = document.querySelectorAll(".zbzs-tu li");
        const xuanxians = document.querySelectorAll(".zhong-tu li");
        const zhibozhezhao = document.querySelectorAll(".zhibozhezhao")
        const maotous = document.querySelectorAll(".zhong-maotou");
        const donghuas = document.querySelector(".zbz-tu1 img");
        const tops = document.querySelector(".zbzs-tu");
        xuanxians.forEach(function (ele, index) {
            ele.onmouseover = function () {
                zhibo.forEach(function (ele, index) {
                    ele.style.display = "none";
                    maotous[index].style.display = "none";
                    zhibozhezhao[index].style.display = "none"
                })
                zhibo[index].style.display = "block";
                maotous[index].style.display = "block";
                zhibozhezhao[index].style.display = "block"
            }
        })
        tops.onmouseover = function () {
            donghuas.className = "donghua";
        }
        tops.onmouseout = function () {
            donghuas.className = "";
        }
        // 文字滚动
        const wenzigun = document.querySelector(".xia-zuozi li")
        let num = 0;
        setInterval(function () {
            num++;
            if (num == 4) {
                num = 0;
            }
            wenzigun.style.marginTop = -num * 40 + "px";
        }, 3000);
    }
    const wufeng = document.querySelector(".zhong-wufeng")
    const right = document.querySelector(".zhong-jiantou");
    const left = document.querySelector(".zhong-jianzuo")
    right.onclick = function () {
        wufeng.style.transition = "all 0.8s";
        wufeng.style.marginLeft = -488 + "px";
        right.style.display = "none";
        left.style.display = "block";
    }
    left.onclick = function () {
        wufeng.style.transition = "all 0.8s";
        wufeng.style.marginLeft = 0 + "px";
        left.style.display = "none";
        right.style.display = "block";
    }
    // 直播结束
    //推荐开始
    {
        // const kuang=document.querySelectorAll(".tuijian-kuang");
        // const tu=document.querySelectorAll(".tuijian-tu img");
        // const xiakuang=document.querySelectorAll(".tuijian-xia");
        // var kuangarr=[];
        // kuang.forEach(function(ele){
        //     kuangarr.push(ele)
        // })
        // xiakuang.forEach(function(ele){
        // kuangarr.push(ele)
        // })
        // kuangarr.forEach(function(ele,index){
        //     ele.onmouseover=function(){
        //     animate(ele,{width:150,height:150},500)
        //     }
        // })
    }
    //推荐结束
    // 猜你喜欢
    {
        const kuang = document.querySelectorAll(".cnt-tu");
        const zhezhao = document.querySelectorAll(".cnt-tu a");
        kuang.forEach(function (ele, index) {
            ele.onmouseover = function () {
                zhezhao[index].style.opacity = 1;
                ele.onmouseout = function () {
                    zhezhao[index].style.opacity = 0;
                }
            }
        })
    }
    // 猜你喜欢结束
    //美丽人生
    {
        const kuang = document.querySelectorAll(".flxia-kuang1 .flxk-nei");
        const tu = document.querySelectorAll(".flxkn-tu img")
        const kuang1 = document.querySelectorAll(".flx-kuang2 .flxk-nei1")
        const tops = document.querySelectorAll(".flxia-kuang>.flxkuang-top")
        const guidong = document.querySelectorAll(".flxk-zi ul");
        const guidongzi = document.querySelectorAll(".flxk-zi ul li")
        const tu1 = document.querySelectorAll(".flxkn-tu2 img")
        const zhezhaos = document.querySelectorAll(".zhezhao1")
        // console.log(tops)
        function pingyi(value, tu) {
            value.forEach(function (ele, index) {
                ele.onmouseover = function () {
                    animate(tu[index], {marginLeft: -5}, 200);
                }
                ele.onmouseout = function () {
                    animate(tu[index], {marginLeft: ""}, 200);
                }
            })
        }

        pingyi(kuang, tu);
        pingyi(kuang1, tu1);
        function zhezhao(kuang, ziyanse, zhezhaos) {
            // console.log(ziyanse)
            kuang.onmouseover = function () {
                zhezhaos.style.opacity = 1;
                ziyanse.forEach(function (ele) {
                    ele.style.color = "#ff0036"
                })
            }
            kuang.onmouseout = function () {
                zhezhaos.style.opacity = 0;
                ziyanse.forEach(function (ele) {
                    ele.style.color = "";
                })
            }
        }

        zhezhaos.forEach(function (ele, index) {
            zhezhao(tops[index], guidongzi, ele)
            guodong(guidong[index]);
        })


        //文字滚动
        function guodong(value) {
            let num = 0
            let st = setInterval(function () {
                num++;
                value.style.transition = "all 0.8s";
                value.style.marginTop = -num * 26 + "px";
            }, 3000)
            value.addEventListener("transitionend", function () {
                if (num >= 3) {
                    value.style.transition = "";
                    value.style.marginTop = 0;
                    num = 0;
                }
            })
        }


    }
    //美丽人生
    // 定位开始
    {
        const shang = document.querySelector(".shang-dingwei")
        const zuos = document.querySelector(".dingwei")
        const huiding = document.querySelectorAll(".dingwei li");
        const weizhi = document.querySelectorAll(".fenlei");
        const caini = document.querySelector(".caini")
        const daohang = document.querySelector(".tou");
        var colorarr = ["#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#F7A945", "#FF0036"]
        var weizhiarr = [];
        weizhi.forEach(function (ele) {
            weizhiarr.push(ele)
        })
        weizhiarr.push(caini)
        weizhiarr.push(daohang);
        huiding.forEach(function (ele, index) {
            ele.addEventListener("click", function () {
                var obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
                var ot = weizhiarr[index].offsetTop;
                animate(obj, {scrollTop: ot - 80}, 500)
            })
        })
        //按需加载的初始加载开始
        // let imgs = document.images;
        //
        // Array.from(imgs).forEach(function (ele) {
        //     if (window.innerHeight > getPosition(ele)) {
        //         ele.src = ele.getAttribute("data-src");
        //     }
        // })
        // function getPosition(obj) {
        //     let ot = obj.offsetTop;
        //     let parent = obj.offsetParent;
        //     while (parent !== null && parent.nodeName !== "BODY") {
        //         ot += parent.offsetTop;
        //         parent = parent.offsetParent;
        //     }
        //     return ot;
        // }

        //按需加载的初始加载结束
        // window.onscroll = function () {
        // var obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        // // 头部定位开始
        // if (obj.scrollTop > 650) {
        //     shang.style.top = 0 + "px";
        //     zuos.style.cssText = "width:35px;height:325px;";
        // } else {
        //     shang.style.top = "";
        //     zuos.style.cssText = "width:0;height=0";
        // }
        // let st = obj.scrollTop;
        // for (var i = 0; i < colorarr.length; i++) {
        //     if (st >= weizhiarr[i].offsetTop - 120) {
        //         for (var j = 0; j < colorarr.length; j++) {
        //             huiding[j].style.background = "";
        //         }
        //         huiding[i].style.background = colorarr[i];
        //     }
        //
        // }
        // 头部定位结束
        //按需加载开始
        let imgs = document.images;
        var obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        Array.from(imgs).forEach(function (ele) {

            if (obj.scrollTop + window.innerHeight >=getPosition(ele)) {
                ele.src = ele.getAttribute("data-src");
            }
        })
        function getPosition(obj) {
            let ot = obj.offsetTop;
            let parent = obj.offsetParent;
            while (parent !== null && parent.nodeName !== "BODY") {
                ot += parent.offsetTop;
                parent = parent.offsetParent;
            }
            return ot;
        }
        window.addEventListener("scroll", function () {
            let imgs = document.images;
            var obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
            Array.from(imgs).forEach(function (ele) {

                if (obj.scrollTop + window.innerHeight >=getPosition(ele)) {
                    ele.src = ele.getAttribute("data-src");
                }
            })
            function getPosition(obj) {
                let ot = obj.offsetTop;
                let parent = obj.offsetParent;
                while (parent !== null && parent.nodeName !== "BODY") {
                    ot += parent.offsetTop;
                    parent = parent.offsetParent;
                }
                return ot;
            }
        })
        //按需加载结束


    window.addEventListener("scroll", function () {
        var obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        // 头部定位开始
        if (obj.scrollTop > 650) {
            shang.style.top = 0 + "px";
            zuos.style.cssText = "width:35px;height:325px;";
        } else {
            shang.style.top = "";
            zuos.style.cssText = "width:0;height=0";
        }
        let st = obj.scrollTop;
        for (var i = 0; i < colorarr.length; i++) {
            if (st >= weizhiarr[i].offsetTop - 120) {
                for (var j = 0; j < colorarr.length; j++) {
                    huiding[j].style.background = "";
                }
                huiding[i].style.background = colorarr[i];
            }

        }
    })
    //定位结束
    }

    //右定位开始
    {
        const xuan = document.querySelectorAll(".dianwei-right li")
        const chu = document.querySelectorAll(".right-over")
        const hui = document.querySelector(".hui")
        xuan.forEach(function (ele, index) {
            hover(ele, function () {
                chu[index].style.display = "block";
                animate(chu[index], {right: 35, opacity: 1}, 300)
            }, function () {
                animate(chu[index], {right: 65, opacity: 0}, 300, function () {
                    chu[index].style.display = "none";
                })
            });
            // ele.onmouseover=function(){
            //     chu[index].style.display="block";
            //     animate(chu[index],{right:35,opacity:1},300)
            // }
            // ele.onmouseout=function(){
            //     animate(chu[index],{right:65,opacity:0},300,function(){
            //         chu[index].style.display="none";
            //     })
            // }
        })
        hui.addEventListener("click", function () {
            var obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
            obj.scrollTop = 0;
        })
        // }


        //右定位结束
    }
}


