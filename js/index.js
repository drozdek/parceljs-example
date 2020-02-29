import { printName, my, jq } from './mod2';

const NAME = "Rafal";

const tmpl = `<h1>${printName(NAME)}</h1>
              <p>result is: ${my()}</p>
              <img src="https://www.google.com/logos/doodles/2020/leap-year-2020-6753651837108301-law.gif" />
            `;

// add class to body tag
jq();

document.body.innerHTML = tmpl;