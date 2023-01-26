class Validator  {
    constructor(Email,Domain,Date,Phone){
    this.Email = Email;
    this.Domain = Domain;
    this.Date = Date;
    this.Phone = Phone;
        };
        isEmail(){
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(this.Email) ==false){
                return console.log(false)
            }else{
                return console.log(true)
            }
        }
        isDomain(){
            let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
            if (regURL.test(this.Domain)==false){
                return console.log(false)}else{
                    return console.log(true)
                }
            }

        
        isDate(){
            if (Date.parse(this.Date)!=NaN){
                return console.log(true)
            }else{
                return console.log(false)
            }

        }
        isPhone(){
            let regPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
            if (regPhone.test(this.Phone)==false){
                return console.log(false)
            }else{
                return console.log(true)
            }
        }
    };

function check(){
let validator = new Validator('alisa@@mail.ru','itgirlschoolru','21','(910)123-45-67');
console.log(validator.isEmail());
console.log(validator.isDomain());
console.log(validator.isDate());
console.log(validator.isPhone());
}