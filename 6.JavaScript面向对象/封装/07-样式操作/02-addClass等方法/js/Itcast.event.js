(function ( window ) {

Itcast.fn.extend({

    on: function ( eventName, callback ) {
        // 遍历 this. 给每一个 dom 元素都绑定事件
        return this.each(function () {
            this.addEventListener( eventName, callback );
        });

    },
    off: function ( eventName, callback ) {
        // 遍历 this. 给每一个 dom 元素都绑定事件
        return this.each(function () {
            this.removeEventListener( eventName, callback );
        });

    }

});




Itcast.each( ('abort,blur,cancel,canplay,canplaythrough,change,click,close,contextmenu,' +
                'cuechange,dblclick,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,' + 
                'durationchange,emptied,ended,error,focus,input,invalid,keydown,keypress,keyup,' + 
                'load,loadeddata,loadedmetadata,loadstart,mousedown,mouseenter,mouseleave,mousemove,' + 
                'mouseout,mouseover,mouseup,mousewheel,pause,play,playing,progress,ratechange,reset,' + 
                'resize,scroll,seeked,seeking,select,show,stalled,submit,suspend,timeupdate,toggle,' + 
                'volumechange,waiting,autocomplete,autocompleteerror,beforecopy,beforecut,' + 
                'beforepaste,copy,cut,paste,search,selectstart,wheel,webkitfullscreenchange,' +
                'webkitfullscreenerror').split( ',' ), function ( i, v ) {
                    Itcast.fn[ v ] = function ( callback ) {
                        return this.on( v, callback );
                    };
                });

})( window );