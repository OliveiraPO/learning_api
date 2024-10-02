'use client'

import Models from "./Models"
import View from "./View"
import Presenter from "./Presenter"
import { useSearchParams } from "next/navigation";

export default function Home() {
  //Instanciando a classe Presenter
  const presenter = new Presenter(
    new Models(),
    useSearchParams()
  )

//Executando o codigo principal do Presenter
presenter.execute()

//Retornando os dados para a View
const data = presenter.get()
    
//Aplicando as regras de renderização da view
  return (
    <View 
      name={data.name}
      rgm={data.rgm}
      job={data.job}
    />
  );
}
