### What's Parcel?
Parceljs is a great bundler. What makes one unique is performance and output bundle size which is smaller comparing to other competitors, eg: Webpack etc... 

It is served preconfigured, so all you need to do is to run it, and all your assets are bundled and server properly.

With the approach of v2 there's a small configuration - however comparing to other tools Parcel definitely wins. You are not becoming overwhelmed with the amount of settings, values to be set, changing already existing keys, values what maked work with the tool more enjoyable. 

### Usage

To install Parcel install usinng npm manager:

    npm install -g parcel-bundler
    
or 
    
    yarn global add parcel-bundler

To project run or build, simply edit package.json file and add:

    {
      "scripts": {
        "dev": "parcel <your entry file>",
        "build": "parcel build <your entry file>"
      }
    }

Then, you will be able to run in development mode:

    yarn dev
    
or    
    
    npm run dev

To run in production mode

    yarn build
or

    npm run build

For more info, please refer to 

    https://parceljs.org/getting_started.html
