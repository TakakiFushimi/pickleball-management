import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero";
import PostBody from 'components/post-body';
import Contact from 'components/contact';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
import eyecatch from 'images/image_play2.jpeg'


export default function Form() {
    return (
        <Container>
            <Meta
             pageTitle="contact"
             pageDesc="About development activities"
             pageImg={eyecatch.src}
             pageImgW={eyecatch.width}
             pageImgH={eyecatch.height}
            />

            <Hero title="Contact" subtitle="Get in Touch with Us" />
            
            <figure>
                <Image
                src={eyecatch}
                alt=""
                layout="responsive"
                sizes="(min-width: 1152px) 1152px, 100vw"
                priority
                placeholder="blur"
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                <PostBody>
                    <p>
                    Cube's specialty is manufacturing, and we continue to propose creative solutions that connect with society and the environment by combining various technologies, from 3-D to 2-D modeling, programming and design.
                    </p>
                    <h2>What we aim for in manufacturing</h2>
                    <p>
                    In manufacturing, I am in charge of a wide range of things from data analysis to creativity. My goal is to realize proposals that match the user's needs while incorporating new things. There are many many developments and offerings, but I am particularly focused on working to refine them.
                    </p>
                    <p>
                    We do not simply put things into shape, but we create things while valuing the process of making them and why we did it that way. Each time, we face and create “objects” with a problem-solving theme, and by receiving feedback, we are able to put into words the confusion within ourselves and answer the “question.
                    </p>
                    <h3>Challenge to something new</h3>
                    <p>
                    By creating something different from what I have done before, I become attached to it. So I try to incorporate what interests me, even if it is a small thing, so that I can create something good. I would like to continue making things that create new things from small hints.
                    </p>

                    <h2>FAQ</h2>
                    <Accordion heading="About the Point of Programming">
                    <p>
                    The point of programming is to create what you want to create. We come up with an idea from something fun, set a goal and a goal, and then create a program while setting up various tasks to get there.
                    </p>
                    </Accordion>
                    <Accordion heading="About Decoding Ancient Languages">
                    <p>
                    The only thing needed to decipher an ancient language is the written word itself. Ancient worldviews and ways of thinking. Only by reading them can we understand the ancient worldview.
                    </p>
                    </Accordion>
                    <Accordion heading="Utilization of Public Repositories">
                    <p>
                    Utilizing the public repository allows developers to access and use the tasks of related projects from anywhere in the world.
                    </p>
                    </Accordion>
                </PostBody>
                </TwoColumnMain>
                
                <TwoColumnSidebar>
                <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
        )
}