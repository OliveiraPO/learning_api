import UserClient from "./UserClient"
export default class Models {
    getData(rgm)
    {
        // Aquisitando os dados
        const userClient = new UserClient()
        let data = userClient.get()
                        
        // Aplicando uma regra de negócio nos dados
        data = data.find(e => e.rgm === rgm)

        return data
    }
}