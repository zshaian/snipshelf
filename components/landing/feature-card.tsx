import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon?: React.ElementType;
}

export const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <Card className="w-96 md:w-full md:h-full">
      <CardHeader>
        {/* header inner container for icon and heading*/}
        <div className="flex justify-start gap-4 items-center w-full">
          <div className="h-max w-max p-2 bg-gradient-to-tr from-[#1d1d1d] to-[#363636] rounded-md">
            {Icon && <Icon className="h-6 w-6 text-white" />}
          </div>
          <CardTitle className="flex items-center justify-center text-xl">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
