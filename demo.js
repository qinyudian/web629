o && o.length && (e = o[0], /^image\/\w+/.test(e.type) ? (t && n.revokeObjectURL(t), a.src = t = n.createObjectURL(e), r && r.destroy(), r = new Cropper(a, i), $("#generateImage").removeClass("disabled")) : window.alert("\u8bf7\u9009\u62e9\u56fe\u7247\u6587\u4ef6\uff01"))
})