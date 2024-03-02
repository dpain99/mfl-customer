export function formatCurrencyVND(currency:number):string {
    let x;
    x = currency.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    return x;
}