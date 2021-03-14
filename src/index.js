module.exports = function toReadable(number) {
    let str = '';
    if (number < 10) {
        str = add1xn(number);
    } if (10 <= number && number < 20) {
        str = add2xn(number);
    } if (20 <= number && number < 100) {
        if (number % 10 == 0) {
            str = add10xn(number);
        } else {
            str = add10xn((number - (number % 10))) + ' ' + add1xn((number % 10));
        }
    } if (100 <= number && number < 1000)
        if (number % 100 == 0) {
            str = add1xn(number / 100) + ' hundred';
        } else {
            str = add1xn(Math.trunc(number / 100)) + ' hundred ' + toReadable(number % 100);
        }


    function add1xn(number) {
        switch (number) {
            case 0:
                return 'zero';
                break;
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;
            case 7:
                return 'seven';
                break;
            case 8:
                return 'eight';
                break;
            case 9:
                return 'nine';
                break;

            default:
                break;
        }
    }

    function add2xn(number) {
        switch (number) {
            case 10:
                return 'ten';
                break;
            case 11:
                return 'eleven';
                break;
            case 12:
                return 'twelve';
                break;
            case 13:
                return 'thirteen';
                break;
            case 14:
                return 'fourteen';
                break;
            case 15:
                return 'fifteen';
                break;
            case 16:
                return 'sixteen';
                break;
            case 17:
                return 'seventeen';
                break;
            case 18:
                return 'eighteen';
                break;
            case 19:
                return 'nineteen';
                break;

            default:
                break;
        }
    }

    function add10xn(number) {
        switch (number) {
            case 20:
                return 'twenty';
                break;
            case 30:
                return 'thirty';
                break;
            case 40:
                return 'forty';
                break;
            case 50:
                return 'fifty';
                break;
            case 60:
                return 'sixty';
                break;
            case 70:
                return 'seventy';
                break;
            case 80:
                return 'eighty';
                break;
            case 90:
                return 'ninety';
                break;

            default:
                break;
        }
    }

    return str;
}