class ValidatorStatic  {
        static isEmail(email){
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(email) ==false){
                return console.log(false)
            }else{
                return console.log(true)
            }
        }
        static isDomain(domain){
            let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
            if (regURL.test(domain)==false){
                return console.log(false)}else{
                    return console.log(true)
                }
            }

        
        static isDate(date){
            if (Date.parse(date)!=NaN){
                return console.log(true)
            }else{
                return console.log(false)
            }

        }
        static isPhone(phone){
            let regPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
            if (regPhone.test(phone)==false){
                return console.log(false)
            }else{
                return console.log(true)
            }
        }
    };

function check(){
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));}