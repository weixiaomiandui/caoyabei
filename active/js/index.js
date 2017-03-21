/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by babay on 2017/3/17.
	 */
	var page1 = __webpack_require__(2);
	var page2 = __webpack_require__(4);
	var tips,btn;
	var current;
	var app  = new Vue({

	    el:'#app',

	    data:function () {
	        return{
	            currentView:'page1',
	            name:''
	        }
	    },

	    mounted:function(){
	        //tips = document.getElementById('tips');
	        btn = document.getElementById('btn');
	       // tips.style.display = 'none';
	        btn.style.display = 'none'
	    },

	    components:{
	        'page1':page1,
	        'page2':page2

	    },

	    methods:{
	        again:function(){
	            this.currentView = 'page1'
	        },
	        generate:function(name){
	            console.log('generate',name);
	            this.name = name;
	            this.currentView = 'page2'

	        }
	    },

	    watch:{
	        currentView:function(){
	            if(this.currentView == 'page1'){
	               // tips.style.display = 'none';
	                btn.style.display = 'none'
	            } else {
	                //tips.style.display = 'block';
	                btn.style.display = 'block'
	            }
	        }
	    },

	    computed:{
	        btmText:function(){
	            if(this.currentView == 'page1') {
	                return ''
	            }else {
	                return ''
	            }
	        }
	    }

	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by jie on 2017/1/22.
	 */
	var tpl = __webpack_require__(3);
	module.exports = {
	    template:tpl,

	    data:function(){
	        return{
	            inputName:''
	        }
	    },

	    methods:{
	        generate:function(e){
	        	console.log(e);
	        	current=e
	            if(this.inputName) {
	                this.$emit('generate',this.inputName)
	            }else{
	            	alert('请输入您的名字');
	            }
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"content page1\">\r\n    <div class=\"content_top\">\r\n        <span>2017,  我们在一起</span>\r\n        <img src=\"/active/img/icon.jpg\" alt=\"\">\r\n    </div>\r\n\r\n    <i class=\"logo\"></i>\r\n    <div class=\"input\">\r\n        <input type=\"text\" placeholder=\"输 入 你 的 名 字\" v-model=\"inputName\" maxlength=\"6\">\r\n    </div>\r\n    <div class=\"btn inside_btn\" v-on:click=\"generate(1)\">\r\n        A库生成\r\n    </div>\r\n <div class=\"btn inside_btn\" v-on:click=\"generate(2)\">\r\n        B库生成\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by babay on 2017/3/17.
	 */
	/**
	 * Created by babay on 2017/3/22.
	 */
	var tpl = __webpack_require__(5);
	var data = __webpack_require__(6);
	var result = document.getElementById('result');
	function getLength(str){
	    if(/[a-z]/i.test(str)){
	        return str.match(/[a-z]/ig).length;
	    }
	    return 0;
	}
	function setNames(name, num, canvas, img, QR) {
	    var numOfEn = getLength(name);
	    var numOfCn = name.length - numOfEn;
	    var length = 0.5*numOfEn + numOfCn;
	    var ctx = canvas.getContext("2d");
	    ctx.drawImage(img, 0, 0);
	    ctx.drawImage(QR,272,629,109,109);
	    var dataArray = data[num];
	    var size, width, height;
	    ctx.fillStyle = "red";
	    for (var i = 0; i < dataArray.length; i++) {
	        size = dataArray[i].size;
	        height = dataArray[i].height;
	        width = dataArray[i].width;
	        ctx.font = (length>4?size-15:size) + "px Microsoft YaHei";
	        if(dataArray[i].flag){
	            ctx.fillText(name, width - size  , height);
	        } else {
	            if(length>4) {
	                ctx.fillText(name, width - length*size + 5*size  , height);
	            }else if(numOfEn == 6){
	                ctx.fillText(name, width - length*size + 2*size , height);
	            }
	            else {
	                ctx.fillText(name, width - length*size + 3*size , height);
	            }
	        }
	    }
	    /*ctx.fillStyle = '#5B5652'
	    ctx.fillRect(0, 2, 260, 75)
	    ctx.fillStyle = "white";
	    ctx.font = "30px Microsoft YaHei";
	    ctx.fillText('分享，'+name+'的爱情故事', 20, 53);*/
	    var image = document.getElementById('showImg')
	    image.src = canvas.toDataURL("image/png");

	}
	function getRandom(range) {
	    return Math.floor(Math.random()*range) % range
	};
	module.exports = {
	    props: ['name'],
	    template: tpl,
	    data: function () {
	        return {
	            names: '微笑面对',
	            imgSrc: '',
	            QRSrc:'./img/QR.jpg'
	        }
	    },
	    mounted: function () {
	    	if(current==1){
	    		var num = getRandom(30) + 1;
		       // var num = 20
		        var that = this;
		        var canvas = document.getElementById('canvas');
		        var img = document.getElementById("contentImg");
		        var QR = document.getElementById("QRSrc");
		        this.imgSrc = './img/' + num + '.png';
		        img.onload = function(){
		            setNames(that.name, '1'+num, canvas, img, QR);
		        };
	    	}else{
	    		var num = getRandom(15) + 1;
		        //var num = 1
		        var that = this;
		        var canvas = document.getElementById('canvas');
		        var img = document.getElementById("contentImg");
		        var QR = document.getElementById("QRSrc");
		        this.imgSrc = './img2/' + num + '.png';
		        img.onload = function(){
		            setNames(that.name, '2'+num, canvas, img, QR);
		        };
	    	}
	        
	    }

	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"content page2\" id=\"result\">\r\n    <img  alt=\"\" id=\"showImg\">\r\n    <canvas id=\"canvas\" height=\"809\" width=\"653\"></canvas>\r\n    <img :src=\"imgSrc\" alt=\"\" id=\"contentImg\">\r\n    <img :src=\"QRSrc\" alt=\"\" id=\"QRSrc\">\r\n</div>\r\n\r\n\r\n";

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	    11: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    12: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    13: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        }
	    ],
	    14: [
	        {
	            size: 50,
	            width: 130,
	            height: 320
	        },
	        {
	            size: 50,
	            width: 130,
	            height: 480
	        }
	    ],
	    15: [
	        {
	            size: 50,
	            width: 135,
	            height: 180
	        },
	        {
	            size: 50,
	            width: 135,
	            height: 330
	        }
	    ],
	    16: [
	        {
	            size: 50,
	            width: 235,
	            height: 235
	        }
	    ],
	    17: [
	        {
	            flag: true,
	            size: 60,
	            width: 475,
	            height: 165
	        },
	        {
	            size: 40,
	            width: 130,
	            height: 340
	        },
	        {
	            size: 40,
	            width: 130,
	            height: 520
	        }
	    ],
	    18: [
	        {
	            flag: true,

	            size: 70,
	            width: 370,
	            height: 212
	        },
	        {
	            flag: true,

	            size: 60,
	            width: 320,
	            height: 352
	        }
	    ],
	    19: [
	        {
	            flag: true,

	            size: 70,
	            width: 400,
	            height: 195
	        },
	        {
	            size: 50,
	            width: 200,
	            height: 410
	        }
	    ],
	    110: [
	        {
	            flag: true,

	            size: 60,
	            width: 400,
	            height: 425
	        }
	    ],
	    111: [
	        {
	            size: 50,
	            width: 230,
	            height: 445
	        }
	    ],
	    112: [
	        {
	            size: 50,
	            width: 225,
	            height: 415
	        }
	    ],
	    113: [
	        {
	            flag: true,

	            size: 50,
	            width: 286,
	            height: 146
	        },
	        {
	            size: 50,
	            width: 160,
	            height: 265
	        }
	    ],
	    114: [
	        {
	            flag: true,

	            size: 50,
	            width: 315,
	            height: 187
	        }
	    ],
	    115: [
	        {
	            flag: true,

	            size: 60,
	            width: 306,
	            height: 188
	        },
	        {
	            size: 60,
	            width: 197,
	            height: 387
	        }
	    ],
	    116: [
	        {
	            size: 50,
	            width: 205,
	            height: 253
	        }
	    ],
	    117: [
	        {
	        	size: 50,
	            width: 205,
	            height: 253
	        }
	    ],
	    118: [
	        {
	            flag: true,

	            size: 50,
	            width: 388,
	            height: 221
	        }
	    ],
	    119: [
	        {
	            size: 60,
	            width: 281,
	            height: 225
	        }
	    ],
	    120: [
	        {
	            size: 50,
	            width:380,
	            height: 205
	        }
	    ],
	    121: [
	        {
	            size: 50,
	            width: 75,
	            height: 178
	        },
	        {
	            size: 50,
	            width: 150,
	            height: 480
	        }
	    ],
	    122: [
	        {
	            size: 40,
	            width: 190,
	            height: 135
	        }
	    ],
	    123: [
	        {
	            flag: true,

	            size: 50,
	            width: 303,
	            height: 180
	        },
	        {
	            size: 50,
	            width: 200,
	            height: 380
	        }
	    ],
	    124: [
	        {
	            flag: true,

	            size: 50,
	            width: 303,
	            height: 180
	        }
	    ],
	    125: [
	        {
	            flag: true,

	            size: 50,
	            width: 410,
	            height: 210
	        },
	        {
	            size: 50,
	            width: 130,
	            height: 335
	        }
	    ],
	    126: [
	        {
	            flag: true,

	            size: 50,
	            width: 335,
	            height: 160
	        }
	    ],
	    127: [],
	    128: [
	        {
	            size: 50,
	            width: 120,
	            height: 191
	        }
	    ],
	    129: [
	        {
	            size: 50,
	            width: 190,
	            height: 205
	        }
	    ],
	    130: [
	        {
	            size: 50,
	            width: 227,
	            height: 149
	        }
	    ],
	    131: [
	        {
	            flag: true,
	            size: 50,
	            width: 444,
	            height: 210
	        }
	    ],
	    132: [
	        {
	            flag: true,
	            size: 50,
	            width: 333,
	            height: 385
	        }
	    ],
	    133: [
	        {
	            flag: true,
	            size: 50,
	            width: 348,
	            height: 185
	        }
	    ],
	    134: [
	        {
	            flag: true,
	            size: 44,
	            width: 259,
	            height: 172
	        }
	    ],
	    135: [
	        {
	            flag: true,
	            size: 50,
	            width: 314,
	            height: 200
	        }
	    ],
	    136: [
	        {
	            flag: true,
	            size: 45,
	            width: 218,
	            height: 420
	        }
	    ],
	    137: [
	        {
	            size: 50,
	            width: 230,
	            height: 250
	        }
	    ],
	    138: [
	        {
	            size: 40,
	            width: 100,
	            height: 168
	        }
	    ],
	    139: [
	        {
	            flag: true,
	            size: 40,
	            width: 288,
	            height: 200
	        },
	        {
	            size: 40,
	            width: 137,
	            height: 405
	        }
	    ],
	    140: [
	        {
	            flag: true,
	            size: 40,
	            width: 337,
	            height: 190
	        },
	        {
	            flag: true,
	            size: 40,
	            width: 199,
	            height: 400
	        }
	    ],
	    21: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    22: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    23: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    24: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    25: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    26: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    27: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    28: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    29: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    210: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    211: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    212: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    213: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    214: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    215: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    216: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    217: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    218: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    219: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    220: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    221: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    222: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    223: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    224: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    225: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    226: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    227: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    228: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    229: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    230: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    231: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    232: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    233: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    234: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    235: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    236: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    237: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    238: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ],
	    239: [
	        {
	            size: 50,
	            width: 370,
	            height: 218
	        },
	        {
	            size: 40,
	            width: 50,
	            height: 400
	        },
	        {
	            size: 40,
	            width: 80,
	            height: 510
	        },
	    ],
	    240: [
	        {
	           size: 50,
	            width: 370,
	            height: 218,
	            flag: true
	        },
	        {
	            size: 50,
	            width: 80,
	            height: 440
	        }
	    ]

	};

/***/ }
/******/ ]);