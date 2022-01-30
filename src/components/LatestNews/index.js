import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

// styled components
import { Container, Content, NewsContainer, NewsSection, ViewAllButton } from './LatestNews.styles'

function LatestNews() {
    return (
        <Container>
            <Content>
                <h2>Latest <span>News</span></h2>
                <NewsContainer>
                    <NewsSection>
                        <StaticImage
                            src='../../images/news-1-image.jpg'
                            alt='news image 1'
                            layout='constrained'
                            placeholder='blurred'
                        />
                        <p className="category">News • MARCH 03, 2021</p>
                        <p className="excerpt">News Title Here Donec id elit non mi porta gravida at eget metus.</p>
                    </NewsSection>
                    <NewsSection>
                        <StaticImage
                            src='../../images/news-2-image.jpg'
                            alt='news image 2'
                            layout='constrained'
                            placeholder='blurred'
                        />
                        <p className="category">News • MARCH 03, 2021</p>
                        <p className="excerpt">News Title Here Donec id elit non mi porta gravida at eget metus.</p>
                    </NewsSection>
                    <NewsSection>
                        <StaticImage
                            src='../../images/news-3-image.jpg'
                            alt='News Image 3'
                            layout='constrained'
                            placeholder='blurred'
                        />
                        <p className="category">News • MARCH 03, 2021</p>
                        <p className="excerpt">News Title Here Donec id elit non mi porta gravida at eget metus.</p>
                    </NewsSection>
                </NewsContainer>
                <ViewAllButton>
                    <a href="#">View All News</a>
                </ViewAllButton>
            </Content>
        </Container>
    )
}

export default LatestNews
