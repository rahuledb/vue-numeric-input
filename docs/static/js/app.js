webpackJsonp([1],{H9Yj:function(t,e,n){var i=n("lxov");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("52884e00",i,!1)},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=n("RRo+"),a=n.n(r),s={name:"vue-numeric-input",props:{name:String,value:Number,placeholder:String,min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},align:{type:String,default:"left"},size:{type:String,default:"150px"},precision:{type:Number,validator:function(t){return t>=0&&a()(t)}},autofocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},controlsType:{type:String,default:"plusminus"}},data:function(){return{numericValue:null,interval:null,startTime:null,handler:Function}},watch:{value:{immediate:!0,handler:function(t){var e=t;e&&((e=this.toPrecision(e,this.precision))>=this.max&&(e=this.max),e<=this.min&&(e=this.min),e!==t&&this.$emit("input",e)),this.numericValue=e}}},methods:{toNumber:function(t){var e=parseFloat(t);return!isNaN(t)&&isFinite(t)||(e=0),e},toPrecision:function(t,e){return void 0!==e?parseFloat(t.toFixed(e)):t},increment:function(){this.readonly||this.updateValue(this.toNumber(this.numericValue)+this.step)},decrement:function(){this.readonly||this.updateValue(this.toNumber(this.numericValue)-this.step)},inputHandler:function(t){this.updateValue(this.toNumber(t),t)},updateValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.numericValue;(t=this.toPrecision(t,this.precision))>=this.max&&(t=this.max),t<=this.min&&(t=this.min),t!==n?(this.numericValue=t,this.$emit("input",t)):this.$refs.input.value=e&&t===this.toNumber(e)?e:t},start:function(t){document.addEventListener("mouseup",this.stop),this.startTime=new Date,this.handler=t,clearInterval(this.interval),this.interval=setInterval(t,100)},stop:function(t){document.removeEventListener(t.type,this.stop),new Date-this.startTime<100&&this.handler(),clearInterval(this.interval),this.interval=null,this.handler=null,this.startTime=null,this.value!==this.numericValue&&this.$emit("change",this.numericValue)},onBlur:function(t){this.$emit("blur",t)},onFocus:function(t){this.$emit("focus",t)},onChange:function(t){this.$emit("change",this.numericValue)},focus:function(){this.disabled||this.$refs.input.focus()},blur:function(){this.$refs.input.blur()}},beforeDestroy:function(){clearInterval(this.interval),this.interval=null,this.handler=null,this.startTime=null}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["vue-numeric-input","updown"===t.controlsType?"updown":""],style:{width:t.size?""+t.size:"Inherit"}},[n("input",{ref:"input",class:["numeric-input",this.controls?"":"no-control"],style:{textAlign:this.align},attrs:{name:t.name,type:"number",placeholder:t.placeholder,max:t.max,min:t.min,autofocus:t.autofocus,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.numericValue},on:{input:function(e){t.inputHandler(e.target.value)},change:t.onChange,blur:t.onBlur,focus:t.onFocus}}),t._v(" "),t.controls?n("button",{staticClass:"btn btn-decrement",attrs:{type:"button",disabled:t.disabled||t.numericValue<=t.min},on:{mousedown:function(e){t.start(t.decrement)},touchstart:function(e){e.preventDefault(),t.start(t.decrement)},touchend:function(e){e.preventDefault(),t.stop(e)}}},[n("i",{staticClass:"btn-icon"})]):t._e(),t._v(" "),t.controls?n("button",{staticClass:"btn btn-increment",attrs:{type:"button",disabled:t.disabled||t.numericValue>=t.max},on:{mousedown:function(e){t.start(t.increment)},touchstart:function(e){e.preventDefault(),t.start(t.increment)},touchend:function(e){e.preventDefault(),t.stop(e)}}},[n("i",{staticClass:"btn-icon"})]):t._e()])};o._withStripped=!0;var u={render:o,staticRenderFns:[]},c=u;var l=!1;var v=n("VU/8")(s,c,!1,function(t){l||(n("VIhj"),n("H9Yj"))},"data-v-4015f724",null);v.options.__file="src/vue-numeric-input.vue",v.esModule&&Object.keys(v.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");var p={name:"App",components:{VueNumericInput:v.exports},data:function(){return{num:10}}},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("article",{staticClass:"markdown-body",staticStyle:{"padding-bottom":"200px"},attrs:{id:"preview"}},[t._m(0),t._v(" "),n("p",{attrs:{"data-source-line":"2"}},[t._v("Number input component based on Vue that is a replacement of native input number which has optional control.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",{attrs:{"data-source-line":"5"}},[t._v("You can use the v-model to enable a two-way binding on data.")]),t._v(" "),t._m(3),t._v(" "),n("hr"),t._v(" "),t._m(4),t._v(" "),n("p",{attrs:{"data-source-line":"76"}},[t._v("Set autofocus to input field on page load")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"78"}},[t._m(5),t._v(" "),n("vue-numeric-input",{attrs:{value:10,autofocus:""}})],1),t._v(" "),t._m(6),t._v(" "),n("p",{attrs:{"data-source-line":"23"}},[t._v("Setting name and placeholder")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"25"}},[t._m(7),t._v(" "),n("vue-numeric-input",{attrs:{name:"price",placeholder:"Enter Price"}})],1),t._v(" "),t._m(8),t._v(" "),n("p",{attrs:{"data-source-line":"28"}},[t._v("Limiting the value by setting min and max props.")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"29"}},[t._m(9),t._v(" "),n("vue-numeric-input",{attrs:{value:10,min:1,max:20}})],1),t._v(" "),t._m(10),t._v(" "),n("p",{attrs:{"data-source-line":"32"}},[t._v("Allows you to define step for incremental/decremental operation. default to 1.")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"34"}},[t._m(11),t._v(" "),n("vue-numeric-input",{attrs:{value:10,step:2}})],1),t._v(" "),t._m(12),t._v(" "),n("p",{attrs:{"data-source-line":"37"}},[t._v("Align input number inside input box (left, center, right)")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"39"}},[t._m(13),t._v(" "),n("vue-numeric-input",{attrs:{value:20,align:"center"}})],1),t._v(" "),t._m(14),t._v(" "),n("p",{attrs:{"data-source-line":"42"}},[t._v("Set the width of VueNumericInput in px, em, rem etc.")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"44"}},[t._m(15),t._v(" "),n("vue-numeric-input",{attrs:{value:20,size:"100px"}})],1),t._v(" "),t._m(16),t._v(" "),n("p",{attrs:{"data-source-line":"47"}},[t._v("Precision of input value to set the decimal places for float value. It should be an integer value.")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"49"}},[t._m(17),t._v(" "),n("vue-numeric-input",{attrs:{value:20.458,precision:2}})],1),t._v(" "),t._m(18),t._v(" "),n("p",{attrs:{"data-source-line":"52"}},[t._v("Show/Hide the controls, default is true.")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"54"}},[t._m(19),t._v(" "),n("vue-numeric-input",{attrs:{value:50,controls:!1}})],1),t._v(" "),t._m(20),t._v(" "),n("p",{attrs:{"data-source-line":"59"}},[t._v("There are two type of controls to display, Plus and Minus(plusminus) and Up and Down arrow(updown)")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"61"}},[t._m(21),t._v(" "),n("vue-numeric-input",{attrs:{value:40,"controls-type":"updown"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(22),t._v(" "),n("vue-numeric-input",{attrs:{value:60,"controls-type":"plusminus"}})],1),t._v(" "),t._m(23),t._v(" "),n("p",{attrs:{"data-source-line":"66"}},[t._v("To set the readonly")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"68"}},[t._m(24),t._v(" "),n("vue-numeric-input",{attrs:{value:10,readonly:""}})],1),t._v(" "),t._m(25),t._v(" "),n("p",{attrs:{"data-source-line":"71"}},[t._v("To set disabled")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"73"}},[t._m(26),t._v(" "),n("vue-numeric-input",{attrs:{value:10,disabled:""}})],1),t._v(" "),t._m(27),t._v(" "),n("p",{attrs:{"data-source-line":"76"}},[t._v("You can use  step and precision props to make your input working with floating numbers.")]),t._v(" "),n("blockquote",{attrs:{"data-source-line":"78"}},[t._m(28),t._v(" "),n("vue-numeric-input",{attrs:{value:4.367,step:1.25,precision:2}})],1),t._v(" "),t._m(29),t._v(" "),n("p",{attrs:{"data-source-line":"76"}},[t._v("You can override the styling of the v-numeric-input component by applying !important rule to css properties")]),t._v(" "),n("vue-numeric-input",{attrs:{id:"style1",value:5,step:1,min:0,max:10,size:"2.2em",align:"center","controls-type":"updown"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(30),t._v(" "),n("hr"),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36)],1),t._v(" "),t._m(37)])};d._withStripped=!0;var _={render:d,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-numeric-input","data-source-line":"1"}},[e("a",{staticClass:"anchor",attrs:{href:"#vue-numeric-input"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Vue Numeric Input")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/36194663/44717643-33e4ea00-aadb-11e8-82bf-e1fdeeea3bb5.gif",alt:"vue-numeric-input"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"basic-usage","data-source-line":"4"}},[e("a",{staticClass:"anchor",attrs:{href:"#basic-usage"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Basic Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('<template>\n  <div>\n    <vue-numeric-input  v-model="num"></vue-numeric-input>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 10,\n      };\n    },\n  };\n<\/script>\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"autofocus","data-source-line":"75"}},[e("a",{staticClass:"anchor",attrs:{href:"#autofocus"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Autofocus")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="10" autofocus></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"name-placeholder","data-source-line":"22"}},[e("a",{staticClass:"anchor",attrs:{href:"#name-placeholder"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Name, Placeholder")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input name="price" placeholder="Enter Price"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"max-and-min","data-source-line":"27"}},[e("a",{staticClass:"anchor",attrs:{href:"#max-and-min"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Max and Min")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="10"  :min="1" :max="20"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"steps","data-source-line":"31"}},[e("a",{staticClass:"anchor",attrs:{href:"#steps"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Steps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="10" :step="2"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"align","data-source-line":"36"}},[e("a",{staticClass:"anchor",attrs:{href:"#align"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Align")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="20" align="center" ></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"size","data-source-line":"41"}},[e("a",{staticClass:"anchor",attrs:{href:"#size"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Size")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="20" size="70px"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"precision","data-source-line":"46"}},[e("a",{staticClass:"anchor",attrs:{href:"#precision"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Precision")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="20.458" precision="2"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"controls","data-source-line":"51"}},[e("a",{staticClass:"anchor",attrs:{href:"#controls"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Controls")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="50" :controls="false"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"controls-type","data-source-line":"58"}},[e("a",{staticClass:"anchor",attrs:{href:"#controls-type"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Controls Type")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="40" controls-type="updown"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="60" controls-type="plusminus"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"readonly","data-source-line":"65"}},[e("a",{staticClass:"anchor",attrs:{href:"#readonly"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Readonly")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="10" readonly></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"disabled","data-source-line":"70"}},[e("a",{staticClass:"anchor",attrs:{href:"#disabled"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Disabled")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="10" disabled></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"with-float-values","data-source-line":"75"}},[e("a",{staticClass:"anchor",attrs:{href:"#with-float-values"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("With float values")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('<vue-numeric-input :value="4.367" :step="1.2" :precision="2"></vue-numeric-input>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"styling","data-source-line":"75"}},[e("a",{staticClass:"anchor",attrs:{href:"#with-float-values"}},[e("span",{staticClass:"octicon octicon-link"})]),this._v("Styling Component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",{attrs:{"data-source-line":"78"}},[e("pre",[e("code",[this._v('<vue-numeric-input\n       id="style1"\n       :value="5"\n       :min="0"\n       :max="10"\n       size="60px"\n       controls-type="updown">\n</vue-numeric-input>\n<style>\n    #style1.vue-numeric-input.updown {\n      padding-top: 1.5rem;\n      padding-bottom: 1.5rem;\n    }\n    #style1.vue-numeric-input.updown .numeric-input {\n      padding-right: 5px !important;\n      padding-left: 5px !important;\n    }\n    #style1.vue-numeric-input.updown .btn {\n      background: #6fbbff !important;\n    }\n    #style1.vue-numeric-input.updown .btn-increment {\n      height: 1.5rem;\n      width: 100%;\n      right: 0 !important;\n      left:0 !important;\n      top: 0 !important;\n      bottom: auto !important;\n    }\n    #style1.vue-numeric-input.updown .btn-decrement {\n      height: 1.5rem;\n      width: 100%;\n      left: 0 !important;\n      right: 0 !important;\n      top: auto !important;\n      bottom: 0 !important;\n    }\n</style>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("a",{attrs:{id:"PROPS_69"}}),this._v("PROPS:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped table-bordered"},[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",[t._v("Options")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("name")]),t._v(" "),n("td",[t._v("Component name")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("Binding value")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("placeholder")]),t._v(" "),n("td",[t._v("Input placeholder")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("min")]),t._v(" "),n("td",[t._v("Minimum allowed value")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-Infinity")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("max")]),t._v(" "),n("td",[t._v("Maximum allowed value")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("Infinity")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("step")]),t._v(" "),n("td",[t._v("Incremental Step")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("align")]),t._v(" "),n("td",[t._v("Alignment of Numeric Value")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("left")]),t._v(" "),n("td",[t._v("left, center, right")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",[t._v("Component Size")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Inherit")]),t._v(" "),n("td",[t._v("size in px, em, rem etc e.g. ‘20px’")])]),t._v(" "),n("tr",[n("td",[t._v("precision")]),t._v(" "),n("td",[t._v("Number of decimals")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("Integer value")])]),t._v(" "),n("tr",[n("td",[t._v("controls")]),t._v(" "),n("td",[t._v("Enable/Disable Controls")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("controlsType")]),t._v(" "),n("td",[t._v("Controls Type")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("plusminus")]),t._v(" "),n("td",[t._v("plusminus/updown")])]),t._v(" "),n("tr",[n("td",[t._v("autofocus")]),t._v(" "),n("td",[t._v("Autofocus")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("readonly")]),t._v(" "),n("td",[t._v("Is Readonly")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("Is Disabled")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true/false")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("a",{attrs:{id:"EVENTS_88"}}),this._v("EVENTS:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped table-bordered"},[n("thead",[n("tr",[n("th",[t._v("Event Name")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Parameters")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("input")]),t._v(" "),n("td",[t._v("triggers when input")]),t._v(" "),n("td",[t._v("(newValue)")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("triggers when the value changes")]),t._v(" "),n("td",[t._v("(newValue)")])]),t._v(" "),n("tr",[n("td",[t._v("blur")]),t._v(" "),n("td",[t._v("triggers when Input blurs")]),t._v(" "),n("td",[t._v("(event: Event)")])]),t._v(" "),n("tr",[n("td",[t._v("focus")]),t._v(" "),n("td",[t._v("triggers when Input focus")]),t._v(" "),n("td",[t._v("(event: Event)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("a",{attrs:{id:"METHODS_98"}}),this._v("METHODS:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped table-bordered"},[n("thead",[n("tr",[n("th",[t._v("Method")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Parameters")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("focus")]),t._v(" "),n("td",[t._v("focus the Input component")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("blur")]),t._v(" "),n("td",[t._v("blur the Input component")]),t._v(" "),n("td",[t._v("-")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/JayeshLab/vue-numeric-input"}},[e("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0",width:"149px",height:"149px"},attrs:{src:"https://aral.github.com/fork-me-on-github-retina-ribbons/right-graphite@2x.png",alt:"Fork me on GitHub"}})])}]},m=_;var h=!1;var b=n("VU/8")(p,m,!1,function(t){h||n("SzSV")},null,null);b.options.__file="src/App.vue",b.esModule&&Object.keys(b.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");var f=b.exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:f},template:"<App/>"})},PXN9:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#style1.vue-numeric-input.updown {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n#style1.vue-numeric-input.updown .numeric-input {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n#style1.vue-numeric-input.updown .btn {\n  background: #6fbbff;\n}\n#style1.vue-numeric-input.updown .btn-increment {\n  height: 1.5rem;\n  width: 100%;\n  right: 0;\n  left:0;\n  top: 0;\n  bottom: auto;\n}\n#style1.vue-numeric-input.updown .btn-decrement {\n  height: 1.5rem;\n  width: 100%;\n  left: 0 !important;\n  right: 0 !important;\n  top: auto !important;\n  bottom: 0 !important;\n}\n",""])},SzSV:function(t,e,n){var i=n("PXN9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("110fe670",i,!1)},VIhj:function(t,e,n){var i=n("p9VJ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("71a544dc",i,!1)},lxov:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'\n.vue-numeric-input {\n  position: relative;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.vue-numeric-input .numeric-input {\n  padding-right: 1.8rem;\n  padding-left: 1.8rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: inherit;\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  display: block;\n  line-height: 1.5rem;\n  -webkit-transition: all 0.1s ease 0s;\n  transition: all 0.1s ease 0s;\n  width: 100%;\n}\n.vue-numeric-input .btn {\n  position: absolute;\n  width: 1.5rem;\n  margin: 0;\n  cursor: default;\n  text-align: center;\n  -webkit-transition: all 0.1s ease 0s;\n  transition: all 0.1s ease 0s;\n  background: rgba(0, 0, 0, 0.1);\n  border: solid rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset;\n          box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset;\n}\n.vue-numeric-input .btn:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n.vue-numeric-input .btn:active {\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px inset, rgba(255, 255, 255, 0.5) -1px -1px 4px inset;\n          box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px inset, rgba(255, 255, 255, 0.5) -1px -1px 4px inset;\n}\n.vue-numeric-input .btn:disabled {\n   opacity: 0.5;\n   -webkit-box-shadow: none;\n           box-shadow: none;\n   cursor: not-allowed;\n}\n.vue-numeric-input .numeric-input.no-control {\n  padding: 2px 5px;\n}\n.vue-numeric-input .btn-increment {\n  right: 2px;\n  top: 2px;\n  bottom: 2px;\n  border-radius: 2px;\n  border-width: 1px;\n}\n.vue-numeric-input .btn-increment .btn-icon {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.vue-numeric-input .btn-increment .btn-icon:before {\n  position: absolute;\n  visibility: visible;\n  height: 0.0625rem;\n  width: 50%;\n  background-color: #111;\n  content: "";\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.vue-numeric-input .btn-increment .btn-icon:after {\n  position: absolute;\n  visibility: visible;\n  height: 50%;\n  width: 0.0625rem;\n  background-color: #111;\n  content: "";\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.vue-numeric-input .btn-decrement {\n  left: 2px;\n  top: 2px;\n  bottom: 2px;\n  border-radius: 2px;\n  border-width: 1px;\n}\n.vue-numeric-input .btn-decrement .btn-icon {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.vue-numeric-input .btn-decrement .btn-icon:before {\n  position:absolute;\n  visibility: visible;\n  height: 0.0625rem;\n  width: 50%;\n  background-color: #111;\n  content: "";\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.vue-numeric-input .btn-decrement .btn-icon:after {\n  visibility: hidden;\n  content: "";\n  clear: both;\n  height: 0;\n}\n.vue-numeric-input.updown .numeric-input {\n  padding-right: 1.8rem;\n  padding-left: 5px;\n}\n.vue-numeric-input.updown .btn-increment {\n  right: 2px;\n  top: 2px;\n  bottom: 50%;\n  border-radius: 2px 2px 0 0;\n  border-width: 1px 1px 0;\n}\n.vue-numeric-input.updown .btn-increment .btn-icon {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-width: 0 0.45rem 0.45rem;\n  border-color: transparent transparent #111;\n  border-style: solid;\n  margin: -0.25rem 0 0 -0.4rem;\n}\n.vue-numeric-input.updown .btn-increment .btn-icon:before{\n  visibility: hidden;\n  display: block;\n  content: "";\n  clear: both;\n  height: 0;\n}\n.vue-numeric-input.updown .btn-increment .btn-icon:after {\n  visibility: hidden;\n  display: block;\n  content: "";\n  clear: both;\n  height: 0;\n}\n.vue-numeric-input.updown .btn-decrement {\n  right: 2px;\n  top: 50%;\n  bottom: 2px;\n  left: auto;\n  border-radius: 0 0 2px 2px;\n  border-width: 0 1px 1px;\n}\n.vue-numeric-input.updown .btn-decrement .btn-icon {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-width: 0.45rem 0.45rem 0;\n  border-color: #111 transparent transparent;\n  border-style: solid;\n  margin: -0.25rem 0 0 -0.4rem;\n}\n',""])},p9VJ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\ninput[type=number][data-v-4015f724]::-webkit-inner-spin-button,\ninput[type=number][data-v-4015f724]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number][data-v-4015f724] {-moz-appearance: textfield;\n}\nbutton[data-v-4015f724]:focus {\n  outline: none;\n}\n",""])}},["NHnr"]);
//# sourceMappingURL=app.js.map