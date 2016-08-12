import bigInt from "big-integer";

export function getCollatzCount(num, base) {
    num = bigInt(num, base);

    let c = 0;
    while (!num.equals(1)) {
        if (num.isEven()) {
            num = num.divide(2);
        }
        else {
            num = num.multiply(3).add(1);
        }
        c++;
    }

    return c;
}
