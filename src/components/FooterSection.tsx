import React from 'react';
import {Zap,Layers} from 'lucide-react';
import {CodeXml} from 'lucide-react';

interface DataProp {
  icon: React.ReactNode;
  title: string;
  description: string;

}
export const FooterSection = ({data}: {data: DataProp[]}) => {

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">
        Why this starter?
      </h1>

    <div className="grid grid-cols-3 gap-1  p-10">
      
      {
        data.map((item,index)=>(
          <div
          key={index}
          className="rounded-xl border p-4">
            <div className="item-primary">{item.icon}</div>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-muted-foreground">
              {item.description}
        </p>
      </div>))
      }
    </div>
    </div>
  )
}
export default FooterSection