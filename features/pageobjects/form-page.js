
class FormPage {
    /**
     * define selectors using getter methods
     */
    get tableTransaction() {
        return $('#table-trx');
    }

    get userId() {
        return $('#userId');
    }

    get userName() {
        return $('#userName');
    }

    get sourceBank() {
        return $('#soureBank');
    }

    get destBank() {
        return $('#destBank');
    }

    get amount() {
        return $('#amount');
    }
}

module.exports = new FormPage();