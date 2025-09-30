class ParabankService {

    constructor(){
        this.base = 'https://parabank.parasoft.com/parabank/services/bank'
    }

    loginAPI(username, password){
        return cy.request({
            method : 'GET',
            url : `${this.base}/login/${username}/${password}`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'}
        })
    }

    getAccounts(customerId){
        return cy.request({
            method : 'GET',
            url : `${this.base}/customers/${customerId}/accounts`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'}
        })
    }

    createAccount(customerId, fromAccountId, type = 1){
        return cy.request({
            method : 'POST',
            url : `${this.base}/createAccount`,
            qs: {customerId, fromAccountId, newAccountType : type},
            headers: { 'Accept': 'application/json'}
        })
    }

    getAccountDetail(accountId){

    }

    transferFunds(fromAccountId, toAccountId, amount){

    }
} 

export default new ParabankService()