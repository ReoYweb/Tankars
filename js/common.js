$(function() {
  // 一旦hide()で隠してフェードインさせる
  $('body').hide().delay(400).fadeIn('3000');

});

if(document.getElementById("scrollText")) {
  const scrollText = document.getElementById("scrollText");
  window.addEventListener("scroll", function() {
    scrollText.style.marginRight = window.pageYOffset + "px";
  });
}


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 750) {
            $(".header").addClass("header_bg");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("header_bg");
        }
    });
});


var navFlg = false;
$('.menu,.logo').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
    if(!navFlg){
        $('.gnav__menu__item').each(function(i){
            $(this).delay(i*300).animate({
                'margin-left' : 0,
                'opacity' : 1,
            },500);
        });
        navFlg = true;
    }
    else{
//        $('.gnav__menu__item').css({
//            'margin-left' : 100,
//            'opacity' : 0,
//        });
        navFlg = false;
    }
});


jQuery(function($) {

var ua = navigator.userAgent.toLowerCase();

// windowsのみ適用 macやiphone、ipadも適用させない
var isWindows = (ua.indexOf('windows') > -1) && !((ua.indexOf('mac') > -1) && (ua.indexOf('os') > -1)) && !((ua.indexOf('iphone') > -1) || (ua.indexOf('ipad') > -1));

if (isWindows) {
$("html").easeScroll({
  frameRate: 100,//数値が大きいほど滑らか。ただしパソコンの負担も大きくなる。
  animationTime: 1000,//動いている時間
  stepSize: 45,//動く距離
  pulseAlgorithm: 1,//ここは１で問題ない
  pulseScale: 8,//ブレーキを調整。値が大きいとブレーキが強くなる
  pulseNormalize: 1,//ここは１で問題ない
  accelerationDelta: 20,//加速度。数値を変えても変化が分からず
  accelerationMax: 1,//加速度。数値を変えても変化が分からず
  keyboardSupport: true,//キーボード矢印でも動かすか
  arrowScroll: 30,//矢印で動かす距離
  touchpadSupport: true,//スマホ、タブレットでも適用させるかどうか
  fixedBackground: false//背景に影響を与えるか。変化分からず
  });
}
});

particlesJS('hoge',{
  "particles":{

//--シェイプの設定----------
      "number":{
        "value":55, //シェイプの数
        "density":{
          "enable":true, //シェイプの密集度を変更するか否か
          "value_area":800 //シェイプの密集度
        }
      },
      "shape":{
        "type":"circle", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
        "stroke":{
          "width":0, //シェイプの外線の太さ
          "color":"#ffcc00" //シェイプの外線の色
        },
        //typeをpolygonにした時の設定
        "polygon": {
          "nb_sides": 5 //多角形の角の数
        },
        //typeをimageにした時の設定
        "image": {
          "src": "images/hoge.png",
          "width": 100,
          "height": 100
        }
      },
      "color":{
        "value":"#ffffff" //シェイプの色
      },
      "opacity":{
        "value":0.1, //シェイプの透明度
        "random":false, //シェイプの透明度をランダムにするか否か
        "anim":{
          "enable":false, //シェイプの透明度をアニメーションさせるか否か
          "speed":50, //アニメーションのスピード
          "opacity_min":0.1, //透明度の最小値
          "sync":false //全てのシェイプを同時にアニメーションさせるか否か
        }
      },
      "size":{
        "value":5, //シェイプの大きさ
        "random":true, //シェイプの大きさをランダムにするか否か
        "anim":{
          "enable":false, //シェイプの大きさをアニメーションさせるか否か
          "speed":40, //アニメーションのスピード
          "size_min":0.1, //大きさの最小値
          "sync":false //全てのシェイプを同時にアニメーションさせるか否か
        }
      },
//--------------------

//--線の設定----------
      "line_linked":{
        "enable":true, //線を表示するか否か
        "distance":150, //線をつなぐシェイプの間隔
        "color":"#ffffff", //線の色
        "opacity":0.4, //線の透明度
        "width":1 //線の太さ
      },
//--------------------

//--動きの設定----------
      "move":{
        "speed":3, //シェイプの動くスピード
        "straight":false, //個々のシェイプの動きを止めるか否か
        "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
      }
//--------------------

    },

    "interactivity":{
      "detect_on":"canvas",
      "events":{

//--マウスオーバー時の処理----------
        "onhover":{
          "enable":false, //マウスオーバーが有効か否か
          "mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
        },
//--------------------

//--クリック時の処理----------
        "onclick":{
          "enable":false, //クリックが有効か否か
          "mode":"push" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
        },
//--------------------

      },

      "modes":{

//--カーソルとシェイプの間に線が表示される----------
        "grab":{
          "distance":400, //カーソルからの反応距離
          "line_linked":{
            "opacity":1 //線の透明度
          }
        },
//--------------------

//--シェイプがカーソルから逃げる----------
        "repulse":{
          "distance":200 //カーソルからの反応距離
        },
//--------------------

//--シェイプが膨らむ----------
        "bubble":{
          "distance":400, //カーソルからの反応距離
          "size":40, //シェイプの膨らむ大きさ
          "opacity":8, //膨らむシェイプの透明度
          "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
          "speed":3 //膨らむシェイプの速度(onclick時のみ)
        },
//--------------------

//--シェイプが増える----------
        "push":{
          "particles_nb":4 //増えるシェイプの数
        },
//--------------------

//--シェイプが減る----------
        "remove":{
          "particles_nb":2 //減るシェイプの数
        }
//--------------------

      }
    },
    "retina_detect":true, //Retina Displayを対応するか否か
    "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
  }
);


