/**
 * 
 */
//��ʽ�б�
var divs={"position":"absolute","width":"100%","top":"10%","height":"100%","left":"0%","right":"0%"};
var divs_query={"position":"absolute","width":"50%","height":"50%","top":"20%","left":"25%","right":"%25"};
//var divs_upload={"position":"absolute","width":"50%","height":"50%","top":"30%","left":"25%","right":"%25"};
var divs_result={"position":"absolute","width":"100%","height":"82%","top":"10%","left":"0%","right":"0%"};
var divs_detail={"position":"absolute","width":"90%","height":"82%","top":"10%","left":"5%","right":"5%"};
var inputs={"position":"absolute","width":"inherit","height":"20px"};
var btns_submit={"position":"relative","top":"40%","right":"10%"};


//��ѯģ���ַ�����Դ
var p_query=new Array("p_queryPageId","p_queryHeaderId",
		"p_queryHeaderTagId","p_queryContentId",
		"p_queryWindowId","p_queryResultUlId");
var p_queryId={
		"p_queryPageId":"query_farm",                         //0��ѯҳ��
		"p_queryHeaderId":"query_farm_header",          //1ҳ�����
		"p_queryHeaderTagId":"farm_head_tag",        //2�л���ǩ
		"p_queryContentId":"query_content",             // 3��ѯҳ������
		"p_queryWindowId":"query_window",             //4��ѯ���봰��
		"p_queryResultUlId":"query_content_ul_list",   //5 ��ѯ����б�
		"":"",
		"":"",
		};

var p_queryTypes=new Array("��ҵũ��","��ֲ","��Ƶͼ��","��Դ��");
var p_queryTypeLen=p_queryTypes.length;
var p_keyStrings=new Array("������ؼ���","������ؼ���","������ؼ���","��������Դ��");


//�ϴ�ģ���ַ�����Դ
var e_upload=new Array("e_uploadPageId","e_uploadHeaderId",
		"e_uploadHeaderTagId","e_uploadContentId",
		"e_uploadWindowId","e_uploadUlId");
var e_uploadId={
		"e_uploadPageId":"upload_e",                         //0�ϴ�ҳ��
		"e_uploadHeaderId":"upload_e_header",          //1ҳ�����
		"e_uploadHeaderTagId":"e_head_tag",        //2�л���ǩ
		"e_uploadContentId":"upload_e_content",             // 3 ҳ������
		"e_uploadWindowId":"upload_e_window",             //4�ϴ�����
		"e_uploadUlId":"upload_e_ul_list",   //5 �ϴ�����
		"":"",
		"":"",
		};

var uploadTypes=new Array("������Ϣ","�豸��Դ","����","��Ƶͼ��");
var uploadTypeLen=uploadTypes.length;

var e_uploadTypes=new Array("��ҵũ��","������Դ","",""); 
var e_uploadSubTypes=new Array("��ҵ��Ϣ","ũ��","�ؿ�ע��"," ");

var uploadObj=new Array("��ҵ","ũ��","�ؿ�","�û�");
//var objArray=new Array(new Array());
var ent=new Array();
var farm=new Array("farm_id","farm_name","farm_reg_time","farm_addr","farm_contact","farm_intro");
var plot=new Array("plot_epc","plot_id","plot_name","plot_size","farm_id","farm_name","plot_reg_time");
var objArray=new Array(ent,farm,plot);
//����
var strArray,strList;
var array,list;













