import { Caro } from '../utils';
export function Car(props) {
    let car1 = new Caro("Nave", "Mazda")
    return(
        <div>
            {car1.getInfo()}
        </div>
    )
}