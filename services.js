app.service('phones',function(phonesValue,specs,quickFilters){
  this.all=phonesValue;
  this.all=this.all.map(function(phone){
    phone.specs=specs.map(function(spec){return {unit:spec.unit,field:spec.name,value:phone[spec.id]};});
    return phone;
  });
  this.specs=specs.map(function(spec){
    spec.values=allPhones.map(function(phone){
      return phone[spec.id];
    })
    .filter(function(item,pos,self){return self.indexOf(item) == pos;});
    if(spec.values.filter(isNumber).length==spec.values.length){
      if(spec.values.filter(isInt).length==spec.values.length)
        spec.step=1;
      else
        spec.step=0.1;
      spec.type='number';
      spec.min=Math.min.apply(Math,spec.values);
      spec.max=Math.max.apply(Math,spec.values);
      spec.val=spec.min;
    }
    else{
      spec.type='checkbox';
      spec.options=spec.values.map(function(val){
        return {name:val,checked:true};
      });
    }
    return spec;
  });
  
  this.specsCheckAll=function(pos){
    specsIsCheckAll=(this.specsIsCheckAll(pos));
    this.specs[pos].options=this.specs[pos].options
      .map(function(option){option.checked=!specsIsCheckAll;return option;});
  }
  this.specsIsCheckAll=function(pos){
    return this.specs[pos].options.length==this.specs[pos].options
      .filter(function(option){return option.checked}).length;
  }
  this.maxBudget=30;
  
  this.quickFilters=quickFilters;
  this.applyQuickFilter=function(){
    for(i=0;i < this.quickFilters.length;i++){
    var quickFilter=this.quickFilters[i];
    this.specs=this.specs
      .map(function(spec){
        if(spec.id==quickFilter.spec){
          
          if(spec.type=='number')spec.val=quickFilter.checked?quickFilter.value:spec.min;
          if(spec.type=='checkbox')spec.options=spec.options
            .map(function(option){
              option.checked=(!quickFilter.checked || quickFilter.value.indexOf(option.name) >-1);
              return option;
            });
            
        }
        return spec;
      });
    }
    this.update();
  };
  this.inQuickFilter=function(filter){}
  this.update=function(){
    this.valid=this.all;
    
    var maxBudget=this.maxBudget;
    var specs=this.specs;
    
    this.valid=this.valid.filter(function(phone){
      if(phone.price > maxBudget)return false;//lọc theo giá
      for(i=0;i<specs.length;i++){
				spec=specs[i];
				if(
					(spec.type=='number' && spec.val > phone[spec.id])||
					(spec.type=='checkbox' &&
						spec.options
							.filter(function(option){return option.checked})
							.map(function(option){return option.name})
							.indexOf(phone[spec.id])==-1
					)
				){return false;}
			}
      return true;
    });
    return;
  };
});
