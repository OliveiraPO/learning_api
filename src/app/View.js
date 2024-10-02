export default function View (props) {
    
    const colorOfName = props.name === 'Vinícius Oliveira' ? 'blue' : 'red';
    
    const renderNameIfExist = (name,colorOfName) => {
        return name ? (<span style ={{color:colorOfName}}>Nome : {name} </span>):
                        (<span>Nome não informado</span>)
    }

    const renderRgmIfExist = (rgm) => {
        return rgm ? (<span>RGM : {rgm} </span>):
                        (<span>RGM não informado</span>)
    }

    const renderJobIfExist = (job) => {
        return job ? (<span>Emprego : {job} </span>):
                        (<span>Emprego não informado</span>)
    }

    return (
        <main>
            <h3>Aprendendo MVP</h3>
  
            {renderNameIfExist(props.name, colorOfName)}<br/>
            {renderRgmIfExist(props.rgm)}<br/>
            {renderJobIfExist(props.job)}    
        </main>
    );
}