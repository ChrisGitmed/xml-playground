import { Router } from 'express';
import { readFile } from 'fs/promises';

import {
  create as createXml,
  convert as convertXml,
} from 'xmlbuilder2';


const router = Router();

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
    // Read from the sample XML file
    const fileBuffer = await readFile('app/sample.xml');

    // Convert the file buffer to an XML string
    const originalXml = fileBuffer.toString('utf-8');

    // Convert the XML to JS
    const convertedXml = convertXml(originalXml, { format: "object" });

    // Return the JS
    return res.status(200).json(convertedXml)
  }
)




export { router };
