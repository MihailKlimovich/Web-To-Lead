function codeAddress()
        {
            var example_array = {
                'Carpets Hyundai' : 'HK007A1',
                'Carpets Kia' : 'HK008A2'

            };
            
            var select = document.getElementById("product-select");
            for(index in example_array) {
                select.options[select.options.length] = new Option(example_array[index], index);
            }
        }
window.onload = codeAddress;