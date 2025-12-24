"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import {siteConfig} from '@/config/site.config'


export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">

        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
          <div className="relative w-48 h-48 overflow-hidden rounded-lg border-4 border-primary shadow-xl bg-background">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
            {/* SaaS-style background effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">Mahmoud Rashad</div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
          As a Front-End Developer, I take a results-oriented approach and am passionate about creating visually appealing, high-performance web applications. 
          </p>
          <p className="text-muted-foreground leading-relaxed">
          My focus is on writing clean, maintainable code that not only meets functional requirements but also enhances the overall user experience. 
          </p>
          <p className="text-muted-foreground leading-relaxed">
          I enjoy the challenge of designing responsive layouts that adapt seamlessly across various devices and platforms. 
          </p>
          <p className="text-muted-foreground leading-relaxed">
          Dedicated to my professional growth, I actively seek to learn and implement the latest digital solutions while staying informed about industry trends and best practices to ensure my work remains at the forefront of innovation.
          </p>
        </CardContent>
    </Card>

    </motion.div>
  );
}

