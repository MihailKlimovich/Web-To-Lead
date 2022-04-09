function codeAddress()
        {
            var example_array = {
                'HK007A1' : 'Carpets Hyundai',
                'HK008A2' : 'Carpets Kia'

            };
            
            var select = document.getElementById("product-select");
            for(index in example_array) {
                select.options[select.options.length] = new Option(example_array[index], index);
            }
        }
window.onload = codeAddress;