import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import Image from '@/components/Image';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { getAllFilesFrontMatter } from '@/lib/mdx'; // Added import for getAllFilesFrontMatter

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pb-4 pt-6 md:space-y-5">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Satya
            </h1>
            <h2 className="mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
              Portfolio of a d
            </h2>
          </div>
          <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
            <Image
              src="/static/images/profile.jpg"
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="space-y-4 text-zinc-500 dark:text-slate-300">
          <div className="my-4 leading-loose">
            I completed my MBA in Finance at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
              href="https://www.sssihl.edu.in/"
              rel="noreferrer"
              target="_blank"
            >
              Sri Sathya Sai Institute of Higher Learning, Puttaparthi
            </a>
            , I am passionate about digital, new technologies and Web3 projects. During my
            professional experiences, I was able to discover many sectors of activity : Wines and
            Spirits at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-800 hover:decoration-blue-800/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
              href="https://www.pernod-ricard.com/"
              rel="noreferrer"
              target="_blank"
            >
              Pernod Ricard
            </a>{' '}
            as a Digital Project Manager & New Technologies at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40"
              href="https://www.microsoft.com/"
              rel="noreferrer"
              target="_blank"
            >
              Microsoft
            </a>{' '}
            as a Marketing Project Manager.
          </div>
        </div>
      </div>
      <div className="content mb-8">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Projects</h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-slate-300">
          A selection of projects I worked on in the past few years.
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  );
}
