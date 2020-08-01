var options = new Object();
function submit (){
    var charger = new Object();
    var phone = new Object();
    var tablet = new Object();
    var phone_name = new Array();
    var phone_price = new Array();
    var tablet_name = new Array();
    var tablet_price = new Array();
    //phone
    if (document.getElementById("Compact").checked == true){
        console.log("Compact")
        phone_name.push(" Comapct ➡ Price: 29.99$")
        phone_price.push(29.99)
    }
    if (document.getElementById("Clam Shell").checked == true){
        console.log("Clam Shell")
        phone_name.push(" Clam Shell ➡ Price: 49.99$")
        phone_price.push(49.99)
    }
    if (document.getElementById("RoboPhone – 5-inch screen and 64GB memory").checked == true){
        console.log("RoboPhone – 5-inch screen and 64GB memory")
        phone_name.push(" RoboPhone – 5-inch screen and 64GB memory ➡ Price: 199.99$")
        phone_price.push(199.99)
    }
    if (document.getElementById("RoboPhone – 6-inch screen and 256GB memory").checked == true){
        console.log("RoboPhone – 6-inch screen and 256GB memory")
        phone_name.push(" RoboPhone – 6-inch screen and 256GB memory ➡ Price: 499.99$")
        phone_price.push(499.99)
    }
    if (document.getElementById("Y-Phone Standard – 6-inch screen and 64GB memory").checked == true){
        console.log("Y-Phone Standard – 6-inch screen and 64GB memory")
        phone_name.push(" Y-Phone Standard – 6-inch screen and 64GB memory ➡ Price: 549.99$")
        phone_price.push(549.99)
    }
    if (document.getElementById("Y-Phone Deluxe – 6-inch screen and 256GB memory").checked == true){
        console.log("Y-Phone Deluxe – 6-inch screen and 256GB memory")
        phone_name.push(" Y-Phone Deluxe – 6-inch screen and 256GB memory ➡ Price: 649.99$")
        phone_price.push(649.99)
    }
    //tablet
    if (document.getElementById("RoboTab – 8-inch screen and 64GB memory").checked == true){
        console.log("RoboTab – 8-inch screen and 64GB memory")
        tablet_name.push(" RoboTab – 8-inch screen and 64GB memory ➡ Price: 149.99$")
        tablet_price.push(149.99)
    }
    if (document.getElementById("RoboTab – 10-inch screen and 128GB memory").checked == true){
        console.log("RoboTab – 10-inch screen and 128GB memory")
        tablet_name.push(" RoboTab – 10-inch screen and 128GB memory ➡ Price: 299.99$")
        tablet_price.push(299.99)
    }
    if (document.getElementById("Y-Tab Standard – 10-inch screen and 128GB memory").checked == true){
        console.log("Y-Tab Standard – 10-inch screen and 128GB memory")
        tablet_name.push(" Y-Tab Standard – 10-inch screen and 128GB memory ➡ Price: 499.99$")
        tablet_price.push(499.99)
    }
    if (document.getElementById("Y-Tab Deluxe – 10-inch screen and 256GB memory").checked == true){
        console.log("Y-Tab Deluxe – 10-inch screen and 256GB memory")
        tablet_name.push(" Y-Tab Deluxe – 10-inch screen and 256GB memory ➡ Price: 599.99$")
        tablet_price.push(599.99)
    }
    //sim
    if (document.getElementById("nosim").checked == true){
        console.log("nosim")
        options.sim = "No SIM Selected"
        options.simPrice = 0.00
    }
    if (document.getElementById("sim").checked == true){
        console.log("sim")
        options.sim = "Pay as you go"
        options.simPrice = 9.99
    }
    //case
    if (document.getElementById("standard").checked == true){
        console.log("standard")
        options.case = "Standard"
        options.casePrice = 0.00
    }
    if (document.getElementById("luxury").checked == true){
        console.log("luxury")
        options.case = "Luxury"
        options.casePrice = 50.00
    }
    //charger
    if (document.getElementById("car").checked == true){
        console.log("car")
        charger.chargerCar = "Car"
        charger.chargerCarPrice = 19.99
    }
    if (document.getElementById("home").checked == true){
        console.log('home')
        charger.chargerHome = "Home"
        charger.chargerHomePrice = 15.99
    }
    if (charger["chargerCar"] == undefined){
        charger.chargerCar = "Car charger not selected"
        charger.chargerCarPrice = 0
    }
    if (charger["chargerHome"] == undefined){
        charger.chargerHome = "Home charger not selected"
        charger.chargerHomePrice = 0
    }
    ///
    phone.phone_name = phone_name;
    phone.phone_price = phone_price;
    tablet.tablet_name = tablet_name;
    tablet.tablet_price = tablet_price;
    options.phone = phone;
    options.tablet = tablet;
    options.charger = charger;
    console.log(options)
    localStorage.setItem("result", JSON.stringify(options))
    myVar = setTimeout(function myFunction(){
        window.location.replace("output.html")
    }, 1)
}
