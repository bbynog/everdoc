import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import OruForm from './oru_form';

const OruCard = () => {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Upload Patient's Data</CardTitle>
        <CardDescription>
          Visualize patient information based on data provided
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OruForm />
      </CardContent>
    </Card>
  );
};

export default OruCard;
