import styles from 'styles/newslist.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function NewsList ({ posts }){
    return (
        <div>
            <h1>NEWS</h1>
            <div className={styles.gridContainer}>
                
                {posts.map(({ title, slug, eyecatch }) => (
                    <article className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <figure>
                            <Image
                            src={eyecatch.url}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            sizes="(min-width: 1152px) 576px, 50vw"
                            placeholder="blur"
                            blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>
                        <h2>{title}</h2>
                        
                    </Link>
                    </article>     
                ))}
        
            </div>
        </div>
    )
}


/*
export default function NewsList ({ articles }){
    return (
        <div className={styles.newsListContainer}>
            <h1>NEWS</h1>
            {articles.map((article, index) => (
                <div key={index} className={styles.newsItem}>
                    <h2 className={styles.newsTitle}>{article.title}</h2>
                    <p className={styles.newsSummary}>{article.summary}</p>
                    <a href={article.link} className={styles.readMore}>Read more</a>
                </div>
            ))}
        </div>
    )
}

export function News({ children }){
    return (
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}
export function NewsLeft({ children }){
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export function NewsCenter({ children }){
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export function NewsRight({ children }){
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}
export function TwoColumnSidebar({ children }){
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}
*/