import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StreamCard = ({ icon: Icon, title, description, outcomes, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20 mb-4">
            <Icon className="h-7 w-7 text-secondary-foreground" />
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col space-y-4">
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
          {outcomes && outcomes.length > 0 && (
            <div className="space-y-2">
              <span className="text-sm font-semibold text-foreground">Key Outcomes:</span>
              <div className="flex flex-wrap gap-2">
                {outcomes.map((outcome, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {outcome}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StreamCard;