import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { cn } from './utils';
import { Suspense } from 'react';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }}/>

const Icon = ({ name,className ,...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return(  <>
  <Suspense fallback={fallback}>
  <LucideIcon {...props} className={cn( className )} />
  </Suspense>
  </>)
};

export default Icon;