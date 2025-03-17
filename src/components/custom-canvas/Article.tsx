'use client';

import * as React from 'react';
import { ComponentProps, UniformText } from '@uniformdev/canvas-next-rsc/component';
import Image from '@/components/elements/Image';
import ModuleLayout from '@/components/elements/ModuleLayout';
import Reveal from '@/components/elements/Reveal';

export type ArticleParameters = {
  title: string;
  headerImageDescription: string;
  headerImageUrl: string;
  articleTextPreHighlight: string;
  highlightText: string;
  articleTextPostHighlight: string;
  authorName: string;
  authorUrl: string;
  facebookLink: string;
  twitterLink: string;
  linkedInLink: string;
  publishDate: string;
};

type ArticleProps = ComponentProps<ArticleParameters>;

const formatDate = (dateString: string | null) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const ConvertedArticle: React.FC<ArticleProps> = ({
  component,
  context,
  headerImageDescription,
  headerImageUrl,
  highlightText,
  articleTextPreHighlight,
  articleTextPostHighlight,
  authorName,
  authorUrl,
  facebookLink,
  twitterLink,
  linkedInLink,
  publishDate,
}) => {
  const mtValue = headerImageUrl ? '-mt-32' : '-mt-40';
  const mtValueLarge = headerImageUrl ? '-mt-10' : '-mt-20';

  return (
    <ModuleLayout name="article">
      <div className="w-screen max-w-[100vw] lg:w-auto lg:max-w-none">
        <div className="flex w-full flex-col items-center bg-gray-100 lg:pt-10">
          <div className="flex w-full justify-center pt-8">
            {headerImageUrl && (
              <Image
                src={headerImageUrl}
                alt={headerImageDescription || 'Article image'}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '40vh' }}
                className="h-80 object-cover lg:h-[500px] lg:rounded-lg"
                priority
              />
            )}
            {!headerImageUrl && (
              <Image
                src={'/article_image.png'}
                alt="Article Image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '300px' }}
                className="h-72 max-w-6xl object-cover lg:h-[500px] lg:rounded-lg"
              />
            )}
          </div>
          <div
            className={`-mt-3 ${mtValue} flex max-w-full flex-col gap-4 rounded-xl ${false ? 'bg-brand-charcoal-800 text-gray-300' : 'bg-white'} lg: p-5 md:p-8${mtValueLarge}`}
          >
            <h1 className="text-display-2 font-display sm:text-display2 text-3xl font-bold">
              <UniformText parameterId="title" component={component} context={context} placeholder="Article Title" />
            </h1>
            <div>
              <Reveal>
                <div className="flex items-center justify-between">
                  <div
                    className={`font-body text-body flex flex-col justify-center ${false ? 'text-gray-300' : 'text-gray-600'} md:flex-row md:gap-5`}
                  >
                    <a href={`/people/${authorUrl}`}>By {authorName}</a>
                    {publishDate && <p>{formatDate(publishDate)}</p>}
                  </div>
                  <div className="flex gap-3">
                    {facebookLink && (
                      <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                        <Image src={'/facebook.png'} alt="Facebook" width={24} height={24} />
                      </a>
                    )}
                    {twitterLink && (
                      <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                        <Image src={'/x_logo_black.png'} alt="X" width={24} height={24} unoptimized />
                      </a>
                    )}
                    {linkedInLink && (
                      <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                        <Image src={'/linkedin.png'} alt="LinkedIn" width={24} height={24} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
            <hr className="h-0.5 bg-gray-500 " />
            <Reveal>
              <div className="max-w-[100vw]">
                <div
                  className={`font-body text-body flex flex-col gap-3 ${false ? 'text-gray-300' : 'text-brand-charcoal-800'} lg:gap-7`}
                >
                  <Reveal>
                    <div
                      className={`prose-content-dark prose ${false ? 'prose-content-light' : 'prose-content-dark'}`}
                      dangerouslySetInnerHTML={{
                        __html: articleTextPreHighlight,
                      }}
                    />
                  </Reveal>
                  {highlightText && (
                    <Reveal>
                      <div className="flex w-full justify-center">
                        <div className="flex max-w-sm flex-col gap-4">
                          <hr className="h-0.5 bg-gray-500 " />
                          <p className="font-display text-h3 leading-10">
                            <UniformText
                              parameterId="highlightText"
                              component={component}
                              context={context}
                              placeholder="Highlight Text"
                            />
                          </p>
                          <hr className="h-0.5 bg-gray-500 " />
                        </div>
                      </div>
                    </Reveal>
                  )}
                  {articleTextPostHighlight && articleTextPostHighlight != '<p><br></p>' && (
                    <Reveal>
                      <div>
                        <div>
                          <div
                            className={`prose-content-dark prose ${false ? 'prose-content-light' : 'prose-content-dark'}`}
                            dangerouslySetInnerHTML={{
                              __html: articleTextPostHighlight,
                            }}
                          />
                        </div>
                      </div>
                    </Reveal>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
};

export default ConvertedArticle;
