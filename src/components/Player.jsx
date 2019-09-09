import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getVideoSource } from '../actions'
import NotFound from '../containers/NotFound'
import '../assets/styles/components/Player.scss'
const Player = props => {
    const { id } = props.match.params
    const { getVideoSource, playing, history } = props
    const hasPlaying = Object.keys(playing).length > 0

    useEffect(() => {
        getVideoSource(id)
    }, [])

    return hasPlaying ? (
        <div className="player">
            <video controls autoPlay>
                <source src={playing.source} type="video/mp4" />
            </video>
            <div className="player-back">
                <button type="button" onClick={() => history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : (
        <NotFound />
    )
}

Player.propTypes = {
    playing: PropTypes.object,
    history: PropTypes.object,
    getVideoSource: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player)
