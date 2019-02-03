;(function () {
    "use strict";


    var valueResult = document.querySelector('.ba-filter__value');
    const borderRange = document.getElementById('spacing');
    const inputs = document.querySelectorAll('.ba-filters input, #base, #spacing');
    var spans = document.querySelectorAll('.ba-filter__value');
    

    //Ad for each input listener for change range or value
    inputs.forEach(function(element) {
        element.addEventListener('change', handleUpdate);
        element.addEventListener('input', handleUpdate);
    });
    

    function handleUpdate() {
        //this == range slider that is changed
        
        const suffix = this.dataset.suffix || "";
        const varName = this.name;
        const varVal = this.value + suffix;
        
        setCssVar(varName, varVal); 

        
    }

    function setCssVar(varName, VarVal) {
        document.documentElement.style.setProperty('--' + varName, VarVal );
    }
    
    const clearBtn = document.querySelector('[data-clear]');
    clearBtn.addEventListener('click', clearAll);



    function clearAll() {
        
        inputs.forEach(function (element) {
            const defaultVal = element.getAttribute('value');
    
            element.value = defaultVal; 
    
           const varName = element.name;
            const suffix = element.dataset.suffix || "";
            const varVal = element.value + suffix;
            
            setCssVar(varName, varVal); 
    
        })
        spans.forEach(function element() {
            const valueResult = document.querySelector('[id=' + varName + '_result]');

        valueResult.textContent = varVal;
        })
    }

    


})();