app.value('specs',[{"id":"brand","name":"Thương hiệu"},{"id":"os","name":"Hệ điều hành"},{"id":"osver","name":"Phiên bản HĐH",a:true},{"id":"scrsize","name":"Cỡ màn hình",'unit':'inches'},{"id":"scrtek","name":"Công nghệ màn hình",a:true},{"id":"psbrand","name":"NSX Chipset",a:true},{"id":"spd","name":"Tốc độ chip",a:true},{"id":"pscore","name":"Số lõi Chip",a:true},{"id":"ram","name":"RAM",a:true,'unit':'GB'},{"id":"sd","name":"Bộ nhớ trong",a:true,'unit':'GB'},{"id":"cmrsau","name":"Camera Sau",a:true,'unit':'MP'},{"id":"cmrtrc","name":"Camera trước",a:true,'unit':'MP'},{"id":"chatlieu","name":"Chất liệu",a:true},{"id":"pin","name":"Pin",a:true,'unit':'mAh'}]);
app.value('quickFilters',[
  {name:'Thương hiệu lớn',spec:'brand',value:'iPhone,Samsung,Sony,LG,HTC'.split(',')},
  {name:'Android',spec:'os',value:['Android']},
  {name:'Camera sau > 13 MP',spec:'cmrsau',value:13},
  {name:'Camera trước > 5 MP',spec:'cmrtrc',value:5},
  {name:'Màn hình lớn (5 inches)',spec:'scrsize',value:5},
  {name:'Hiển thị tốt',spec:'scrtek',value:'IPS LCD,Super AMOLED,Quantum IPS,AMOLED,Super LCD'.split(',')},
  {name:'Chip tốt',spec:'psbrand',value:'Samsung,Qualcomm'.split(',')},
  {name:'Tốc độ nhanh',spec:'spd',value:1.7},
  {name:'Ram 2 GB',spec:'ram',value:2},
  {name:'Pin khủng (3.000 mAh)',spec:'pin',value:3000},
]);
app.value('phonesValue',allPhones.map(function(phone){
    if(['htc','lg','oppo','zte','wiko'].indexOf(phone.brand) > -1)
        phone.brand=phone.brand.toUpperCase();
    phone.brand=phone.brand[0].toUpperCase()+phone.brand.slice(1);
    phone.brand=phone.brand.replace('Iphone','iPhone');
    phone.name=phone.brand+' '+phone.model;
    
    phone.os=phone.os
      .replace('ios','iOS')
      .replace('android','Android')
      .replace('wp','Windows Phone')
      .replace('0','Khác');
    
    phone.scrtek=phone.scrtek
      .replace('ipslcd','IPS LCD')
      .replace('slcd','Super LCD')
      .replace('samoled','Super AMOLED')
      .replace('qips','Quantum IPS')
      .replace('amoled','AMOLED')
      .replace('tft','TFT')
      .replace('lcd','LCD');
    //apple,Samsung,qualcomm,mediatek,intel,hisilicon,spreadtrum,arm,0
    phone.psbrand=phone.psbrand
      .replace('apple','Apple')
      .replace('Samsung','Samsung')
      .replace('qualcomm','Qualcomm')
      .replace('mediatek','MediaTek')
      .replace('intel','Intel')
      .replace('hisilicon','HiSilicon')
      .replace('spreadtrum','Spreadtrum')
      .replace('arm','ARM')
      .replace('0','Không có');
      
    phone.chatlieu=phone.chatlieu
      .replace('metal','Kim loại')
      .replace('glass','Kính')
      .replace('plastic','Nhựa');
    
    
    return phone;
}));