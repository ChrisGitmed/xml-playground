import { Router } from 'express';
const router = Router();

import {
  create as createXml,
  convert as convertXml,
} from 'xmlbuilder2';


// Health Check
router.get(
  '/healthcheck',
  async (req, res) => res.status(200).json({ message: 'Success' }),
);


// JS to XML
router.get(
  '/js-to-xml',
  async (req, res, next) => {
    // Start with JS
    const obj = {
      root: {
        '@att': 'val',
        foo: {
          bar: 'foobar'
        },
        baz: {}
      }
    };

    // Convert the JS to XML
    const document = createXml(obj);
    const xml = document.end({ prettyPrint: true });

    // Return the XML
    return res
      .status(200)
      .type('application/xml')
      .send(xml)
  }
)


// XML to JS
router.get(
  '/xml-to-js',
  async (req, res, next) => {
    // Start with XML
    const originalXml = '<root att="val"><foo><bar>foobar</bar></foo></root>';

    // Convert the XML to JS
    const convertedXml = convertXml(originalXml, { format: "object" });

    // Return the JS
    return res.status(200).json(convertedXml)
  }
)




export { router };
