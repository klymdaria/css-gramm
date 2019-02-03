;
(function () {
    "use strict";
    const sampleImages = [
        'https://images.unsplash.com/photo-1534095250017-417f574f313e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f942de829c97faa8b3503c2605102e5f&auto=format&fit=crop&w=1000&q=60',
        'https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1da640fd13656dc6e05c790366bd7c8b&auto=format&fit=crop&w=1000&q=60',
        'https://images.unsplash.com/photo-1441966055611-30ea468880a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfd9e0eee8cc52c8b9a57c06dda5fb50&auto=format&fit=crop&w=1000&q=60',
        'https://images.unsplash.com/23/parked-bike.JPG?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e254511a343f8f33b217fb98193ac57&auto=format&fit=crop&w=1000&q=60',
        'https://images.unsplash.com/photo-1429823040067-2c31b1d637ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66e6203a23411a1b8a09a6da85a33fca&auto=format&fit=crop&w=1000&q=60'
    ];

    const borderRange = document.getElementById('spacing');

    const inputs = document.querySelectorAll('.ba-filters input, #base, #spacing');
    const filtersSelect = document.getElementById('filters');

    const filters = {
        1977 : {
            sepia: "50%",
            hue: "-30deg",
            saturate: "140%"
        },
        amaro : {
            contrast: "110%",
            brightness: "120%",
            saturate: "130%",
            sepia: "35%"
        },
        lofi : {
            contrast: "140%",
            sepia: "35%"
        },
        xpro : {
            contrast: "125%",
            brightness: "175%",
            sepia: "45%",
            hue: "-5deg",
            saturate: "130%"
        }
    }

    filtersSelect.addEventListener('change', setFilter);

    function setFilter() {
        clearAll();

        let filterName = this.value;
        let newFilters = filters[filterName];


        for (var cssVar in newFilters) {
            const cssVarValue = newFilters[cssVar],
            rangeInput = document.getElementById(cssVar),
            rangeValue = cssVarValue.replace(/\D/g, "");

            setCssVar(cssVar, cssVarValue);
            rangeInput.value = rangeValue;
            setTextVar(cssVar, cssVarValue);
        }
        
    }

    // Add for each input listener for change range or value
    inputs.forEach(function (element) {0
        element.addEventListener('change', handleUpdate);
        element.addEventListener('input', handleUpdate);
    });

    function handleUpdate() {
        // this == range slider that is changed
        const varName = this.name; // for css var name
        const suffix = this.dataset.suffix || "";
        const varVal = this.value + suffix;

        setCssVar(varName, varVal);
        setTextVar(varName, varVal);


    }


    function setCssVar(varName, varVal) {
        document.documentElement.style.setProperty('--' + varName, varVal);
    }

    function setTextVar(varName, varVal) {
        const textVal = document.getElementById(varName + "-val");
        if (textVal) {
            textVal.textContent = varVal;
        }
    }

    const clearBtn = document.querySelector('[data-clear]');

    //Clear to default values
    clearBtn.addEventListener('click', clearAll);

    function clearAll() {

        inputs.forEach(function (element) {
            const defaultVal = element.getAttribute('value');

            element.value = defaultVal;

            const varName = element.name; // for css var name
            const suffix = element.dataset.suffix || "";
            const varVal = element.value + suffix;

            setCssVar(varName, varVal);
            setTextVar(varName, varVal);
        });

    }

    //Show random image when click on main image
    function getRandomImage() {
        let randomIndex = Math.random() * sampleImages.length;
        randomIndex = Math.floor(randomIndex);
        
        return sampleImages[randomIndex];
    }

    const filteredImg = document.querySelector('.ba-filtered-img');
    filteredImg.src = getRandomImage();

function showRandomImg(params) {
    filteredImg.src = getRandomImage();
}
    
    filteredImg.addEventListener('click', showRandomImg);
    

    showRandomImg();
})();