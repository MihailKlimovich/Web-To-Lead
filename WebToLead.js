function codeAddress() {
    console.log('123456');
    var product_array = {
        HK007A1: "Carpets Hyundai",
        HK008A2: "Carpets Kia",
        L005A1: "Carpets Lada",
        R008A1: "Carpets Renault",
        VAG010A2: "Carpets Skoda",
        VAG009A1: "Carpets Volkswagen",
        VAG007E4: "CFNA",
        VAG008E5: "CFNB",
        VAG005E2: "CFW",
        VAG006E3: "CWVA",
        VAG004E1: "CZCA",
        HK006E2: "G4FG",
        HK005E1: "G4LC",
        R007E3: "H4M",
        HK006E2: "G4FG",
        HK005E1: "G4LC",
        R007E3: "H4M",
        HK003C3: "Hyundai Accent",
        HK004C4: "Hyundai Solaris",
        R006E2: "K4M",
        R005E1: "K7M",
        HK001C1: "Kia Rio",
        HK002C2: "Kia Rio X-Line",
        L001C1: "Lada Vesta",
        L002C2: "Lada Xray",
        MI001A1: "Phone holder Xiaomi",
        R001C1: "Renault Logan",
        R002C2: "Renault Logan Stepway",
        R003C3: "Renault Sandero",
        R004C4: "Renault Sandero Stepway",
        VAG003C3: "Skoda Rapid",
        L004E2: "VAZ-21129",
        L003E1: "VAZ-21179",
        VAG002C2: "Volkswagen Polo 2021",
        VAG001C1: "Volkswagen Polo Sedan",
    };

    var select = document.getElementById("00N8c00000dUEbv");
    for (index in product_array) {
        select.options[select.options.length] = new Option(
            product_array[index],
            index
        );
    }
}
window.onload = codeAddress;
