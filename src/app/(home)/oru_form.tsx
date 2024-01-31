'use client';

import parseOruAction, { OruParseInterface } from '@/actions/parseOru';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

const OruForm = () => {
  const [oruFile, setOruFile] = useState<File | null>(null);
  const [response, parseOru] = useFormState<OruParseInterface, FormData>(
    parseOruAction,
    {
      data: null,
      success: false,
    },
  );

  return (
    <form
      className='flex flex-col gap-4'
      action={async (formData) => {
        if (!oruFile) {
          return;
        }
        formData.append('oru', oruFile);

        parseOru(formData);
      }}
    >
      <Input
        id={'oru'}
        type={'file'}
        className='text-base'
        required
        accept='.txt'
        onChange={(e) => {
          if (!e.target.files || e.target.files.length === 0) {
            return;
          }
          const files = e.target.files;
          setOruFile(files.item(0));
        }}
      />
      <Button type='submit'>Visualize</Button>
    </form>
  );
};
export default OruForm;
