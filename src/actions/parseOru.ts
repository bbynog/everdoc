'use server';

export interface OruParseInterface {
  data: any;
  status: number | null;
}

const parseOru = async (
  prevState: OruParseInterface,
  formData: FormData,
): Promise<OruParseInterface> => {
  console.log('formData', formData);
  try {
    return {
      status: 200,
      data: { success: true },
    };
  } catch (e) {
    return {
      status: 500,
      data: { success: false, error: e },
    };
  }
};

export default parseOru;
