'use server';

import { env } from '@/env';
import { Hl7Message, Hl7Parser } from '@manhydra/hl7-parser';

export interface OruParseInterface {
  data: any;
  success: boolean;
}

const parseOru = async (
  prevState: OruParseInterface,
  formData: FormData,
): Promise<OruParseInterface> => {
  try {
    const oruFormData = formData.get('oru') as File;
    const oruFormDataText = await oruFormData.text();

    const hl7Parser = new Hl7Parser();
    const hl7Model = hl7Parser.getHl7Model(oruFormDataText);

    // console.log(JSON.stringify(hl7Model, null, 4));

    return {
      data: { oru: JSON.stringify(hl7Model) },
      success: true,
    };
  } catch (e) {
    return { data: null, success: false };
  }
};

export default parseOru;
