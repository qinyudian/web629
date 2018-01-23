window.onload = function(){
    function $(element) {
        return document.getElementById(element);
    }
    //1.����
    var wrap = $('wrap');//�����
    var arrow = $('arrow');//��ͷ�ĺ���
    var slide = $('slide');
    var lis = slide.children[0].children;
    var arrLeft = $('arrLeft');//���ͷ
    var arrRight = $('arrRight');//�Ҽ�ͷ
    //2.����������� ���Ҽ�ͷ��������ʾ ����뿪��ͷ����������
    wrap.onmouseover = function() {
        animate( arrow, { 'opacity': 1 } );
    };
    wrap.onmouseout = function(){
      animate( arrow, { 'opacity' : 0} );
    };
    //3.����ͼƬ��λ��
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����
    function lisFun(){
        for( var i = 0 ; i < lis.length ; i++ ){
            animate( lis[i], config[i] , function(){
                flag = true;//ִ������֮��򿪷���
            });
        }
    }
    lisFun();
    //4.���Ҽ�ͷ����¼�
    arrRight.onclick = function(){
        if(flag){
            flag = false;
            config.push(config.shift());//ɾ�������еĵ�һ����������������
            lisFun();
        }

    };
    arrLeft.onclick = function(){
        if(flag){
            flag = false;
            config.unshift( config.pop() );//ɾ�������е����һ���������������ǰ��
            lisFun();
        }

    };
    //5.��ӽ�����
    var flag = true;//��ʾ�����Ǵ򿪵�



};