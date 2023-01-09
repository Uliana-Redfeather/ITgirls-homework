function formatDate(date){

    let end = Date.now();
    if (end - date <= 1000) {
        return("Прямо сейчас");
    } 
    if (end - date > 1000  && end - date <= 60 * 1000) {
        let n = (end - date) / 1000;
        return(n + " секунд назад")
    }
    if (end - date > 60 * 1000 && end - date <= 60 * 1000 *60) {
        n = (end - date) / (1000 * 60);
        return(n + " минут назад")
    }
    if (end - date > 60 * 60 * 1000) {
        d= new Date(date);
        var options = {year: '2-digit', month: '2-digit', day: '2-digit',hour:'2-digit',minute:'2-digit' };
        return d.toLocaleString('ru-RU', options)
    }
};

    
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400* 4 * 1000)) );
