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

    }

    createAccount(customerId, fromAccountId, type = 1){

    }

    getAccountDetail(accountId){

    }

    transferFunds(fromAccountId, toAccountId, amount){

    }
} 

export default new ParabankService()