import { printName, my, jq} from './mod2';

const NAME = "Rafal";

const tmpl = `<h1 css.blue>${printName('Rafal')}</h1> <br />
                <p>result is: ${my()}
                `;

jq();

document.body.innerHTML = tmpl;