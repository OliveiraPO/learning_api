export default class Presenter{
    constructor(model, paramsOfUrl){
        this.model = model
        this.paramsOfUrl = paramsOfUrl
        this.data = {}
    }

    execute(){
        //Captando os dados da url
        const rgm = this.paramsOfUrl.get('rgm')

        //Passandop os dados da url para a minha model
        //Na model estou acessando os dados de uma api e estou aplicando
        //uma regra de negócio
        this.data = this.model.getData(rgm)
    }

    get(){
        //Retorna os dados da minha constante no arquivo page.js
        return this.data
    }


}