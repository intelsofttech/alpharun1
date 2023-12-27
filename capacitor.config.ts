import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  //appId: 'com.omnivoxci.opensfert',
  //appId: 'com.alphaservices.alpha',
  //appId: 'com.omnivoxci.ultax',
  //appId: 'tech.alphaservices.devent',
  //appId: 'com.omnivoxci.ultraxpro',
  //appId: 'com.omnivoxci.isix',
  //appId: 'tech.alphaservices.devent',
  //appId: 'com.omnivoxci.bhci',
  //appId: 'tech.dinavana.evanplus',
  //appId: 'tech.kerlau.kerlau',
  //appId: 'com.iksox.iksox',
  //appId: 'com.iksox.maparoisse',
  appId: 'com.ozci.alphaone',
  appName: 'AphaOne',
  webDir: 'www',
  server: {
	hostname: "app.oz-ci.com",
    androidScheme: 'https'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
