import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const Home = ({ mylist, trends, originals, searchResults }) => {
    return (
        <Fragment>
            <Search isHome />
            {searchResults.length > 0 && (
                <Categories title="Resultados">
                    <Carousel>
                        {searchResults.map(item => (
                            <CarouselItem key={item.id} {...item} />
                        ))}
                    </Carousel>
                </Categories>
            )}
            {mylist.length > 0 && (
                <Categories title="Mi Lista">
                    <Carousel>
                        {mylist.map(item => (
                            <CarouselItem key={item.id} {...item} isList />
                        ))}
                    </Carousel>
                </Categories>
            )}
            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>
            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {originals.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        mylist: state.myList,
        trends: state.trends,
        originals: state.originals,
        searchResults: state.searchResults,
    }
}
export default connect(
    mapStateToProps,
    null
)(Home)
