class cats  {
    constructor(nickname, name, phone, breed, food, sex){
    this.nickname = nickname;
    this.name = name;
    this.phone = phone;
    this.breed = breed;
    this.food = food;
    this.sex = sex;
        }
    };
    function saveCat(){
        let cat1 = new cats (document.getElementById('name').value, document.getElementById('owner').value,document.getElementById('number').value,document.getElementById('breed').value,document.getElementById('food').value,document.getElementById('sex').value);
        console.log(cat1);
    };
    