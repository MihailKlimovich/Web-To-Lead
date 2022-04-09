function codeAddress()
        {
            var example_array = {
                ValueA : 'Text A',
                ValueB : 'Text B',
                ValueC : 'Text C'
            };
            
            var select = document.getElementById("product-select");
            for(index in example_array) {
                select.options[select.options.length] = new Option(example_array[index], index);
            }
        }
window.onload = codeAddress;