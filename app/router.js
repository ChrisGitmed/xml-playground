import { Router } from 'express';
import { readFile } from 'fs/promises';

import {
  XMLParser,
  XMLBuilder,
} from 'fast-xml-parser';
import {
  create as createXml,
  convert as convertXml,
} from 'xmlbuilder2';

import { xmlObject } from './sample.js';

const router = Router();


// Health Check
router.get(
  '/healthcheck',
  async (req, res) => res.status(200).json({ message: 'Success' }),
);


// JS to XML (using xmlbuilder2)
router.get(
  '/js-to-xml',
  async (req, res, next) => {
    // Convert the JS to XML
    const document = createXml(xmlObject);
    const xml = document.end({ prettyPrint: true });

    // Return the XML
    return res
      .status(200)
      .type('application/xml')
      .send(xml)
  }
)


// XML to JS (using xmlbuilder2)
router.get(
  '/xml-to-js',
  async (req, res, next) => {
    // Read from the sample XML file
    const fileBuffer = await readFile('app/sample.xml');

    // Convert the file buffer to an XML string
    const originalXml = fileBuffer.toString('utf-8');

    // Convert the XML to JS
    const convertedXml = convertXml(originalXml, { format: 'object' });

    // Return the JS
    return res.status(200).json(convertedXml)
  }
)


// JS to XML (using fast-xml-parser)
router.get(
  '/js-to-xml-2',
  async (req, res, next) => {
    // Convert the JS to XML
    const xmlBuilder = new XMLBuilder({
      format: true, // By default, parsed XML is single line XML string. By format: true, you can format it for better view.
    });
    const xmlContent = xmlBuilder.build(xmlObject);

    // Return the XML
    return res
      .status(200)
      .type('application/xml')
      .send(xmlContent)
  }
)


// XML to JS (using fast-xml-parser)
router.get(
  '/xml-to-js-2',
  async (req, res, next) => {
    // Read from the sample XML file
    const fileBuffer = await readFile('app/sample.xml');

    // Convert the file buffer to an XML string
    const xmlString = fileBuffer.toString('utf-8');

    // Convert the XML to JS
    const xmlParser = new XMLParser();
    const parsedObject = xmlParser.parse(xmlString);

    // Return the JS
    return res.status(200).json(parsedObject);
  }
)





export { router };
