import Link from '@/components/Link'
//import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const videoSrc = '/static/videos/blitz.mp4'
  return (
    <>
      <div className="dark:divide-gray-1000 divide-y divide-gray-200">
        <div className="space-y-2 pb-4 pt-6 md:space-y-8">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Boğaziçi Blitz
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          {/* Video Implementation
          <video width="640" height="360" autoPlay loop muted className="mx-auto">
            <source src={videoSrc} type="video/mp4" />
            <track src="/static/vtt/blitz.vtt" kind="captions" label="English" default />
          </video>*/}
          {/*<iframe width="560" height="315"
            src="https://www.youtube.com/embed/rroHyCnHvpg?si=KtMaa4AAIRu4tpYa"          
          ></iframe>*/}
          {/* Main Foto */}
          <Image
            src="/static/images/takim-bogazicibuz.jpg" // The path of your image
            alt="Bogazici Buz"
            width={640} // Specify the width
            height={360} // Specify the height
            layout="responsive" // This is optional; it makes the image adjust to the parent's width
            className="mx-auto" // Note: Tailwind CSS classes may not work as expected with Next.js Image
          />
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-500">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Devamını Oku: "${title}"`}
                        >
                          Devamını Oku &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
