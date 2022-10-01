import { Link } from "react-router-dom";
function Home() {
    return (

        <div class='row'>
            <div class='column'>
                <div class='card'>
                    <h1>BEM-VINDO A HOME</h1>
                    <img src={require('./fotobanco.png')} alt='Foto do Bank DM'></img>
                    </div>
                </div>
            </div>
    )       
            
}
export default Home;